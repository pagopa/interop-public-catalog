import { z } from "zod";

export const PublicModelSQLDbConfig = z
  .object({
    PUBLICMODEL_SQL_DB_HOST: z.string(),
    PUBLICMODEL_SQL_DB_NAME: z.string(),
    PUBLICMODEL_SQL_DB_USERNAME: z.string(),
    PUBLICMODEL_SQL_DB_PASSWORD: z.string(),
    PUBLICMODEL_SQL_DB_PORT: z.coerce.number().min(1001),
    PUBLICMODEL_SQL_DB_USE_SSL: z
      .enum(["true", "false"])
      .transform((value) => value === "true"),
    PUBLICMODEL_SQL_DB_SCHEMA_TENANT: z.string(),
    PUBLICMODEL_SQL_DB_SCHEMA_CATALOG: z.string(),
    PUBLICMODEL_SQL_DB_SCHEMA_ATTRIBUTE: z.string(),
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
    publicModelSQLDbSchemaAttribute: c.PUBLICMODEL_SQL_DB_SCHEMA_ATTRIBUTE,
  }));

export type PublicModelSQLDbConfig = z.infer<typeof PublicModelSQLDbConfig>;
