import z from "zod";
import { Seo } from "./seo.js";
import { StrapiImageSchema } from "pagopa-interop-public-models";

export const RouteSchema = z.object({
  PageTitle: z.string(),
  RouteKey: z.string(),
  Slug: z.string(),
  Breadcrumb: z.string(),
});

export const MacroCategoriesSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  MacroCategoryLabel: z.string(),
  MacroCategoryId: z.string(),
  Illustration: StrapiImageSchema,
});

export const RelatedEservicesSchema = z.object({
  EServiceId: z.string(),
});

export const EsempiPraticiSimpleDescriptionSchema = z.object({
  Title: z.string(),
  Description: z.string(),
});

export const EsempiPraticiImageSchema = z.object({
  Image: StrapiImageSchema,
  Caption: z.string(),
});

export const EsempiPraticiTechnicalNotesSchema = z.object({
  Title: z.string(),
  Description: z.string(),
});

export const EsempiPraticiExampleSchema = z.object({
  Title: z.string(),
  Description: z.string(),
});

export const EsempiPraticiSchema = z.object({
  id: z.string(),
  documentId: z.string(),
  Title: z.string(),
  Slug: z.string(),
  Field: z.string(),
  GoodPracticeTenantDestination: z.string(),
  macrocategories: z.array(MacroCategoriesSchema),
  LastUpdate: z.string(),
  PageIndexLabel: z.string(),
  RelatedEservices: z.array(RelatedEservicesSchema),
  EsempiPraticiSection: z.union([
    EsempiPraticiSimpleDescriptionSchema,
    EsempiPraticiImageSchema,
    EsempiPraticiTechnicalNotesSchema,
    EsempiPraticiExampleSchema,
  ]),
  Seo: Seo,
});

export type Route = z.infer<typeof RouteSchema>;
export type MacroCategories = z.infer<typeof MacroCategoriesSchema>;
export type RelatedEservices = z.infer<typeof RelatedEservicesSchema>;
export type EsempiPraticiSimpleDescription = z.infer<
  typeof EsempiPraticiSimpleDescriptionSchema
>;
export type EsempiPraticiImage = z.infer<typeof EsempiPraticiImageSchema>;
export type EsempiPraticiTechnicalNotes = z.infer<
  typeof EsempiPraticiTechnicalNotesSchema
>;
export type EsempiPraticiExample = z.infer<typeof EsempiPraticiExampleSchema>;
export type EsempiPratici = z.infer<typeof EsempiPraticiSchema>;
