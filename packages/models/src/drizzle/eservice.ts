import {
  pgSchema,
  uuid,
  varchar,
  integer,
  timestamp,
  boolean as dboolean,
  primaryKey,
} from "drizzle-orm/pg-core";

export const buildCatalogTables = (schema: string) => {
  const catalogSchema = pgSchema(schema);

  const eserviceTable = catalogSchema.table("eservice", {
    id: uuid("id").primaryKey(),
    producerId: uuid("producer_id").notNull(),
    name: varchar("name").notNull(),
    description: varchar("description").notNull(),
    technology: varchar("technology").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
    mode: varchar("mode").notNull(),
    isSignalHubEnabled: dboolean("is_signal_hub_enabled"),
    isConsumerDelegable: dboolean("is_consumer_delegable"),
    isClientAccessDelegable: dboolean("is_client_access_delegable"),
    templateId: uuid("template_id"),
    metadataVersion: integer("metadata_version").notNull(),
  });

  const eserviceDescriptorTable = catalogSchema.table("eservice_descriptor", {
    id: uuid("id").primaryKey(),
    eserviceId: uuid("eservice_id").notNull(),
    metadataVersion: integer("metadata_version").notNull(),
    version: varchar("version").notNull(),
    description: varchar("description"),
    state: varchar("state").notNull(),
    audience: varchar("audience").array().notNull(),
    voucherLifespan: integer("voucher_lifespan").notNull(),
    dailyCallsPerConsumer: integer("daily_calls_per_consumer").notNull(),
    dailyCallsTotal: integer("daily_calls_total").notNull(),
    agreementApprovalPolicy: varchar("agreement_approval_policy"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    suspendedAt: timestamp("suspended_at", { withTimezone: true }),
    deprecatedAt: timestamp("deprecated_at", { withTimezone: true }),
    archivedAt: timestamp("archived_at", { withTimezone: true }),
  });

  const eserviceDescriptorTemplateVersionRef = catalogSchema.table(
    "eservice_descriptor_template_version_ref",
    {
      eserviceTemplateVersionId: uuid("eservice_template_version_id"),
      eserviceId: uuid("eservice_id").notNull(),
      metadataVersion: integer("metadata_version").notNull(),
      descriptorId: uuid("descriptor_id").notNull(),
    },
    (t) => [
      primaryKey({ columns: [t.eserviceTemplateVersionId, t.descriptorId] }),
    ],
  );

  const eserviceDescriptorAttribute = catalogSchema.table(
    "eservice_descriptor_attribute",
    {
      attributeId: uuid("attribute_id").notNull(),
      eserviceId: uuid("eservice_id").notNull(),
      metadataVersion: integer("metadata_version").notNull(),
      descriptorId: uuid("descriptor_id").notNull(),
      explicitAttributeVerification: dboolean(
        "explicit_attribute_verification",
      ).notNull(),
      kind: varchar("kind").notNull(),
      groupId: integer("group_id").notNull(),
    },
    (t) => [
      primaryKey({ columns: [t.attributeId, t.descriptorId, t.groupId] }),
    ],
  );

  return {
    schema: catalogSchema,
    tables: {
      eservice: eserviceTable,
      eservice_descriptor: eserviceDescriptorTable,
      eservice_descriptor_template_version_ref:
        eserviceDescriptorTemplateVersionRef,
      eservice_descriptor_attribute: eserviceDescriptorAttribute,
    },
  };
};
