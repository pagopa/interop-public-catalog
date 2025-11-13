import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

export const homepage = {
  it: {
    title: "Esplora le API della Pubblica Amministrazione",
    subtitle:
      "Cerca nel catalogo, accedi ai dati tramite la Piattaforma Digitale Nazionale Dati (PDND) e crea servizi innovativi per il tuo ente e per le persone.",
    search_placeholder: "Cerca nel catalogo per parola chiave",
    info_link: "Che cosa sono le API?",
    scroll_hint: "Scorri per scoprire di più",

    "api_info.title": "Cosa sono le API",
    "api_info.content":
      "Le API (Application Programming Interface) sono gli strumenti digitali che permettono agli enti di dialogare, cioè di comunicare e scambiare dati in modo sicuro e automatizzato.",

    "how_it_works.title": "Come funziona",
    "how_it_works.step_1.title": "1. Ricerca le API nel catalogo",
    "how_it_works.step_1.description":
      "Cerca all’interno del catalogo le API necessarie a integrare i servizi dell’ente per cui operi.",
    "how_it_works.step_1.link": "Esplora il catalogo",

    "how_it_works.step_2.title": "2. Richiedi l'accesso ai dati",
    "how_it_works.step_2.description":
      "Per accedere ai dati è necessaria un’autorizzazione: puoi ottenerla attraverso la piattaforma PDND.",
    "how_it_works.step_2.link": "Vai alla piattaforma PDND",

    "how_it_works.step_3.title": "3. Realizza i tuoi servizi",
    "how_it_works.step_3.description":
      "Ottenuto l’accesso ai dati, puoi costruire i tuoi servizi. Lasciati ispirare dagli esempi pratici di utilizzo.",
    "how_it_works.step_3.link": "Consulta gli esempi",

    "good_practices.title":
      "Lasciati ispirare dagli esempi pratici per il tuo ente",
    "good_practices.description":
      "Scopri come integrare le API nei processi del tuo ente: lasciati ispirare da una raccolta di esempi significativi e semplici da replicare",
    "good_practices.target.pa_centrali": "PA Centrali",
    "good_practices.target.regioni": "Regioni",
    "good_practices.target.comuni": "Comuni",
    "good_practices.target.view_all": "Visualizza Tutti",
    "good_practices.footer_cta": "Esplora tutti gli esempi",

    "featured_api.title": "API in evidenza",
    "featured_api.explore_catalog": "Esplora il catalogo",

    "suggestion_section.left_card.title": "Ottenere l’accesso ai dati",
    "suggestion_section.left_card.description":
      "Iscriversi a PDND è semplice e veloce, avrai bisogno di firmare e inoltrare un accordo di adesione.",
    "suggestion_section.left_card.button_label": "Aderisci a PDND",
    "suggestion_section.right_card.title": "Consultare il manuale operativo",
    "suggestion_section.right_card.description":
      "Leggi il manuale e scopri come integrare il tuo ente alla piattaforma PDND.",
    "suggestion_section.right_card.button_label": "Consulta il manuale",
  },
  en: {
    title: "Explore the Public Administration API",
    subtitle:
      "Search the catalogue, access data through the National Digital Data Platform (PDND), and create innovative services for your organization and citizens.",
    search_placeholder: "Search the catalogue by keyword",
    info_link: "What are APIs?",
    scroll_hint: "Scroll to learn more",
    "api_info.title": "WHAT ARE API?",
    "api_info.content":
      "API (Application Programming Interfaces) are digital tools that enable organizations to communicate and exchange data securely and automatically.",

    "how_it_works.title": "How it works",
    "how_it_works.step_1.title": "1. Search for APIs in the catalogue",
    "how_it_works.step_1.description":
      "Find in the catalogue the APIs needed to integrate your organization’s services.",
    "how_it_works.step_1.link": "Explore the catalogue",

    "how_it_works.step_2.title": "2. Request data access",
    "how_it_works.step_2.description":
      "To access data, authorization is required: you can get it through the PDND platform.",
    "how_it_works.step_2.link": "Visit the PDND platform",

    "how_it_works.step_3.title": "3. Build your services",
    "how_it_works.step_3.description":
      "Once you have data access, you can build your own services. Get inspired by practical usage examples.",
    "how_it_works.step_3.link": "Explore the use cases",

    "good_practices.title":
      "Get inspired by practical examples for your organization",
    "good_practices.description":
      "Learn how to integrate APIs into your organization’s processes: find inspiration in a set of meaningful and easy-to-replicate examples.",
    "good_practices.target.pa_centrali": "Central government administrations",
    "good_practices.target.regioni": "Regions",
    "good_practices.target.comuni": "Municipalities",
    "good_practices.target.view_all": "View all",
    "good_practices.footer_cta": "View all use cases",

    "featured_api.title": "Featured APIs",
    "featured_api.explore_catalog": "Explore the catalogue",

    "suggestion_section.left_card.title": "Get data access",
    "suggestion_section.left_card.description":
      "Joining PDND is simple and fast: you’ll just need to sign and submit an agreement.",
    "suggestion_section.left_card.button_label": "Join PDND",
    "suggestion_section.right_card.title": "Consult the user manual",
    "suggestion_section.right_card.description":
      "Read the manual and learn how to connect your organization to the PDND platform.",
    "suggestion_section.right_card.button_label": "Read the manual",
  },
} as const satisfies TranslationsMap;

export const useHomepageTranslations = buildUseTranslations(homepage);
