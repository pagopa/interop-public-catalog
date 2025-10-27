import z from "zod";
import {
  DescriptorId,
  EServiceId,
  EServiceTemplateId,
  EServiceTemplateVersionId,
  TenantId,
} from "../brandedIds.js";
import { Attribute } from "./attribute.js";

export const technology = { rest: "Rest", soap: "Soap" } as const;
export const Technology = z.enum([
  Object.values(technology)[0],
  ...Object.values(technology).slice(1),
]);
export type Technology = z.infer<typeof Technology>;

export const descriptorState = {
  draft: "Draft",
  published: "Published",
  deprecated: "Deprecated",
  suspended: "Suspended",
  archived: "Archived",
  waitingForApproval: "WaitingForApproval",
} as const;
export const DescriptorState = z.enum([
  Object.values(descriptorState)[0],
  ...Object.values(descriptorState).slice(1),
]);
export type DescriptorState = z.infer<typeof DescriptorState>;

export const agreementApprovalPolicy = {
  manual: "Manual",
  automatic: "Automatic",
} as const;
export const AgreementApprovalPolicy = z.enum([
  Object.values(agreementApprovalPolicy)[0],
  ...Object.values(agreementApprovalPolicy).slice(1),
]);
export type AgreementApprovalPolicy = z.infer<typeof AgreementApprovalPolicy>;

export const EServiceAttributes = z.object({
  certified: z.array(Attribute),
  declared: z.array(Attribute),
  verified: z.array(Attribute),
});
export type EServiceAttributes = z.infer<typeof EServiceAttributes>;

export const EServiceTemplateVersionRef = z.object({
  id: EServiceTemplateVersionId,
});

export type EServiceTemplateVersionRef = z.infer<
  typeof EServiceTemplateVersionRef
>;

export const Descriptor = z.object({
  id: DescriptorId,
  version: z.string(),
  description: z.string().optional(),
  state: DescriptorState,
  audience: z.array(z.string()),
  voucher_lifespan: z.number().int(),
  daily_calls_per_consumer: z.number().int(),
  daily_calls_total: z.number().int(),
  agreement_approval_policy: AgreementApprovalPolicy.optional(),
  created_at: z.coerce.date(),
  published_at: z.coerce.date().optional(),
  suspended_at: z.coerce.date().optional(),
  deprecated_at: z.coerce.date().optional(),
  archived_at: z.coerce.date().optional(),
  attributes: EServiceAttributes,
  template_version_ref: EServiceTemplateVersionRef.optional(),
});
export type Descriptor = z.infer<typeof Descriptor>;

export const eserviceMode = {
  receive: "Receive",
  deliver: "Deliver",
} as const;
export const EServiceMode = z.enum([
  Object.values(eserviceMode)[0],
  ...Object.values(eserviceMode).slice(1),
]);
export type EServiceMode = z.infer<typeof EServiceMode>;

export const EService = z.object({
  id: EServiceId,
  producer_id: TenantId,
  name: z.string(),
  tenant_name: z.string(),
  description: z.string(),
  technology: Technology,
  attributes: EServiceAttributes.optional(), //legacy
  active_descriptor: Descriptor,
  created_at: z.coerce.date(),
  mode: EServiceMode,
  is_signal_hub_enabled: z.boolean().optional(),
  is_consumer_delegable: z.boolean().optional(),
  is_client_access_delegable: z.boolean().optional(),
  template_id: EServiceTemplateId.optional(),
});

export type EService = z.infer<typeof EService>;

export const eserviceOrderBy = {
  recent_asc: "created_at ASC",
  recent_desc: "created_at DESC",
  name_asc: "name ASC",
  name_desc: "name DESC",
} as const;
export const EServiceOrderBy = z.enum([
  Object.values(eserviceOrderBy)[0],
  ...Object.values(eserviceOrderBy).slice(1),
]);
export type EServiceOrderBy = z.infer<typeof EServiceOrderBy>;

export const EServiceQuery = z.object({
  limit: z.coerce.number().int().gt(1).lte(50),
  offset: z.coerce.number().int().min(0),
  orderBy: z.array(z.string()).optional(),
  q: z.string().trim().max(200).optional(),
  producerIds: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
});
export type EServiceQuery = z.infer<typeof EServiceQuery>;

export const EServiceSearchResult = z.object({
  total: z.number().int().nonnegative(),
  items: z.array(EService),
  limit: z.number().int(),
  offset: z.number().int(),
  orderBy: z.array(z.string()).optional(),
  q: z.string().optional(),
  producerIds: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
});
export type EServiceSearchResult = z.infer<typeof EServiceSearchResult>;
