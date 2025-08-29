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
  externalId: ExternalId,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  onboardedAt: z.coerce.date().optional(),
  subUnitType: TenantUnitType.optional(),
});

export type Tenant = z.infer<typeof Tenant>;
