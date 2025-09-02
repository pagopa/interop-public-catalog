import { z } from "zod";

export const StrapiApiConfig = z
  .object({
    STRAPI_API_URL: z.string(),
    STRAPI_API_PORT: z.coerce.number().min(1001),
    STRAPI_API_TOKEN: z.string(),
  })
  .transform((c) => ({
    strapiApiUrl: c.STRAPI_API_URL,
    strapiApiPort: c.STRAPI_API_PORT,
    strapiApiToken: c.STRAPI_API_TOKEN,
  }));

export type StrapiApiConfig = z.infer<typeof StrapiApiConfig>;
