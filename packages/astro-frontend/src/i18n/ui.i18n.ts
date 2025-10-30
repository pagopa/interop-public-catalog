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
    'breadcrumb_label.LEGAL_NOTES': 'Note legali',
  },
  en: {
    'breadcrumb_label.HOME': 'Home',
    'breadcrumb_label.ECOSYSTEM': 'What is interoperability',
    'breadcrumb_label.ESERVICE_CATALOG': 'Explore the catalog',
    'breadcrumb_label.ESERVICE_DETAILS': 'API details',
    'breadcrumb_label.FAQ': 'Frequently asked questions',
    'breadcrumb_label.GOOD_PRACTICES_CATALOG': 'Practical examples',
    'breadcrumb_label.GOOD_PRACTICES_DETAILS': 'Good practice details',
    'breadcrumb_label.LEGISLATION': 'Legislation',
    'breadcrumb_label.PRIVACY_POLICY': 'Privacy policy',
    'breadcrumb_label.LEGAL_NOTES': 'Legal notice',
  },
} as const satisfies {
  [K in SupportedLanguage]: Record<
    `breadcrumb_label.${Exclude<RouteKey, 'NOT_FOUND_ERROR' | 'SERVER_ERROR'>}`,
    string
  >
}

export const ui = {
  it: {
    'actions.search': 'Cerca',
    'actions.copyUrl': 'Copia URL',
    'actions.copied': 'Copiato!',
    'actions.learnMore': 'Scopri di più',
    'actions.submit': 'Invia',

    'suggestion_section.title': 'Come fare per',

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
    'header.top_nav.DTD': 'Dipartimento per la trasformazione digitale',
    'header.top_nav.and': 'e',
    'header.top_nav.other_catalogues': 'Altri cataloghi',
    'header.top_nav.semantic': 'Semantica',
    'header.top_nav.open_data': 'Dati aperti',

    'footer.nav_section.resources': 'Risorse',
    'footer.nav_section.legal_notes': 'Note legali',
    'footer.nav_section.privacy_policy': 'Privacy policy',
    'footer.nav_section.sitemap': 'Mappa del sito',
    'footer.nav_section.accessibility_statement': 'Dichiarazione di accessibilità',

    'page_index_nav.title': 'Indice della pagina',

    'eservice_card.access_reserved': 'Accesso riservato',
    'eservice_card.read_more': 'leggi tutto',
    'eservice_card.reserved_tooltip': "L'API è disponibile sulla piattaforma PDND",
    'eservice_card.open_data_tooltip': "L'API è disponibile come Open Data",

    'error.page_not_found.title': 'Pagina non trovata',
    'error.page_not_found.message': 'Utilizza il menu per riprendere la navigazione',
    'error.system_unavailable.title': 'Il sistema non è disponibile in questo momento',
    'error.system_unavailable.message':
      'Ci scusiamo per l’inconveniente. Ti invitiamo a riprovare più tardi.',
    'error.back_to_home': 'Vai alla homepage',

    // Organization Types
    'tenant_macrocategory_.tutti_long': 'Tutti gli enti',
    'tenant_macrocategory_.pac_long': 'Pubbliche Amministrazioni Centrali',
    'tenant_macrocategory_.comuni_long': 'Comuni',
    'tenant_macrocategory_.regioni_long': 'Regioni',
    'tenant_macrocategory_.universita_long': 'Università e AFAM',
    'tenant_macrocategory_.altre_long': 'Altre Pubbliche Amministrazioni Locali',

    'tenant_macrocategory_.tutti_short': 'Tutti',
    'tenant_macrocategory_.pac_short': 'PAC',
    'tenant_macrocategory_.comuni_short': 'Comuni',
    'tenant_macrocategory_.regioni_short': 'Regioni',
    'tenant_macrocategory_.universita_short': 'Università',
    'tenant_macrocategory_.altre_short': 'Altre',
    'autocomplete.noOptions': 'Nessun risultato',

    ...breadcrumbLabels.it,

    'pagination.previous': 'Precedente',
    'pagination.next': 'Successiva',

    'rating.title': 'Questa pagina ti è stata utile?',
    'rating.yes': 'Si',
    'rating.no': 'No',
    'rating.email_subject': 'Feedback sul Catalogo delle API',
    'rating.email_body_positive': 'La pagina è stata utile perché',
    'rating.email_body_negative': 'La pagina non è stata utile perché',
    'rating.alert': 'Per favore, seleziona un’opzione prima di inviare.',
    'spinner.loading': 'Caricamento...',
  },
  en: {
    'actions.search': 'Search',
    'actions.copyUrl': 'Copy URL',
    'actions.copied': 'Copied!',
    'actions.learnMore': 'Learn more',
    'actions.submit': 'Submit',

    'suggestion_section.title': 'How to',

    'label.for': 'For',
    'label.current': 'Current',
    'languageSwitch.selected_lang': 'Selezione lingua: lingua selezionata',

    'brand.title': 'API Catalogue',

    'nav.explore_catalog': 'Explore the catalogue',
    'nav.examples': 'Use cases',
    'nav.what_is': 'What is interoperability',
    'nav.faq': 'FAQ',

    'header.brand.tagline': 'The Public Administration APIs',
    'header.nav.toggle': 'Show/Hide navigation',
    'header.nav.hide': 'Hide navigation',
    'header.top_nav.DTD': 'Department for Digital Transformation',
    'header.top_nav.and': 'and',
    'header.top_nav.other_catalogues': 'Other catalogues',
    'header.top_nav.semantic': 'Semantic',
    'header.top_nav.open_data': 'Open data',

    'footer.nav_section.resources': 'Resources',
    'footer.nav_section.legal_notes': 'Legal notice',
    'footer.nav_section.privacy_policy': 'Privacy policy',
    'footer.nav_section.sitemap': 'Site map',
    'footer.nav_section.accessibility_statement': 'Accessibility statement',

    'page_index_nav.title': 'Page index',

    'eservice_card.access_reserved': 'Restricted access',
    'eservice_card.read_more': 'Read more',
    'eservice_card.reserved_tooltip': 'The API is available on the PDND platform',
    'eservice_card.open_data_tooltip': 'The API is available as Open Data',

    'error.page_not_found.title': 'Page not found',
    'error.page_not_found.message': 'Use the menu to continue browsing.',
    'error.system_unavailable.title': 'The system is currently unavailable.',
    'error.system_unavailable.message':
      'We apologize for the inconvenience. Please try again later.',
    'error.back_to_home': 'Go to homepage',

    // Organization Types
    'tenant_macrocategory_.tutti_long': 'All Public Bodies',
    'tenant_macrocategory_.pac_long': 'Central Government Administrations',
    'tenant_macrocategory_.comuni_long': 'Municipalities',
    'tenant_macrocategory_.regioni_long': 'Regions',
    'tenant_macrocategory_.universita_long':
      'Universities and Higher Education Institutions (AFAM)',
    'tenant_macrocategory_.altre_long': 'Other Local Public Bodies',

    'tenant_macrocategory_.tutti_short': 'All',
    'tenant_macrocategory_.pac_short': 'PAC',
    'tenant_macrocategory_.comuni_short': 'Municipalities',
    'tenant_macrocategory_.regioni_short': 'Regions',
    'tenant_macrocategory_.universita_short': 'Universities',
    'tenant_macrocategory_.altre_short': 'Others',
    'autocomplete.noOptions': 'No results',

    ...breadcrumbLabels.en,

    'pagination.previous': 'Previous',
    'pagination.next': 'Next',

    'rating.title': 'Was this page helpful?',
    'rating.yes': 'Yes',
    'rating.no': 'No',
    'rating.email_subject': 'Feedback on the API Catalog',
    'rating.email_body_positive': 'The page was useful because',
    'rating.email_body_negative': 'The page was not helpful because',
    'rating.alert': 'Please select an option before submitting.',
    'spinner.loading': 'Loading...',
  },
} as const satisfies TranslationsMap

export const useUiTranslations = buildUseTranslations(ui)
