import { Pool } from "pg";

import { TableMap } from "./types.js";
import { Descriptor, EService, EServiceAttribute, EServiceTemplateVersionRef, Tenant } from "pagopa-interop-public-models";

const jobConfig = {
  sourceDbEndpoint: process.env.SOURCE_DB_ENDPOINT,
  targetDbEndpoint: process.env.TARGET_DB_ENDPOINT,
  batchSize: Number(process.env.BATCH_SIZE)
}

if (!jobConfig.sourceDbEndpoint || !jobConfig.targetDbEndpoint || !jobConfig.batchSize) {
  throw new Error("Missing job config env");
}

const sourceDb = new Pool({ connectionString: jobConfig.sourceDbEndpoint });
const targetDb = new Pool({ connectionString: jobConfig.targetDbEndpoint });

// Mappings
const tables: TableMap[] = [
  {
    source: "dev_tenant.tenant",
    target: "publicmodel_tenant.tenant",
    orderBy: "created_at",
    columns: Object.keys(Tenant.shape),
  },
  {
    source: "dev_catalog.eservice",
    target: "publicmodel_catalog.eservice",
    orderBy: "created_at",
    columns: Object.keys(EService.shape),
  },
  {
    source: "dev_catalog.eservice_descriptor",
    target: "publicmodel_catalog.eservice_descriptor",
    orderBy: "created_at",
    columns: Object.keys(Descriptor.shape),
  },
  {
    source: "dev_catalog.eservice_descriptor_template_version_ref",
    target: "publicmodel_catalog.eservice_descriptor_template_version_ref",
    orderBy: "eservice_id",
    columns: Object.keys(EServiceTemplateVersionRef.shape),
  },
  {
    source: "dev_catalog.eservice_descriptor_attribute",
    target: "publicmodel_catalog.eservice_descriptor_attribute",
    orderBy: "attribute_id",
    columns: Object.keys(EServiceAttribute.shape),
  },
];

async function migrateTable({ source, target, orderBy, columns }: TableMap) {
  console.log(`Migrating ${source} -> ${target}`);

  const { rows } = await sourceDb.query(`SELECT COUNT(*) AS count FROM ${source}`);
  const total = Number(rows[0].count) || 0;

  console.log({ total, columns });

  // Construct columns string for selects
  const cols = columns.join(", ");

  try {
    await targetDb.query("BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;");

    // Truncate table in targetDb (there shouldn't be performance worries on less than 1-10 million rows)
    await targetDb.query(`TRUNCATE TABLE ${target} CASCADE;`);

    await targetDb.query(`ALTER TABLE ${target} DISABLE TRIGGER ALL`)
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
        const result = values.map((_, j) => `$${j + 1 + (i * values.length)}`).join(", ");
        return `(${result})`;
      })

      // Extract values in the correct order
      const valuesForPlaceholders = batch.flatMap((row) => columns.map((col) => row[col]));

      // Insert rows into targetDb
      await targetDb.query(
        `
        INSERT INTO ${target} (${cols})
        VALUES ${placeholders}
        `, valuesForPlaceholders)

      console.log(`Inserted batch offset ${offset} (${batch.length} rows)`);
    }

    await targetDb.query(`ALTER TABLE ${target} ENABLE TRIGGER ALL`)
    await targetDb.query("COMMIT");

    console.log(`Done migrating ${source}`);
  } catch (err) {
    console.log(err);
    await targetDb.query("ROLLBACK");
    console.log(`Migration failed ${source}`)
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
