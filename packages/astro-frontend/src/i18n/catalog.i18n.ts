import type { TranslationsMap } from './types.i18n'
import { buildUseTranslations } from './utils.i18n'

const catalogTranslations = {
  it: {
    title: 'Esplora il catalogo',
    description:
      'Consulta tutte le API disponibili sulla Piattaforma Digitale Nazionale Dati (PDND). Verifica i requisiti di accesso e integra le interfacce nei tuoi sistemi.',
    'filters.mobile.button': 'Filtri',
    'filters.title': 'Cerca nel catalogo',
    'filters.q.label': 'Cerca per parola chiave',
    'filters.q.placeholder': 'Inserisci una o più parole chiave',
    'filters.provider.label': 'Filtra per ente erogatore',
    'autocomplete.placeholder': 'Scegli un opzione',
    'filters.consumer.label': 'Filtra per ente fruitore',
    'filters.submit': 'Applica',
    resultsCount: 'Risultati',
    copyUrl: 'Copia URL',
    'orderBy.label': 'Ordina per',
    'order.recent_asc': 'Più recente (ascendente)',
    'order.recent_desc': 'Più recente (discendente)',
    'order.name_asc': 'Nome e-service (ascendente)',
    'order.name_desc': 'Nome e-service (discendente)',
    'filters.modal.close': 'Chiudi',
    'filters.modal.apply': 'Applica e mostra risultati',
    'filter.popover.consumer.title': 'FILTRA PER ENTE FRUITORE',
    'filter.popover.consumer.content':
      'L’elenco dei potenziali fruitori è costruito in base ai requisiti di accesso delle API.',
    'chip.provider': 'Ente erogatore',
    'chip.consumer': 'Ente fruitore',
    'chip.q': 'Parola chiave',
    'chip.remove_all': 'Rimuovi tutti i filtri',
    'autocomplete.selectedElements': ' elementi selezionati',
    'autocomplete.selectedElement': ' elemento selezionato',
  },

  en: {
    title: 'Explore the catalog',
    description:
      'Browse all the APIs available on the National Digital Data Platform (PDND). Check the access requirements and integrate the interfaces into your systems.',
    'filters.mobile.button': 'Filters',
    'filters.title': 'Search within the catalog',
    'filters.q.label': 'Search by keyword',
    'filters.q.placeholder': 'Enter one or more keywords',
    'filters.provider.label': 'Filter by provider organization',
    'filters.consumer.label': 'Filter by consumer organization',
    'autocomplete.placeholder': 'Choose an option',
    'filters.submit': 'Apply',
    resultsCount: 'Results',
    copyUrl: 'Copy URL',
    'orderBy.label': 'Sort by',
    'order.recent_asc': 'Most recent (ascending)',
    'order.recent_desc': 'Most recent (descending)',
    'order.name_asc': 'E-service name (ascending)',
    'order.name_desc': 'E-service name (descending)',
    'filters.modal.close': 'Close',
    'filters.modal.apply': 'Apply and show results',
    'filter.popover.consumer.title': 'FILTER BY CONSUMER ORGANIZATION',
    'filter.popover.consumer.content':
      'The list of potential consumers is built based on the API access requirements.',
    'chip.provider': 'Provider organization',
    'chip.consumer': 'Consumer organization',
    'chip.q': 'Keyword',
    'chip.remove_all': 'Remove all filters',
    'autocomplete.placeholder': 'Choose an option',
    'autocomplete.selectedElements': ' items selected',
    'autocomplete.selectedElement': ' item selected',
  },
} as const satisfies TranslationsMap

export const useCatalogTranslations = buildUseTranslations(catalogTranslations)
