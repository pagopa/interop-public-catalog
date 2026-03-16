import { StrapiNodeSchema } from "pagopa-interop-public-models";
import { Section } from "../../components/shared/Section.js";
import z from "zod";
import { SeoSchema } from "../seo.js";

export const SectionItemSchema = z.object({
  FAQQuestion: z.string(),
  FAQAnswer: z.array(StrapiNodeSchema),
  FAQId: z.string(),
});

export const SectionSchema = z.object({
  FAQSectionId: z.string(),
  FAQSectionTitle: z.string(),
  FAQSectionItem: z.array(SectionItemSchema),
});

export const FaqSchema = z.object({
  Title: z.string(),
  SubTitle: z.string(),
  FAQSection: z.array(SectionSchema),
  Seo: SeoSchema,
});

export type SectionItem = z.infer<typeof SectionItemSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type Faq = z.infer<typeof FaqSchema>;
