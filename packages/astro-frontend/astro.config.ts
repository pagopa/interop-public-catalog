import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'

import { localizedRoutesPlugin } from './src/plugins/localized-routes-plugin.js'
import { sitemapPlugin } from './src/plugins/sitemap-plugin.js'
import { DEFAULT_LANG, LANGUAGES } from './src/i18n/config.i18n.js'
import { ROUTES } from './src/config/routes.js'
import type { SupportedLanguage } from './src/i18n/types.i18n.js'

const LOCALES = Object.keys(LANGUAGES) as SupportedLanguage[]
const projectDir = path.dirname(fileURLToPath(import.meta.url))

const SITE = 'https://api.gov.it'

export default defineConfig({
  output: 'server',
  site: SITE,
  integrations: [react()],
  adapter: node({
    mode: 'standalone',
  }),
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LANG,
    routing: {
      prefixDefaultLocale: true,
      /**
       * It does not work in dev/prod. Idk, why.
       * I implemented the logic directly in `pages/index.astro`
       */
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [
      localizedRoutesPlugin({
        routes: ROUTES,
        defaultLocale: DEFAULT_LANG,
        targetLocales: LOCALES.filter((l) => l !== DEFAULT_LANG),
        pagesRoot: path.join(projectDir, 'src', 'pages'),
        watchFiles: [
          path.join(projectDir, 'src', 'config', 'routes.ts'),
          path.join(projectDir, 'src', 'i18n', 'config.i18n.ts'),
        ],
      }),
      sitemapPlugin({
        routes: ROUTES,
        locales: LOCALES,
        defaultLocale: DEFAULT_LANG,
        site: SITE,
      }),
    ],
    ssr: {
      noExternal: ['design-react-kit', 'bootstrap-italia'],
    },
  },
})
