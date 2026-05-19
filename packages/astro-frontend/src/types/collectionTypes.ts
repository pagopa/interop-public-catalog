import z from "zod";
import { SeoSchema } from "./seo.js";
import {
  StrapiImageSchema,
  StrapiNodeSchema,
} from "pagopa-interop-public-models";
import { RouteKeySchema } from "../config/routes.js";

export const RouteSchema = z.object({
  PageTitle: z.string(),
  RouteKey: RouteKeySchema,
  Slug: z.string(),
  Breadcrumb: z.string(),
});

export const MacroCategorySchema = z.object({
  MacrocategoryLabel: z.string(),
  MacrocategoryId: z.string(),
  MacrocategoryIllustration: StrapiImageSchema,
});

export const RelatedEserviceSchema = z.object({
  EServiceId: z.string(),
});

export const EsempiPraticiSimpleDescriptionSchema = z.object({
  __component: z.literal("esempi-pratici.simple-description"),
  SectionId: z.string(),
  Title: z.string(),
  Description: z.array(StrapiNodeSchema),
});

export const EsempiPraticiImageSchema = z.object({
  __component: z.literal("esempi-pratici.image"),
  Image: StrapiImageSchema,
  Caption: z.string(),
});

export const EsempiPraticiTechnicalNotesSchema = z.object({
  __component: z.literal("esempi-pratici.technical-notes"),
  Title: z.string(),
  Description: z.array(StrapiNodeSchema),
});

export const EsempiPraticiExampleSchema = z.object({
  __component: z.literal("esempi-pratici.example"),
  Title: z.string(),
  Description: z.array(StrapiNodeSchema),
});

export const EsempiPraticiSchema = z.object({
  Title: z.string(),
  Slug: z.string(),
  Field: z.string(),
  GoodPracticeTenantDestination: z.string(),
  macrocategories: z.array(MacroCategorySchema),
  LastUpdate: z.string(),
  PageIndexLabel: z.string(),
  RelatedEservices: z.array(RelatedEserviceSchema),
  EsempiPraticiSection: z.array(
    z.union([
      EsempiPraticiSimpleDescriptionSchema,
      EsempiPraticiImageSchema,
      EsempiPraticiTechnicalNotesSchema,
      EsempiPraticiExampleSchema,
    ]),
  ),
  Seo: SeoSchema,
});

export type Route = z.infer<typeof RouteSchema>;
export type MacroCategory = z.infer<typeof MacroCategorySchema>;
export type RelatedEservice = z.infer<typeof RelatedEserviceSchema>;
export type EsempiPraticiSimpleDescription = z.infer<
  typeof EsempiPraticiSimpleDescriptionSchema
>;
export type EsempiPraticiImage = z.infer<typeof EsempiPraticiImageSchema>;
export type EsempiPraticiTechnicalNotes = z.infer<
  typeof EsempiPraticiTechnicalNotesSchema
>;
export type EsempiPraticiExample = z.infer<typeof EsempiPraticiExampleSchema>;
export type EsempiPratici = z.infer<typeof EsempiPraticiSchema>;
