import type { RouteKey } from '../config/routes.js'
import type { SupportedLanguage, TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

const breadcrumbLabels = {
  it: {
    'breadcrumb_label.HOME': 'Home',
    'breadcrumb_label.ECOSYSTEM': 'Cos’è l’interoperabilità',
    'breadcrumb_label.ESERVICE_CATALOG': 'Esplora il catalogo',
    'breadcrumb_label.ESERVICE_DETAILS': 'Dettaglio API',
    'breadcrumb_label.FAQ': 'Domande frequenti',
    'breadcrumb_label.GOOD_PRACTICES_CATALOG': 'Esempi pratici',
    'breadcrumb_label.GOOD_PRACTICES_DETAILS': 'Dettaglio esempi pratici',
    'breadcrumb_label.LEGISLATION': 'Normativa',
    'breadcrumb_label.PRIVACY_POLICY': 'Privacy policy',
    'breadcrumb_label.NOT_FOUND': 'Non trovato',
  },
  en: {
    'breadcrumb_label.HOME': 'Home',
    'breadcrumb_label.ECOSYSTEM': 'About us',
    'breadcrumb_label.ESERVICE_CATALOG': 'Explore the catalog',
    'breadcrumb_label.ESERVICE_DETAILS': 'API details',
    'breadcrumb_label.FAQ': 'Frequently asked questions',
    'breadcrumb_label.GOOD_PRACTICES_CATALOG': 'Practical examples',
    'breadcrumb_label.GOOD_PRACTICES_DETAILS': 'Good practice details',
    'breadcrumb_label.LEGISLATION': 'Legislation',
    'breadcrumb_label.PRIVACY_POLICY': 'Privacy policy',
    'breadcrumb_label.NOT_FOUND': 'Not found',
  },
} as const satisfies { [K in SupportedLanguage]: Record<`breadcrumb_label.${RouteKey}`, string> }

export const ui = {
  it: {
    'actions.search': 'Cerca',
    'actions.copyUrl': 'Copia URL',
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
    'header.top_nav.semantic': 'Semantica',
    'header.top_nav.open_data': 'Dati aperti',

    'footer.nav_section.resources': 'Risorse',
    'footer.nav_section.media_policy': 'Media policy',
    'footer.nav_section.legal_notes': 'Note legali',
    'footer.nav_section.privacy_policy': 'Privacy policy',
    'footer.nav_section.sitemap': 'Mappa del sito',
    'footer.nav_section.accessibility_statement': 'Dichiarazione di accessibilità',

    'eservice_card.access_reserved': 'Accesso riservato',
    'eservice_card.read_more': 'leggi tutto',

    // Organization Types
    'organization_types.tutti_long': 'Tutti gli enti',
    'organization_types.pac_long': 'Pubbliche Amministrazioni Centrali',
    'organization_types.comuni_long': 'Comuni',
    'organization_types.regioni_long': 'Regioni',
    'organization_types.universita_long': 'Università e AFAM',
    'organization_types.altre_long': 'Altre Pubbliche Amministrazioni Locali',

    'organization_types.tutti_short': 'Tutti',
    'organization_types.pac_short': 'PAC',
    'organization_types.comuni_short': 'Comuni',
    'organization_types.regioni_short': 'Regioni',
    'organization_types.universita_short': 'Università',
    'organization_types.altre_short': 'Altre',

    ...breadcrumbLabels.it,

    'chip.provider': 'Ente erogatore',
    'chip.consumer': 'Ente fruitore',
    'chip.q': 'Parola chiave',
    'chip.remove_all': 'Rimuovi tutti i filtri',
    'autocomplete.placeholder': "Scegli un'opzione",
    'autocomplete.selectedElements': ' elementi selezionati',
    'autocomplete.selectedElement': ' elemento selezionato',
    'pagination.previous': 'Precedente',
    'pagination.next': 'Successiva',
  },
  en: {
    'actions.search': 'Search',
    'actions.copyUrl': 'Copy URL',
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
    'header.top_nav.semantic': 'Semantic',
    'header.top_nav.open_data': 'Open data',

    'footer.nav_section.resources': 'Resources',
    'footer.nav_section.media_policy': 'Media policy',
    'footer.nav_section.legal_notes': 'Legal notes',
    'footer.nav_section.privacy_policy': 'Privacy policy',
    'footer.nav_section.sitemap': 'Sitemap',
    'footer.nav_section.accessibility_statement': 'Accessibility statement',

    'eservice_card.access_reserved': 'Reserved access',
    'eservice_card.read_more': 'Read more',

    // Organization Types
    'organization_types.tutti_long': 'All entities',
    'organization_types.pac_long': 'Central Public Administrations',
    'organization_types.comuni_long': 'Municipalities',
    'organization_types.regioni_long': 'Regions',
    'organization_types.universita_long': 'Universities and AFAM',
    'organization_types.altre_long': 'Other Local Public Administrations',

    'organization_types.tutti_short': 'All',
    'organization_types.pac_short': 'PAC',
    'organization_types.comuni_short': 'Municipalities',
    'organization_types.regioni_short': 'Regions',
    'organization_types.universita_short': 'Universities',
    'organization_types.altre_short': 'Others',

    ...breadcrumbLabels.en,

    'chip.provider': 'Provider',
    'chip.consumer': 'Consumer',
    'chip.q': 'Keyword',
    'chip.remove_all': 'Remove all filters',
    'autocomplete.placeholder': 'Choose an option',
    'autocomplete.selectedElements': ' items selected',
    'autocomplete.selectedElement': ' item selected',
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
