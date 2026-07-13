import type { TranslationsMap } from "./types.i18n";
import { buildUseTranslations } from "./utils.i18n";

const catalogTranslations = {
  it: {
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

    "no-results.title": "Nessun risultato trovato",
    "no-results.description":
      "La ricerca non ha prodotto risultati. Modifica i filtri o prova con un'altra parola chiave.",
  },

  en: {
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

    "no-results.title": "No results found",
    "no-results.description":
      "Your search did not return any results. Try adjusting the filters or using a different keyword.",
  },
} as const satisfies TranslationsMap;

export const useCatalogTranslations = buildUseTranslations(catalogTranslations);
