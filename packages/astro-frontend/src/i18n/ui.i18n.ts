import { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ui = {
  it: {
    'actions.search': 'Cerca',
    'suggestion_section.title': 'Come fare per',
    'suggestion_section.suggestion_1.title': 'Ottenere l’accesso ai dati',
    'suggestion_section.suggestion_1.description':
      'Iscriversi a PDND è semplice e veloce, avrai bisogno di firmare e inoltrare un accordo di adesione.',
    'suggestion_section.suggestion_1.button': 'Aderisci a PDND',

    'suggestion_section.suggestion_2.title': 'Consultare la documentazione',
    'suggestion_section.suggestion_2.description':
      'Consulta i documenti messi a disposizione per integrare velocemente il tuo ente alla piattaforma.',
    'suggestion_section.suggestion_2.button': 'Consulta la documentazione',
    'actions.learnMore': 'Scopri di più',
    'label.for': 'Per',
  },
  en: {
    'actions.search': 'Search',
    'actions.learnMore': 'Learn more',
    'label.for': 'For',
    'suggestion_section.title': 'How to',
    'suggestion_section.suggestion_1.title': 'Get access to data',
    'suggestion_section.suggestion_1.description':
      "Joining PDND is quick and easy; you'll need to sign and submit a membership agreement.",
    'suggestion_section.suggestion_1.button': 'Join PDND',

    'suggestion_section.suggestion_2.title': 'Read the documentation',
    'suggestion_section.suggestion_2.description':
      'Read the documents provided to quickly integrate your organization into the platform.',
    'suggestion_section.suggestion_2.button': 'Read the documentation',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
