import type { APIRoute } from 'astro'
import { clientEnvConfig } from '../config/config'

export const GET: APIRoute = () => {
  // Expose only environment variables that are prefixed with `PUBLIC_`
  const publicEnvConfigs = Object.entries(
    clientEnvConfig as unknown as Record<string, string>
  ).reduce(
    (acc, [key, value]) => {
      if (key.startsWith('PUBLIC_')) {
        acc[key] = value
      }
      return acc
    },
    {} as Record<string, string>
  )

  return new Response(`window.env = ${JSON.stringify(publicEnvConfigs).replace(/</g, '\\u003c')}`, {
    headers: {
      'Content-Type': 'application/javascript',
    },
  })
}
