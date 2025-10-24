import type { drizzle } from 'drizzle-orm/node-postgres'
import type { NodePgQueryResultHKT } from 'drizzle-orm/node-postgres'
import type { ExtractTablesWithRelations } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import type {
  EServiceSearchResult,
  EService,
  EServiceQuery,
  TenantQuery,
  TenantSearchResult,
  Tenant,
} from 'pagopa-interop-public-models'
import type { PgTransaction } from 'drizzle-orm/pg-core'

type Transaction<T> = (
  tx: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >
) => Promise<{
  total: number
  items: T[]
}>

type ServiceConfig = {
  catalogSchema: string
  tenantSchema: string
  attributeSchema: string
}

export async function searchCatalog(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig,
  { limit, offset, q }: EServiceQuery
): Promise<EServiceSearchResult> {
  if (!(limit >= 1 && limit <= 50)) {
    throw new Error('limit must be >= 1 and <= 50')
  }
  if (offset < 0) {
    throw new Error('offset must be >= 0')
  }

  const textlessSearchTx: Transaction<EService> = async (tx) => {
    const pageRes = await tx.execute(sql`
    SELECT
      e.id,
      e.name,
      e.description,
      e.technology,
      e.mode,
      e.created_at::text AS created_at,
      t.name AS tenant_name,
      count(*) over() AS total
    FROM ${sql.identifier(config.catalogSchema)}.eservice e
    JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = e.producer_id
    ORDER BY e.created_at DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `)

    const items = pageRes.rows as EService[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const textSearchTx: Transaction<EService> = async (
    tx
  ): Promise<{ total: number; items: EService[] }> => {
    const pageRes = await tx.execute(sql`
    WITH params AS (
      SELECT
        CASE WHEN btrim(coalesce(${q}, '')) <> ''
             THEN websearch_to_tsquery('public.italian_unaccent'::regconfig, public.normalize_text(${q}))
             ELSE NULL::tsquery
        END AS tsq,
        public.normalize_text(coalesce(${q}, '')) AS nq
    ),
    fts_ids AS (
      SELECT e.id
      FROM ${sql.identifier(config.catalogSchema)}.eservice e
      JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = e.producer_id
      CROSS JOIN params p
      WHERE p.tsq IS NOT NULL
        AND (e.search_vector @@ p.tsq OR t.search_vector @@ p.tsq)
    ),
    trgm_ids AS (
      SELECT e.id
      FROM ${sql.identifier(config.catalogSchema)}.eservice e
      JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = e.producer_id
      CROSS JOIN params p
      WHERE
        public.normalize_text(e.name) % p.nq
        OR public.normalize_text(e.description) % p.nq
        OR public.normalize_text(t.name) % p.nq
    ),
    -- trigrams as fallback
    picked AS (
      SELECT id FROM fts_ids
      UNION ALL
      SELECT id FROM trgm_ids
      WHERE NOT EXISTS (SELECT 1 FROM fts_ids)
    ),
    scored AS (
      SELECT
        e.id, e.name, e.description, e.technology, e.mode,
        e.created_at::text AS created_at,
        t.name AS tenant_name,
        -- gives priority to tenant name matches when ordering
        -- based on coverage + density (ts_rank_cd)
        COALESCE(ts_rank_cd((t.search_vector || setweight(e.search_vector,'B')), p.tsq), 0)::real AS fts_rank,
        GREATEST(
          similarity(public.normalize_text(e.name),        p.nq),
          similarity(public.normalize_text(e.description), p.nq),
          similarity(public.normalize_text(t.name),        p.nq)
        )::real AS fuzzy_sim
      FROM picked x
      JOIN ${sql.identifier(config.catalogSchema)}.eservice e ON e.id = x.id
      JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = e.producer_id
      CROSS JOIN params p
    )
    SELECT 
      s.*,
      (s.fts_rank + 0.5 * s.fuzzy_sim)::real AS score,
      count(*) over() AS total
    FROM scored s
    ORDER BY score DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `)

    const items = pageRes.rows as EService[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const { items, total } = await db.transaction(
    q?.trim() ? textSearchTx : textlessSearchTx,
    { isolationLevel: 'repeatable read' } // prevents mismatch between reads
  )

  return {
    total,
    items: items as unknown as EService[],
    limit,
    offset,
    q,
  }
}

export async function searchTenants(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig,
  { limit, offset, q }: TenantQuery
): Promise<TenantSearchResult> {
  if (!(limit >= 1 && limit <= 50)) {
    throw new Error('limit must be >= 1 and <= 50')
  }
  if (offset < 0) {
    throw new Error('offset must be >= 0')
  }

  const textlessSearchTx: Transaction<Tenant> = async (tx) => {
    const pageRes = await tx.execute(sql`
    SELECT
      t.name,
      t.id AS producer_id,
      count(*) over() AS total
    FROM ${sql.identifier(config.tenantSchema)}.tenant t
    ORDER BY t.created_at DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `)

    const items = pageRes.rows as Tenant[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const textSearchTx: Transaction<Tenant> = async (
    tx
  ): Promise<{ total: number; items: Tenant[] }> => {
    const builtQuery = sql`
    WITH params AS (
      SELECT
        CASE WHEN btrim(coalesce(${q}, '')) <> ''
             THEN websearch_to_tsquery('public.italian_unaccent'::regconfig, public.normalize_text(${q}))
             ELSE NULL::tsquery
        END AS tsq,
        public.normalize_text(coalesce(${q}, '')) AS nq
    ),
    fts_ids AS (
      SELECT t.id
      FROM ${sql.identifier(config.tenantSchema)}.tenant t
      CROSS JOIN params p
      WHERE p.tsq IS NOT NULL
        AND (t.search_vector @@ p.tsq)
    ),
    trgm_ids AS (
      SELECT t.id
      FROM ${sql.identifier(config.tenantSchema)}.tenant t
      CROSS JOIN params p
      WHERE
        public.normalize_text(t.name) % p.nq
    ),
    -- trigrams as fallback
    picked AS (
      SELECT id FROM fts_ids
      UNION ALL
      SELECT id FROM trgm_ids
      WHERE NOT EXISTS (SELECT 1 FROM fts_ids)
    ),
    scored AS (
      SELECT
        t.name,
        t.id AS producer_id,
        count(*) over() as total,
        COALESCE(ts_rank_cd(t.search_vector, p.tsq), 0)::real AS fts_rank,
        similarity(public.normalize_text(t.name), p.nq) AS fuzzy_sim
      FROM picked x
      JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = x.id
      CROSS JOIN params p
    )
    SELECT s.*, (s.fts_rank + 0.5 * s.fuzzy_sim)::real AS score
    FROM scored s
    ORDER BY score DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `
    const pageRes = await tx.execute(builtQuery)

    const items = pageRes.rows as Tenant[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const { items, total } = await db.transaction(q?.trim() ? textSearchTx : textlessSearchTx, {
    isolationLevel: 'repeatable read',
  })

  return {
    total,
    items: items as unknown as Tenant[],
    limit,
    offset,
    q,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function publicModelServiceBuilder(db: ReturnType<typeof drizzle>, config: ServiceConfig) {
  return {
    searchCatalog: searchCatalog.bind(null, db, config),
    searchTenants: searchTenants.bind(null, db, config),
  }
}
