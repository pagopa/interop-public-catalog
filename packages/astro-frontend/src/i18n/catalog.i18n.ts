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
    'finder.title': 'Cerchi l’elenco completo degli aderenti e delle API disponibili su PDND? ',
    'finder.api.label': 'Vai all’elenco delle API',
    'finder.provider.label': 'Vai all’elenco degli aderenti',
    'no-results.title': 'Nessun risultato trovato',
    'no-results.description':
      "La ricerca non ha prodotto risultati. Modifica i filtri o prova con un'altra parola chiave.",

    'suggestion_section.left_card.title': 'Ottenere l’accesso ai dati',
    'suggestion_section.left_card.description':
      'Iscriversi a PDND è semplice e veloce, avrai bisogno di firmare e inoltrare un accordo di adesione.',
    'suggestion_section.left_card.button_label': 'Aderisci a PDND',
    'suggestion_section.right_card.title': 'Consultare i dati di utilizzo delle API',
    'suggestion_section.right_card.description':
      "Scopri gli e-service più utilizzati e i principali dati sull'adesione a PDND.",
    'suggestion_section.right_card.button_label': 'Consulta i numeri della PDND',
  },

  en: {
    title: 'APIs on the National Digital Data Platform (PDND)',
    description:
      'Find the API you need by filtering by keyword, producer, or consumer. Start the integration for your entity now to provide efficient services.',
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
    'autocomplete.selectedElements': ' items selected',
    'autocomplete.selectedElement': ' item selected',
    'finder.title': 'Looking for the complete list of PDND members and available APIs? ',
    'finder.api.label': 'Go to the API list',
    'finder.provider.label': 'Go to the provider list',
    'no-results.title': 'No results found',
    'no-results.description':
      'The search returned no results. Change the filters or try another keyword.',

    'suggestion_section.left_card.title': 'Get access to data',
    'suggestion_section.left_card.description':
      'Joining PDND is simple and fast, you will need to sign and submit an adhesion agreement.',
    'suggestion_section.left_card.button_label': 'Join PDND',
    'suggestion_section.right_card.title': 'View API usage data',
    'suggestion_section.right_card.description':
      'Discover the most used e-services and key data on PDND adoption.',
    'suggestion_section.right_card.button_label': 'View PDND statistics',
  },
} as const satisfies TranslationsMap

export const useCatalogTranslations = buildUseTranslations(catalogTranslations)
