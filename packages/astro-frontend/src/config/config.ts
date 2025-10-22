import { z } from 'zod'

const ClientEnvConfig = z
  .object({
    PUBLIC_ONETRUST_DOMAIN_SCRIPT_ID: z.string(),
    PUBLIC_MIXPANEL_PROJECT_ID: z.string(),
  })
  .transform((c) => ({
    onetrustDomainScriptId: c.PUBLIC_ONETRUST_DOMAIN_SCRIPT_ID,
    mixpanelProjectId: c.PUBLIC_MIXPANEL_PROJECT_ID,
  }))

export const getClientEnvConfig = (): z.infer<typeof ClientEnvConfig> => {
  return ClientEnvConfig.parse(import.meta.env)
}
