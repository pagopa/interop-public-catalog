import fs from 'node:fs'
import path from 'node:path'
import type { defineConfig } from 'astro/config'

type VitePlugin = NonNullable<
  NonNullable<Parameters<typeof defineConfig>[0]['vite']>['plugins']
>[number]

type RouteTranslations<Locale extends string> = Record<Locale, string | undefined>

export type LocalizedRoutesPluginOptions<Locale extends string> = {
  routes: Record<string, RouteTranslations<Locale>>
  defaultLocale: Locale
  targetLocales: Locale[]
  pagesRoot: string
  watchFiles?: string[]
  fileExtensions?: readonly string[]
  logger?: Pick<Console, 'info' | 'warn' | 'error'>
}

const DEFAULT_FILE_EXTENSIONS = Object.freeze(['.astro', '.md', '.mdx'] as const)

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
      extension: string
    }

const toNormalizedSlug = (segment: string): string =>
  segment.startsWith(':') ? `[${segment.slice(1)}]` : segment

const normalizeRoutePath = (routePath: string): string => {
  const trimmed = routePath.replace(/^\//, '').replace(/\/$/, '')
  if (!trimmed) return ''

  return trimmed.split('/').filter(Boolean).map(toNormalizedSlug).join('/')
}

const resolveSource = <Locale extends string>(
  baseDir: string,
  routePath: string,
  routeKey: string,
  fileExtensions: readonly string[],
  logger: Pick<Console, 'info' | 'warn' | 'error'>
): SourceResolution | null => {
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

  for (const ext of fileExtensions) {
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

  logger.warn(
    `localized-routes-plugin: unable to resolve source file for route "${routeKey}" path "${routePath}"`
  )
  return null
}

const buildDestinationRelativePath = (
  targetRoutePath: string,
  source: SourceResolution
): string => {
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

const copyLocalizedRoutes = <Locale extends string>(
  routes: Record<string, RouteTranslations<Locale>>,
  srcBase: string,
  destBaseByLocale: Record<Locale, string>,
  options: {
    defaultLocale: Locale
    targetLocales: Locale[]
    fileExtensions: readonly string[]
    logger: Pick<Console, 'info' | 'warn' | 'error'>
  }
): void => {
  Object.entries(routes).forEach(([routeKey, localizedRoutes]) => {
    const defaultLocalePath = localizedRoutes[options.defaultLocale]

    if (!defaultLocalePath) {
      options.logger.warn(
        `localized-routes-plugin: route "${routeKey}" is missing a definition for the default locale "${options.defaultLocale}"`
      )
      return
    }

    const source = resolveSource(
      srcBase,
      defaultLocalePath,
      routeKey,
      options.fileExtensions,
      options.logger
    )
    if (!source) return

    const sourceAbsolutePath = path.join(srcBase, source.relativePath)

    options.targetLocales.forEach((locale) => {
      const targetRoutePath = localizedRoutes[locale]
      if (!targetRoutePath) {
        options.logger.warn(
          `localized-routes-plugin: skipping route "${routeKey}" for locale "${locale}" (missing path)`
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

        options.logger.info(
          `localized-routes-plugin: ${path.relative(process.cwd(), sourceAbsolutePath)} -> ${path.relative(
            process.cwd(),
            destAbsolutePath
          )}`
        )
      } catch (error) {
        options.logger.error(
          `localized-routes-plugin: failed to copy "${routeKey}" to locale "${locale}": ${
            error instanceof Error ? error.message : String(error)
          }`
        )
      }
    })
  })
}

/**
 * Vite plugin that copies Astro pages from the default locale into the other locale folders
 * declared in the router config, keeping localized routes in sync during dev and build.
 */
export const localizedRoutesPlugin = <Locale extends string>({
  routes,
  defaultLocale,
  targetLocales,
  pagesRoot,
  watchFiles = [],
  fileExtensions = DEFAULT_FILE_EXTENSIONS,
  logger = console,
}: LocalizedRoutesPluginOptions<Locale>): VitePlugin => {
  const defaultLocaleDir = path.join(pagesRoot, defaultLocale)

  const destBaseByLocale = targetLocales.reduce(
    (acc, locale) => {
      acc[locale] = path.join(pagesRoot, locale)
      return acc
    },
    {} as Record<Locale, string>
  )

  const normalizedWatchFiles = watchFiles.map((filePath) => path.normalize(path.resolve(filePath)))
  const defaultLocaleDirNormalized = path.normalize(defaultLocaleDir)
  let hasInitialCopy = false

  const runCopy = () => {
    if (!targetLocales.length) return
    copyLocalizedRoutes(routes, defaultLocaleDir, destBaseByLocale, {
      defaultLocale,
      targetLocales,
      fileExtensions,
      logger,
    })
    hasInitialCopy = true
  }

  return {
    name: 'localized-routes-plugin',
    configureServer(server) {
      runCopy()

      const watcherHandler = (filePath: string) => {
        const normalizedPath = path.normalize(path.resolve(filePath))
        const isDefaultLocaleChange =
          normalizedPath === defaultLocaleDirNormalized ||
          normalizedPath.startsWith(defaultLocaleDirNormalized + path.sep)
        const isWatchedFile = normalizedWatchFiles.includes(normalizedPath)

        if (isDefaultLocaleChange || isWatchedFile) {
          runCopy()
        }
      }

      server.watcher.on('add', watcherHandler)
      server.watcher.on('unlink', watcherHandler)
      server.watcher.on('change', watcherHandler)

      server.middlewares.use((_req: unknown, _res: unknown, next: () => void) => {
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
