import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

const goodPracticesTranslations = {
  it: {
    'catalog.title': 'Esempi pratici di utilizzo per il tuo ente',
    'catalog.subtitle':
      'Scopri come integrare le API nei processi del tuo ente: lasciati ispirare da una raccolta di esempi significativi e semplici da replicare.',

    'details.hero.title': 'Erogare bonus ai cittadini in modo equo ed efficiente',
    'details.copyUrl': 'Copia URL',
    'details.moreExamples': 'Altri esempi pratici',
    'details.figure.caption': 'Esempio illustrativo',
    'details.lastUpdate': 'Ultimo aggiornamento:',

    'details.section.apis.heading': 'API utilizzate',
  },
  en: {
    'catalog.title': 'Practical examples for your organization',
    'catalog.subtitle':
      "Discover how to integrate APIs into your organization's processes: get inspired by a collection of meaningful, easy-to-replicate examples.",

    'details.hero.title': 'Delivering bonuses to citizens fairly and efficiently',
    'details.copyUrl': 'Copy URL',
    'details.moreExamples': 'Other practical examples',
    'details.figure.caption': 'Illustrative example',
    'details.lastUpdate': 'Last update:',

    'details.section.apis.heading': 'APIs used',
  },
} as const satisfies TranslationsMap

export const useGoodPracticesTranslations = buildUseTranslations(goodPracticesTranslations)
