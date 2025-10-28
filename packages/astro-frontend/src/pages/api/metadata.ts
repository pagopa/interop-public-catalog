import type { APIRoute } from 'astro'
import { strapiService } from '../../server/services/index.js'
import type { PageNames } from '../../server/types/metaData.types.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'

export const GET: APIRoute = async ({ url, currentLocale: locale }) => {
    const currentLocale = getLangFromUrl(url.pathname)
//   const currentLocale = locale as 'it' | 'en'
  try {
    const data = await strapiService.getSeoMetaData(currentLocale, 'general')
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ data: [{ title: 'Strapi is not connected...' }] }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

