import { z } from "zod";

export const StrapiApiConfig = z
  .object({
    STRAPI_API_ENDPOINT: z.string(),
    STRAPI_API_TOKEN: z.string(),
  })
  .transform((c) => ({
    strapiApiEndpoint: c.STRAPI_API_ENDPOINT,
    strapiApiToken: c.STRAPI_API_TOKEN,
  }));

export type StrapiApiConfig = z.infer<typeof StrapiApiConfig>;
