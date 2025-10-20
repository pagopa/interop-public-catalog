import fs from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'
import type { PluginOption } from 'vite'

import { DEFAULT_LANG, LANGUAGES } from './src/i18n/config.i18n.js'
import { ROUTES } from './src/config/routes.js'
import type { SupportedLanguage } from './src/i18n/types.i18n.js'

const LOCALES = Object.keys(LANGUAGES) as SupportedLanguage[]
const TARGET_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LANG)
const FILE_EXTENSIONS_TO_CHECK = ['.astro', '.md', '.mdx'] as const

type SourceResolution =
  | {
      relativePath: string
      normalizedRoutePath: string
      isDirectory: true
    }
  | {
      relativePath: string
      normalizedRoutePath: string
      isDirectory: false
      extension: (typeof FILE_EXTENSIONS_TO_CHECK)[number]
    }

function normalizeRoutePath(routePath: string): string {
  const trimmed = routePath.replace(/^\//, '').replace(/\/$/, '')
  if (!trimmed) return ''

  return trimmed
    .split('/')
    .filter(Boolean)
    .map((segment) => (segment.startsWith(':') ? `[${segment.slice(1)}]` : segment))
    .join('/')
}

function resolveSource(
  baseDir: string,
  routePath: string,
  routeKey: string
): SourceResolution | null {
  const normalizedRoutePath = normalizeRoutePath(routePath)
  const baseRelPath = normalizedRoutePath === '' ? 'index' : normalizedRoutePath
  const candidateDir = path.join(baseDir, baseRelPath)

  if (fs.existsSync(candidateDir) && fs.statSync(candidateDir).isDirectory()) {
    return {
      relativePath: path.relative(baseDir, candidateDir),
      normalizedRoutePath,
      isDirectory: true,
    }
  }

  for (const ext of FILE_EXTENSIONS_TO_CHECK) {
    const candidateFile = `${candidateDir}${ext}`
    if (fs.existsSync(candidateFile) && fs.statSync(candidateFile).isFile()) {
      return {
        relativePath: path.relative(baseDir, candidateFile),
        normalizedRoutePath,
        isDirectory: false,
        extension: ext,
      }
    }
  }

  if (normalizedRoutePath) {
    const indexCandidate = path.join(candidateDir, 'index.astro')
    if (fs.existsSync(indexCandidate) && fs.statSync(indexCandidate).isFile()) {
      return {
        relativePath: path.relative(baseDir, indexCandidate),
        normalizedRoutePath,
        isDirectory: false,
        extension: '.astro',
      }
    }
  }

  console.warn(
    `copy-localized-pages: unable to resolve source file for route "${routeKey}" path "${routePath}"`
  )
  return null
}

function buildDestinationRelativePath(targetRoutePath: string, source: SourceResolution): string {
  const targetNormalized = normalizeRoutePath(targetRoutePath)

  if (source.isDirectory) {
    return targetNormalized || source.relativePath
  }

  const extension = source.extension ?? ''

  if (!targetNormalized) {
    return source.relativePath
  }

  return `${targetNormalized}${extension}`
}

function copyLocalizedRoutes(
  srcBase: string,
  destBaseByLocale: Record<SupportedLanguage, string>,
  targetLocales: SupportedLanguage[]
) {
  const routeEntries = Object.entries(ROUTES) as Array<
    [string, Record<SupportedLanguage, string | undefined>]
  >

  routeEntries.forEach(([routeKey, localizedRoutes]) => {
    const defaultLocalePath = localizedRoutes[DEFAULT_LANG]

    if (!defaultLocalePath) {
      console.warn(
        `copy-localized-pages: route "${routeKey}" is missing a definition for the default locale "${DEFAULT_LANG}"`
      )
      return
    }

    const source = resolveSource(srcBase, defaultLocalePath, routeKey)
    if (!source) return

    const sourceAbsolutePath = path.join(srcBase, source.relativePath)

    targetLocales.forEach((locale) => {
      const targetRoutePath = localizedRoutes[locale]
      if (!targetRoutePath) {
        console.warn(
          `copy-localized-pages: skipping route "${routeKey}" for locale "${locale}" (missing path)`
        )
        return
      }

      const destBase = destBaseByLocale[locale]
      const destRelativePath = buildDestinationRelativePath(targetRoutePath, source)
      const destAbsolutePath = path.join(destBase, destRelativePath)

      try {
        if (source.isDirectory) {
          fs.mkdirSync(destAbsolutePath, { recursive: true })
          fs.cpSync(sourceAbsolutePath, destAbsolutePath, { recursive: true })
        } else {
          fs.mkdirSync(path.dirname(destAbsolutePath), { recursive: true })
          fs.copyFileSync(sourceAbsolutePath, destAbsolutePath)
        }

        console.info(
          `copy-localized-pages: ${path.relative(process.cwd(), sourceAbsolutePath)} -> ${path.relative(
            process.cwd(),
            destAbsolutePath
          )}`
        )
      } catch (error) {
        console.error(
          `copy-localized-pages: failed to copy "${routeKey}" to locale "${locale}": ${
            error instanceof Error ? error.message : String(error)
          }`
        )
      }
    })
  })
}

function copyLocalizedPagesMiddleware(): PluginOption {
  const projectDir = path.dirname(fileURLToPath(import.meta.url))
  const srcDir = path.resolve(projectDir, 'src')
  const pagesRoot = path.join(srcDir, 'pages')
  const defaultLocaleDir = path.join(pagesRoot, DEFAULT_LANG)

  const destBaseByLocale = TARGET_LOCALES.reduce(
    (acc, locale) => {
      acc[locale] = path.join(pagesRoot, locale)
      return acc
    },
    {} as Record<SupportedLanguage, string>
  )

  const configFilesToWatch = [
    path.join(srcDir, 'config', 'routes.ts'),
    path.join(srcDir, 'i18n', 'config.i18n.ts'),
  ].map((filePath) => path.normalize(filePath))

  const defaultLocaleDirNormalized = path.normalize(defaultLocaleDir)
  let hasInitialCopy = false

  const runCopy = () => {
    if (!TARGET_LOCALES.length) return
    copyLocalizedRoutes(defaultLocaleDir, destBaseByLocale, TARGET_LOCALES)
    hasInitialCopy = true
  }

  return {
    name: 'copy-localized-pages-middleware',
    configureServer(server) {
      runCopy()

      const watcherHandler = (filePath: string) => {
        const normalizedPath = path.normalize(path.resolve(filePath))
        const isDefaultLocaleChange =
          normalizedPath === defaultLocaleDirNormalized ||
          normalizedPath.startsWith(defaultLocaleDirNormalized + path.sep)
        const isConfigChange = configFilesToWatch.includes(normalizedPath)

        if (isDefaultLocaleChange || isConfigChange) {
          runCopy()
        }
      }

      server.watcher.on('add', watcherHandler)
      server.watcher.on('unlink', watcherHandler)
      server.watcher.on('change', watcherHandler)

      server.middlewares.use((_req: IncomingMessage, _res: ServerResponse, next: () => void) => {
        if (!hasInitialCopy) {
          runCopy()
        }
        next()
      })
    },
    buildStart() {
      runCopy()
    },
  }
}

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: node({
    mode: 'standalone', // or 'middleware'
  }),
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LANG,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [copyLocalizedPagesMiddleware() as any],
    ssr: {
      noExternal: ['design-react-kit', 'bootstrap-italia'],
    },
  },
})
