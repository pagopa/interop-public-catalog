import { ROUTES, type RouteKey } from '../config/routes.js'
import { DEFAULT_LANG, LANGUAGES } from './config.i18n.js'
import type { ExtractRouteParams, SupportedLanguage } from './types.i18n.js'

function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang in LANGUAGES
}

/**
 * Extracts the language code from a URL.
 * Returns the language if supported, otherwise falls back to the default language.
 */
export function getLangFromUrl(url: string): SupportedLanguage {
  const [, lang] = url.split('/')
  if (isSupportedLanguage(lang)) {
    return lang
  }

  return DEFAULT_LANG
}

export function getRouteKeyFromCurrentRoutePattern(
  currentRoutePattern: string,
  currentLocale: SupportedLanguage) : RouteKey | undefined {
  return (Object.keys(ROUTES) as RouteKey[]).find(
    (r) => `/${currentLocale}${ROUTES[r][currentLocale]}` === currentRoutePattern
  )
}

export function switchLang({
  fromLang,
  toLang,
  currentRoutePattern,
  currentParams,
}: {
  fromLang: SupportedLanguage
  toLang: SupportedLanguage
  currentRoutePattern: string
  currentParams: Record<string, string | undefined>
}): string {
  const currentRouteKey = getRouteKeyFromCurrentRoutePattern(currentRoutePattern, fromLang)

  if (!currentRouteKey) {
    return getLocalizedRoute(toLang, 'HOME')
  }

  return getLocalizedRoute(toLang, currentRouteKey, { params: currentParams } as never)
}

/**
 * Creates a translation function for a given translation map.
 * - Returns the translation for the provided key and language.
 * - If the translation is missing, falls back to the default language.
 * - In development mode, logs a warning when a translation is missing.
 */
export function buildUseTranslations<
  T extends Record<SupportedLanguage, Record<K, string>>,
  K extends keyof T[SupportedLanguage],
>(translationMap: T) {
  return (lang: SupportedLanguage) => {
    const isDev = process.env.NODE_ENV === 'development'

    return (key: K): string => {
      const translation = translationMap[lang][key]

      if (!translation) {
        if (isDev) {
          console.warn(
            `Missing translation for key "${key as string}" in language "${lang}". Falling back to default language "${DEFAULT_LANG}".`
          )
        }
        return translationMap[DEFAULT_LANG][key] ?? key
      }

      return translation
    }
  }
}

export function getLocalizedRoute<
  TLang extends SupportedLanguage,
  TRouteKey extends RouteKey,
  Path extends (typeof ROUTES)[TRouteKey][TLang] = (typeof ROUTES)[TRouteKey][TLang],
  RouteParams extends ExtractRouteParams<Path> = ExtractRouteParams<Path>,
>(
  currentLocale: TLang,
  routeKey: TRouteKey,
  ...config: RouteParams extends undefined ? [] : [{ params: RouteParams }]
): string {
  let route: string = ROUTES[routeKey][currentLocale]

  if (config[0]?.params) {
    for (const [key, value] of Object.entries(config[0].params)) {
      route = route.replace(`[${key}]`, value)
    }
  }

  return `/${currentLocale}${route}`
}
