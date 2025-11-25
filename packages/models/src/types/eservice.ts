import { z } from "zod";
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
  certified: z.array(z.array(Attribute)),
  declared: z.array(z.array(Attribute)),
  verified: z.array(z.array(Attribute)),
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
  description: z.string().nullable().optional(),
  state: DescriptorState,
  audience: z.array(z.string()),
  voucher_lifespan: z.number().int(),
  daily_calls_per_consumer: z.number().int(),
  daily_calls_total: z.number().int(),
  agreement_approval_policy: AgreementApprovalPolicy.nullable().optional(),
  created_at: z.coerce.date(),
  published_at: z.coerce.date().nullable().optional(),
  suspended_at: z.coerce.date().nullable().optional(),
  deprecated_at: z.coerce.date().nullable().optional(),
  archived_at: z.coerce.date().nullable().optional(),
  attributes: EServiceAttributes,
  template_version_ref: EServiceTemplateVersionRef.nullable().optional(),
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
  attributes: EServiceAttributes.nullable().optional(), //legacy
  active_descriptor: Descriptor.optional(),
  created_at: z.coerce.date(),
  mode: EServiceMode,
  is_signal_hub_enabled: z.boolean().nullable().optional(),
  is_consumer_delegable: z.boolean().nullable().optional(),
  is_client_access_delegable: z.boolean().nullable().optional(),
  template_id: EServiceTemplateId.nullable().optional(),
});

export type EService = z.infer<typeof EService>;
