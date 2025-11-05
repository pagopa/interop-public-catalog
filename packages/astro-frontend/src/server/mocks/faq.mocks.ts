import type { StrapiEntity } from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import type { FaqContent } from "../types/faq.types";
import { match } from "ts-pattern";

const SITE_URL = "https://api.gov.it";

export const faqContentMockedIt: StrapiEntity<FaqContent> = {
  data: {
    id: 3,
    documentId: "lwn85a1l4ph7afnobkylv2dl",
    createdAt: "2025-10-20T08:55:18.701Z",
    updatedAt: "2025-10-20T09:05:53.792Z",
    publishedAt: "2025-10-20T09:05:53.801Z",
    locale: "it",
    title: "Domande frequenti",
    description: "Consulta le domande frequenti relative al Catalogo delle API",
    faqSection: [
      {
        id: 1,
        sectionTitle: "Informazioni generali",
        faqList: [
          {
            id: 11,
            question: "Cosa sono le API?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Le API (",
                  },
                  {
                    type: "text",
                    text: " Application Programming Interface",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: "o interfacce per la programmazione di applicazioni) sono interfacce digitali che permettono ai sistemi informatici di comunicare tra loro in modo automatizzato. Le API pubblicate nel catalogo della Piattaforma Digitale Nazionale Dati (PDND) permettono agli enti di utilizzare in modo semplice e sicuro i dati messi a disposizione da altri soggetti, integrandoli nei propri sistemi e servizi.",
                  },
                ],
              },
            ],
          },
          {
            id: 12,
            question: "Qual è la differenza tra API ed e-service?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Talvolta, potrai trovare il termine ",
                  },
                  {
                    type: "text",
                    text: "e-service",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "L’e-service rappresenta il servizio digitale messo a disposizione da un Ente erogatore sul Catalogo della API della PDND (Piattaforma Digitale Nazionale Dati), mentre l'API (Application Programming Interface) costituisce la specifica tecnica che descrive le modalità di interazione con tale servizio.",
                  },
                ],
              },
            ],
          },
          {
            id: 13,
            question: "Come posso utilizzare un’API?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Le API possono essere utilizzate per semplificare processi e servizi attraverso lo scambio di dati con altri Enti. Puoi lasciarti ispirare da questi ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/it/buone-pratiche`,
                    children: [
                      {
                        type: "text",
                        text: "esempi pratici",
                      },
                    ],
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Dopo aver individuato un API (e-service), puoi richiederne accesso tramite la Piattaforma Digitale Nazionale Dati (PDND).",
                  },
                ],
              },
            ],
          },
          {
            id: 14,
            question: "Come viene garantita la sicurezza dei dati?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "La Piattaforma Digitale Nazionale Dati (PDND) non tratta né conserva le informazioni scambiate: gli enti dialogano direttamente su un canale sicuro, e la PDND fornisce gli strumenti per autenticare e autorizzare erogatori e fruitori di API ad accedere alle informazioni.",
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            question: "Quali sono i vantaggi dell'interoperabilità?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Attraverso l’interoperabilità, le pubbliche amministrazioni possono scambiarsi dati in modo sicuro e standardizzato, riducendo i tempi e i costi dei procedimenti, migliorando la qualità dei servizi offerti e semplificando l’esperienza per cittadini e imprese.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "link",
                    url: `${SITE_URL}/it/ecosistema`,
                    children: [
                      {
                        type: "text",
                        text: "Visita la pagina dedicata",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " per approfondire.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        sectionTitle: "Catalogo e accesso ai dati",
        faqList: [
          {
            id: 21,
            question: "Chi può accedere ai dati elencati nel catalogo?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "I dati sono fruibili solo dagli aderenti alla PDND che possiedono i requisiti di accesso indicati da ciascun erogatore, in conformità con le normative.",
                  },
                ],
              },
            ],
          },
          {
            id: 22,
            question: "Come faccio a sapere quali API può usare il mio ente?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Attraverso la funzionalità “Filtra per fruitore” disponibile nel catalogo, puoi identificare rapidamente le API utilizzabili dal tuo ente. Inoltre, nella scheda di ciascuna API sono indicati in modo dettagliato tutti i requisiti di accesso.",
                  },
                ],
              },
            ],
          },
          {
            id: 23,
            question:
              "II mio ente vorrebbe accedere a un API, ma non ha i requisiti richiesti, come può procedere?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Se individui un API di tuo interesse nel catalogo, ma non è accessibile al tuo ente, puoi scrivere all’erogatore, indicando la finalità amministrativa che lo abilita. L’erogatore potrà aggiungere l’attributo del tuo ente affinché tu possa accedere.",
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            question: "Se non trovo l’API che mi serve?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Il catalogo delle API è in continua evoluzione. Se non trovi l’API o il dato che ti serve puoi segnalarlo all’ente che ne è titolare, che potrà valutare l’opportunità di erogarlo in futuro tramite una nuova API.",
                  },
                ],
              },
            ],
          },
          {
            id: 25,
            question: "Si può scaricare il contenuto del catalogo?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Sì, l’elenco degli e-service è disponibile su ",
                  },
                  {
                    type: "link",
                    url: "https://www.dati.gov.it/view-dataset/dataset?id=0dfbeb46-736d-4af3-841c-9593d8f6c434",
                    children: [
                      {
                        type: "text",
                        text: "dati.gov.it",
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 26,
            question:
              "Che cos’è il catalogo della semantica dei dati (Schema)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "link",
                    url: "https://schema.gov.it",
                    children: [
                      {
                        type: "text",
                        text: "Schema",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " (altrimenti conosciuto come National Data Catalog, NDC) è il catalogo nazionale della semantica dei dati che raccoglie e organizza risorse semantiche di rilevanza nazionale, tra cui schemi dati, ontologie e vocabolari controllati, rendendole facilmente accessibili a tutti coloro che sviluppano API (interfacce per la programmazione di applicazioni).",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Grazie all’utilizzo di modelli condivisi su Schema è possibile migliorare l’interoperabilità semantica dei dati scambiati, assicurando che il significato di ogni informazione trasferita sia compresa correttamente dal destinatario.",
                  },
                ],
              },
            ],
          },
          {
            id: 27,
            question: "Che cos’è catalogo dei dati aperti (Dati.gov.it)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "link",
                    url: "https://www.dati.gov.it",
                    children: [
                      {
                        type: "text",
                        text: "Dati.gov.it",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " è il portale che ospita il catalogo nazionale dei metadati relativi ai dati di tipo aperto rilasciati dalle pubbliche amministrazioni; costituisce lo strumento di ricerca e il punto di accesso ai dati resi disponibili secondo il paradigma dell’open data.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        sectionTitle: "Piattaforma Digitale Nazionale Dati (PDND)",
        faqList: [
          {
            id: 31,
            question: "Che cos’è PDND (Piattaforma Digitale Nazionale Dati)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "La Piattaforma Digitale Nazionale Dati (PDND) è l’infrastruttura che consente lo scambio sicuro e standardizzato di dati tramite API tra le pubbliche amministrazioni.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Per maggiori informazioni, visita ",
                  },
                  {
                    type: "link",
                    url: "https://interop.pagopa.it",
                    children: [
                      {
                        type: "text",
                        text: "interop.pagopa.it",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 32,
            question: "Come posso aderire a PDND?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "L’adesione alla Piattaforma è consentita a tutti i soggetti che ne hanno diritto secondo il ",
                  },
                  {
                    type: "text",
                    text: "CAD (il Codice per l’Amministrazione Digitale, art. 50-ter)",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " e avviene attraverso l'invio del documento di adesione firmato dal legale rappresentante dell’ente. Puoi scoprire di più visitando la ",
                  },
                  {
                    type: "link",
                    url: "https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/per-iniziare/guida-alladesione",
                    children: [
                      {
                        type: "text",
                        text: "pagina dedicata",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 33,
            question: "Come posso contattare l’assistenza di PDND?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "In piattaforma e sul ",
                  },
                  {
                    type: "link",
                    url: "https://interop.pagopa.it",
                    children: [
                      {
                        type: "text",
                        text: "sito di PDND",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " è disponibile la voce ",
                  },
                  {
                    type: "text",
                    text: '"assistenza"',
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " in alto a destra, per aprire un ticket e richiedere assistenza. Per segnalare problemi o dare feedback, puoi aprire una segnalazione su ",
                  },
                  {
                    type: "link",
                    url: "https://github.com/pagopa/pdnd-interop-frontend/issues",
                    children: [
                      {
                        type: "text",
                        text: "Github",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 34,
            question: "Si possono consultare i dati di utilizzo di PDND?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Sì, nella pagina dedicata a ",
                  },
                  {
                    type: "link",
                    url: "https://www.interop.pagopa.it/numeri",
                    children: [
                      {
                        type: "text",
                        text: "i numeri della PDND",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " puoi trovare i dati relativi agli aderenti, al catalogo e all’utilizzo della piattaforma.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        sectionTitle: "Informazioni per lo sviluppo",
        faqList: [
          {
            id: 41,
            question:
              "Sono uno sviluppatore, quali sono le risorse a disposizione per lo sviluppo?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Visita ",
                  },
                  {
                    type: "link",
                    url: "https://developers.italia.it/it/interoperabilita",
                    children: [
                      {
                        type: "text",
                        text: "Developers Italia",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " e scopri strumenti e riferimenti a disposizione per l’ecosistema interoperabilità. Per manuali e risorse di supporto alle integrazioni con PDND, puoi visitare ",
                  },
                  {
                    type: "link",
                    url: "https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita",
                    children: [
                      {
                        type: "text",
                        text: "il manuale operativo",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 42,
            question: "Come posso contribuire al catalogo?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "È possibile contribuire al catalogo accreditandosi e accedendo alla Piattaforma Digitale Nazionale Dati ed erogando un e-service (API), nel rispetto del perimetro di sicurezza e degli standard del modello di interoperabilità (ModI).",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const faqContentMockedEn: StrapiEntity<FaqContent> = {
  data: {
    id: 3,
    documentId: "lwn85a1l4ph7afnobkylv2dl",
    createdAt: "2025-10-20T08:55:18.701Z",
    updatedAt: "2025-10-20T09:05:53.792Z",
    publishedAt: "2025-10-20T09:05:53.801Z",
    locale: "en",
    title: "Frequently Asked Questions",
    description:
      "Consult the frequently asked questions about the API Catalogue",
    faqSection: [
      {
        id: 1,
        sectionTitle: "General information",
        faqList: [
          {
            id: 11,
            question: "What are APIs?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: " APIs (Application Programming Interfaces) are digital interfaces that allow IT systems to communicate with each other automatically.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The APIs published in the National Data Platform (PDND) catalogue enable public bodies to securely and easily use data made available by other entities, integrating them into their own systems and digital services.",
                  },
                ],
              },
            ],
          },
          {
            id: 12,
            question: "What is the difference between an API and an e-service?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Sometimes, you may come across the term ",
                  },
                  {
                    type: "text",
                    text: "e-service",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: " instead of API. An e-service refers to the digital service made available by a provider entity in the PDND (National Data Platform) API Catalogue, while an API (Application Programming Interface) is the technical specification that defines how to interact with that service.",
                  },
                ],
              },
            ],
          },
          {
            id: 13,
            question: "How can I use an API?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "You can take inspiration from these ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/en/good-practices`,
                    children: [
                      {
                        type: "text",
                        text: "use cases",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " to discover how your organisation can integrate APIs into its processes.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Once you have identified an API (or e-service), you can request access through the National Data Platform (PDND).",
                  },
                ],
              },
            ],
          },
          {
            id: 14,
            question: "How is data security ensured?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The National Data Platform (PDND) does not process or store the information exchanged. Public bodies communicate directly through a secure channel, while PDND provides the tools needed to authenticate and authorise API providers and consumers to access the information.",
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            question: "What are the benefits of interoperability?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Through interoperability, public administrations can exchange data securely and in a standardised way, reducing processing times and costs, improving the quality of the services offered, and simplifying the overall experience for citizens and businesses. ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/en/ecosystem`,
                    children: [
                      {
                        type: "text",
                        text: "Visit the dedicated page",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " to learn more.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        sectionTitle: "Catalogue and Data Access",
        faqList: [
          {
            id: 21,
            question: "Who can access the data listed in the catalogue?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The data are available only to PDND participants that meet the access requirements defined by each provider, in compliance with applicable regulations.",
                  },
                ],
              },
            ],
          },
          {
            id: 22,
            question: "How can I find out which APIs my organisation can use?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "By using the “Filter by consumer” function available in the catalogue, you can quickly identify the APIs that your organisation is eligible to use.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "In addition, each API’s information sheet provides detailed information about all access requirements.",
                  },
                ],
              },
            ],
          },
          {
            id: 23,
            question:
              "My organisation would like to access an API but does not meet the required criteria. How can it proceed?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "If you identify an API of interest in the catalogue that is not currently accessible to your organisation, you can contact the provider, specifying the administrative purpose that justifies the request. The provider may then add your organisation’s attribute, enabling you to access the API.",
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            question: "What if I can’t find the API I need?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The API catalogue is constantly evolving. If you cannot find the API or the data you need, you can report it to the entity that owns the data, which may consider making it available in the future through a new API.",
                  },
                ],
              },
            ],
          },
          {
            id: 25,
            question: "Can the catalogue content be downloaded?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Yes. The list of e-services is available on ",
                  },
                  {
                    type: "link",
                    url: "https://www.dati.gov.it/view-dataset/dataset?id=0dfbeb46-736d-4af3-841c-9593d8f6c434",
                    children: [
                      {
                        type: "text",
                        text: "dati.gov.it",
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 26,
            question: "What is the Data Semantics Catalogue (Schema)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "link",
                    url: "https://schema.gov.it",
                    children: [
                      {
                        type: "text",
                        text: "Schema",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " (also known as the National Data Catalog, NDC) is the national catalogue of data semantics. It collects and organises semantic resources of national relevance, including data schemas, ontologies, and controlled vocabularies, making them easily accessible to anyone developing APIs (Application Programming Interfaces).",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "By using the shared models published on Schema, it is possible to enhance the semantic interoperability of exchanged data, ensuring that the meaning of each piece of information is correctly understood by the recipient.",
                  },
                ],
              },
            ],
          },
          {
            id: 27,
            question: "What is the Open Data Catalogue (Dati.gov.it)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "link",
                    url: "https://www.dati.gov.it",
                    children: [
                      {
                        type: "text",
                        text: "Dati.gov.it",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " is the national portal that hosts the catalogue of metadata relating to open data released by public administrations.",
                  },
                  {
                    type: "text",
                    text: "It serves as both a search tool and an access point for datasets made available according to the ",
                  },
                  {
                    type: "text",
                    text: "open data",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: " paradigm.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        sectionTitle: "National Data Platform (PDND)",
        faqList: [
          {
            id: 31,
            question: "What is PDND (National Data Platform)?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The National Data Platform (PDND) is the infrastructure that enables the secure and standardized exchange of data through APIs between public administrations.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "For more information, visit ",
                  },
                  {
                    type: "link",
                    url: "https://interop.pagopa.it",
                    children: [
                      {
                        type: "text",
                        text: "interop.pagopa.it",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 32,
            question: "How can I register with PDND?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Participation in the Platform is open to all entities entitled under the ",
                  },
                  {
                    type: "text",
                    text: "Digital Administration Code (CAD, Article 50-ter)",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The process requires submitting the ",
                  },
                  {
                    type: "text",
                    text: "participation form",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", signed by the entity’s legal representative. You can learn more by visiting the ",
                  },
                  {
                    type: "link",
                    url: "https://developer.pagopa.it/pdnd-interoperabilita/guides/PDND-Interoperability-Operating-Manual/v1.0/getting-started/funzionamento-generale",
                    children: [
                      {
                        type: "text",
                        text: "dedicated page",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 33,
            question: "How can I contact PDND support?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Both the Platform and the ",
                  },
                  {
                    type: "link",
                    url: "https://interop.pagopa.it",
                    children: [
                      {
                        type: "text",
                        text: "PDND website",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " include a ",
                  },
                  {
                    type: "text",
                    text: '"Support"',
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " option, available in the upper-right corner, where you can open a ticket and request assistance.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "To report issues or provide feedback, you can also open an ",
                  },
                  {
                    type: "link",
                    url: "https://github.com/pagopa/pdnd-interop-frontend/issues",
                    children: [
                      {
                        type: "text",
                        text: "issue on Github",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 34,
            question: "Can PDND usage data be consulted?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Yes. On the ",
                  },
                  {
                    type: "link",
                    url: "https://www.interop.pagopa.it/numeri",
                    children: [
                      {
                        type: "text",
                        text: "PDND in numbers page",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ", you can find data relating to participants, the catalogue, and the overall usage of the Platform.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        sectionTitle: "Information for Developers",
        faqList: [
          {
            id: 41,
            question:
              "I’m a developer. What resources are available for development?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Visit ",
                  },
                  {
                    type: "link",
                    url: "https://developers.italia.it/it/interoperabilita",
                    children: [
                      {
                        type: "text",
                        text: "Developers Italia",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " to discover the tools and references available for the interoperability ecosystem. For manuals and resources supporting integrations with PDND, you can visit ",
                  },
                  {
                    type: "link",
                    url: "https://developer.pagopa.it/pdnd-interoperabilita/guides/PDND-Interoperability-Operating-Manual",
                    children: [
                      {
                        type: "text",
                        text: "the operational manual",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: ".",
                  },
                ],
              },
            ],
          },
          {
            id: 42,
            question: "How can I contribute to the catalogue?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "You can contribute to the catalogue by registering and accessing the National Data Platform (PDND) to provide an e-service (API), in compliance with the security framework and the standards defined by the Interoperability Model (ModI).",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export function getFAQContentMockByLocale(
  locale: SupportedLanguage,
): StrapiEntity<FaqContent> {
  return match(locale)
    .with("en", () => faqContentMockedEn)
    .with("it", () => faqContentMockedIt)
    .exhaustive();
}
