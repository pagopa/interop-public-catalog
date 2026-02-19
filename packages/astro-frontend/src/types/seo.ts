import { StrapiImageSchema } from "pagopa-interop-public-models";
import z from "zod";

export const Seo = z.object({
  MetaTitle: z.string(),
  MetaDescription: z.string(),
  OpenGraphImage: StrapiImageSchema,
  TwitterImage: StrapiImageSchema,
});

export type Seo = z.infer<typeof Seo>;
