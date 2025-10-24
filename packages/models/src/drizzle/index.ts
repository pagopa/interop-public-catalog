import { PgTable } from "drizzle-orm/pg-core";
import { getTableColumns } from "drizzle-orm";

export const extractColumnNamesFromTable = (t: PgTable) =>
  Object.values(getTableColumns(t)).map((c) => c.name);

export * from "./attribute.js";
export * from "./eservice.js";
export * from "./tenant.js";
