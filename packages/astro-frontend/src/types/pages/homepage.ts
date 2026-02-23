import z from "zod";
import { Seo } from "../seo.js";
import {
  EsempiPraticiSchema,
  MacroCategoriesSchema,
} from "../collectionTypes.js";
import { StrapiImageSchema } from "pagopa-interop-public-models";

export const HeroSchema = z.object({
  Title: z.string(),
  SubTitle: z.string(),
  InputPlaceholderText: z.string(),
  SearchButtonLabel: z.string(),
  APIQuestion: z.string(),
  APITooltipTitle: z.string(),
  APITooltipDescription: z.string(),
  ScrollDownLabel: z.string(),
  Illustration: StrapiImageSchema,
});

export const HowItWorksItemSchema = z.object({
  Title: z.string(),
  Description: z.string(),
  LinkLabel: z.string(),
  LinkURL: z.string(),
  IsLinkInternal: z.boolean(),
  Illustration: StrapiImageSchema,
});

export const HowItWorksSchema = z.object({
  Title: z.string(),
  HowItWorksItem: z.array(HowItWorksItemSchema),
});

export const EservicesSchema = z.object({
  EServiceId: z.string(),
});

export const ShowcaseEservicesSchema = z.object({
  Title: z.string(),
  LinkLabel: z.string(),
  LinkURL: z.string(),
  Eservices: z.array(EservicesSchema),
});

export const ExamplesSchema = z.object({
  Title: z.string(),
  Description: z.string(),
  macrocategories: z.array(MacroCategoriesSchema),
  SeeAllMacrocategoriesLinkLabel: z.string(),
  esempi_praticis: z.array(EsempiPraticiSchema),
  SeeAllExamplesLinkLabel: z.string(),
  SeeAllEamplesLinkURL: z.string(),
});

export const HomepageSchema = z.object({
  Hero: HeroSchema,
  HowItWorks: HowItWorksSchema,
  Examples: ExamplesSchema,
  ShowcaseEservices: ShowcaseEservicesSchema,
  Seo: Seo,
});

export type Hero = z.infer<typeof HeroSchema>;
export type HowItWorksItem = z.infer<typeof HowItWorksItemSchema>;
export type HowItWorks = z.infer<typeof HowItWorksSchema>;
export type Eservices = z.infer<typeof EservicesSchema>;
export type ShowcaseEservices = z.infer<typeof ShowcaseEservicesSchema>;
export type Examples = z.infer<typeof ExamplesSchema>;
export type Homepage = z.infer<typeof HomepageSchema>;
