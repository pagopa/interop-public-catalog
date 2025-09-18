BEGIN;

-- 0) Extensions
CREATE EXTENSION IF NOT EXISTS unaccent;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- 1) Italian text search config with unaccent (accents ignored)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'italian_unaccent') THEN
    CREATE TEXT SEARCH CONFIGURATION public.italian_unaccent ( COPY = pg_catalog.italian );
    -- Remove accents first, then stem as Italian, fallback to simple
    ALTER TEXT SEARCH CONFIGURATION public.italian_unaccent
      ALTER MAPPING FOR hword, hword_part, word
      WITH unaccent, pg_catalog.italian_stem, simple;
  END IF;
END$$;

-- 2) Normalization helper (lowercase, strip accents & special chars)
CREATE OR REPLACE FUNCTION public.normalize_text(t text)
RETURNS text
LANGUAGE sql IMMUTABLE PARALLEL SAFE AS $$
  SELECT trim(
    regexp_replace(
      lower(
        -- collapse dotted abbreviations like a.b.c.d. -> abcd
        regexp_replace(unaccent(coalesce(t,'')), '\.', '', 'g')
      ),
        -- turn alphanumerics into spaces e.g. ab,cd -> ab cd
         '[^a-z0-9]+', ' ', 'g'
    )
  )
$$;

-- 3) FTS generated columns (weighted)
ALTER TABLE publicmodel_catalog.eservice
  ADD COLUMN IF NOT EXISTS search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('public.italian_unaccent', public.normalize_text(name)), 'A') ||
    setweight(to_tsvector('public.italian_unaccent', public.normalize_text(description)), 'B')
  ) STORED;

ALTER TABLE publicmodel_tenant.tenant
  ADD COLUMN IF NOT EXISTS search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('public.italian_unaccent', public.normalize_text(name)), 'A')
  ) STORED;

-- 4) FTS indexes
CREATE INDEX IF NOT EXISTS eservice_search_vector_gin
  ON publicmodel_catalog.eservice USING GIN (search_vector);

CREATE INDEX IF NOT EXISTS tenant_search_vector_gin
  ON publicmodel_tenant.tenant USING GIN (search_vector);

-- 5) Fuzzy (trigram) indexes on normalized text
CREATE INDEX IF NOT EXISTS eservice_name_trgm
  ON publicmodel_catalog.eservice USING GIN (public.normalize_text(name) gin_trgm_ops);

CREATE INDEX IF NOT EXISTS eservice_description_trgm
  ON publicmodel_catalog.eservice USING GIN (public.normalize_text(description) gin_trgm_ops);

CREATE INDEX IF NOT EXISTS tenant_name_trgm
  ON publicmodel_tenant.tenant USING GIN (public.normalize_text(name) gin_trgm_ops);

COMMIT;
