import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export function initDB({
  username,
  password,
  host,
  port,
  database,
  schema,
  useSSL,
}: {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
  schema: string;
  useSSL: boolean;
}): ReturnType<typeof drizzle> {
  const pool = new Pool({
    user: username,
    password,
    host,
    port,
    database,
    ssl: useSSL ? { rejectUnauthorized: false } : undefined,
  });

  // set default schema on connection
  pool.on("connect", (client) => {
    void client.query(`SET search_path TO public, ${schema}`);
  });

  return drizzle(pool);
}
