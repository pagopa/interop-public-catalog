import type { StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import type { FaqContent } from '../types/faq.types'
import { match } from 'ts-pattern'

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
        id: 3,
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
    locale: 'it',
    title: 'Domande frequenti',
    description: 'Consulta le domande frequenti relative al Catalogo delle API',
    faqSection: [
      {
        id: 3,
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

export function getFAQContentMockByLocale(locale: SupportedLanguage): StrapiEntity<FaqContent> {
  return match(locale)
    .with('en', () => faqContentMockedEn)
    .with('it', () => faqContentMockedIt)
    .exhaustive()
}
