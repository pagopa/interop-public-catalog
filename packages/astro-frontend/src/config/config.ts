import { z } from 'zod'

/**
 * Schema extracting the subset of environment variables that are safe to expose to the client
 * bundle (only keys prefixed with `PUBLIC_` are inlined by Astro/Vite).
 * These values are supplied at deployment time and, once parsed, injected into the frontend
 * via the shared `Layout` component.
 */
const ClientEnvConfig = z
  .object({
    PUBLIC_ONETRUST_DOMAIN_SCRIPT_ID: z.string(),
    PUBLIC_MIXPANEL_PROJECT_ID: z.string(),
  })
  .transform((c) => ({
    onetrustDomainScriptId: c.PUBLIC_ONETRUST_DOMAIN_SCRIPT_ID,
    mixpanelProjectId: c.PUBLIC_MIXPANEL_PROJECT_ID,
  }))

export const clientEnvConfig = ClientEnvConfig.parse(process.env)
