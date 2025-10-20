import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const homepage = {
  it: {
    title: 'Esplora le API della Pubblica Amministrazione',
    subtitle:
      'Cerca nel catalogo, accedi ai dati tramite la Piattaforma Digitale Nazionale Dati (PDND) e crea servizi innovativi per il tuo ente e per le persone.',
    search_placeholder: 'Cerca nel catalogo per parola chiave',
    info_link: 'Che cosa sono le API?',
    scroll_hint: 'Scorri per scoprire di più',

    'api_info.title': 'Cosa sono le API',
    'api_info.content':
      'Le API (Application Programming Interface) sono gli strumenti digitali che permettono agli enti di dialogare, cioè di comunicare e scambiare dati in modo sicuro e automatizzato.',

    'how_it_works.title': 'Come funziona',
    'how_it_works.step_1.title': '1. Ricerca le API nel catalogo',
    'how_it_works.step_1.description':
      'Cerca all’interno del catalogo le API necessarie a integrare i servizi dell’ente per cui operi.',
    'how_it_works.step_1.link': 'Esplora il catalogo',

    'how_it_works.step_2.title': "2. Richiedi l'accesso ai dati",
    'how_it_works.step_2.description':
      'Alcuni dati sono aperti, per altri è necessaria un’autorizzazione. Puoi ottenerla attraverso la piattaforma PDND.',
    'how_it_works.step_2.link': 'Vai alla piattaforma PDND',

    'how_it_works.step_3.title': '3. Realizza i tuoi servizi',
    'how_it_works.step_3.description':
      'Ottenuto l’accesso ai dati, puoi costruire i tuoi servizi. Lasciati ispirare dagli esempi pratici di utilizzo.',
    'how_it_works.step_3.link': 'Consulta gli esempi',

    'use_cases.title': 'Lasciati ispirare dagli esempi pratici per il tuo ente',
    'use_cases.description':
      "Una raccolta di esempi significativi e facili da replicare di come l'interoperabilità può semplificare i processi della Pubblica Amministrazione.",
    'use_cases.target.pa_centrali': 'PA Centrali',
    'use_cases.target.regioni': 'Regioni',
    'use_cases.target.comuni': 'Comuni',
    'use_cases.target.view_all': 'Visualizza Tutti',
    'use_cases.footer_cta': 'Esplora tutti gli esempi',

    'featured_api.title': 'API in evidenza',
    'featured_api.explore_catalog': 'Esplora il catalogo',
  },
  en: {
    title: 'Explore Public Administration APIs',
    subtitle:
      'Search the catalog, access data through the National Digital Data Platform (PDND), and create innovative services for your organization and people.',
    search_placeholder: 'Search the catalog by keyword',
    info_link: 'What are APIs?',
    scroll_hint: 'Scroll to find out more',
    'api_info.title': 'What APIs are',
    'api_info.content':
      'APIs (Application Programming Interfaces) are digital tools that allow organizations to communicate, i.e., to exchange data in a secure and automated way.',

    'how_it_works.title': 'How it works',
    'how_it_works.step_1.title': '1. Search for APIs in the catalog',
    'how_it_works.step_1.description':
      'Search the catalog for the APIs you need to integrate the services of the organization you work for.',
    'how_it_works.step_1.link': 'Explore the catalog',

    'how_it_works.step_2.title': '2. Request access to data',
    'how_it_works.step_2.description':
      'Some data is open, others require authorization. You can obtain it through the PDND platform.',
    'how_it_works.step_2.link': 'Go to the PDND platform',

    'how_it_works.step_3.title': '3. Create your services',
    'how_it_works.step_3.description':
      'Once you have access to the data, you can build your services. Get inspired by practical examples of use.',
    'how_it_works.step_3.link': 'See examples',

    'use_cases.title': 'Get inspired by practical examples for your organization',
    'use_cases.description':
      'A collection of meaningful and easily replicable examples of how interoperability can simplify Public Administration processes.',
    'use_cases.target.pa_centrali': 'Central Public Administrations',
    'use_cases.target.regioni': 'Regions',
    'use_cases.target.comuni': 'Municipalities',
    'use_cases.target.view_all': 'View All',
    'use_cases.footer_cta': 'Explore all examples',

    'featured_api.title': 'Featured APIs',
    'featured_api.explore_catalog': 'Explore the catalog',
  },
} as const satisfies TranslationsMap

export const useHomepageTranslations = buildUseTranslations(homepage)
