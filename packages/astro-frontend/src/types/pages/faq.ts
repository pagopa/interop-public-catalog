import { StrapiNodeSchema } from "pagopa-interop-public-models";
import { Seo } from "../seo.js";
import { Section } from "../../components/shared/Section.js";
import z from "zod";

export const SectionItemSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  FAQQuestion: z.string(),
  FAQAnswer: z.array(StrapiNodeSchema),
});

export const SectionSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  FAQSectionTitle: z.string(),
  FAQSectionItem: z.array(SectionItemSchema),
});

export const FaqSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  Title: z.string(),
  SubTitle: z.string(),
  FAQSection: z.array(SectionSchema),
  Seo: Seo,
});

export type SectionItem = z.infer<typeof SectionItemSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type Faq = z.infer<typeof FaqSchema>;
