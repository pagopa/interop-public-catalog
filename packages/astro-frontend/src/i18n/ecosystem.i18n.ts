import { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const ecosystem = {
  it: {
    title: 'Cos’è l’interoperabilità',
    subtitle:
      'Nel contesto della PDND (Piattaforma Digitale Nazionale Dati), l’interoperabilità è la capacità delle diverse pubbliche amministrazioni e dei loro sistemi informativi di scambiarsi dati e servizi digitali in modo sicuro, standardizzato e trasparente, così da evitare duplicazioni, semplificare i processi e migliorare l’erogazione di servizi ai cittadini e alle imprese.',

    'ecosystem.characteristic_1.label': 'Principio del “Once only”',
    'ecosystem.characteristic_1.description':
      'Le persone possono evitare di fornire informazioni già comunicate in precedenza alla PA.',

    'ecosystem.characteristic_2.label': 'Servizi più semplici ed efficienti',
    'ecosystem.characteristic_2.description':
      'Meno burocrazia complessiva, nuovi processi più efficienti e snelli.',

    'ecosystem.characteristic_3.label': 'Dati certificati alla fonte',
    'ecosystem.characteristic_3.description':
      "Qualità del dato grazie all'allineamento in tempo reale e alla digitalizzazione delle anagrafi.",

    'ecosystem.characteristic_4.label': 'Sicurezza nello scambio dei dati',
    'ecosystem.characteristic_4.description':
      'La PDND autorizza lo scambio di dati sicuro, nel rispetto della titolarità del dato.',

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
      "I riferimenti normativi offrono un quadro chiaro delle regole e degli standard da seguire per garantire una corretta integrazione dei servizi digitali. Consulta le linee guida e le normative che regolano l'interoperabilità nel contesto della PDND, in coerenza con il Codice dell'Amministrazione Digitale (CAD) stabilite da AgID (Agenzia per l'Italia Digitale). ",
    'ecosystem_legal_references.button': 'Consulta i riferimenti normativi',
  },
  en: {
    title: 'What is interoperability?',
    subtitle:
      'In the context of the PDND (National Digital Data Platform), interoperability is the ability of different public administrations and their information systems to exchange data and digital services in a secure, standardized, and transparent manner, thus avoiding duplication, simplifying processes, and improving the delivery of services to citizens and businesses.',

    'ecosystem.characteristic_1.label': 'Once only principle',
    'ecosystem.characteristic_1.description':
      'People can avoid providing information previously communicated to the public administration.',

    'ecosystem.characteristic_2.label': 'Simpler and more efficient services',
    'ecosystem.characteristic_2.description':
      'Less overall bureaucracy, new, more efficient and streamlined processes.',

    'ecosystem.characteristic_3.label': 'Data certified at the source',
    'ecosystem.characteristic_3.description':
      'Data quality thanks to real-time alignment and digitalization of registries.',

    'ecosystem.characteristic_4.label': 'Security in data exchange',
    'ecosystem.characteristic_4.description':
      'The PDND authorizes the secure exchange of data, respecting data ownership.',

    'access_points_section.title': 'Access Points',
    'access_points_section.subtitle':
      'The interoperability ecosystem is based on a network of tools, portals, and digital resources that support the exchange of data between public administrations. Discover the main access points that enable integration and collaboration.',

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

    'interoperabily_types.title': 'Levels of interoperability',
    'interoperabily_types.subtitle_link': 'The European Interoperability Framework',
    'interoperabily_types.subtitle':
      'defines 4 types of interoperability that together contribute to its implementation. These are the dimensions to be considered in European countries when designing and evaluating digital public services.',

    'interoperabily_types.type_1.label': 'Technical interoperability',
    'interoperabily_types.type_1.description':
      'It is the ability of two information systems to connect and exchange data using common protocols and technical standards.',

    'interoperabily_types.type_2.label': 'Organizational interoperability',
    'interoperabily_types.type_2.description':
      'It is the alignment of operational processes and responsibilities between different organizations to collaborate effectively.',

    'interoperabily_types.type_3.label': 'Semantic interoperability',
    'interoperabily_types.type_3.description':
      'It is the ability of systems to understand the meaning of the data they exchange, not just to transfer it.',

    'interoperabily_types.type_4.label': 'Legal interoperability',
    'interoperabily_types.type_4.description':
      'It is the harmonization of rules and regulations that govern the exchange of information between organizations.',

    'ecosystem_legal_references.title': 'Regulatory References',
    'ecosystem_legal_references.subtitle':
      'Regulatory references provide a clear framework of the rules and standards to be followed to ensure proper integration of digital services. Consult the guidelines and regulations governing interoperability within the PDND, in accordance with the Digital Administration Code (CAD) established by AgID (Agency for Digital Italy).',
    'ecosystem_legal_references.button': 'Read regulatory references',
  },
} as const satisfies TranslationsMap

export const useEcosystemTranslations = buildUseTranslations(ecosystem)
