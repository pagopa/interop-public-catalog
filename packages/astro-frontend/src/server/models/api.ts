import { z } from 'zod'
import { DEFAULT_LANG, LANGUAGES } from '../../i18n/config.i18n'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import { EService, GoodPractice, Tenant } from 'pagopa-interop-public-models'
import { categoriesMap } from '../config/categories'
import { parseQueryString } from '../../utils/qs.utils'

export const LocaleQuerySchema = z.object({
  locale: z
    .enum(Object.keys(LANGUAGES) as [SupportedLanguage, ...SupportedLanguage[]])
    .optional()
    .default(DEFAULT_LANG),
})

const SearchQuerySchema = z.object({
  q: z.string().trim().max(200).optional(),
})

const commaSeparatedStringToArray = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z
    .string()
    .transform((str) =>
      str.trim()
        ? str
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : []
    )
    .pipe(z.array(itemSchema))

const PaginationQuerySchema = z.object({
  limit: z.coerce.number().min(1).max(100).optional().default(10),
  offset: z.coerce.number().min(0).optional().default(0),
})

const PaginatedResultSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    results: z.array(itemSchema),
    pagination: z.object({
      offset: z.number().min(0),
      limit: z.number().min(1),
      totalCount: z.number().min(0),
    }),
  })

export const GetGoodPracticesQuery = z
  .object({
    macroCategoryId: z.coerce.number().positive().optional(),
  })
  .and(LocaleQuerySchema)
  .and(PaginationQuerySchema)

export type GetGoodPracticesQuery = z.infer<typeof GetGoodPracticesQuery>

export const GoodPracticeSlug = z.string().min(1)
export const GetGoodPracticesResponse = PaginatedResultSchema(GoodPractice)
export type GetGoodPracticesResponse = z.infer<typeof GetGoodPracticesResponse>

export const GetTenantsQuery = PaginationQuerySchema.and(SearchQuerySchema)
export type GetTenantsQuery = z.infer<typeof GetTenantsQuery>

export const GetTenantsResponse = PaginatedResultSchema(Tenant)
export type GetTenantsResponse = z.infer<typeof GetTenantsResponse>

export const eserviceOrderBy = {
  recent_asc: 'created_at ASC',
  recent_desc: 'created_at DESC',
  name_asc: 'name ASC',
  name_desc: 'name DESC',
} as const

export const EServiceOrderBy = z.enum([
  (Object.keys(eserviceOrderBy) as Array<keyof typeof eserviceOrderBy>)[0],
  ...(Object.keys(eserviceOrderBy) as Array<keyof typeof eserviceOrderBy>).slice(1),
])
export type EServiceOrderBy = z.infer<typeof EServiceOrderBy>

export const EServiceCategory = z.enum([
  (Object.keys(categoriesMap) as Array<keyof typeof categoriesMap>)[0],
  ...(Object.keys(categoriesMap) as Array<keyof typeof categoriesMap>).slice(1),
])
export type EServiceCategory = z.infer<typeof EServiceCategory>

export const GetEServicesQuery = z
  .object({
    orderBy: commaSeparatedStringToArray(EServiceOrderBy).optional(),
    producerIds: commaSeparatedStringToArray(z.string().uuid()).optional(),
    categories: commaSeparatedStringToArray(EServiceCategory).optional(),
  })
  .and(SearchQuerySchema)
  .and(PaginationQuerySchema)

export type GetEServicesQuery = z.infer<typeof GetEServicesQuery>

export const GetEServicesResponse = PaginatedResultSchema(EService)
export type GetEServicesResponse = z.infer<typeof GetEServicesResponse>

export function parseQueryParams<T extends z.ZodTypeAny>(url: URL, schema: T): z.infer<T> {
  return schema.parse(parseQueryString(url.searchParams.toString()))
}
