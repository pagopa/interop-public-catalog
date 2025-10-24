import { Pool } from "pg";

import { TableMap } from "./types.js";
import {
  buildAttributeTables,
  buildCatalogTables,
  buildTenantTables,
  extractColumnNamesFromTable,
} from "pagopa-interop-public-models";

const jobConfig = {
  sourceDbEndpoint: process.env.SOURCE_DB_ENDPOINT,
  targetDbEndpoint: process.env.TARGET_DB_ENDPOINT,
  batchSize: Number(process.env.BATCH_SIZE),
  sourceDbSchemaAttribute: process.env.SOURCE_SQL_DB_SCHEMA_ATTRIBUTE,
  sourceDbSchemaTenant: process.env.SOURCE_SQL_DB_SCHEMA_TENANT,
  sourceDbSchemaCatalog: process.env.SOURCE_SQL_DB_SCHEMA_CATALOG,
  targetDbSchemaAttribute: process.env.TARGET_SQL_DB_SCHEMA_ATTRIBUTE,
  targetDbSchemaTenant: process.env.TARGET_SQL_DB_SCHEMA_TENANT,
  targetDbSchemaCatalog: process.env.TARGET_SQL_DB_SCHEMA_CATALOG,
};

if (
  !jobConfig.sourceDbEndpoint ||
  !jobConfig.targetDbEndpoint ||
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

const sourceDb = new Pool({ connectionString: jobConfig.sourceDbEndpoint });
const targetDb = new Pool({ connectionString: jobConfig.targetDbEndpoint });

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
    orderBy: "eservice_id, descriptor_id",
    columns: extractColumnNamesFromTable(
      catalog.tables.eservice_descriptor_template_version_ref,
    ),
  },
  {
    source: `${jobConfig.sourceDbSchemaCatalog}.eservice_descriptor_attribute`,
    target: `${jobConfig.targetDbSchemaCatalog}.eservice_descriptor_attribute`,
    orderBy: "eservice_id, attribute_id",
    columns: extractColumnNamesFromTable(
      catalog.tables.eservice_descriptor_attribute,
    ),
  },
];

async function migrateTable({ source, target, orderBy, columns }: TableMap) {
  console.log(`Migrating ${source} -> ${target}`);

  const { rows } = await sourceDb.query(
    `SELECT COUNT(*) AS count FROM ${source}`,
  );
  const total = Number(rows[0].count) || 0;

  console.log({ total, columns });

  // Construct columns string for selects
  const cols = columns.join(", ");

  try {
    await targetDb.query("BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;");

    // Truncate table in targetDb (there shouldn't be performance worries on less than 1-10 million rows)
    // WARNING: tables must be provided in a syntactically correct order because of "CASCADE"
    await targetDb.query(`TRUNCATE TABLE ${target} CASCADE;`);

    await targetDb.query(`ALTER TABLE ${target} DISABLE TRIGGER ALL`);
    for (let offset = 0; offset < total; offset += jobConfig.batchSize!) {
      // Get batch of rows from sourceDb
      const { rows: batch } = await sourceDb.query(
        `SELECT ${cols}
        FROM ${source}
        ORDER BY ${orderBy}
        OFFSET $1 LIMIT $2`,
        [offset, jobConfig.batchSize],
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
        columns.map((col) => row[col]),
      );

      // Insert rows into targetDb
      await targetDb.query(
        `
        INSERT INTO ${target} (${cols})
        VALUES ${placeholders}
        `,
        valuesForPlaceholders,
      );

      console.log(`Inserted batch offset ${offset} (${batch.length} rows)`);
    }

    await targetDb.query(`ALTER TABLE ${target} ENABLE TRIGGER ALL`);
    await targetDb.query("COMMIT");

    console.log(`Done migrating ${source}`);
  } catch (err) {
    console.log(err);
    await targetDb.query("ROLLBACK");
    console.log(`Migration failed ${source}`);
  }
}

export async function handler() {
  for (const table of tables) {
    await migrateTable(table);
  }

  await sourceDb.end();
  await targetDb.end();
  console.log("All migrations are done.");
}
