import {
  pgSchema,
  uuid,
  varchar,
  integer,
  timestamp,
  boolean as dboolean,
} from "drizzle-orm/pg-core";

export const catalog = pgSchema("publicmodel_catalog");

export const eservice = catalog.table("eservice", {
  id: uuid("id").primaryKey(),
  metadataVersion: integer("metadata_version").notNull(),
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
});
