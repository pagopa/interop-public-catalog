import z from "zod";
import { TenantId } from "../brandedIds.js";

export const tenantKind = {
  PA: "PA",
  GSP: "GSP",
  PRIVATE: "PRIVATE",
  SCP: "SCP",
} as const;

export const TenantKind = z.enum([
  Object.values(tenantKind)[0],
  ...Object.values(tenantKind).slice(1),
]);

export type TenantKind = z.infer<typeof TenantKind>;

export const ExternalId = z.object({
  origin: z.string(),
  value: z.string(),
});

export type ExternalId = z.infer<typeof ExternalId>;

export const tenantUnitType = {
  AOO: "AOO",
  UO: "UO",
} as const;

export const TenantUnitType = z.enum([
  Object.values(tenantUnitType)[0],
  ...Object.values(tenantUnitType).slice(1),
]);

export type TenantUnitType = z.infer<typeof TenantUnitType>;

export const Tenant = z.object({
  id: TenantId,
  kind: TenantKind.optional(),
  external_id_origin: z.string(),
  external_id_value: ExternalId,
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().optional(),
  name: z.string(),
  onboarded_at: z.coerce.date().optional(),
  sub_unit_type: TenantUnitType.optional(),
  metadata_version: z.number().int(),
});

export type Tenant = z.infer<typeof Tenant>;
