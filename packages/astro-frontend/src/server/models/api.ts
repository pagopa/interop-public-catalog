import { z } from "zod";
import { DEFAULT_LANG, LANGUAGES } from "../../i18n/config.i18n";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import {
  CompactTenant,
  EService,
  GoodPractice,
} from "pagopa-interop-public-models";
import { categoriesMap } from "../config/categories";
import { parseQueryString } from "../../utils/qs.utils";

/* --------------------------------- Helpers --------------------------------- */
function commaSeparatedStringToArray<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.preprocess((v) => {
    if (typeof v !== "string") return v;
    const t = v.trim();
    if (!t) return [];
    return t
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, z.array(itemSchema));
}

const PaginatedResultSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    results: z.array(itemSchema),
    pagination: z.object({
      offset: z.number().min(0),
      limit: z.number().min(1),
      totalCount: z.number().min(0),
    }),
  });

function buildEnumFromObjectKeys<const O extends Record<string, unknown>>(
  obj: O,
) {
  const keys = Object.keys(obj) as [keyof O & string, ...(keyof O & string)[]];
  return z.enum(keys);
}

/* ---------------------------------- Enums ---------------------------------- */
export const eserviceOrderBy = {
  recent_asc: "created_at ASC",
  recent_desc: "created_at DESC",
  name_asc: "name ASC",
  name_desc: "name DESC",
} as const;

export const EServiceOrderBySchema = buildEnumFromObjectKeys(eserviceOrderBy);
export type EServiceOrderBy = z.infer<typeof EServiceOrderBySchema>;

export const EServiceCategorySchema = buildEnumFromObjectKeys(categoriesMap);
export type EServiceCategory = z.infer<typeof EServiceCategorySchema>;

/* ------------------------------ Common Schemas ------------------------------ */
export const LocaleQuerySchema = z.object({
  locale: z
    .enum(Object.keys(LANGUAGES) as [SupportedLanguage, ...SupportedLanguage[]])
    .optional()
    .default(DEFAULT_LANG),
});

export const SearchQuerySchema = z.object({
  q: z.string().trim().max(100).optional(),
});

export const PaginationQuerySchema = z.object({
  limit: z.coerce.number().min(1).max(100).optional().default(12),
  offset: z.coerce.number().min(0).optional().default(0),
});

/* -------------------------- Good Practices Schemas ------------------------- */
export const GoodPracticesQuerySchema = z
  .object({
    macroCategoryId: z.coerce.number().positive().optional(),
  })
  .and(LocaleQuerySchema)
  .and(PaginationQuerySchema);
export type GoodPracticesQuery = z.infer<typeof GoodPracticesQuerySchema>;

export const GoodPracticeSlugSchema = z.string().min(1);
export type GoodPracticeSlug = z.infer<typeof GoodPracticeSlugSchema>;

export const GoodPracticesResponseSchema = PaginatedResultSchema(GoodPractice);
export type GoodPracticesResponse = z.infer<typeof GoodPracticesResponseSchema>;

/* ------------------------------ Tenants Schemas ----------------------------- */
export const TenantsQuerySchema = PaginationQuerySchema.and(SearchQuerySchema);
export type TenantsQuery = z.infer<typeof TenantsQuerySchema>;

export const TenantsResponseSchema = PaginatedResultSchema(CompactTenant);
export type TenantsResponse = z.infer<typeof TenantsResponseSchema>;

/* ----------------------------- EServices Schemas ---------------------------- */
export const EServicesQuerySchema = z
  .object({
    orderBy: commaSeparatedStringToArray(EServiceOrderBySchema).optional(),
    producerIds: commaSeparatedStringToArray(z.uuid()).optional(),
    categories: commaSeparatedStringToArray(EServiceCategorySchema).optional(),
  })
  .and(SearchQuerySchema)
  .and(PaginationQuerySchema);
export type EServicesQuery = z.infer<typeof EServicesQuerySchema>;

export const EServicesResponseSchema = PaginatedResultSchema(EService);
export type EServicesResponse = z.infer<typeof EServicesResponseSchema>;

/* ------------------------------- Parse Helpers ------------------------------ */
export function parseQueryParams<T extends z.ZodTypeAny>(
  url: URL,
  schema: T,
): z.infer<T> {
  return schema.parse(parseQueryString(url.searchParams.toString()));
}
