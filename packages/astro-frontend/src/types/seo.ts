import { StrapiImageSchema } from "pagopa-interop-public-models";
import z from "zod";

export const SeoSchema = z.object({
  MetaTitle: z.string(),
  MetaDescription: z.string(),
  OpenGraphImage: StrapiImageSchema,
  TwitterImage: StrapiImageSchema,
});

export type Seo = z.infer<typeof SeoSchema>;
