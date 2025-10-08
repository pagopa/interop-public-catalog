import { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ui = {
  it: {
    'actions.search': 'Cerca',
  },
  en: {
    'actions.search': 'Search',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
