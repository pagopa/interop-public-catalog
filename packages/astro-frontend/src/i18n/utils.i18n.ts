import { DEFAULT_LANG, LANGUAGES } from './config.i18n.js'
import { SupportedLanguage } from './types.i18n.js'

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

/**
 * Returns a localized URL path for the given language.
 * If the URL already contains a supported language, it replaces it; otherwise, it inserts the language segment.
 */
export function getLocalizedPath(url: string, lang: SupportedLanguage): string {
  const segments = url.split('/')
  if (isSupportedLanguage(segments[1])) {
    segments[1] = lang
  } else {
    segments.splice(1, 0, lang)
  }
  return segments.join('/')
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
