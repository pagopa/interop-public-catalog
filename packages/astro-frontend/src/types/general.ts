import z from "zod";
import { RouteSchema } from "./collectionTypes.js";
import { SeoSchema } from "./seo.js";
import { StrapiImageSchema } from "pagopa-interop-public-models";

export const WasPageUsefulSchema = z.object({
  Title: z.string(),
  EmailLabel: z.string(),
  EmailMailTo: z.string(),
});

export const HowToSchema = z.object({
  Illustration: StrapiImageSchema,
  Title: z.string(),
  Description: z.string(),
  LinkLabel: z.string(),
  LinkURL: z.string(),
  IsLinkInternal: z.boolean(),
  MixpanelExternalLinkId: z.optional(z.string()),
  MixpanelExternalLinkDescription: z.optional(z.string()),
});

export const HowToSectionSchema = z.object({
  Title: z.string(),
  HowTo: z.array(HowToSchema),
});

export const FooterLinksSchema = z.object({
  RowTitle: z.string(),
  pagines: z.array(RouteSchema),
});

export const GeneralSchema = z.object({
  WebsiteTitle: z.string(),
  WebsiteTagline: z.string(),
  WasPageUseful: WasPageUsefulSchema,
  HowToSection: HowToSectionSchema,
  DefaultSeo: SeoSchema,
  FooterLinks: z.array(FooterLinksSchema),
});

export type WasPageUseful = z.infer<typeof WasPageUsefulSchema>;
export type HowTo = z.infer<typeof HowToSchema>;
export type HowToSection = z.infer<typeof HowToSectionSchema>;
export type FooterLinks = z.infer<typeof FooterLinksSchema>;
export type General = z.infer<typeof GeneralSchema>;
