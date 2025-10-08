import { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ecosystem = {
  it: {
    title: 'Esplora le API della Pubblica Amministrazione',
    subtitle:
      'Cerca nel catalogo, accedi ai dati tramite la Piattaforma Digitale Nazionale Dati (PDND) e crea servizi innovativi per il tuo ente e per le persone.',

    'access_points_section.title': 'I punti di accesso',
    'access_points_section.subtitle':
      'L’ecosistema dell’interoperabilità si fonda su una rete di strumenti, portali e risorse digitali che supportano lo scambio di dati tra le pubbliche amministrazioni. Scopri i principali punti di accesso che rendono possibile l’integrazione e la collaborazione.',

    'access_points_section.access_point_1.title': 'PDND Interoperabilità',
    'access_points_section.access_point_1.subtitle':
      'Piattaforma per lo scambio sicuro di dati tra PA.',
    'access_points_section.access_point_1.description':
      'Permette lo scambio di dati tra pubbliche amministrazioni utilizzando uno standard condiviso di integrazione.',

    'access_points_section.access_point_2.title': 'Interoperable Europe',
    'access_points_section.access_point_2.subtitle':
      'Insieme di regole e strumenti per l’interoperabilità nella EU.',
    'access_points_section.access_point_2.description':
      'Favorisce la cooperazione transfrontaliera, garantendo che i servizi digitali pubblici possano dialogare a livello europeo.',

    'access_points_section.access_point_3.title': 'schema.gov.it',
    'access_points_section.access_point_3.subtitle':
      'Catalogo per l’interoperabilità semantica dei dati pubblici.',
    'access_points_section.access_point_3.description':
      'Permette di descrivere i dati in modo uniforme, così che siano facilmente compresi e scambiati tra le diverse amministrazioni.',

    'access_points_section.access_point_4.title': 'dati.gov.it',
    'access_points_section.access_point_4.subtitle':
      'Portale che raccoglie i dataset aperti delle PA.',
    'access_points_section.access_point_4.description':
      'Rende disponibili i dati aperti delle PA, così che possano essere consultati e riutilizzati da cittadini, imprese e istituzioni.',

    'access_points_section.actions.go_to_site': 'Vai al sito',
  },
  en: {
    title: 'Explore Public Administration APIs',
    subtitle:
      'Search the catalog, access data through the National Digital Data Platform (PDND), and create innovative services for your organization and people.',

    'access_points_section.title': 'Access Points',

    'access_points_section.access_point_1.title': 'PDND Interoperabilità',
    'access_points_section.access_point_1.subtitle':
      'Platform for the secure exchange of data between public administrations.',
    'access_points_section.access_point_1.description':
      'Allows the exchange of data between public administrations using a shared integration standard.',

    'access_points_section.access_point_2.title': 'Interoperable Europe',
    'access_points_section.access_point_2.subtitle':
      'Set of rules and tools for interoperability in the EU.',
    'access_points_section.access_point_2.description':
      'Encourages cross-border cooperation, ensuring that public digital services can communicate at the European level.',

    'access_points_section.access_point_3.title': 'schema.gov.it',
    'access_points_section.access_point_3.subtitle':
      'Catalog for the semantic interoperability of public data.',
    'access_points_section.access_point_3.description':
      'Allows data to be described uniformly, so that it can be easily understood and exchanged between different administrations.',

    'access_points_section.access_point_4.title': 'dati.gov.it',
    'access_points_section.access_point_4.subtitle':
      'Portal that collects open datasets from public administrations.',
    'access_points_section.access_point_4.description':
      'Makes public administration open data available, so that it can be consulted and reused by citizens, businesses, and institutions.',

    'access_points_section.actions.go_to_site': 'Go to site',
  },
} as const satisfies TranslationsMap

export const useEcosystemTranslations = buildUseTranslations(ecosystem)
