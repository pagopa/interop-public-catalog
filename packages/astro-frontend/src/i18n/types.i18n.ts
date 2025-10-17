import { LANGUAGES } from './config.i18n.js'

/**
 * SupportedLanguage represents the keys of the LANGUAGES object.
 * Example: 'it' | 'en'
 */
export type SupportedLanguage = keyof typeof LANGUAGES

/**
 * TranslationsMap defines the structure for translation objects.
 * Each key is a language code, and the value is a dictionary of translation keys and strings.
 */
export type TranslationsMap = Record<SupportedLanguage, Record<string, string>>
