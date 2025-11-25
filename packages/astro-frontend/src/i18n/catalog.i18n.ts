import type { TranslationsMap } from "./types.i18n";
import { buildUseTranslations } from "./utils.i18n";

const catalogTranslations = {
  it: {
    title: "Esplora il catalogo",
    description:
      "Consulta tutte le API disponibili sulla Piattaforma Digitale Nazionale Dati (PDND). Verifica i requisiti di accesso e integra le interfacce nei tuoi sistemi.",
    "filters.mobile.button": "Filtri",
    "filters.title": "Cerca nel catalogo",
    "filters.q.label": "Cerca per parola chiave",
    "filters.q.placeholder": "Inserisci una o più parole chiave",
    "filters.provider.label": "Filtra per ente erogatore",
    "autocomplete.placeholder": "Scegli un'opzione",
    "filters.consumer.label": "Filtra per ente fruitore",
    "filters.submit": "Applica",
    resultsCount: "Risultati",
    "orderBy.label": "Ordina per",
    "order.recent_asc": "Più recente (ascendente)",
    "order.recent_desc": "Più recente (discendente)",
    "order.name_asc": "Nome e-service (ascendente)",
    "order.name_desc": "Nome e-service (discendente)",
    "filters.modal.close": "Chiudi",
    "filters.modal.apply": "Applica e mostra risultati",
    "filter.popover.consumer.title": "FILTRA PER ENTE FRUITORE",
    "filter.popover.consumer.content":
      "L’elenco dei potenziali fruitori è costruito in base ai requisiti di accesso delle API.",
    "chip.provider": "Ente erogatore",
    "chip.consumer": "Ente fruitore",
    "chip.q": "Parola chiave",
    "chip.remove_all": "Rimuovi tutti i filtri",
    "autocomplete.selectedElements": " elementi selezionati",
    "autocomplete.selectedElement": " elemento selezionato",
    "finder.title":
      "Cerchi l’elenco completo degli aderenti e delle API disponibili su PDND? ",
    "finder.api.label": "Vai all’elenco delle API",
    "finder.provider.label": "Vai all’elenco degli aderenti",
    "no-results.title": "Nessun risultato trovato",
    "no-results.description":
      "La ricerca non ha prodotto risultati. Modifica i filtri o prova con un'altra parola chiave.",

    "suggestion_section.left_card.title": "Ottenere l’accesso ai dati",
    "suggestion_section.left_card.description":
      "Iscriversi a PDND è semplice e veloce, avrai bisogno di firmare e inoltrare un accordo di adesione.",
    "suggestion_section.left_card.button_label": "Aderisci a PDND",
    "suggestion_section.right_card.title":
      "Consultare i dati di utilizzo delle API",
    "suggestion_section.right_card.description":
      "Scopri gli e-service più utilizzati e i principali dati sull'adesione a PDND.",
    "suggestion_section.right_card.button_label":
      "Consulta i numeri della PDND",
  },

  en: {
    title: "Browse the catalogue",
    description:
      "Browse all the APIs available on the National Digital Data Platform (PDND). Check access requirements and integrate the interfaces into your systems.",
    "filters.mobile.button": "Filters",
    "filters.title": "Search the catalogue",
    "filters.q.label": "Search by keyword",
    "filters.q.placeholder": "Enter one or more keywords",
    "filters.provider.label": "Filter by provider",
    "filters.consumer.label": "Filter by consumer",
    "autocomplete.placeholder": "Select an option",
    "filters.submit": "Apply",
    resultsCount: "Results",
    "orderBy.label": "Sort by",
    "order.recent_asc": "Most recent (ascending)",
    "order.recent_desc": "Most recent (descending)",
    "order.name_asc": "E-service name (ascending)",
    "order.name_desc": "E-service name (descending)",
    "filters.modal.close": "Close",
    "filters.modal.apply": "Apply and show results",
    "filter.popover.consumer.title": "FILTER BY CONSUMER",
    "filter.popover.consumer.content":
      "The list of potential consumers is defined according to the API access requirements.",
    "chip.provider": "Provider",
    "chip.consumer": "Consumer",
    "chip.q": "Keyword",
    "chip.remove_all": "Clear all filters",
    "autocomplete.selectedElements": " items selected",
    "autocomplete.selectedElement": " item selected",
    "finder.title":
      "Are you looking for open data from participants and the APIs available on PDND?",
    "finder.api.label": "Go to the list of APIIs",
    "finder.provider.label": "Go to the list of participants",
    "no-results.title": "No results found",
    "no-results.description":
      "Your search did not return any results. Try adjusting the filters or using a different keyword.",

    "suggestion_section.left_card.title": "Get access to data",
    "suggestion_section.left_card.description":
      "Joining PDND is simple and fast: you’ll just need to sign and submit an agreement.",
    "suggestion_section.left_card.button_label": "Join PDND",
    "suggestion_section.right_card.title": "View APIs usage data",
    "suggestion_section.right_card.description":
      "Discover the most used e-services and key data on participation in PDND.",
    "suggestion_section.right_card.button_label": "View PDND data",
  },
} as const satisfies TranslationsMap;

export const useCatalogTranslations = buildUseTranslations(catalogTranslations);
