import type { drizzle } from 'drizzle-orm/node-postgres'
import type { NodePgQueryResultHKT } from 'drizzle-orm/node-postgres'
import type { ExtractTablesWithRelations } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import type { EService } from 'pagopa-interop-public-models'
import {
  type EServiceSearchResult,
  EServiceQuery,
  type TenantQuery,
  type TenantSearchResult,
  type Tenant,
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
  query: EServiceQuery
): Promise<EServiceSearchResult> {
  const parsedQuery = EServiceQuery.parse(query)
  const { limit, offset, q, producerIds, category } = parsedQuery

  const baseSelect = (eservice: string, tenant: string) => sql`
  SELECT
      ${sql.identifier(eservice)}.id,
      ${sql.identifier(tenant)}.id AS producer_id,
      ${sql.identifier(eservice)}.name,
      ${sql.identifier(eservice)}.description,
      ${sql.identifier(eservice)}.technology,
      ${sql.identifier(eservice)}.mode,
      ${sql.identifier(eservice)}.created_at::text AS created_at,
      ${sql.identifier(eservice)}.is_signal_hub_enabled,
      ${sql.identifier(eservice)}.is_consumer_delegable,
      ${sql.identifier(eservice)}.is_client_access_delegable,
      ${sql.identifier(eservice)}.template_id,
      ${sql.identifier(tenant)}.name AS tenant_name,
      to_jsonb(d_full) AS active_descriptor,
      count(*) over() AS total
  `

  const activeDescriptorPopulator = (eservice: string) => sql`
  JOIN ${sql.identifier(config.tenantSchema)}.tenant t ON t.id = ${sql.identifier(eservice)}.producer_id
  -- pick the latest PUBLISHED descriptor id
  JOIN LATERAL (
    SELECT d.id
    FROM ${sql.identifier(config.catalogSchema)}.eservice_descriptor d
    WHERE d.eservice_id = ${sql.identifier(eservice)}.id
      AND d.state = 'Published'
    ORDER BY d.version::int DESC
    LIMIT 1
  ) AS chosen ON TRUE
  -- build full descriptor w/ attributes
  JOIN LATERAL (
    SELECT
      d.*,
      jsonb_build_object(
        'verified', jsonb_agg(a.*) FILTER (WHERE a.kind = 'Verified'),
        'declared', jsonb_agg(a.*) FILTER (WHERE a.kind = 'Declared'),
        'certified', jsonb_agg(a.*) FILTER (WHERE a.kind = 'Certified')
      ) AS attributes
    FROM ${sql.identifier(config.catalogSchema)}.eservice_descriptor d
    JOIN ${sql.identifier(config.catalogSchema)}.eservice_descriptor_attribute da
      ON da.descriptor_id = d.id
    JOIN ${sql.identifier(config.attributeSchema)}.attribute a
      ON a.id = da.attribute_id
    WHERE d.id = chosen.id
    GROUP BY d.id
  ) d_full ON TRUE
  `

  const activeDescriptorPopulatorGroupBy = (eservice: string, tenant: string) =>
    sql`GROUP BY ${sql.identifier(eservice)}.id, ${sql.identifier(tenant)}.name, ${sql.identifier(tenant)}.id, d_full`

  // Build WHERE condition
  const conds = [sql`true`]

  if (category && category.length > 0) {
  } else if (producerIds && producerIds.length > 0) {
    conds.push(
      sql`
      t.id IN (${sql.join(
        producerIds.map((id) => sql`${id}`),
        sql`, `
      )})`
    )
  }

  const attributeSearchTx: Transaction<EService & { [k: string]: unknown }> = async (tx) => {
    const pageRes = await tx.execute(sql`
    ${baseSelect('e', 't')}
    FROM ${sql.identifier(config.catalogSchema)}.eservice e
    ${activeDescriptorPopulator('e')}
    ${activeDescriptorPopulatorGroupBy('e', 't')}
    ORDER BY e.created_at DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
    `)

    const items = pageRes.rows as EService[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const textlessSearchTx: Transaction<EService & { [k: string]: unknown }> = async (tx) => {
    const pageRes = await tx.execute(sql`
    ${baseSelect('e', 't')}
    FROM ${sql.identifier(config.catalogSchema)}.eservice e
    ${activeDescriptorPopulator('e')}
    WHERE ${sql.join(conds, sql` AND `)}
    ${activeDescriptorPopulatorGroupBy('e', 't')}
    ORDER BY e.created_at DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `)

    const items = pageRes.rows as EService[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  const textSearchTx: Transaction<EService & { [k: string]: unknown }> = async (
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
      ${baseSelect('e', 't')},
        e.*,
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
      ${activeDescriptorPopulator('e')}
      CROSS JOIN params p
      WHERE ${sql.join(conds, sql` AND `)}
      ${activeDescriptorPopulatorGroupBy('e', 't')}, p.tsq, p.nq
    )
    SELECT s.*,
      (s.fts_rank + 0.5 * s.fuzzy_sim)::real AS score
    FROM scored s
    ORDER BY score DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `)

    const items = pageRes.rows as EService[]
    const total = (pageRes?.rows[0]?.total as number) || 0

    return { items, total }
  }

  let transactionToExecute
  if (category && category.length > 0) {
    transactionToExecute = attributeSearchTx
  } else if (q?.trim()) {
    transactionToExecute = textSearchTx
  } else {
    transactionToExecute = textlessSearchTx
  }
  const { items, total } = await db.transaction(
    transactionToExecute,
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
