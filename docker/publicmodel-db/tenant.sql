CREATE SCHEMA IF NOT EXISTS publicmodel_tenant;

CREATE TABLE IF NOT EXISTS publicmodel_tenant.tenant (
  id UUID,
  metadata_version INTEGER NOT NULL,
  kind VARCHAR,
  external_id_origin VARCHAR NOT NULL,
  external_id_value VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE,
  name VARCHAR NOT NULL,
  onboarded_at TIMESTAMP WITH TIME ZONE,
  sub_unit_type VARCHAR,
  PRIMARY KEY (id),
  CONSTRAINT tenant_id_metadata_version_unique UNIQUE (id, metadata_version)
);
