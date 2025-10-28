import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

const goodPracticesTranslations = {
  it: {
    'catalog.title': 'Esempi pratici di utilizzo delle API per il tuo ente',
    'catalog.subtitle':
      'Lasciati ispirare da una raccolta di esempi significativi e semplici di come integrare servizi per il tuo ente e i cittadini',

    'details.hero.title': 'Erogare bonus ai cittadini in modo equo ed efficiente',
    'details.copyUrl': 'Copia URL',
    'details.moreExamples': 'Altri esempi pratici',
    'details.figure.caption': 'Esempio illustrativo',
    'details.lastUpdate': 'Ultimo aggiornamento:',

    'details.section.apis.heading': 'API utilizzate',
    'details.section.apis.description': 'Descrizione',
    'details.section.apis.example': 'Un esempio dal territorio',
    'details.section.apis.technical_notes': 'Note tecniche',
    'details.section.apis.show_more_button_label': 'Mostra di più',
  },
  en: {
    'catalog.title': 'Practical examples of API Usage for your Entity',
    'catalog.subtitle':
      'Get inspired by a collection of significant and simple examples of how to integrate services for your entity and citizens.',

    'details.hero.title': 'Delivering bonuses to citizens fairly and efficiently',
    'details.copyUrl': 'Copy URL',
    'details.moreExamples': 'Other practical examples',
    'details.figure.caption': 'Illustrative example',
    'details.lastUpdate': 'Last update:',

    'details.section.apis.heading': 'APIs used',
    'details.section.apis.description': 'Description',
    'details.section.apis.example': 'An example from the territory',
    'details.section.apis.technical_notes': 'Technical notes',
    'details.section.apis.show_more_button_label': 'Show more',
  },
} as const satisfies TranslationsMap

export const useGoodPracticesTranslations = buildUseTranslations(goodPracticesTranslations)
