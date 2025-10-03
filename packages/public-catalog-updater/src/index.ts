import { Pool } from "pg";

const sourceDb = new Pool({ connectionString: process.env.SOURCE_DB_URL });
const targetDb = new Pool({ connectionString: process.env.TARGET_DB_URL });

const BATCH_SIZE = process.env.BATCH_SIZE;

// Mappings
const tables = [
  {
    source: "readmodel_catalog.eservice",
    target: "publicmodel_catalog.eservice",
    columns: [
       {src: "id", dest: "id"},
       {src: "name", dest: "name"}
      /* TODO */
    ],
  },
  {
    source: "...",
    target: "publicmodel_catalog.eservice_descriptor",
    columns: [
      // TODO
    ],
  },
  {
    source: "...",
    target: "publicmodel_catalog.eservice_descriptor_template_version_ref",
    columns: [
      // TODO
    ],
  },
  {
    source: "...",
    target: "publicmodel_catalog.eservice_descriptor_attribute",
    columns: [
      // TODO
    ],
  },
];

async function migrateTable({source, target, columns}) {
    console.log(`Migrating ${source} -> ${target}`);

    const { rows } = await sourceDb.query(`SELECT COUNT(*) AS count FROM ${source}`);
    const total = parseInt(rows[0].count, 10);

    const srcCols = columns.map(c => c.src).join(", ");
    const destCols = columns.map(c => c.dest).join(", ");

    for (let offset = 0; offset < total; offset += BATCH_SIZE) {
        const {rows: batch} = await sourceDb.query(
            //TODO: change order by
            `SELECT ${srcCols} FROM ${source} ORDER BY ${columns[0].src} OFFSET $1 LIMIT $2`,
            [offset, BATCH_SIZE]
        );

        if (batch.length === 0 ) break;

        const insertValues = batch
        .map((_, i) => 
        `(${columns.map((__, j) => `$${i * columns.length + j + 1}`).join(", ")})`
        ).join(",");

        const flatValues = batch.flatMap(r => columns.map(c => r[c.src]));

        await targetDb.query(
            `INSERT INTO ${target} (${destCols})
            VALUES ${insertValues}
            ON CONFLICT DO NOTHING`,
            flatValues
        );

        console.log(`Inserted batch offset ${offset} (${batch.length} rows)`);
    }

    console.log(`Done migrating ${source}`);
}

//TODO: logic for getting only updated entries and not all the entries every time

export async function handler() {
    for (const table of tables) {
        await migrateTable(table);
    }

    await sourceDb.end();
    await targetDb.end();
    console.log("All migrations are done.");
}
