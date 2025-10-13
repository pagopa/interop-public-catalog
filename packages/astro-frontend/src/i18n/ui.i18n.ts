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
    'label.current': 'Corrente',
    'languageSwitch.selected_lang': 'Selezione lingua: lingua selezionata',

    'brand.title': 'Catalogo delle API',

    'nav.explore_catalog': 'Esplora il catalogo',
    'nav.examples': 'Esempi pratici',
    'nav.what_is': 'Cos’è l’interoperabilità',
    'nav.faq': 'Domande frequenti',

    'header.brand.tagline': 'Le API della Pubblica Amministrazione',
    'header.nav.toggle': 'Mostra/Nascondi la navigazione',
    'header.nav.hide': 'Nascondi la navigazione',

    'footer.nav_section.resources': 'Risorse',

    'eservice_card.access_reserved': 'Accesso riservato',
    'eservice_card.read_more': 'leggi tutto',
    'chip.provider': 'Ente erogatore',
    'chip.consumer': 'Ente fruitore',
    'chip.q': 'Parola chiave',
  },
  en: {
    'actions.search': 'Search',
    'actions.learnMore': 'Learn more',
    'suggestion_section.title': 'How to',
    'suggestion_section.suggestion_1.title': 'Get access to data',
    'suggestion_section.suggestion_1.description':
      "Joining PDND is quick and easy; you'll need to sign and submit a membership agreement.",
    'suggestion_section.suggestion_1.button': 'Join PDND',
    'suggestion_section.suggestion_2.title': 'Read the documentation',
    'suggestion_section.suggestion_2.description':
      'Read the documents provided to quickly integrate your organization into the platform.',
    'suggestion_section.suggestion_2.button': 'Read the documentation',
    'label.for': 'For',
    'label.current': 'Current',
    'languageSwitch.selected_lang': 'Selezione lingua: lingua selezionata',

    'brand.title': 'API Catalog',

    'nav.explore_catalog': 'Explore the catalog',
    'nav.examples': 'Practical examples',
    'nav.what_is': 'What is interoperability',
    'nav.faq': 'Frequently asked questions',

    'header.brand.tagline': 'Public Administration APIs',
    'header.nav.toggle': 'Show/Hide navigation',
    'header.nav.hide': 'Hide navigation',

    'footer.nav_section.resources': 'Resources',

    'eservice_card.access_reserved': 'Reserved access',
    'eservice_card.read_more': 'Read more',
    'chip.provider': 'Provider',
    'chip.consumer': 'Consumer',
    'chip.q': 'Keyword',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
