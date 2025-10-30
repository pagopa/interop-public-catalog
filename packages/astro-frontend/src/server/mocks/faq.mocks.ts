import type { StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import type { FaqContent } from '../types/faq.types'
import { match } from 'ts-pattern'
import { child } from 'winston'

const SITE_URL =
  /* isDevEnvironment() ? 'https://api-gov.dev.interop.pagopa.it' : */ 'https://api.gov.it'

export const faqContentMockedIt: StrapiEntity<FaqContent> = {
  data: {
    id: 3,
    documentId: 'lwn85a1l4ph7afnobkylv2dl',
    createdAt: '2025-10-20T08:55:18.701Z',
    updatedAt: '2025-10-20T09:05:53.792Z',
    publishedAt: '2025-10-20T09:05:53.801Z',
    locale: 'it',
    title: 'Domande frequenti',
    description: 'Consulta le domande frequenti relative al Catalogo delle API',
    faqSection: [
      {
        id: 1,
        sectionTitle: 'Informazioni generali',
        faqList: [
          {
            id: 11,
            question: 'Cosa sono le API?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
          {
            id: 12,
            question: 'Come viene garantita la sicurezza dei dati?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
          {
            id: 13,
            question: "Quali sono i vantaggi dell'interoperabilità?",
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        sectionTitle: 'Catalogo e accesso ai dati tramite PDND',
        faqList: [
          {
            id: 14,
            question: 'Chi può accedere ai dati?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            question: 'Come faccio a sapere quali API può usare il mio ente?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
          {
            id: 16,
            question: 'Lorem ipsum',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, ',
                  },
                  {
                    type: 'text',
                    text: 'consectetur adipiscing elit. Ut sit amet scelerisque',
                    underline: true,
                  },
                  {
                    type: 'text',
                    text: ' neque, eget aliquet mi. Aenean non ultricies tellus.',
                  },
                  {
                    type: 'text',
                    text: ' Praesent consequat risus eu quam',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' luctus malesuada. Mauris sed nisi nisl. Etiam dapibus, ex vitae sagittis sodales, ipsum justo accumsan magna, nec ',
                  },
                  {
                    type: 'link',
                    url: 'https://google.com',
                    children: [
                      {
                        type: 'text',
                        text: 'fermentum',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' erat lacus in mi. Aenean lectus justo, accumsan vel pulvinar at, pharetra ut tellus. Nam ut nisl vel nibh placerat maximus.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

export const faqContentMockedEn: StrapiEntity<FaqContent> = {
  data: {
    id: 3,
    documentId: 'lwn85a1l4ph7afnobkylv2dl',
    createdAt: '2025-10-20T08:55:18.701Z',
    updatedAt: '2025-10-20T09:05:53.792Z',
    publishedAt: '2025-10-20T09:05:53.801Z',
    locale: 'en',
    title: 'Frequently Asked Questions',
    description: 'Consult the frequently asked questions about the API Catalogue',
    faqSection: [
      {
        id: 1,
        sectionTitle: 'General information',
        faqList: [
          {
            id: 11,
            question: 'What are APIs?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: ' APIs (Application Programming Interfaces) are digital interfaces that allow IT systems to communicate with each other automatically.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The APIs published in the National Data Platform (PDND) catalogue enable public bodies to securely and easily use data made available by other entities, integrating them into their own systems and digital services.',
                  },
                ],
              },
            ],
          },
          {
            id: 12,
            question: 'What is the difference between an API and an e-service?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Sometimes, you may come across the term ',
                  },
                  {
                    type: 'text',
                    text: 'e-service',
                    italic: true,
                  },
                  {
                    type: 'text',
                    text: ' instead of API. An e-service refers to the digital service made available by a provider entity in the PDND (National Data Platform) API Catalogue, while an API (Application Programming Interface) is the technical specification that defines how to interact with that service.',
                  },
                ],
              },
            ],
          },
          {
            id: 13,
            question: 'How can I use an API?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'You can take inspiration from these ',
                  },
                  {
                    type: 'link',
                    url: `${SITE_URL}/en/good-practices`,
                    children: [
                      {
                        type: 'text',
                        text: 'use cases',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' to discover how your organisation can integrate APIs into its processes.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Once you have identified an API (or e-service), you can request access through the National Data Platform (PDND).',
                  },
                ],
              },
            ],
          },
          {
            id: 14,
            question: 'How is data security ensured?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The National Data Platform (PDND) does not process or store the information exchanged. Public bodies communicate directly through a secure channel, while PDND provides the tools needed to authenticate and authorise API providers and consumers to access the information.',
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            question: 'What are the benefits of interoperability?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Through interoperability, public administrations can exchange data securely and in a standardised way, reducing processing times and costs, improving the quality of the services offered, and simplifying the overall experience for citizens and businesses. ',
                  },
                  {
                    type: 'link',
                    url: `${SITE_URL}/en/ecosystem`,
                    children: [
                      {
                        type: 'text',
                        text: 'Visit the dedicated page',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' to learn more',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        sectionTitle: 'Catalogue and Data Access',
        faqList: [
          {
            id: 21,
            question: 'Who can access the data listed in the catalogue?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The data are available only to PDND participants that meet the access requirements defined by each provider, in compliance with applicable regulations.',
                  },
                ],
              },
            ],
          },
          {
            id: 22,
            question: 'How can I find out which APIs my organisation can use?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'By using the “Filter by consumer” function available in the catalogue, you can quickly identify the APIs that your organisation is eligible to use.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'In addition, each API’s information sheet provides detailed information about all access requirements.',
                  },
                ],
              },
            ],
          },
          {
            id: 23,
            question:
              'My organisation would like to access an API but does not meet the required criteria. How can it proceed?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'If you identify an API of interest in the catalogue that is not currently accessible to your organisation, you can contact the provider, specifying the administrative purpose that justifies the request. The provider may then add your organisation’s attribute, enabling you to access the API.',
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            question: 'What if I can’t find the API I need?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The API catalogue is constantly evolving. If you cannot find the API or the data you need, you can report it to the entity that owns the data, which may consider making it available in the future through a new API.',
                  },
                ],
              },
            ],
          },
          {
            id: 25,
            question: 'Can the catalogue content be downloaded?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Yes. The list of e-services is available on ',
                  },
                  {
                    type: 'link',
                    url: 'https://www.dati.gov.it/view-dataset/dataset?id=0dfbeb46-736d-4af3-841c-9593d8f6c434',
                    children: [
                      {
                        type: 'text',
                        text: 'dati.gov.it',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: '.',
                  },
                ],
              },
            ],
          },
          {
            id: 26,
            question: 'What is the Data Semantics Catalogue (Schema)?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'link',
                    url: 'https://schema.gov.it',
                    children: [
                      {
                        type: 'text',
                        text: 'Schema',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' (also known as the National Data Catalog, NDC) is the national catalogue of data semantics. It collects and organises semantic resources of national relevance, including data schemas, ontologies, and controlled vocabularies, making them easily accessible to anyone developing APIs (Application Programming Interfaces).',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'By using the shared models published on Schema, it is possible to enhance the semantic interoperability of exchanged data, ensuring that the meaning of each piece of information is correctly understood by the recipient.',
                  },
                ],
              },
            ],
          },
          {
            id: 27,
            question: 'What is the Open Data Catalogue (Dati.gov.it)?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'link',
                    url: 'https://www.dati.gov.it',
                    children: [
                      {
                        type: 'text',
                        text: 'Dati.gov.it',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' is the national portal that hosts the catalogue of metadata relating to open data released by public administrations.',
                  },
                  {
                    type: 'text',
                    text: 'It serves as both a search tool and an access point for datasets made available according to the ',
                  },
                  {
                    type: 'text',
                    text: 'open data',
                    italic: true,
                  },
                  {
                    type: 'text',
                    text: 'paradigm.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        sectionTitle: 'National Data Platform (PDND)',
        faqList: [
          {
            id: 31,
            question: 'What is PDND (National Data Platform)?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The National Data Platform (PDND) is the infrastructure that enables the secure and standardized exchange of data through APIs between public administrations.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'For more information, visit ',
                  },
                  {
                    type: 'link',
                    url: 'https://interop.pagopa.it',
                    children: [
                      {
                        type: 'text',
                        text: 'interop.pagopa.it',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: '.',
                  },
                ],
              },
            ],
          },
          {
            id: 32,
            question: 'How can I register with PDND?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Participation in the Platform is open to all entities entitled under the ',
                  },
                  {
                    type: 'text',
                    text: 'Digital Administration Code (CAD, Article 50-ter)',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: '.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'The process requires submitting the ',
                  },
                  {
                    type: 'text',
                    text: 'participation form',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ', signed by the entity’s legal representative. You can learn more by visiting the ',
                  },
                  {
                    type: 'link',
                    url: 'https://developer.pagopa.it/pdnd-interoperabilita/guides/PDND-Interoperability-Operating-Manual/v1.0/getting-started/funzionamento-generale',
                    children: [
                      {
                        type: 'text',
                        text: 'dedicated page',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: '.',
                  },
                ],
              },
            ],
          },
          {
            id: 33,
            question: 'How can I contact PDND support?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Both the Platform and the ',
                  },
                  {
                    type: 'link',
                    url: 'https://interop.pagopa.it',
                    children: [
                      {
                        type: 'text',
                        text: 'PDND website',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ' include a ',
                  },
                  {
                    type: 'text',
                    text: '"Support"',
                    bold: true,
                  },
                  {
                    type: 'text',
                    text: ' option, available in the upper-right corner, where you can open a ticket and request assistance.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'To report issues or provide feedback, you can also open an ',
                  },
                  {
                    type: 'link',
                    url: 'https://github.com/pagopa/pdnd-interop-frontend/issues',
                    children: [
                      {
                        type: 'text',
                        text: 'issue on Github',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 34,
            question: 'Can PDND usage data be consulted?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Yes. On the ',
                  },
                  {
                    type: 'link',
                    url: 'https://www.interop.pagopa.it/numeri',
                    children: [
                      {
                        type: 'text',
                        text: 'PDND in numbers page',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ', you can find data relating to participants, the catalogue, and the overall usage of the Platform.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        sectionTitle: 'Information for Developers',
        faqList: [
          {
            id: 41,
            question: 'I’m a developer. What resources are available for development?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Visit Developers Italia (',
                  },
                  {
                    type: 'link',
                    url: 'https://developers.italia.it/it/interoperabilita',
                    children: [
                      {
                        type: 'text',
                        text: 'https://developers.italia.it/it/interoperabilita',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: ') to discover the tools and references available for the interoperability ecosystem. For manuals and resources supporting integrations with PDND, you can visit ',
                  },
                  {
                    type: 'link',
                    url: 'https://developer.pagopa.it/pdnd-interoperabilita/guides/PDND-Interoperability-Operating-Manual',
                    children: [
                      {
                        type: 'text',
                        text: 'the operational manual',
                      },
                    ],
                  },
                  {
                    type: 'text',
                    text: '.',
                  },
                ],
              },
            ],
          },
          {
            id: 42,
            question: 'How can I contribute to the catalogue?',
            answer: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'You can contribute to the catalogue by registering and accessing the National Data Platform (PDND) to provide an e-service (API), in compliance with the security framework and the standards defined by the Interoperability Model (ModI).',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

export function getFAQContentMockByLocale(locale: SupportedLanguage): StrapiEntity<FaqContent> {
  return match(locale)
    .with('en', () => faqContentMockedEn)
    .with('it', () => faqContentMockedIt)
    .exhaustive()
}
