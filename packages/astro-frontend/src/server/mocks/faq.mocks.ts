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
                    text: "o interfacce per la programmazione di applicazioni) sono ",
                  },
                  {
                    type: "text",
                    text: "interfacce digitali che permettono ai sistemi informatici di comunicare tra loro in modo automatizzato",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". Le API pubblicate nel catalogo della Piattaforma Digitale Nazionale Dati (PDND) permettono agli enti di utilizzare in modo semplice e sicuro i dati messi a disposizione da altri soggetti, integrandoli nei propri sistemi e servizi.",
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
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " al posto di API.",
                    bold: true,
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "L’e-service rappresenta il ",
                  },
                  {
                    type: "text",
                    text: "servizio digitale messo a disposizione da un Ente",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " erogatore sul Catalogo della API della PDND (Piattaforma Digitale Nazionale Dati), mentre l'API (Application Programming Interface) costituisce la specifica tecnica che descrive le modalità di interazione con tale servizio.",
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
                    text: "Le API possono essere ",
                  },
                  {
                    type: "text",
                    text: "utilizzate per semplificare processi e servizi",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " attraverso lo scambio di dati con altri Enti. Puoi lasciarti ispirare da questi ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/it/esempi-pratici`,
                    children: [
                      {
                        type: "text",
                        text: "esempi pratici",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " e scoprire come il tuo Ente può integrare le API nei suoi processi. Dopo aver individuato un API (e-service), puoi richiederne accesso tramite la Piattaforma Digitale Nazionale Dati (PDND).",
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
                    text: "La Piattaforma Digitale Nazionale Dati (PDND) ",
                  },
                  {
                    type: "text",
                    text: "non tratta né conserva le informazioni scambiate: gli enti dialogano direttamente su un canale sicuro",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", e la PDND fornisce gli strumenti per autenticare e autorizzare erogatori e fruitori di API ad accedere alle informazioni.",
                  },
                  {
                    type: "link",
                    url: `https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-normativi/normativa-e-approfondimenti`,
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
          {
            id: 15,
            question: "Quali sono i vantaggi dell'interoperabilità?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Attraverso l’interoperabilità, le pubbliche amministrazioni possono ",
                  },
                  {
                    type: "text",
                    text: "scambiarsi dati in modo sicuro e standardizzato",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", riducendo i tempi e i costi dei procedimenti, migliorando la qualità dei servizi offerti e semplificando l’esperienza per cittadini e imprese. ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/it/cos-e-l-interoperabilita`,
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
                    text: "I dati sono fruibili solo dagli ",
                  },
                  {
                    type: "text",
                    text: "aderenti alla PDND che possiedono i requisiti",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " di accesso indicati da ciascun erogatore, in conformità con le normative.",
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
                    text: "Attraverso la funzionalità “Filtra per fruitore” disponibile nel catalogo, puoi ",
                  },
                  {
                    type: "text",
                    text: "identificare rapidamente le API utilizzabili dal tuo ente",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". Inoltre, nella scheda di ciascuna API sono indicati in modo dettagliato tutti i requisiti di accesso.",
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
                    text: "Se individui un API di tuo interesse nel catalogo, ma non è accessibile al tuo ente, puoi ",
                  },
                  {
                    type: "text",
                    text: "scrivere all’erogatore, indicando la finalità amministrativa che lo abilita",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". L’erogatore potrà aggiungere l’attributo del tuo ente affinché tu possa accedere.",
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
                    text: "Il catalogo delle API è in continua evoluzione",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". Se non trovi l’API o il dato che ti serve puoi segnalarlo all’ente che ne è titolare, che potrà valutare l’opportunità di erogarlo in futuro tramite una nuova API.",
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
                    text: "Sì, l’elenco degli e-service è ",
                  },
                  {
                    type: "text",
                    text: "disponibile su ",
                    bold: true,
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
                    text: " (altrimenti conosciuto come National Data Catalog, NDC) è il ",
                  },
                  {
                    type: "text",
                    text: "catalogo nazionale della semantica dei dati",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " che raccoglie e organizza risorse semantiche di rilevanza nazionale, tra cui schemi dati, ontologie e vocabolari controllati, rendendole facilmente accessibili a tutti coloro che sviluppano API (interfacce per la programmazione di applicazioni). Grazie all’utilizzo di ",
                  },
                  {
                    type: "text",
                    text: "modelli condivisi su Schema è possibile migliorare l’interoperabilità semantica dei dati",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " scambiati, assicurando che il significato di ogni informazione trasferita sia compresa correttamente dal destinatario.",
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
                    text: " è il ",
                  },
                  {
                    type: "text",
                    text: "portale che ospita il catalogo nazionale dei metadati",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " relativi ai dati di tipo aperto rilasciati dalle pubbliche amministrazioni; costituisce lo ",
                  },
                  {
                    type: "text",
                    text: "strumento di ricerca e il punto di accesso ai dati",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " resi disponibili secondo il paradigma dell’.",
                  },
                  {
                    type: "text",
                    text: "open data",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: ".",
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
                    text: "La Piattaforma Digitale Nazionale Dati (PDND) è ",
                  },
                  {
                    type: "text",
                    text: "l’infrastruttura che consente lo scambio sicuro e standardizzato di dati",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " tramite API tra le pubbliche amministrazioni. Per maggiori informazioni, visita ",
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
                    text: "L’adesione alla Piattaforma è consentita a ",
                  },
                  {
                    type: "text",
                    text: "tutti i soggetti che ne hanno diritto secondo il CAD (il Codice per l’Amministrazione Digitale, art. 50-ter)",
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
                    text: " è disponibile ",
                  },
                  {
                    type: "text",
                    text: 'la voce "assistenza" in alto a destra',
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", per aprire un ticket e richiedere assistenza. Per segnalare problemi o dare feedback, puoi aprire una segnalazione su ",
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
                    text: "Sì, nella ",
                  },
                  {
                    type: "text",
                    text: "pagina dedicata a ",
                    bold: true,
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
                    text: " e ",
                  },
                  {
                    type: "text",
                    text: "scopri strumenti e riferimenti a disposizione per l’ecosistema interoperabilità",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". Per manuali e risorse di supporto alle integrazioni con PDND, puoi visitare ",
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
                    text: "È possibile contribuire al catalogo ",
                  },
                  {
                    type: "text",
                    text: "accreditandosi e accedendo alla Piattaforma Digitale Nazionale Dati ed erogando un e-service (API)",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", nel rispetto del perimetro di sicurezza e degli standard del modello di interoperabilità (ModI).",
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
                    text: "APIs (",
                  },
                  {
                    type: "text",
                    text: " Application Programming Interface",
                    italic: true,
                  },
                  {
                    type: "text",
                    text: ") are",
                  },
                  {
                    type: "text",
                    text: "digital interfaces that allow IT systems to communicate with each other automatically",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". The APIs published in the National Data Platform (PDND) catalogue enable organizations to securely and easily use data made available by other organizations, integrating them into their own systems and digital services.",
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
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " instead of API.",
                    bold: true,
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "An e-service refers to the ",
                  },
                  {
                    type: "text",
                    text: "digital service made available by a provider organization",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " in the PDND (National Data Platform) API Catalogue, while an API (Application Programming Interface) is the technical specification that defines how to interact with that service.",
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
                    text: "APIs can be used ",
                  },
                  {
                    type: "text",
                    text: "to simplify processes and services by enabling data exchange with other organizations",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". You can take inspiration from these ",
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
                    text: " to discover how your organization can integrate APIs into its processes. Once you have identified an API (or e-service), you can request access through the National Data Platform (PDND).",
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
                    text: "The National Data Platform (PDND) ",
                  },
                  {
                    type: "text",
                    text: "does not process or store the information exchanged. Organizations communicate directly through a secure channel",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", while PDND provides the tools needed to authenticate and authorise API providers and consumers to access the information. ",
                  },
                  {
                    type: "link",
                    url: `https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-normativi/normativa-e-approfondimenti`,
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
          {
            id: 15,
            question: "What are the benefits of interoperability?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Through interoperability, public administrations can ",
                  },
                  {
                    type: "text",
                    text: "exchange data securely and in a standardised way",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", reducing processing times and costs, improving the quality of the services offered, and simplifying the overall experience for citizens and businesses. ",
                  },
                  {
                    type: "link",
                    url: `${SITE_URL}/en/what-is-interoperability`,
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
                    text: "The data are available only to PDND ",
                  },
                  {
                    type: "text",
                    text: "participants that meet the access requirements defined by each provider",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", in compliance with applicable regulations.",
                  },
                ],
              },
            ],
          },
          {
            id: 22,
            question: "How can I find out which APIs my organization can use?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "By using the “Filter by consumer” function available in the catalogue, you can ",
                  },
                  {
                    type: "text",
                    text: "quickly identify the APIs that your organization is eligible to use",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". In addition, each API’s information sheet provides detailed information about all access requirements.",
                  },
                ],
              },
            ],
          },
          {
            id: 23,
            question:
              "My organization would like to access an API but does not meet the required criteria. How can it proceed?",
            answer: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "If you identify an API of interest in the catalogue that is not currently accessible to your organization, ",
                  },
                  {
                    type: "text",
                    text: "you can contact the provider, specifying the administrative purpose that justifies the request",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". The provider may then add your organization’s attribute, enabling you to access the API.",
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
                    text: "The API catalogue is constantly evolving",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". If you cannot find the API or the data you need, you can report it to the organization that owns the data, which may consider making it available in the future through a new API.",
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
                    text: "Yes. The list of e-services is ",
                  },
                  {
                    type: "text",
                    text: "available on ",
                    bold: true,
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
                    text: " (also known as the National Data Catalog, NDC) is the ",
                  },
                  {
                    type: "text",
                    text: "national catalogue of data semantics. It collects and organises semantic resources of national relevance",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", including data schemas, ontologies, and controlled vocabularies, making them easily accessible to anyone developing APIs (Application Programming Interfaces). By using the shared models published on Schema, ",
                  },
                  {
                    type: "text",
                    text: "it is possible to enhance the semantic interoperability of exchanged data",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", ensuring that the meaning of each piece of information is correctly understood by the recipient.",
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
                    text: " is the ",
                  },
                  {
                    type: "text",
                    text: "national portal that hosts the catalogue of metadata",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " relating to open data released by public administrations. It serves as both a search tool and an access point for datasets made available according to the ",
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
                    text: "The National Data Platform (PDND) is the ",
                  },
                  {
                    type: "text",
                    text: "infrastructure that enables the secure and standardized exchange of data",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: " through APIs between public administrations. For more information, visit ",
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
                    text: "Participation in the Platform is ",
                  },
                  {
                    type: "text",
                    text: "open to all organizations entitled under the Digital Administration Code (CAD, Article 50-ter)",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". The process requires submitting the ",
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
                    text: '"Support" option, available in the upper-right corner',
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", where you can open a ticket and request assistance. To report issues or provide feedback, you can also open an issue on ",
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
                    text: ", ",
                  },
                  {
                    type: "text",
                    text: "you can find data relating to participants",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", the catalogue, and the overall usage of the Platform.",
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
                    text: " to discover the tools and references available for the interoperability ecosystem",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ". For manuals and resources supporting integrations with PDND, you can visit ",
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
                    text: "You can contribute to the catalogue ",
                  },
                  {
                    type: "text",
                    text: "by registering and accessing the National Data Platform (PDND) to provide an e-service (API)",
                    bold: true,
                  },
                  {
                    type: "text",
                    text: ", in compliance with the security framework and the standards defined by the Interoperability Model (ModI).",
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
