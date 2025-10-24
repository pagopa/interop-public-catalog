import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const homepage = {
  it: {
    title: 'Catalogo delle API della Pubblica Amministrazione',
    subtitle:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
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

    'good_practices.title': 'Lasciati ispirare dagli esempi pratici per il tuo ente',
    'good_practices.description':
      "Una raccolta di esempi significativi e facili da replicare di come l'interoperabilità può semplificare i processi della Pubblica Amministrazione.",
    'good_practices.target.pa_centrali': 'PA Centrali',
    'good_practices.target.regioni': 'Regioni',
    'good_practices.target.comuni': 'Comuni',
    'good_practices.target.view_all': 'Visualizza Tutti',
    'good_practices.footer_cta': 'Esplora tutti gli esempi',

    'featured_api.title': 'API in evidenza',
    'featured_api.explore_catalog': 'Esplora il catalogo',
  },
  en: {
    title: 'Public Administration API Catalogue',
    subtitle:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
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

    'good_practices.title': 'Get inspired by practical examples for your organization',
    'good_practices.description':
      'A collection of meaningful and easily replicable examples of how interoperability can simplify Public Administration processes.',
    'good_practices.target.pa_centrali': 'Central Public Administrations',
    'good_practices.target.regioni': 'Regions',
    'good_practices.target.comuni': 'Municipalities',
    'good_practices.target.view_all': 'View All',
    'good_practices.footer_cta': 'Explore all examples',

    'featured_api.title': 'Featured APIs',
    'featured_api.explore_catalog': 'Explore the catalog',
  },
} as const satisfies TranslationsMap

export const useHomepageTranslations = buildUseTranslations(homepage)
