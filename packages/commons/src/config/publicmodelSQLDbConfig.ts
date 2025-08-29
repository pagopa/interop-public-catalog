import { z } from "zod";

export const PublicModelSQLDbConfig = z
  .object({
    PUBLICMODEL_SQL_DB_HOST: z.string().default("localhost"),
    PUBLICMODEL_SQL_DB_NAME: z.string().default("root"),
    PUBLICMODEL_SQL_DB_USERNAME: z.string().default("root"),
    PUBLICMODEL_SQL_DB_PASSWORD: z.string().default("root"),
    PUBLICMODEL_SQL_DB_PORT: z.coerce.number().min(1001).default(5433),
    PUBLICMODEL_SQL_DB_USE_SSL: z
      .enum(["true", "false"])
      .transform((value) => value === "true")
      .default("false"),
    PUBLICMODEL_SQL_DB_SCHEMA_TENANT: z.string().default("publicmodel_tenant"),
    PUBLICMODEL_SQL_DB_SCHEMA_CATALOG: z
      .string()
      .default("publicmodel_catalog"),
  })
  .transform((c) => ({
    publicModelSQLDbHost: c.PUBLICMODEL_SQL_DB_HOST,
    publicModelSQLDbName: c.PUBLICMODEL_SQL_DB_NAME,
    publicModelSQLDbUsername: c.PUBLICMODEL_SQL_DB_USERNAME,
    publicModelSQLDbPassword: c.PUBLICMODEL_SQL_DB_PASSWORD,
    publicModelSQLDbPort: c.PUBLICMODEL_SQL_DB_PORT,
    publicModelSQLDbUseSSL: c.PUBLICMODEL_SQL_DB_USE_SSL,
    publicModelSQLDbSchemaTenant: c.PUBLICMODEL_SQL_DB_SCHEMA_TENANT,
    publicModelSQLDbSchemaCatalog: c.PUBLICMODEL_SQL_DB_SCHEMA_CATALOG,
  }));

export type PublicModelSQLDbConfig = z.infer<typeof PublicModelSQLDbConfig>;
