import { initDB, ReadModelSQLDbConfig } from "pagopa-interop-public-commons";
import { StrapiApiConfig } from "../config/strapiConfig.js";
import { readModelServiceBuilder } from "./readModelService.js";
import { strapiServiceBuilder } from "./strapiService.js";

const sqlConfig = ReadModelSQLDbConfig.parse(import.meta.env);

export const sqlService = await readModelServiceBuilder(
  initDB({
    username: sqlConfig.readModelSQLDbUsername,
    password: sqlConfig.readModelSQLDbPassword,
    host: sqlConfig.readModelSQLDbHost,
    port: sqlConfig.readModelSQLDbPort,
    database: sqlConfig.readModelSQLDbName,
    schema: sqlConfig.readModelSQLDbSchemaTenant,
    useSSL: sqlConfig.readModelSQLDbUseSSL,
  })
).catch((e) => e);

const strapiConfig = StrapiApiConfig.parse(import.meta.env);

export const strapiService = strapiServiceBuilder(
  strapiConfig.strapiApiUrl,
  strapiConfig.strapiApiPort,
  strapiConfig.strapiApiToken
);
