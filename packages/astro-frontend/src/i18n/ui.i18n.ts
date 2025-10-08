import { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ui = {
  it: {
    'actions.search': 'Cerca',
    'actions.learnMore': 'Scopri di più',
    'label.for': 'Per',
  },
  en: {
    'actions.search': 'Search',
    'actions.learnMore': 'Learn more',
    'label.for': 'For',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
