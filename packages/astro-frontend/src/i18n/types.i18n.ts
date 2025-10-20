import { LANGUAGES } from './config.i18n.js'

export type SupportedLanguage = keyof typeof LANGUAGES

/**
 * TranslationsMap defines the structure for translation objects.
 * Each key is a language code, and the value is a dictionary of translation keys and strings.
 */
export type TranslationsMap = Record<SupportedLanguage, Record<string, string>>
