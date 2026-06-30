import z from "zod";
import { SeoSchema } from "../seo";
import { HowToSectionSchema } from "../general";

export const SingleLinkSchema = z.object({
  LinkLabel: z.string(),
  LinkURL: z.url(),
  MixpanelExternalLinkId: z.string(),
  MixpanelExternalLinkDescription: z.string(),
});

export const LinksSchema = z.object({
  Title: z.string(),
  SingleLink: z.array(SingleLinkSchema),
});

export const CatalogSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Seo: SeoSchema,
  Links: LinksSchema,
  HowToSection: HowToSectionSchema,
});

export type SingleLink = z.infer<typeof SingleLinkSchema>;
export type Links = z.infer<typeof LinksSchema>;
export type Catalog = z.infer<typeof CatalogSchema>;
