import { z } from "zod";

export const ReadModelSQLDbConfig = z
  .object({
    READMODEL_SQL_DB_HOST: z.string().default("localhost"),
    READMODEL_SQL_DB_NAME: z.string().default("root"),
    READMODEL_SQL_DB_USERNAME: z.string().default("root"),
    READMODEL_SQL_DB_PASSWORD: z.string().default("root"),
    READMODEL_SQL_DB_PORT: z.coerce.number().min(1001).default(5433),
    READMODEL_SQL_DB_USE_SSL: z
      .enum(["true", "false"])
      .transform((value) => value === "true")
      .default("false"),
    READMODEL_SQL_DB_SCHEMA_TENANT: z.string().default("readmodel_tenant"),
  })
  .transform((c) => ({
    readModelSQLDbHost: c.READMODEL_SQL_DB_HOST,
    readModelSQLDbName: c.READMODEL_SQL_DB_NAME,
    readModelSQLDbUsername: c.READMODEL_SQL_DB_USERNAME,
    readModelSQLDbPassword: c.READMODEL_SQL_DB_PASSWORD,
    readModelSQLDbPort: c.READMODEL_SQL_DB_PORT,
    readModelSQLDbUseSSL: c.READMODEL_SQL_DB_USE_SSL,
    readModelSQLDbSchemaTenant: c.READMODEL_SQL_DB_SCHEMA_TENANT,
  }));

export type ReadModelSQLDbConfig = z.infer<typeof ReadModelSQLDbConfig>;
