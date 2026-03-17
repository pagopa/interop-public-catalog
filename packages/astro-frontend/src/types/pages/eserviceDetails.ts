import z from "zod";

export const HeaderSchema = z.object({
  ProducerLabel: z.string(),
});

export const DescriptionSectionSchema = z.object({
  Title: z.string(),
});

export const EServiceStateSchema = z.object({
  Label: z.string(),
  ActiveValueLabel: z.string(),
  SuspendedValueLabel: z.string(),
  TooltipTitle: z.string(),
  TooltipContent: z.string(),
});

export const PublishDateSchema = z.object({
  Label: z.string(),
});

export const LateVersionPublishDateSchema = z.object({
  Label: z.string(),
});

export const DelegationsSchema = z.object({
  Label: z.string(),
  TooltipTitle: z.string(),
  TooltipContent: z.string(),
  TrueValueLabel: z.string(),
  FalseValueLabel: z.string(),
});

export const RequestAcceptancePolicySchema = z.object({
  Label: z.string(),
  TooltipTitle: z.string(),
  TooltipContent: z.string(),
  TrueValueLabel: z.string(),
  FalseValueLabel: z.string(),
});

export const APIDetailsSectionSchema = z.object({
  Title: z.string(),
  EServiceState: EServiceStateSchema,
  PublishDate: PublishDateSchema,
  LateVersionPublishDate: LateVersionPublishDateSchema,
  Delegations: DelegationsSchema,
  RequestAcceptancePolicy: RequestAcceptancePolicySchema,
});

export const VersionSchema = z.object({
  Label: z.string(),
});

export const TechnologySchema = z.object({
  Label: z.string(),
});

export const ModeSchema = z.object({
  Label: z.string(),
  ReceiveValueLabel: z.string(),
  DeliverValueLabel: z.string(),
});

export const SignalHubSchema = z.object({
  Label: z.string(),
  TooltipTitle: z.string(),
  TooltipContent: z.string(),
  TrueValueLabel: z.string(),
  FalseValueLabel: z.string(),
});

export const SpecSectionSchema = z.object({
  Title: z.string(),
  Version: VersionSchema,
  Technology: TechnologySchema,
  Mode: ModeSchema,
  SignalHub: SignalHubSchema,
});

export const RequirementsSectionSchema = z.object({
  Title: z.string(),
  Description: z.string(),
});

export const DocumentationSectionSchema = z.object({
  Title: z.string(),
  Description: z.string(),
  LoginLabel: z.string(),
  MixpanelExternalLinkId: z.string(),
  MixpanelExternalLinkDescription: z.string(),
});

export const APIImplementSchema = z.object({
  LinkLabel: z.string(),
  LinkURL: z.string(),
  MixpanelExternalLinkId: z.string(),
  MixpanelExternalLinkDescription: z.string(),
});

export const OtherProducerAPIsSchema = z.object({
  Label: z.string(),
  LinkLabel: z.string(),
});

export const EServiceDetailsSchema = z.object({
  Header: HeaderSchema,
  DescriptionSection: DescriptionSectionSchema,
  APIDetailsSection: APIDetailsSectionSchema,
  SpecSection: SpecSectionSchema,
  RequiremensSection: RequirementsSectionSchema,
  DocumentationSection: DocumentationSectionSchema,
  PageIndexLabel: z.string(),
  Label: APIImplementSchema,
  OtherProducerAPIs: OtherProducerAPIsSchema,
});

export type Header = z.infer<typeof HeaderSchema>;
export type DescriptionSection = z.infer<typeof DescriptionSectionSchema>;

export type EServiceState = z.infer<typeof EServiceStateSchema>;
export type PublishDate = z.infer<typeof PublishDateSchema>;
export type LateVersionPublishDate = z.infer<
  typeof LateVersionPublishDateSchema
>;
export type Delegations = z.infer<typeof DelegationsSchema>;
export type RequestAcceptancePolicy = z.infer<
  typeof RequestAcceptancePolicySchema
>;
export type APIDetailsSection = z.infer<typeof APIDetailsSectionSchema>;

export type Version = z.infer<typeof VersionSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
export type Mode = z.infer<typeof ModeSchema>;
export type SignalHub = z.infer<typeof SignalHubSchema>;
export type SpecSection = z.infer<typeof SpecSectionSchema>;

export type RequirementsSection = z.infer<typeof RequirementsSectionSchema>;
export type DocumentationSection = z.infer<typeof DocumentationSectionSchema>;
export type APIImplement = z.infer<typeof APIImplementSchema>;
export type OtherProducerAPIs = z.infer<typeof OtherProducerAPIsSchema>;
export type EServiceDetails = z.infer<typeof EServiceDetailsSchema>;
