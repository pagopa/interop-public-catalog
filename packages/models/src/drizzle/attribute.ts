import {
  pgSchema,
  uuid,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const buildAttributeTables = (schema: string) => {
  const attributeSchema = pgSchema(schema);

  const attributeTable = attributeSchema.table("attribute", {
    id: uuid("id").primaryKey(),
    metadataVersion: integer("metadata_version").notNull(),
    code: varchar("code"),
    kind: varchar("kind").notNull(),
    description: varchar("description").notNull(),
    origin: varchar("origin"),
    name: varchar("name").notNull(),
    creation_time: timestamp("creation_time", { withTimezone: true }).notNull(),
  });

  return {
    schema: attributeSchema,
    tables: {
      attribute: attributeTable,
    },
  };
};
