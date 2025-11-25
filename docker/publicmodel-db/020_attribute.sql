CREATE SCHEMA IF NOT EXISTS publicmodel_attribute;

CREATE TABLE IF NOT EXISTS publicmodel_attribute.attribute (
  id UUID,
  metadata_version INTEGER NOT NULL,
  code VARCHAR,
  kind VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  origin VARCHAR,
  name VARCHAR NOT NULL,
  creation_time TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS attribute_code_idx ON publicmodel_attribute.attribute (code);