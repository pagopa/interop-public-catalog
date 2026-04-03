import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

export const ui = {
  it: {
    "actions.learnMore": "Scopri di più",
    "actions.submit": "Invia",
    "actions.back": "Indietro",

    "label.for": "Per",
    "label.current": "Corrente",
    "languageSwitch.selected_lang": "Selezione lingua: lingua selezionata",

    "brand.title": "Catalogo delle API",

    "nav.explore_catalog": "Esplora il catalogo",
    "nav.examples": "Esempi pratici",
    "nav.what_is": "Cos’è l’interoperabilità",
    "nav.faq": "Domande frequenti",

    "header.brand.tagline": "Le API della Pubblica Amministrazione",
    "header.nav.toggle": "Mostra/Nascondi la navigazione",
    "header.nav.hide": "Nascondi la navigazione",
    "header.top_nav.DTD": "Dipartimento per la trasformazione digitale",
    "header.top_nav.and": "e",
    "header.top_nav.other_catalogues": "Altri cataloghi",
    "header.top_nav.semantic": "Semantica",
    "header.top_nav.open_data": "Dati aperti",

    "footer.nav_section.legal_notes": "Note legali",
    "footer.nav_section.privacy_policy": "Privacy policy",
    "footer.nav_section.sitemap": "Mappa del sito",
    "footer.nav_section.accessibility_statement":
      "Dichiarazione di accessibilità",

    "back_to_top_button.aria_label": "Torna su",

    "page_index_nav.hide": "Chiudi indice della pagina",
    "page_index_nav.button_aria_label": "Apri/chiudi indice della pagina",
    "page_index_nav.list_item_aria_label":
      "Vai alla sezione e chiudi indice della pagina",

    "eservice_card.read_more": "leggi tutto",

    // Organization Types
    "tenant_macrocategory_.tutti_long": "Tutti gli enti",

    "tenant_macrocategory_.tutti_short": "Tutti",
    "tenant_macrocategory_.pac_short": "PAC",
    "tenant_macrocategory_.comuni_short": "Comuni",
    "tenant_macrocategory_.regioni_short": "Regioni",
    "tenant_macrocategory_.universita_short": "Università",
    "tenant_macrocategory_.altre_short": "Altre",
    "autocomplete.noOptions": "Nessun risultato",

    "pagination.previous": "Precedente",
    "pagination.next": "Successiva",

    // "rating.yes": "Si",
    // "rating.no": "No",
    // "rating.email_subject": "Feedback sul Catalogo delle API",
    // "rating.email_body_positive": "La pagina è stata utile perché",
    // "rating.email_body_negative": "La pagina non è stata utile perché",
    // "rating.alert": "Per favore, seleziona un’opzione prima di inviare.",
    "spinner.loading": "Caricamento...",
  },
  en: {
    "actions.learnMore": "Learn more",
    "actions.submit": "Submit",
    "actions.back": "Back",

    "label.for": "For",
    "label.current": "Current",
    "languageSwitch.selected_lang": "Selezione lingua: lingua selezionata",

    "brand.title": "API Catalogue",

    "nav.explore_catalog": "Explore the catalogue",
    "nav.examples": "Use cases",
    "nav.what_is": "What is interoperability",
    "nav.faq": "FAQ",

    "header.brand.tagline": "Public Administration APIs",
    "header.nav.toggle": "Show/Hide navigation",
    "header.nav.hide": "Hide navigation",
    "header.top_nav.DTD": "Department for Digital Transformation",
    "header.top_nav.and": "and",
    "header.top_nav.other_catalogues": "Other catalogues",
    "header.top_nav.semantic": "Semantic",
    "header.top_nav.open_data": "Open data",

    "footer.nav_section.legal_notes": "Legal notice",
    "footer.nav_section.privacy_policy": "Privacy policy",
    "footer.nav_section.sitemap": "Site map",
    "footer.nav_section.accessibility_statement": "Accessibility statement",

    "back_to_top_button.aria_label": "Back to top",

    "page_index_nav.hide": "Close page index",
    "page_index_nav.button_aria_label": "Open/close page index",
    "page_index_nav.list_item_aria_label": "Go to section and close page index",

    "eservice_card.read_more": "Read more",

    // Organization Types
    "tenant_macrocategory_.tutti_long": "All Organizations",

    "tenant_macrocategory_.tutti_short": "All",
    "tenant_macrocategory_.pac_short": "Central PAs",
    "tenant_macrocategory_.comuni_short": "Municipalities",
    "tenant_macrocategory_.regioni_short": "Regions",
    "tenant_macrocategory_.universita_short": "Universities",
    "tenant_macrocategory_.altre_short": "Others",
    "autocomplete.noOptions": "No results",

    "pagination.previous": "Previous",
    "pagination.next": "Next",

    "rating.title": "Was this page helpful?",
    "rating.button_label": "Send a report",
    // "rating.yes": "Yes",
    // "rating.no": "No",
    // "rating.email_subject": "Feedback on the API Catalog",
    // "rating.email_body_positive": "The page was useful because",
    // "rating.email_body_negative": "The page was not helpful because",
    // "rating.alert": "Please select an option before submitting.",

    "spinner.loading": "Loading...",
  },
} as const satisfies TranslationsMap;

export const useUiTranslations = buildUseTranslations(ui);
