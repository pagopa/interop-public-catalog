import { z } from "zod";

export const StrapiApiConfig = z
  .object({
    STRAPI_API_URL: z.string().default("http://localhost"),
    STRAPI_API_PORT: z.coerce.number().min(1001).default(1337),
    STRAPI_API_TOKEN: z.string().default(""),
  })
  .transform((c) => ({
    strapiApiUrl: c.STRAPI_API_URL,
    strapiApiPort: c.STRAPI_API_PORT,
    strapiApiToken: c.STRAPI_API_TOKEN,
  }));

export type StrapiApiConfig = z.infer<typeof StrapiApiConfig>;
