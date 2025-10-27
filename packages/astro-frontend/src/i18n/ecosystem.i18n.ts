import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ecosystem = {
  it: {
    title: "Che cos'è l'interoperabilità",
    subtitle:
      'L’interoperabilità della Pubblica Amministrazione è la capacità degli enti e dei loro sistemi di condividere dati in modo sicuro, standardizzato e trasparente. Nel contesto italiano, questo sistema è abilitato dalla Piattaforma Digitale Nazionale Dati (PDND) e da un ecosistema di strumenti a supporto.',

    'ecosystem.characteristic_1.label': 'Principio del “Once only”',
    'ecosystem.characteristic_1.description':
      'Le persone non devono più fornire informazioni già comunicate in precedenza alla Pubblica Amministrazione.',

    'ecosystem.characteristic_2.label': 'Servizi più semplici ed efficienti',
    'ecosystem.characteristic_2.description':
      'Le amministrazioni semplificano i processi riducendo la burocrazia e rendendo i servizi più efficienti.',

    'ecosystem.characteristic_3.label': 'Dati certificati alla fonte',
    'ecosystem.characteristic_3.description':
      'Le amministrazioni garantiscono la qualità dei dati grazie alla digitalizzazione delle banche dati e all’aggiornamento in tempo reale.',

    'ecosystem.characteristic_4.label': 'Sicurezza nello scambio dei dati',
    'ecosystem.characteristic_4.description':
      'La PDND autorizza lo scambio dei dati in modo sicuro e nel rispetto della titolarità.',

    'access_points_section.title': 'Strumenti per l’interoperabilità',
    'access_points_section.subtitle':
      "Per realizzare l’interoperabilità, le amministrazioni si connettono a una rete di strumenti, portali e risorse digitali che supportano lo scambio dei dati. Scopri i principali punti di accesso che rendono possibile l'integrazione.",

    'access_points_section.what_is_it_for': 'A cosa serve',

    'access_points_section.access_point_1.title': 'PDND Interoperabilità',
    'access_points_section.access_point_1.subtitle':
      'Piattaforma per lo scambio sicuro di dati tra PA.',
    'access_points_section.access_point_1.description':
      "Offre un'infrastruttura unica che consente alle amministrazioni di connettersi tramite API e condividere informazioni in modo standardizzato e sicuro.",

    'access_points_section.access_point_2.title': 'Interoperable Europe',
    'access_points_section.access_point_2.subtitle':
      "Insieme di regole e strumenti per l'interoperabilità europea",
    'access_points_section.access_point_2.description':
      'Favorisce la cooperazione transfrontaliera e garantisce che i servizi digitali pubblici dialoghino a livello europeo.',

    'access_points_section.access_point_3.title': 'schema.gov.it',
    'access_points_section.access_point_3.subtitle':
      'Catalogo per l’interoperabilità semantica dei dati.',
    'access_points_section.access_point_3.description':
      'Permette di descrivere i dati in modo uniforme in modo che siano facilmente compresi e scambiati tra le diverse amministrazioni.',

    'access_points_section.access_point_4.title': 'dati.gov.it',
    'access_points_section.access_point_4.subtitle':
      'Catalogo dei dataset aperti delle Pubbliche Amministrazioni.',
    'access_points_section.access_point_4.description':
      'Promuove la trasparenza e facilita il riuso dei dati aperti da parte di cittadini, ricercatori, imprese e istituzioni.',

    'access_points_section.actions.go_to_site': 'Vai al sito',

    'interoperabily_types.title': 'I livelli di interoperabilità',
    'interoperabily_types.subtitle_link': "L'European interoperability framework",
    'interoperabily_types.subtitle':
      'definisce 4 tipi di interoperabilità che insieme concorrono alla sua attuazione. Queste sono le dimensioni da considerare nei paesi europei per progettare e valutare i servizi pubblici digitali.',

    'interoperabily_types.type_1.label': 'Interoperabilità tecnica',
    'interoperabily_types.type_1.description':
      'È la capacità di due sistemi informatici di connettersi e scambiarsi dati utilizzando protocolli e standard tecnici comuni.',

    'interoperabily_types.type_2.label': 'Interoperabilità organizzativa',
    'interoperabily_types.type_2.description':
      "È l'allineamento dei processi operativi e delle responsabilità tra diverse organizzazioni per collaborare efficacemente.",

    'interoperabily_types.type_3.label': 'Interoperabilità semantica',
    'interoperabily_types.type_3.description':
      'È la capacità dei sistemi di comprendere il significato dei dati che si scambiano, non solo di trasferirli.',

    'interoperabily_types.type_4.label': 'Interoperabilità legale',
    'interoperabily_types.type_4.description':
      "È l'armonizzazione delle norme e dei regolamenti che governano lo scambio di informazioni tra organizzazioni.",

    'ecosystem_legal_references.title': 'Riferimenti normativi',
    'ecosystem_legal_references.subtitle':
      "Consulta le linee guida e le normative che regolano l'interoperabilità nel contesto della PDND, in coerenza con il Codice dell'Amministrazione Digitale (CAD) stabilite da AgID (Agenzia per l'Italia Digitale).",
    'ecosystem_legal_references.button': 'Consulta la normativa',

    'suggestion_section.left_card.title': 'Scoprire le risorse per sviluppatori',
    'suggestion_section.left_card.description':
      'Visita Developers Italia per accedere a strumenti e risorse per sviluppare servizi pubblici digitali.',
    'suggestion_section.left_card.button_label': 'Vai a Developers Italia',
    'suggestion_section.right_card.title': 'Trovare le risposte che cerchi',
    'suggestion_section.right_card.description':
      'Se hai qualche dubbio, consulta le domande frequenti per trovare rapidamente le risposte.',
    'suggestion_section.right_card.button_label': 'Consulta le domande frequenti',
  },
  en: {
    title: 'What is interoperability',
    subtitle:
      'Interoperability in Public Administration is the ability of institutions and their systems to share data in a secure, standardised and transparent way. In Italy, this capability is enabled by the National Digital Data Platform (PDND) and by an ecosystem of supporting tools.',

    'ecosystem.characteristic_1.label': '“Once only” principle',
    'ecosystem.characteristic_1.description':
      'People no longer need to provide information that has already been shared with Public Administration.',

    'ecosystem.characteristic_2.label': 'Simpler, more efficient services',
    'ecosystem.characteristic_2.description':
      'Administrations streamline processes, cutting red tape and making services more efficient.',

    'ecosystem.characteristic_3.label': 'Source-certified data',
    'ecosystem.characteristic_3.description':
      'Administrations ensure data quality thanks to digitised databases that are updated in real time.',

    'ecosystem.characteristic_4.label': 'Secure data exchange',
    'ecosystem.characteristic_4.description':
      'PDND authorises data exchanges securely and with respect for data ownership.',

    'access_points_section.title': 'Tools for interoperability',
    'access_points_section.subtitle':
      'To achieve interoperability, administrations connect to a network of tools, portals and digital resources that support data exchange. Discover the main access points that make integration possible.',

    'access_points_section.what_is_it_for': 'Purpose',

    'access_points_section.access_point_1.title': 'PDND Interoperabilità',
    'access_points_section.access_point_1.subtitle':
      'Platform for secure data sharing between PAs.',
    'access_points_section.access_point_1.description':
      'Provides a single infrastructure that allows administrations to connect via APIs and exchange information in a standardised and secure manner.',

    'access_points_section.access_point_2.title': 'Interoperable Europe',
    'access_points_section.access_point_2.subtitle':
      'Set of rules and tools for European interoperability.',
    'access_points_section.access_point_2.description':
      'Promotes cross-border cooperation and ensures that public digital services can interact across Europe.',

    'access_points_section.access_point_3.title': 'schema.gov.it',
    'access_points_section.access_point_3.subtitle':
      'Catalogue for the semantic interoperability of data.',
    'access_points_section.access_point_3.description':
      'Allows data to be described consistently so it can be easily understood and exchanged among different administrations.',

    'access_points_section.access_point_4.title': 'dati.gov.it',
    'access_points_section.access_point_4.subtitle':
      'Catalogue of open datasets from Public Administrations.',
    'access_points_section.access_point_4.description':
      'Promotes transparency and encourages the reuse of open data by citizens, researchers, businesses and institutions.',

    'access_points_section.actions.go_to_site': 'Visit the site',

    'interoperabily_types.title': 'Interoperability levels',
    'interoperabily_types.subtitle_link': 'European interoperability framework',
    'interoperabily_types.subtitle':
      'defines four types of interoperability that together enable its implementation. These are the dimensions European countries should consider when designing and evaluating public digital services.',

    'interoperabily_types.type_1.label': 'Technical interoperability',
    'interoperabily_types.type_1.description':
      'The ability of two IT systems to connect and exchange data using common technical protocols and standards.',

    'interoperabily_types.type_2.label': 'Organisational interoperability',
    'interoperabily_types.type_2.description':
      'The alignment of operational processes and responsibilities across organisations so they can collaborate effectively.',

    'interoperabily_types.type_3.label': 'Semantic interoperability',
    'interoperabily_types.type_3.description':
      'The ability of systems to understand the meaning of the data they exchange, not merely to transfer it.',

    'interoperabily_types.type_4.label': 'Legal interoperability',
    'interoperabily_types.type_4.description':
      'The harmonisation of laws and regulations that govern information exchange between organisations.',

    'ecosystem_legal_references.title': 'Legal references',
    'ecosystem_legal_references.subtitle':
      'Browse the guidelines and regulations that govern interoperability in the PDND context, in line with the Digital Administration Code (CAD) established by AgID (Agenzia per l’Italia Digitale).',
    'ecosystem_legal_references.button': 'Read the regulations',

    'suggestion_section.left_card.title': 'Discover developer resources',
    'suggestion_section.left_card.description':
      'Visit Developers Italia to access tools and resources for developing digital public services.',
    'suggestion_section.left_card.button_label': 'Go to Developers Italia',
    'suggestion_section.right_card.title': 'Find the answers you need',
    'suggestion_section.right_card.description':
      'If you have any questions, check the frequently asked questions to quickly find the answers.',
    'suggestion_section.right_card.button_label': 'View frequently asked questions',
  },
} as const satisfies TranslationsMap

export const useEcosystemTranslations = buildUseTranslations(ecosystem)
