/**
 * CloudFront is configured to serve `/index.html` as default object.
 *
 * We keep that behaviour and let the app redirect to the real landing page here
 * so routing stays in our codebase.
 */

import type { APIRoute } from 'astro'
import { DEFAULT_LANG } from '../i18n/config.i18n'
import { getLocalizedRoute } from '../i18n/utils.i18n'

export const prerender = true

export const GET: APIRoute = ({ request }) => {
  const origin = new URL(request.url).origin
  const target = new URL(getLocalizedRoute(DEFAULT_LANG, 'HOME'), origin)

  return Response.redirect(target.toString(), 308)
}
