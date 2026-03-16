import z from "zod";
import { SeoSchema } from "../seo.js";
import {
  EsempiPraticiSchema,
  MacroCategorySchema,
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
  MixpanelGoodpracticeCatalogReferral: z.optional(z.string()),
  MixpanelExternalLinkId: z.optional(z.string()),
  MixpanelExternalLinkDescription: z.optional(z.string()),
});

export const HowItWorksSchema = z.object({
  Title: z.string(),
  HowItWorksItem: z.array(HowItWorksItemSchema),
});

export const EserviceSchema = z.object({
  EServiceId: z.string(),
});

export const ShowcaseEservicesSchema = z.object({
  Title: z.string(),
  LinkLabel: z.string(),
  LinkURL: z.string(),
  Eservices: z.array(EserviceSchema),
});

export const ExamplesSchema = z.object({
  Title: z.string(),
  Description: z.string(),
  macrocategories: z.array(MacroCategorySchema),
  SeeAllMacrocategoriesLinkLabel: z.string(),
  esempi_praticis: z.array(EsempiPraticiSchema),
  SeeAllExamplesLinkLabel: z.string(),
  SeeAllEamplesLinkURL: z.string(),
  MixpanelGoodpracticeCatalogReferral: z.string(),
});

export const HomepageSchema = z.object({
  Hero: HeroSchema,
  HowItWorks: HowItWorksSchema,
  Examples: ExamplesSchema,
  ShowcaseEservices: ShowcaseEservicesSchema,
  Seo: SeoSchema,
});

export type Hero = z.infer<typeof HeroSchema>;
export type HowItWorksItem = z.infer<typeof HowItWorksItemSchema>;
export type HowItWorks = z.infer<typeof HowItWorksSchema>;
export type Eservice = z.infer<typeof EserviceSchema>;
export type ShowcaseEservices = z.infer<typeof ShowcaseEservicesSchema>;
export type Examples = z.infer<typeof ExamplesSchema>;
export type Homepage = z.infer<typeof HomepageSchema>;
