import { StrapiNodeSchema } from "pagopa-interop-public-models";
import z from "zod";
import { SeoSchema } from "../seo";

export const NormativaSectionItemSchema = z.object({
  NormativaSectionItemTitle: z.string(),
  NormativaSectionItemDescription: z.array(StrapiNodeSchema),
  NormativaSectionItemLink: z.string(),
});

export const NormativaSectionSchema = z.object({
  NormativaSectionTitle: z.string(),
  NormativaSectionItem: z.array(NormativaSectionItemSchema),
  NormativaId: z.string(),
});

export const NormativaSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  IndexLabel: z.string(),
  LinkLabel: z.string(),
  NormativaSection: z.array(NormativaSectionSchema),
  Seo: SeoSchema,
});

export type NormativaSectionItem = z.infer<typeof NormativaSectionItemSchema>;
export type NormativaSection = z.infer<typeof NormativaSectionSchema>;
export type Normativa = z.infer<typeof NormativaSchema>;
