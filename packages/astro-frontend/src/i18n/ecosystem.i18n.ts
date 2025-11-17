import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

export const ecosystem = {
  it: {
    title: "Che cos'è l'interoperabilità",
    subtitle:
      "L’interoperabilità della Pubblica Amministrazione è la capacità degli enti e dei loro sistemi di condividere dati in modo sicuro, standardizzato e trasparente. Nel contesto italiano, questo sistema è abilitato dalla Piattaforma Digitale Nazionale Dati (PDND) e da un ecosistema di strumenti a supporto.",

    "ecosystem.characteristic_1.label": "Principio del “Once only”",
    "ecosystem.characteristic_1.description":
      "Le persone non devono più fornire informazioni già comunicate in precedenza alla Pubblica Amministrazione.",

    "ecosystem.characteristic_2.label": "Servizi più semplici ed efficienti",
    "ecosystem.characteristic_2.description":
      "Le amministrazioni semplificano i processi riducendo la burocrazia e rendendo i servizi più efficienti.",

    "ecosystem.characteristic_3.label": "Dati certificati alla fonte",
    "ecosystem.characteristic_3.description":
      "Le amministrazioni garantiscono la qualità dei dati grazie alla digitalizzazione delle banche dati e all’aggiornamento in tempo reale.",

    "ecosystem.characteristic_4.label": "Sicurezza nello scambio dei dati",
    "ecosystem.characteristic_4.description":
      "La PDND autorizza lo scambio dei dati in modo sicuro e nel rispetto della titolarità.",

    "access_points_section.title": "Strumenti per l’interoperabilità",
    "access_points_section.subtitle":
      "Per realizzare l’interoperabilità, le amministrazioni si connettono a una rete di strumenti, portali e risorse digitali che supportano lo scambio dei dati. Scopri i principali punti di accesso che rendono possibile l'integrazione.",

    "access_points_section.what_is_it_for": "A cosa serve",

    "access_points_section.access_point_1.title": "PDND Interoperabilità",
    "access_points_section.access_point_1.subtitle":
      "Piattaforma per lo scambio sicuro di dati tra enti.",
    "access_points_section.access_point_1.description":
      "Offre un'infrastruttura unica che consente alle amministrazioni di connettersi tramite API e condividere informazioni in modo standardizzato e sicuro.",

    "access_points_section.access_point_2.title": "Interoperable Europe",
    "access_points_section.access_point_2.subtitle":
      "Insieme di regole e strumenti per l'interoperabilità europea",
    "access_points_section.access_point_2.description":
      "Favorisce la cooperazione transfrontaliera e garantisce che i servizi digitali pubblici dialoghino a livello europeo.",

    "access_points_section.access_point_3.title": "schema.gov.it",
    "access_points_section.access_point_3.subtitle":
      "Catalogo per l’interoperabilità semantica dei dati.",
    "access_points_section.access_point_3.description":
      "Permette di descrivere i dati in modo uniforme in modo che siano facilmente compresi e scambiati tra le diverse amministrazioni.",

    "access_points_section.access_point_4.title": "dati.gov.it",
    "access_points_section.access_point_4.subtitle":
      "Catalogo dei dataset aperti delle Pubbliche Amministrazioni.",
    "access_points_section.access_point_4.description":
      "Promuove la trasparenza e facilita il riuso dei dati aperti da parte di cittadini, ricercatori, imprese e istituzioni.",

    "access_points_section.actions.go_to_site": "Vai al sito",

    "interoperabily_types.title": "I livelli di interoperabilità",
    "interoperabily_types.subtitle_the": "L'",
    "interoperabily_types.subtitle_link": "European interoperability framework",
    "interoperabily_types.subtitle":
      "definisce 4 tipi di interoperabilità che insieme concorrono alla sua attuazione. Queste sono le dimensioni da considerare nei paesi europei per progettare e valutare i servizi pubblici digitali.",

    "interoperabily_types.type_1.label": "Interoperabilità tecnica",
    "interoperabily_types.type_1.description":
      "È la capacità di due sistemi informatici di connettersi e scambiarsi dati utilizzando protocolli e standard tecnici comuni.",

    "interoperabily_types.type_2.label": "Interoperabilità organizzativa",
    "interoperabily_types.type_2.description":
      "È l'allineamento dei processi operativi e delle responsabilità tra diverse organizzazioni per collaborare efficacemente.",

    "interoperabily_types.type_3.label": "Interoperabilità semantica",
    "interoperabily_types.type_3.description":
      "È la capacità dei sistemi di comprendere il significato dei dati che si scambiano, non solo di trasferirli.",

    "interoperabily_types.type_4.label": "Interoperabilità legale",
    "interoperabily_types.type_4.description":
      "È l'armonizzazione delle norme e dei regolamenti che governano lo scambio di informazioni tra organizzazioni.",

    "ecosystem_legal_references.title": "Riferimenti normativi",
    "ecosystem_legal_references.subtitle":
      "Consulta le linee guida e le normative che regolano l'interoperabilità nel contesto della PDND, in coerenza con il Codice dell'Amministrazione Digitale (CAD) stabilite da AgID (Agenzia per l'Italia Digitale).",
    "ecosystem_legal_references.button": "Consulta la normativa",

    "suggestion_section.left_card.title":
      "Scoprire le risorse per sviluppatori",
    "suggestion_section.left_card.description":
      "Visita Developers Italia per accedere a strumenti e risorse per sviluppare servizi pubblici digitali.",
    "suggestion_section.left_card.button_label": "Vai a Developers Italia",
    "suggestion_section.right_card.title": "Trovare le risposte che cerchi",
    "suggestion_section.right_card.description":
      "Se hai qualche dubbio, consulta le domande frequenti per trovare rapidamente le risposte.",
    "suggestion_section.right_card.button_label":
      "Consulta le domande frequenti",
  },
  en: {
    title: "What is interoperability",
    subtitle:
      "The interoperability of the Public Administration is the ability of organizations and their systems to share data securely, in a standardised and transparent way. In the Italian context, this system is enabled by the National Digital Data Platform (PDND) and supported by an ecosystem of complementary tools.",

    "ecosystem.characteristic_1.label": "“Once only” principle",
    "ecosystem.characteristic_1.description":
      "People no longer need to provide information already shared with the Public Administration.",

    "ecosystem.characteristic_2.label": "Simpler, more efficient services",
    "ecosystem.characteristic_2.description":
      "Organizations simplify processes by reducing bureaucracy and making services more efficient.",

    "ecosystem.characteristic_3.label": "Source-certified data",
    "ecosystem.characteristic_3.description":
      "Guaranteed data quality through digitalised databases and real-time updates.",

    "ecosystem.characteristic_4.label": "Data exchange security",
    "ecosystem.characteristic_4.description":
      "The PDND authorises data exchanges in a secure, standardised manner, ensuring data ownership.",

    "access_points_section.title": "Resources for Interoperability",
    "access_points_section.subtitle":
      "To achieve interoperability, organizations connect to a network of tools, portals and digital resources that enable data exchange. Discover the main access points that make system integration possible.",

    "access_points_section.what_is_it_for": "Purpose",

    "access_points_section.access_point_1.title": "PDND Interoperability",
    "access_points_section.access_point_1.subtitle":
      "A platform for the secure exchange of data between organizations.",
    "access_points_section.access_point_1.description":
      "It provides a single infrastructure that enables public administrations to connect through APIs and share information in a standardised and secure way.",

    "access_points_section.access_point_2.title": "Interoperable Europe",
    "access_points_section.access_point_2.subtitle":
      "Set of rules and tools for European interoperability.",
    "access_points_section.access_point_2.description":
      "It promotes cross-border cooperation and ensures that public digital services can interoperate across Europe.",

    "access_points_section.access_point_3.title": "schema.gov.it",
    "access_points_section.access_point_3.subtitle":
      "Supporting the semantic interoperability of public data",
    "access_points_section.access_point_3.description":
      "It enables data to be described in a standardised and consistent way, making them easier to understand and share across organizations.",

    "access_points_section.access_point_4.title": "dati.gov.it",
    "access_points_section.access_point_4.subtitle":
      "Catalogue of open datasets from Italian Public Administration.",
    "access_points_section.access_point_4.description":
      "It promotes transparency and encourages the reuse of open data by citizens, researchers, businesses and institutions.",

    "access_points_section.actions.go_to_site": "Visit the website",

    "interoperabily_types.title": "Levels of Interoperability",
    "interoperabily_types.subtitle_the": "The ",
    "interoperabily_types.subtitle_link":
      "European Interoperability Framework (EIF)",
    "interoperabily_types.subtitle":
      "defines four types of interoperability that together contribute to its implementation. These are the dimensions to be considered by European countries when designing and assessing digital public services.",

    "interoperabily_types.type_1.label": "Technical interoperability",
    "interoperabily_types.type_1.description":
      "It is the ability of two IT systems to connect and exchange data using common technical standards and protocols.",

    "interoperabily_types.type_2.label": "Organizational interoperability",
    "interoperabily_types.type_2.description":
      "It is the alignment of operational processes and responsibilities among different organizations in order to collaborate effectively.",

    "interoperabily_types.type_3.label": "Semantic interoperability",
    "interoperabily_types.type_3.description":
      "It is the ability of systems to understand the meaning of the data they exchange, not just to transfer it.",

    "interoperabily_types.type_4.label": "Legal interoperability",
    "interoperabily_types.type_4.description":
      "It is the harmonisation of laws and regulations governing the exchange of information between organizations.",

    "ecosystem_legal_references.title": "Legal and Regulatory Framework",
    "ecosystem_legal_references.subtitle":
      "Discover the legal and regulatory framework that defines interoperability within the PDND, in line with the Digital Administration Code (CAD) established by AgID - the Agency for Digital Italy.",
    "ecosystem_legal_references.button": "Read the regulations",

    "suggestion_section.left_card.title": "Discover developer resources",
    "suggestion_section.left_card.description":
      "Visit Developers Italia to access tools and resources for developing digital public services.",
    "suggestion_section.left_card.button_label": "Go to Developers Italia",
    "suggestion_section.right_card.title": "Find the answers you need",
    "suggestion_section.right_card.description":
      "If you have any questions, check the frequently asked questions to quickly find the answers.",
    "suggestion_section.right_card.button_label":
      "View frequently asked questions",
  },
} as const satisfies TranslationsMap;

export const useEcosystemTranslations = buildUseTranslations(ecosystem);
