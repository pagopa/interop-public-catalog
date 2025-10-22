import fs from 'node:fs'
import path from 'node:path'
import type { defineConfig } from 'astro/config'
type VitePlugin = NonNullable<
  NonNullable<Parameters<typeof defineConfig>[0]['vite']>['plugins']
>[number]
type RouteTranslations<Locale extends string> = Record<Locale, string | undefined>
export type SitemapPluginOptions<Locale extends string> = {
  routes: Record<string, RouteTranslations<Locale>>
  locales: readonly Locale[]
  defaultLocale: Locale
  site: string
  outputFilename?: string
  logger?: Pick<Console, 'info' | 'warn' | 'error'>
}
const isDynamicPath = (routePath: string): boolean => /[:[\]*]/.test(routePath ?? '')
const toAbsoluteUrl = (base: string, locale: string, routePath: string): string => {
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`
  const localizedPath = `/${locale}${normalizedPath}`.replace(/\/{2,}/g, '/')
  return new URL(localizedPath, base).toString()
}
const buildSitemapXml = <Locale extends string>({
  routes,
  locales,
  defaultLocale,
  site,
}: SitemapPluginOptions<Locale>): string => {
  const urlEntries = Object.values(routes)
    .map((localizedPaths) => {
      const localizedUrls = locales
        .filter((locale) => {
          const path = localizedPaths[locale]
          return Boolean(path) && !isDynamicPath(path!)
        })
        .map((locale) => ({
          locale,
          url: toAbsoluteUrl(site, locale, localizedPaths[locale]!),
        }))
      if (!localizedUrls.length) {
        return null
      }
      const canonical =
        localizedUrls.find(({ locale }) => locale === defaultLocale) ?? localizedUrls[0]!
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
    .filter((entry): entry is string => Boolean(entry))
    .join('\n')
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlEntries,
    '</urlset>',
    '',
  ].join('\n')
}

export const sitemapPlugin = <Locale extends string>(
  options: SitemapPluginOptions<Locale>
): VitePlugin => {
  const outputFilename = options.outputFilename ?? 'sitemap.xml'
  const generate = () => buildSitemapXml(options)
  let resolvedOutDir: string | null = null
  let rootDir = process.cwd()
  return {
    name: 'astro-sitemap-plugin',
    configResolved(config) {
      resolvedOutDir = path.resolve(config.root, config.build.outDir)
      rootDir = config.root
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next()
        const requestPath = req.url.replace(/\?.*$/, '')
        if (requestPath !== `/${outputFilename}`) {
          return next()
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/xml')
        res.end(generate())
      })
    },
    closeBundle() {
      if (!resolvedOutDir) {
        options.logger?.warn?.('astro-sitemap-plugin: build outDir not resolved, skipping output.')
        return
      }
      const outputPath = path.join(resolvedOutDir, outputFilename)
      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, generate(), 'utf8')
      options.logger?.info?.(
        `astro-sitemap-plugin: generated sitemap at ${path.relative(rootDir, outputPath)}`
      )
    },
  }
}
