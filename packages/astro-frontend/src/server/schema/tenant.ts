import { pgSchema, uuid, integer, varchar, timestamp } from 'drizzle-orm/pg-core'

export const tenantSchema = pgSchema('publicmodel_tenant')

export const tenant = tenantSchema.table('tenant', {
  id: uuid('id').primaryKey(),
  metadataVersion: integer('metadata_version').notNull(),
  name: varchar('name').notNull(),
  kind: varchar('kind'),
  externalIdOrigin: varchar('external_id_origin').notNull(),
  externalIdValue: varchar('external_id_value').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }),
  onboardedAt: timestamp('onboarded_at', { withTimezone: true }),
  subUnitType: varchar('sub_unit_type'),
})
