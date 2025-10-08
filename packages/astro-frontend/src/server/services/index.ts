import { initDB, PublicModelSQLDbConfig } from 'pagopa-interop-public-commons'
import { StrapiApiConfig } from '../config/strapiConfig.js'
import { publicModelServiceBuilder } from './publicModelServiceBuilder.js'
import { strapiServiceBuilder } from './strapiService.js'

const sqlConfig = PublicModelSQLDbConfig.parse(import.meta.env)

export const sqlService: ReturnType<typeof publicModelServiceBuilder> = publicModelServiceBuilder(
  initDB({
    username: sqlConfig.publicModelSQLDbUsername,
    password: sqlConfig.publicModelSQLDbPassword,
    host: sqlConfig.publicModelSQLDbHost,
    port: sqlConfig.publicModelSQLDbPort,
    database: sqlConfig.publicModelSQLDbName,
    schema: sqlConfig.publicModelSQLDbSchemaCatalog,
    useSSL: sqlConfig.publicModelSQLDbUseSSL,
  })
)

const strapiConfig = StrapiApiConfig.parse(import.meta.env)

export const strapiService = strapiServiceBuilder(
  strapiConfig.strapiApiUrl,
  strapiConfig.strapiApiPort,
  strapiConfig.strapiApiToken
)
