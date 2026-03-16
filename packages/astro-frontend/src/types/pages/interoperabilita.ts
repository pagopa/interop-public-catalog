import z from "zod";
import {
  StrapiImageSchema,
  StrapiNodeSchema,
} from "pagopa-interop-public-models";
import { SeoSchema } from "../seo";

export const FeatureSchema = z.object({
  Title: z.string(),
  Description: z.string(),
});

export const SingleToolSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Description: z.string(),
  LinkURL: z.string(),
  MixpanelExternalLinkId: z.string(),
  MixpanelExternalLinkDescription: z.string(),
});

export const ToolsSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  SingleTool: z.array(SingleToolSchema),
  UsageLabel: z.string(),
  LinkLabel: z.string(),
});

export const LegislationSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  LinkLabel: z.string(),
  LinkURL: z.string(),
});

export const SingleInteroperabilityLevelSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Illustration: StrapiImageSchema,
});

export const InteroperabilityLevelsSchema = z.object({
  Title: z.string(),
  Description: z.array(StrapiNodeSchema),
  SingleInteroperabilityLevel: z.array(SingleInteroperabilityLevelSchema),
});

export const Interoperabilita = z.object({
  Title: z.string(),
  Description: z.string(),
  Features: z.array(FeatureSchema),
  InfoGraphic: StrapiImageSchema,
  Tools: ToolsSchema,
  Legislation: LegislationSchema,
  InteroperabilityLevels: InteroperabilityLevelsSchema,
  Seo: SeoSchema,
});

export type Feature = z.infer<typeof FeatureSchema>;
export type SingleTool = z.infer<typeof SingleToolSchema>;
export type Tools = z.infer<typeof ToolsSchema>;
export type Legislation = z.infer<typeof LegislationSchema>;
export type SingleInteroperabilityLevel = z.infer<
  typeof SingleInteroperabilityLevelSchema
>;
export type InteroperabilityLevels = z.infer<
  typeof InteroperabilityLevelsSchema
>;
export type Interoperabilita = z.infer<typeof Interoperabilita>;
