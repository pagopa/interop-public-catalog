BEGIN;

-- Requires: 030_search_fts_trgm.sql (extensions + italian_unaccent + normalize_text + indexes)

CREATE OR REPLACE FUNCTION public.search_eservices(
  q text,
  lim integer DEFAULT 50,
  off integer DEFAULT 0
)
RETURNS TABLE (
  id uuid,
  name text,
  description text,
  technology text,
  mode text,
  created_at text,
  tenant_name text,
  score real,
  fts_rank real,
  fuzzy_sim real
)
LANGUAGE sql
STABLE
AS $$
  WITH params AS (
    SELECT
      CASE WHEN btrim(coalesce(q, '')) <> ''
           THEN websearch_to_tsquery('public.italian_unaccent'::regconfig, q)
           ELSE NULL::tsquery
      END AS tsq,
      public.normalize_text(coalesce(q, '')) AS nq
  ),
  -- 1) FTS candidate ids
  fts_ids AS (
    SELECT e.id
    FROM publicmodel_catalog.eservice e
    JOIN publicmodel_tenant.tenant t ON t.id = e.producer_id
    CROSS JOIN params p
    WHERE p.tsq IS NOT NULL
      AND (e.search_vector @@ p.tsq OR t.search_vector @@ p.tsq)
  ),
  -- 2) Trigram candidate ids (only used if FTS has no rows)
  trgm_ids AS (
    SELECT e.id
    FROM publicmodel_catalog.eservice e
    JOIN publicmodel_tenant.tenant t ON t.id = e.producer_id
    CROSS JOIN params p
    WHERE
         similarity(public.normalize_text(e.name),        p.nq) > 0.60
      OR similarity(public.normalize_text(e.description), p.nq) > 0.60
      OR similarity(public.normalize_text(t.name),        p.nq) > 0.60
  ),
  -- 3) Pick FTS rows; if none, pick trigram rows
  picked AS (
    SELECT id FROM fts_ids
    UNION ALL
    SELECT id FROM trgm_ids
    WHERE NOT EXISTS (SELECT 1 FROM fts_ids)
  )
  SELECT
    e.id,
    e.name,
    e.description,
    e.technology,
    e.mode,
    e.created_at,
    t.name AS tenant_name,

    -- final score: FTS rank + trigram tie-break
    COALESCE(ts_rank((e.search_vector || setweight(t.search_vector,'B')), p.tsq), 0)
    + 0.5 * GREATEST(
        similarity(public.normalize_text(e.name),        p.nq),
        similarity(public.normalize_text(e.description), p.nq),
        similarity(public.normalize_text(t.name),        p.nq)
      ) AS score,

    COALESCE(ts_rank((e.search_vector || setweight(t.search_vector,'B')), p.tsq), 0) AS fts_rank,
    GREATEST(
      similarity(public.normalize_text(e.name),        p.nq),
      similarity(public.normalize_text(e.description), p.nq),
      similarity(public.normalize_text(t.name),        p.nq)
    ) AS fuzzy_sim

  FROM picked x
  JOIN publicmodel_catalog.eservice e ON e.id = x.id
  JOIN publicmodel_tenant.tenant t ON t.id = e.producer_id
  CROSS JOIN params p
  ORDER BY score DESC
  LIMIT COALESCE(lim, 50)
  OFFSET COALESCE(off, 0);
$$;

COMMIT;