import { StrapiNodeSchema } from "pagopa-interop-public-models";
import { Seo } from "../seo.js";
import z from "zod";

export const NormativaSectionItemSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  NormativaSectionItemTitle: z.string(),
  NormativaSectionItemDescription: z.array(StrapiNodeSchema),
  NormativaSectionItemLink: z.string(),
});

export const NormativaSectionSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  NormativaSectionTitle: z.string(),
  NormativaSectionItem: z.array(NormativaSectionItemSchema),
});

export const NormativaSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  IndexLabel: z.string(),
  LinkLabel: z.string(),
  NormativaSection: z.array(NormativaSectionSchema),
  Seo: Seo,
});

export type NormativaSectionItem = z.infer<typeof NormativaSectionItemSchema>;
export type NormativaSection = z.infer<typeof NormativaSectionSchema>;
export type Normativa = z.infer<typeof NormativaSchema>;
