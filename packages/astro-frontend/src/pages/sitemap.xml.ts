import type { APIRoute } from 'astro'
import { ROUTES } from '../config/routes'
import { DEFAULT_LANG } from '../i18n/config.i18n'

const isDynamicPath = (path: string): boolean => path.includes(':') || path.includes('[')

const toAbsoluteUrl = (base: string, locale: string, path: string): string =>
  new URL(`/${locale}${path}`, base).toString()

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Missing "site" configuration', { status: 500 })
  }

  const baseUrl = site.toString()

  const urlEntries = Object.values(ROUTES)
    .map((localizedPaths) => {
      const localizedUrls = Object.entries(localizedPaths)
        .filter(([, path]) => !isDynamicPath(path) && path !== '/404')
        .map(([locale, path]) => ({
          locale,
          url: toAbsoluteUrl(baseUrl, locale, path),
        }))

      if (localizedUrls.length === 0) {
        return null
      }

      const canonical =
        localizedUrls.find(({ locale }) => locale === DEFAULT_LANG) ?? localizedUrls[0]!

      const alternates = localizedUrls
        .map(
          ({ locale, url }) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />`
        )
        .join('\n    ')

      return `  <url>
    <loc>${canonical.url}</loc>
    ${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical.url}" />
  </url>`
    })
    .filter(Boolean)
    .join('\n')

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlEntries,
    '</urlset>',
  ]
    .filter(Boolean)
    .join('\n')

  return new Response(`${sitemap}\n`, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
