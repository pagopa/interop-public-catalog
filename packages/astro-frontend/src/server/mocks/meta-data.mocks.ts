import { match } from 'ts-pattern'
import type { RouteKey } from '../../config/routes'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import type { MetaDataType } from '../types/metaData.types'

export const getSeoMockData = (
  locale: SupportedLanguage,
  origin: string,
  routeKey: RouteKey | 'DEFAULT',
  pageParams?: Record<string, string>
): MetaDataType => {
  const generalMockData: MetaDataType = {
    title: 'Catalogo delle API della Pubblica Amministrazione',
    siteName: 'Catalogo delle API della Pubblica Amministrazione',
    locale: 'it',
    seo: {
      canonical: `${origin}/it`,
      metaTitle: 'Catalogo delle API della Pubblica Amministrazione',
      metaDescription:
        "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
      twitterImage: {
        url: `${origin}/img/twitter_main.jpg`,
      },
      opengraphImage: {
        url: `${origin}/img/opengraph_main.jpg`,
      },
    },
  }

  const catalogMockData: MetaDataType = {
    title: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/catalogo`,
      metaTitle: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
      metaDescription:
        "Trova subito l'API di cui hai bisogno, filtrando per parola chiave, erogatore o fruitore. Inizia ora l’integrazione del tuo ente per fornire servizi efficienti.",
    },
  }

  const ecosystemMockData: MetaDataType = {
    title: 'I vantaggi dell’interoperabilità dei dati tra Pubbliche Amministrazioni',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/ecosistema`,
      metaTitle: 'I vantaggi dell’interoperabilità dei dati tra Pubbliche Amministrazioni',
      metaDescription:
        'L’interoperabilità dei dati permette agli enti di perseguire il principio di once only. Consulta i vantaggi e gli strumenti a supporto.',
      twitterImage: {
        url: `${origin}/img/twitter_ecosistema.jpg`,
      },
      opengraphImage: {
        url: `${origin}/img/opengraph_ecosistema.jpg`,
      },
    },
  }

  const faqMockData: MetaDataType = {
    title: 'Domande frequenti sul Catalogo delle API',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/faq`,
      metaTitle: 'Domande frequenti sul Catalogo delle API',
      metaDescription:
        'Scopri tutte le risposte alle domande più frequenti sulle API, la piattaforma PDND, le risorse a disposizione e lo sviluppo.',
    },
  }

  const goodPracticesMockData: MetaDataType = {
    title: 'Esempi pratici di utilizzo delle API per il tuo ente',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/buone-pratiche`,
      metaTitle: 'Esempi pratici di utilizzo delle API per il tuo ente',
      metaDescription:
        'Lasciati ispirare da una raccolta di esempi significativi e semplici di come integrare servizi per il tuo ente e i cittadini.',
    },
  }

  const legalNotesMockData: MetaDataType = {
    title: 'Note legali | Catalogo delle API della PA',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/note-legali`,
      metaTitle: 'Note legali | Catalogo delle API della PA',
      metaDescription:
        "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
    },
  }

  const legislationMockData: MetaDataType = {
    title: 'Riferimenti normativi sulla PDND',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/normativa`,
      metaTitle: 'Riferimenti normativi sulla PDND',
      metaDescription:
        'Le API esposte sul catalogo sono supportate dalla Piattaforma Digitale Nazionale Dati (PDND). Consulta i riferimenti per approfondire il quadro normativo.',
    },
  }

  const privacyPolicyMockData: MetaDataType = {
    title: 'Informativa privacy | Catalogo delle API della PA',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/privacy-policy`,
      metaTitle: 'Informativa privacy | Catalogo delle API della PA',
      metaDescription:
        "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
    },
  }

  const genericErrorMockData: MetaDataType = {
    title: 'Errore | Catalogo delle API della PA',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/errore`,
      metaTitle: 'Errore | Catalogo delle API della PA',
      metaDescription:
        "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
    },
  }

  const notFoundErrorMockData: MetaDataType = {
    title: '404 Non trovato | Catalogo delle API della PA',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/404`,
      metaTitle: '404 Non trovato | Catalogo delle API della PA',
      metaDescription:
        "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
    },
  }

  const getCatalogSingleApiMockData = (eserviceId: string): MetaDataType => ({
    title: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/catalogo/${eserviceId}`,
      metaTitle: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
      metaDescription:
        "Trova subito l'API di cui hai bisogno, filtrando per parola chiave, erogatore o fruitore. Inizia ora l’integrazione del tuo ente per fornire servizi efficienti.",
    },
  })

  const getGoodPracticeSingleMockData = (pageSlug: string): MetaDataType => ({
    title: 'Esempi pratici di utilizzo delle API per il tuo ente',
    locale: 'it',
    seo: {
      canonical: `${origin}/it/buone-pratiche/${pageSlug}`,
      metaTitle: 'Esempi pratici di utilizzo delle API per il tuo ente',
      metaDescription:
        'Lasciati ispirare da una raccolta di esempi significativi e semplici di come integrare servizi per il tuo ente e i cittadini.',
    },
  })

  const generalMockDataEn: MetaDataType = {
    title: 'Public Administration API Catalogue',
    siteName: 'Public Administration API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en`,
      metaTitle: 'Public Administration API Catalogue',
      metaDescription:
        'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
      twitterImage: {
        url: `${origin}/img/twitter_main.jpg`,
      },
      opengraphImage: {
        url: `${origin}/img/opengraph_main.jpg`,
      },
    },
  }

  const catalogMockDataEn: MetaDataType = {
    title: 'APIs on the National Digital Data Platform (PDND)',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/catalog`,
      metaTitle: 'APIs on the National Digital Data Platform (PDND)',
      metaDescription:
        'Find the API you need by filtering by keyword, producer, or consumer. Start the integration for your entity now to provide efficient services.',
    },
  }

  const ecosystemMockDataEn: MetaDataType = {
    title: 'Benefits of Data Interoperability among Public Administrations',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/ecosystem`,
      metaTitle: 'Benefits of Data Interoperability among Public Administrations',
      metaDescription:
        'Data interoperability allows entities to pursue the once-only principle. Consult the benefits and supporting tools available.',
      twitterImage: {
        url: `${origin}/img/twitter_ecosistema.jpg`,
      },
      opengraphImage: {
        url: `${origin}/img/opengraph_ecosistema.jpg`,
      },
    },
  }

  const faqMockDataEn: MetaDataType = {
    title: 'Frequently Asked Questions on the API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/faq`,
      metaTitle: 'Frequently Asked Questions on the API Catalogue',
      metaDescription:
        'Find all the answers to the most common questions about APIs, the PDND platform, available resources, and development.',
    },
  }

  const goodPracticesMockDataEn: MetaDataType = {
    title: 'Practical examples of API Usage for your Entity',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/good-practices`,
      metaTitle: 'Practical examples of API Usage for your Entity',
      metaDescription:
        'Get inspired by a collection of significant and simple examples of how to integrate services for your entity and citizens.',
    },
  }

  const legalNotesMockDataEn: MetaDataType = {
    title: 'Legal notice | Public Administration API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/legal-notes`,
      metaTitle: 'Legal notice | Public Administration API Catalogue',
      metaDescription:
        'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
    },
  }

  const legislationMockDataEn: MetaDataType = {
    title: 'PDND regulatory references',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/legislation`,
      metaTitle: 'PDND regulatory references',
      metaDescription:
        'The APIs in the catalogue are supported by the National Digital Data Platform (PDND). Consult the references to deepen the regulatory framework.',
    },
  }

  const privacyPolicyMockDataEn: MetaDataType = {
    title: 'Privacy policy | Public Administration API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/privacy-policy`,
      metaTitle: 'Privacy policy | Public Administration API Catalogue',
      metaDescription:
        'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
    },
  }

  const genericErrorMockDataEn: MetaDataType = {
    title: 'Error | Public Administration API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/error`,
      metaTitle: 'Error | Public Administration API Catalogue',
      metaDescription:
        'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
    },
  }

  const notFoundErrorMockDataEn: MetaDataType = {
    title: '404 Not found | Public Administration API Catalogue',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/404`,
      metaTitle: '404 Not found | Public Administration API Catalogue',
      metaDescription:
        'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
    },
  }

  const getCatalogSingleApiMockDataEn = (eserviceId: string): MetaDataType => ({
    title: 'APIs on the National Digital Data Platform (PDND)',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/catalog/${eserviceId}`,
      metaTitle: 'APIs on the National Digital Data Platform (PDND)',
      metaDescription:
        'Find the API you need by filtering by keyword, producer, or consumer. Start the integration for your entity now to provide efficient services.',
    },
  })

  const getGoodPracticeSingleMockDataEn = (pageSlug: string): MetaDataType => ({
    title: 'Practical examples of API Usage for your Entity',
    locale: 'en',
    seo: {
      canonical: `${origin}/en/good-practices/${pageSlug}`,
      metaTitle: 'Practical examples of API Usage for your Entity',
      metaDescription:
        'Get inspired by a collection of significant and simple examples of how to integrate services for your entity and citizens.',
    },
  })

  return match(routeKey)
    .with('DEFAULT', () => {
      return locale === 'it' ? generalMockData : generalMockDataEn
    })
    .with('ESERVICE_CATALOG', () => {
      return locale === 'it' ? catalogMockData : catalogMockDataEn
    })
    .with('ESERVICE_DETAILS', () => {
      return locale === 'it'
        ? getCatalogSingleApiMockData(pageParams?.eserviceId as string)
        : getCatalogSingleApiMockDataEn(pageParams?.eserviceId as string)
    })
    .with('ECOSYSTEM', () => {
      return locale === 'it' ? ecosystemMockData : ecosystemMockDataEn
    })
    .with('FAQ', () => {
      return locale === 'it' ? faqMockData : faqMockDataEn
    })
    .with('GOOD_PRACTICES_CATALOG', () => {
      return locale === 'it' ? goodPracticesMockData : goodPracticesMockDataEn
    })
    .with('GOOD_PRACTICES_DETAILS', () => {
      return locale === 'it'
        ? getGoodPracticeSingleMockData(pageParams?.pageSlug as string)
        : getGoodPracticeSingleMockDataEn(pageParams?.pageSlug as string)
    })
    .with('LEGAL_NOTES', () => {
      return locale === 'it' ? legalNotesMockData : legalNotesMockDataEn
    })
    .with('LEGISLATION', () => {
      return locale === 'it' ? legislationMockData : legislationMockDataEn
    })
    .with('PRIVACY_POLICY', () => {
      return locale === 'it' ? privacyPolicyMockData : privacyPolicyMockDataEn
    })
    .with('SERVER_ERROR', () => {
      return locale === 'it' ? genericErrorMockData : genericErrorMockDataEn
    })
    .with('NOT_FOUND_ERROR', () => {
      return locale === 'it' ? notFoundErrorMockData : notFoundErrorMockDataEn
    })
    .otherwise(() => {
      return locale === 'it' ? generalMockData : generalMockDataEn
    })
}
