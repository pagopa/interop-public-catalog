import type { drizzle } from "drizzle-orm/node-postgres";
import type { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import type { ExtractTablesWithRelations } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { CompactTenant, EService } from "pagopa-interop-public-models";
import type { PgTransaction } from "drizzle-orm/pg-core";
import { categoriesMap } from "../config/categories";
import type { GetEServicesQuery, GetTenantsQuery } from "../models/api";
import { eserviceOrderBy } from "../models/api";
import { z } from "zod";

type SingleTransaction<T> = (
  tx: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >
) => Promise<T>;

type Transaction<T> = (
  tx: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, unknown>,
    ExtractTablesWithRelations<Record<string, unknown>>
  >
) => Promise<{
  total: number;
  items: T[];
}>;

type ServiceConfig = {
  catalogSchema: string;
  tenantSchema: string;
  attributeSchema: string;
};

const _buildFullQueryWithFilters = (config: {
  catalogSchema: string;
  attributeSchema: string;
  tenantSchema: string;
}) => {
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
      ${sql.identifier(tenant)}.name AS tenant_name
  `;

  const fullSelect = (eservice: string, tenant: string) => sql`
      ${baseSelect(eservice, tenant)},
      to_jsonb(d_full) AS active_descriptor
  `;
  const conditionalCategoriesCheck = (categories: string[]) => sql`
  -- filter by categories
    JOIN LATERAL (
    SELECT 1
    FROM ${sql.identifier(
      config.catalogSchema
    )}.eservice_descriptor_attribute da2
    WHERE da2.descriptor_id = chosen.id
      AND da2.attribute_id IN (${sql.join(
        categories.map((cat) => sql`${cat}`),
        sql`, `
      )})
    LIMIT 1
  ) attr_filter ON TRUE
  `;

  const _attributeGroupBuilder = (kind: string) => sql`
  COALESCE((
      SELECT jsonb_agg(g.attrs)
      FROM (
        SELECT jsonb_agg(a.*) AS attrs
        FROM ${sql.identifier(config.attributeSchema)}.attribute a
        JOIN ${sql.identifier(
          config.catalogSchema
        )}.eservice_descriptor_attribute da ON da.attribute_id = a.id
        WHERE da.descriptor_id = d.id
          AND a.kind = ${sql`${kind}`}
        GROUP BY da.group_id
      ) g
    ), '[]'::jsonb)
  `;

  const activeDescriptorPopulator = (
    attributes: boolean,
    eservice: string,
    categories?: string[]
  ) => sql`
  JOIN ${sql.identifier(
    config.tenantSchema
  )}.tenant t ON t.id = ${sql.identifier(eservice)}.producer_id
  -- pick the latest PUBLISHED descriptor id
  JOIN LATERAL (
    SELECT md.id
    FROM (
      SELECT d.id, d.eservice_id, ROW_NUMBER() OVER (PARTITION BY d.eservice_id ORDER BY version DESC) AS rn
      FROM ${sql.identifier(config.catalogSchema)}.eservice_descriptor d
      WHERE d.state IN ('Published', 'Suspended')
    ) md
    WHERE rn = 1 AND md.eservice_id = e.id
  ) AS chosen ON TRUE
  ${
    categories && categories.length > 0
      ? conditionalCategoriesCheck(categories)
      : sql``
  }
  -- build full descriptor w/ attributes
  ${
    attributes
      ? sql`
    JOIN LATERAL (
    SELECT
      d.*,
      jsonb_build_object(
        'verified',
        ${_attributeGroupBuilder("Verified")},
        'declared',
        ${_attributeGroupBuilder("Declared")},
        'certified',
        ${_attributeGroupBuilder("Certified")}
      ) AS attributes
    FROM ${sql.identifier(config.catalogSchema)}.eservice_descriptor d
    LEFT JOIN ${sql.identifier(
      config.catalogSchema
    )}.eservice_descriptor_attribute da
      ON da.descriptor_id = d.id
    LEFT JOIN ${sql.identifier(config.attributeSchema)}.attribute a
      ON a.id = da.attribute_id
    WHERE d.id = chosen.id
    GROUP BY d.id
  ) d_full ON TRUE
    `
      : sql``
  }
  `;

  const activeDescriptorPopulatorGroupBy = (
    attributes: boolean,
    eservice: string,
    tenant: string
  ) =>
    sql`
    GROUP BY 
    ${sql.identifier(eservice)}.id, ${sql.identifier(
      tenant
    )}.name, ${sql.identifier(tenant)}.id
    ${attributes ? sql`, d_full` : sql``}
    `;

  return {
    baseSelect,
    fullSelect,
    activeDescriptorPopulator,
    activeDescriptorPopulatorGroupBy,
  };
};

export async function getEService(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig,
  id: string
): Promise<EService | undefined> {
  const {
    fullSelect,
    activeDescriptorPopulator,
    activeDescriptorPopulatorGroupBy,
  } = _buildFullQueryWithFilters({
    catalogSchema: config.catalogSchema,
    attributeSchema: config.attributeSchema,
    tenantSchema: config.tenantSchema,
  });

  const getEServiceById: SingleTransaction<EService | undefined> = async (
    tx
  ) => {
    const pageRes = await tx.execute(sql`
    ${fullSelect("e", "t")}
    FROM ${sql.identifier(config.catalogSchema)}.eservice e
    ${activeDescriptorPopulator(true, "e")}
    WHERE e.id = ${id}
    ${activeDescriptorPopulatorGroupBy(true, "e", "t")}
  `);

    if (pageRes.rows[0] === undefined) {
      return undefined;
    }

    return EService.parse(pageRes.rows[0]);
  };

  return await db.transaction(getEServiceById, {
    isolationLevel: "repeatable read",
  });
}

export async function searchCatalog(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig,
  query: GetEServicesQuery
): Promise<{ results: EService[]; totalCount: number }> {
  const { limit, offset, q, orderBy, producerIds, categories } = query;

  const mappedOrderBy = orderBy?.map((entry) => eserviceOrderBy[entry]);

  // Categories are already filtered in the catalog API interface
  // Here we can assume we have valid categories ex. ['Comuni', '...', ...]
  const mappedCategories = categories?.flatMap((cat) => categoriesMap[cat]);

  // Build WHERE condition
  const conds = [sql`true`];

  let categoriesIds: string[];
  if (categories && categories.length > 0) {
    const categoriesIdsQuery = await db.execute(
      sql`
    SELECT a.id
    FROM ${sql.identifier(config.attributeSchema)}.attribute a
    WHERE a.code IN (${sql.join(
        mappedCategories!.map((id) => sql`${id}`),
        sql`, `
      )})
    `
    )
    categoriesIds = categoriesIdsQuery.rows.map((el) => el.id as string);

  } else if (producerIds && producerIds.length > 0) {
    conds.push(
      sql`
      t.id IN (${sql.join(
        producerIds.map((id) => sql`${id}`),
        sql`, `
      )})`
    );
  }

  const {
    baseSelect,
    activeDescriptorPopulator,
    activeDescriptorPopulatorGroupBy,
  } = _buildFullQueryWithFilters({
    catalogSchema: config.catalogSchema,
    attributeSchema: config.attributeSchema,
    tenantSchema: config.tenantSchema,
  });

  const orderByFragment = sql.raw(`
  e.${
    mappedOrderBy && mappedOrderBy.length > 0
      ? mappedOrderBy?.map((el) => `${el}`).join(", e.")
      : "created_at DESC"
  }
  `);

  const textlessSearchTx: Transaction<
    EService & { [k: string]: unknown }
  > = async (tx) => {
    const pageRes = await tx.execute(sql`
    ${baseSelect("e", "t")},
    count(*) over() AS total
    FROM ${sql.identifier(config.catalogSchema)}.eservice e
    ${activeDescriptorPopulator(false, "e", categoriesIds)}
    WHERE ${sql.join(conds, sql` AND `)}
    ${activeDescriptorPopulatorGroupBy(false, "e", "t")}
    ORDER BY ${orderByFragment}
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `);

    const items = z.array(EService).parse(pageRes.rows);
    const total = z.coerce
      .number()
      .catch(() => 0)
      .parse(pageRes?.rows[0]?.total);

    return { items, total };
  };

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
      JOIN ${sql.identifier(
        config.tenantSchema
      )}.tenant t ON t.id = e.producer_id
      CROSS JOIN params p
      WHERE p.tsq IS NOT NULL
        AND (e.search_vector @@ p.tsq OR t.search_vector @@ p.tsq)
    ),
    trgm_ids AS (
      SELECT e.id
      FROM ${sql.identifier(config.catalogSchema)}.eservice e
      JOIN ${sql.identifier(
        config.tenantSchema
      )}.tenant t ON t.id = e.producer_id
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
      ${baseSelect("e", "t")},
        count(*) over() AS total,
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
      ${activeDescriptorPopulator(false, "e", categoriesIds)}
      CROSS JOIN params p
      WHERE ${sql.join(conds, sql` AND `)}
      ${activeDescriptorPopulatorGroupBy(false, "e", "t")}, p.tsq, p.nq
    )
    SELECT s.*,
      (s.fts_rank + 0.5 * s.fuzzy_sim)::real AS score
    FROM scored s
    JOIN ${sql.identifier(config.catalogSchema)}.eservice e ON e.id = s.id
    ORDER BY score DESC${
      orderByFragment ? sql.join([sql`, `, orderByFragment]) : sql``
    }
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `);

    const items = z.array(EService).parse(pageRes.rows);
    const total = z.coerce
      .number()
      .catch(() => 0)
      .parse(pageRes?.rows[0]?.total);

    return { items, total };
  };

  const transactionToExecute = q?.trim() ? textSearchTx : textlessSearchTx;
  const { items, total } = await db.transaction(
    transactionToExecute,
    { isolationLevel: "repeatable read" } // prevents mismatch between reads
  );

  return {
    totalCount: total,
    results: items,
  };
}

export async function searchTenants(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig,
  { limit, offset, q }: GetTenantsQuery
): Promise<{ results: CompactTenant[]; totalCount: number }> {
  const textlessSearchTx: Transaction<CompactTenant> = async (tx) => {
    const pageRes = await tx.execute(sql`
    SELECT
      t.name,
      t.id AS producer_id,
      count(*) over() AS total
    FROM ${sql.identifier(config.tenantSchema)}.tenant t
    ORDER BY t.created_at DESC
    LIMIT ${limit ?? 50} OFFSET ${offset ?? 0};
  `);

    const items = z.array(CompactTenant).parse(pageRes.rows);
    const total = z.coerce
      .number()
      .catch(() => 0)
      .parse(pageRes?.rows[0]?.total);

    return { items, total };
  };

  const textSearchTx: Transaction<CompactTenant> = async (
    tx
  ): Promise<{ total: number; items: CompactTenant[] }> => {
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
  `;
    const pageRes = await tx.execute(builtQuery);

    const items = z.array(CompactTenant).parse(pageRes.rows);
    const total = z.coerce
      .number()
      .catch(() => 0)
      .parse(pageRes?.rows[0]?.total);

    return { items, total };
  };

  const { items, total } = await db.transaction(
    q?.trim() ? textSearchTx : textlessSearchTx,
    {
      isolationLevel: "repeatable read",
    }
  );

  return {
    results: items,
    totalCount: total,
  };
}

export function publicModelServiceBuilder(
  db: ReturnType<typeof drizzle>,
  config: ServiceConfig
) {
  return {
    searchCatalog: searchCatalog.bind(null, db, config),
    getEService: getEService.bind(null, db, config),
    searchTenants: searchTenants.bind(null, db, config),
  };
}
