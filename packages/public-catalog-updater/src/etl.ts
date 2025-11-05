import { Client } from "pg";

import { TableMap } from "./types.js";
import {
  buildAttributeTables,
  buildCatalogTables,
  buildTenantTables,
  extractColumnNamesFromTable,
} from "pagopa-interop-public-models";
import { runAWSInvalidate } from "./invalidate.js";

const jobConfig = {
  sourceDb: {
    username: process.env.READMODEL_SQL_DB_USERNAME,
    password: process.env.READMODEL_SQL_DB_PASSWORD,
    host: process.env.READMODEL_SQL_DB_HOST,
    port: Number(process.env.READMODEL_SQL_DB_PORT),
    name: process.env.READMODEL_SQL_DB_NAME,
    useSSL: process.env.READMODEL_SQL_DB_USE_SSL === "true",
  },
  targetDb: {
    username: process.env.PUBLICMODEL_SQL_DB_USERNAME,
    password: process.env.PUBLICMODEL_SQL_DB_PASSWORD,
    host: process.env.PUBLICMODEL_SQL_DB_HOST,
    port: Number(process.env.PUBLICMODEL_SQL_DB_PORT),
    name: process.env.PUBLICMODEL_SQL_DB_NAME,
    useSSL: process.env.PUBLICMODEL_SQL_DB_USE_SSL === "true",
  },
  batchSize: Number(process.env.BATCH_SIZE),
  sourceDbSchemaAttribute: process.env.READMODEL_SQL_DB_SCHEMA_ATTRIBUTE,
  sourceDbSchemaTenant: process.env.READMODEL_SQL_DB_SCHEMA_TENANT,
  sourceDbSchemaCatalog: process.env.READMODEL_SQL_DB_SCHEMA_CATALOG,
  targetDbSchemaAttribute: process.env.PUBLICMODEL_SQL_DB_SCHEMA_ATTRIBUTE,
  targetDbSchemaTenant: process.env.PUBLICMODEL_SQL_DB_SCHEMA_TENANT,
  targetDbSchemaCatalog: process.env.PUBLICMODEL_SQL_DB_SCHEMA_CATALOG,
};

if (
  Object.values(jobConfig.sourceDb).some((v) => v === undefined) ||
  Object.values(jobConfig.targetDb).some((v) => v === undefined) ||
  !jobConfig.batchSize ||
  !jobConfig.sourceDbSchemaAttribute ||
  !jobConfig.sourceDbSchemaCatalog ||
  !jobConfig.sourceDbSchemaTenant ||
  !jobConfig.targetDbSchemaAttribute ||
  !jobConfig.targetDbSchemaCatalog ||
  !jobConfig.targetDbSchemaTenant
) {
  throw new Error("Missing job config env");
}

const sourceDb = new Client({
  user: jobConfig.sourceDb.username,
  password: jobConfig.sourceDb.password,
  host: jobConfig.sourceDb.host,
  port: jobConfig.sourceDb.port,
  database: jobConfig.sourceDb.name,
  ssl: jobConfig.sourceDb.useSSL ? { rejectUnauthorized: false } : undefined,
});
const targetDb = new Client({
  user: jobConfig.targetDb.username,
  password: jobConfig.targetDb.password,
  host: jobConfig.targetDb.host,
  port: jobConfig.targetDb.port,
  database: jobConfig.targetDb.name,
  ssl: jobConfig.targetDb.useSSL ? { rejectUnauthorized: false } : undefined,
});

const attribute = buildAttributeTables("attribute");
const catalog = buildCatalogTables("catalog");
const tenant = buildTenantTables("tenant");

// Mappings
// WARNING: this is order-sensitive. A truncate table with cascade is employed before repopulation.
const tables: TableMap[] = [
  {
    source: `${jobConfig.sourceDbSchemaTenant}.tenant`,
    target: `${jobConfig.targetDbSchemaTenant}.tenant`,
    orderBy: "id",
    columns: extractColumnNamesFromTable(tenant.tables.tenant),
  },
  {
    source: `${jobConfig.sourceDbSchemaAttribute}.attribute`,
    target: `${jobConfig.targetDbSchemaAttribute}.attribute`,
    orderBy: "id",
    columns: extractColumnNamesFromTable(attribute.tables.attribute),
  },
  {
    source: `${jobConfig.sourceDbSchemaCatalog}.eservice`,
    target: `${jobConfig.targetDbSchemaCatalog}.eservice`,
    orderBy: "id",
    columns: extractColumnNamesFromTable(catalog.tables.eservice),
  },
  {
    source: `${jobConfig.sourceDbSchemaCatalog}.eservice_descriptor`,
    target: `${jobConfig.targetDbSchemaCatalog}.eservice_descriptor`,
    orderBy: "id",
    columns: extractColumnNamesFromTable(catalog.tables.eservice_descriptor),
  },
  {
    source: `${jobConfig.sourceDbSchemaCatalog}.eservice_descriptor_template_version_ref`,
    target: `${jobConfig.targetDbSchemaCatalog}.eservice_descriptor_template_version_ref`,
    orderBy: "eservice_template_version_id, descriptor_id",
    columns: extractColumnNamesFromTable(
      catalog.tables.eservice_descriptor_template_version_ref
    ),
  },
  {
    source: `${jobConfig.sourceDbSchemaCatalog}.eservice_descriptor_attribute`,
    target: `${jobConfig.targetDbSchemaCatalog}.eservice_descriptor_attribute`,
    orderBy: "eservice_id, attribute_id, group_id",
    columns: extractColumnNamesFromTable(
      catalog.tables.eservice_descriptor_attribute
    ),
  },
];

async function migrateTable({ source, target, orderBy, columns }: TableMap) {
  console.log(`Migrating ${source} -> ${target}`);

  const { rows } = await sourceDb.query(
    `SELECT COUNT(*) AS count FROM ${source}`
  );
  const total = Number(rows[0].count) || 0;

  console.log({ total, columns });

  // Construct columns string for selects
  const cols = columns.join(", ");

  try {
    // Truncate table in targetDb (there shouldn't be performance worries on less than 1-10 million rows)
    // WARNING: tables must be provided in a syntactically correct order because of "CASCADE"
    await targetDb.query(`TRUNCATE TABLE ${target} CASCADE;`);

    for (let offset = 0; offset < total; offset += jobConfig.batchSize!) {
      // Get batch of rows from sourceDb
      const { rows: batch } = await sourceDb.query(
        `SELECT ${cols}
        FROM ${source}
        ORDER BY ${orderBy}
        OFFSET $1 LIMIT $2`,
        [offset, jobConfig.batchSize]
      );

      // Construct placeholder string for insert of batch elements
      // Final results -> ($1, $2, $3, ...), (...), (...)
      const placeholders = batch.map((element, i) => {
        const values = Object.values(element);
        const result = values
          .map((_, j) => `$${j + 1 + i * values.length}`)
          .join(", ");
        return `(${result})`;
      });

      // Extract values in the correct order
      const valuesForPlaceholders = batch.flatMap((row) =>
        columns.map((col) => row[col])
      );

      // Insert rows into targetDb
      await targetDb.query(
        `
        INSERT INTO ${target} (${cols})
        VALUES ${placeholders}
        `,
        valuesForPlaceholders
      );

      console.log(`Inserted batch offset ${offset} (${batch.length} rows)`);
    }

    console.log(`Done migrating ${source}`);
    return;
  } catch (err) {
    console.log(err);
    console.log(`Migration failed ${source}`);

    return err;
  }
}

export async function handler() {
  await sourceDb.connect();
  await targetDb.connect();

  await targetDb.query("BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;");
  let err;
  for (const table of tables) {
    err = await migrateTable(table);
    if (err) {
      console.log("Aborting migrations...");
      await targetDb.query("ROLLBACK");
      break;
    }
  }
  if (!err) {
    await targetDb.query("COMMIT");
  }

  await sourceDb.end();
  await targetDb.end();
  console.log("All migrations are done.");

  if (!err) {
    const invalidationConfigFields = [
      "AWS_REGION",
      "CDN_ID",
      "CDN_INVALIDATION_PATH",
    ];
    const missingFields = invalidationConfigFields
      .map((field) => ({ key: field, value: process.env[field] }))
      .filter((el) => !el.value);
    if (missingFields.length > 0) {
      console.error(
        `[AWS-CreateInvalidation]: Missing env config on ${missingFields
          .map((el) => el.key)
          .join(", ")}`
      );
    }

    const invalidationRef = `ref-${Date.now()}`;
    console.log(
      `[AWS-CreateInvalidation][CallerReference: ${invalidationRef}]: Attempting to run invalidation on paths: ${process.env.CDN_INVALIDATION_PATH}`
    );
    const awsInvalidationResult = await runAWSInvalidate(invalidationRef);
    if ("err" in awsInvalidationResult) {
      console.log(
        `[AWS-CreateInvalidation][CallerReference: ${invalidationRef}]: Error: ${awsInvalidationResult.err}`
      );
    } else {
      console.log(
        `[AWS-CreateInvalidation][CallerReference: ${invalidationRef}]: Status: ${awsInvalidationResult.Invalidation?.Status}`
      );
    }
  }
}
