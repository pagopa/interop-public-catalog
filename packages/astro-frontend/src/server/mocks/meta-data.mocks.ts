import type { MetaDataType } from '../types/metaData.types'

const SITE_URL = 'https://pagopa.it'

const generalMockData: MetaDataType = {
  title: 'Catalogo delle API della Pubblica Amministrazione',
  siteName: 'Catalogo delle API della Pubblica Amministrazione',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it`,
    metaTitle: 'Catalogo delle API della Pubblica Amministrazione',
    metaDescription:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
    twitterImage: {
      url: `${SITE_URL}/static/social_interop_01_800x418.jpg`,
    },
    opengraphImage: {
      url: `${SITE_URL}/static/social_interop_01_1200x630.jpg`,
    },
  },
}

const catalogMockData: MetaDataType = {
  title: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/catalogo`,
    metaTitle: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
    metaDescription:
      "Trova subito l'API di cui hai bisogno, filtrando per parola chiave, erogatore o fruitore. Inizia ora l’integrazione del tuo ente per fornire servizi efficienti.",
  },
}

const ecosystemMockData: MetaDataType = {
  title: 'I vantaggi dell’interoperabilità dei dati tra Pubbliche Amministrazioni',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/ecosistema`,
    metaTitle: 'I vantaggi dell’interoperabilità dei dati tra Pubbliche Amministrazioni',
    metaDescription:
      'L’interoperabilità dei dati permette agli enti di perseguire il principio di once only. Consulta i vantaggi e gli strumenti a supporto.',
  },
}

const faqMockData: MetaDataType = {
  title: 'Domande frequenti sul Catalogo delle API',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/faq`,
    metaTitle: 'Domande frequenti sul Catalogo delle API',
    metaDescription:
      'Scopri tutte le risposte alle domande più frequenti sulle API, la piattaforma PDND, le risorse a disposizione e lo sviluppo.',
  },
}

const goodPracticesMockData: MetaDataType = {
  title: 'Esempi pratici di utilizzo delle API per il tuo ente',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/buone-pratiche`,
    metaTitle: 'Esempi pratici di utilizzo delle API per il tuo ente',
    metaDescription:
      'Lasciati ispirare da una raccolta di esempi significativi e semplici di come integrare servizi per il tuo ente e i cittadini.',
  },
}

const legalNotesMockData: MetaDataType = {
  title: 'Note legali | Catalogo delle API della PA',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/note-legali`,
    metaTitle: 'Note legali | Catalogo delle API della PA',
    metaDescription:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
  },
}

const legislationMockData: MetaDataType = {
  title: 'Riferimenti normativi sulla PDND',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/normativa`,
    metaTitle: 'Riferimenti normativi sulla PDND',
    metaDescription:
      'Le API esposte sul catalogo sono supportate dalla Piattaforma Digitale Nazionale Dati (PDND). Consulta i riferimenti per approfondire il quadro normativo.',
  },
}

const privacyPolicyMockData: MetaDataType = {
  title: 'Informativa privacy | Catalogo delle API della PA',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/privacy-policy`,
    metaTitle: 'Informativa privacy | Catalogo delle API della PA',
    metaDescription:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
  },
}

const genericErrorMockData: MetaDataType = {
  title: 'Errore | Catalogo delle API della PA',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/errore`,
    metaTitle: 'Errore | Catalogo delle API della PA',
    metaDescription:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
  },
}

const notFoundErrorMockData: MetaDataType = {
  title: '404 Non trovato | Catalogo delle API della PA',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/404`,
    metaTitle: '404 Non trovato | Catalogo delle API della PA',
    metaDescription:
      "Il portale ufficiale per l'interoperabilità dei dati della Pubblica Amministrazione. Accedi ai dati utilizzando la Piattaforma Digitale Nazionale Dati (PDND).",
  },
}

const getCatalogSingleApiMockData = (ESERVICEID: string): MetaDataType => ({
  title: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/catalogo/${ESERVICEID}`,
    metaTitle: 'API sulla Piattaforma Digitale Nazionale Dati (PDND)',
    metaDescription:
      "Trova subito l'API di cui hai bisogno, filtrando per parola chiave, erogatore o fruitore. Inizia ora l’integrazione del tuo ente per fornire servizi efficienti.",
  },
})

const getGoodPracticeSingleMockData = (PAGE_SLUG: string): MetaDataType => ({
  title: 'Esempi pratici di utilizzo delle API per il tuo ente',
  locale: 'it',
  seo: {
    canonical: `${SITE_URL}/it/buone-pratiche/${PAGE_SLUG}`,
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
    canonical: `${SITE_URL}/en`,
    metaTitle: 'Public Administration API Catalogue',
    metaDescription:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
    twitterImage: {
      url: `${SITE_URL}/static/social_interop_01_800x418.jpg`,
    },
    opengraphImage: {
      url: `${SITE_URL}/static/social_interop_01_1200x630.jpg`,
    },
  },
}

const catalogMockDataEn: MetaDataType = {
  title: 'APIs on the National Digital Data Platform (PDND)',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/catalog`,
    metaTitle: 'APIs on the National Digital Data Platform (PDND)',
    metaDescription:
      'Find the API you need by filtering by keyword, producer, or consumer. Start the integration for your entity now to provide efficient services.',
  },
}

const ecosystemMockDataEn: MetaDataType = {
  title: 'Benefits of Data Interoperability among Public Administrations',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/ecosystem`,
    metaTitle: 'Benefits of Data Interoperability among Public Administrations',
    metaDescription:
      'Data interoperability allows entities to pursue the once-only principle. Consult the benefits and supporting tools available.',
  },
}

const faqMockDataEn: MetaDataType = {
  title: 'Frequently Asked Questions on the API Catalogue',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/faq`,
    metaTitle: 'Frequently Asked Questions on the API Catalogue',
    metaDescription:
      'Find all the answers to the most common questions about APIs, the PDND platform, available resources, and development.',
  },
}

const goodPracticesMockDataEn: MetaDataType = {
  title: 'Practical examples of API Usage for your Entity',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/good-practices`,
    metaTitle: 'Practical examples of API Usage for your Entity',
    metaDescription:
      'Get inspired by a collection of significant and simple examples of how to integrate services for your entity and citizens.',
  },
}

const legalNotesMockDataEn: MetaDataType = {
  title: 'Legal notes | Public Administration API Catalogue',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/legal-notes`,
    metaTitle: 'Legal notes | Public Administration API Catalogue',
    metaDescription:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
  },
}

const legislationMockDataEn: MetaDataType = {
  title: 'PDND regulatory references',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/legislation`,
    metaTitle: 'PDND regulatory references',
    metaDescription:
      'The APIs in the catalogue are supported by the National Digital Data Platform (PDND). Consult the references to deepen the regulatory framework.',
  },
}

const privacyPolicyMockDataEn: MetaDataType = {
  title: 'Privacy policy | Public Administration API Catalogue',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/privacy-policy`,
    metaTitle: 'Privacy policy | Public Administration API Catalogue',
    metaDescription:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
  },
}

const genericErrorMockDataEn: MetaDataType = {
  title: 'Error | Public Administration API Catalogue',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/error`,
    metaTitle: 'Error | Public Administration API Catalogue',
    metaDescription:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
  },
}

const notFoundErrorMockDataEn: MetaDataType = {
  title: '404 Not found | Public Administration API Catalogue',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/404`,
    metaTitle: '404 Not found | Public Administration API Catalogue',
    metaDescription:
      'The official portal for Public Administration data interoperability. Access certified data using the National Digital Data Platform (PDND).',
  },
}

const getCatalogSingleApiMockDataEn = (ESERVICEID: string): MetaDataType => ({
  title: 'APIs on the National Digital Data Platform (PDND)',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/catalog/${ESERVICEID}`,
    metaTitle: 'APIs on the National Digital Data Platform (PDND)',
    metaDescription:
      'Find the API you need by filtering by keyword, producer, or consumer. Start the integration for your entity now to provide efficient services.',
  },
})

const getGoodPracticeSingleMockDataEn = (PAGE_SLUG: string): MetaDataType => ({
  title: 'Practical examples of API Usage for your Entity',
  locale: 'en',
  seo: {
    canonical: `${SITE_URL}/en/good-practices/${PAGE_SLUG}`,
    metaTitle: 'Practical examples of API Usage for your Entity',
    metaDescription:
      'Get inspired by a collection of significant and simple examples of how to integrate services for your entity and citizens.',
  },
})

export {
  generalMockData,
  catalogMockData,
  ecosystemMockData,
  faqMockData,
  goodPracticesMockData,
  legalNotesMockData,
  legislationMockData,
  privacyPolicyMockData,
  genericErrorMockData,
  notFoundErrorMockData,
  getCatalogSingleApiMockData,
  getGoodPracticeSingleMockData,
  generalMockDataEn,
  catalogMockDataEn,
  ecosystemMockDataEn,
  faqMockDataEn,
  goodPracticesMockDataEn,
  legalNotesMockDataEn,
  legislationMockDataEn,
  privacyPolicyMockDataEn,
  genericErrorMockDataEn,
  notFoundErrorMockDataEn,
  getCatalogSingleApiMockDataEn,
  getGoodPracticeSingleMockDataEn,
}
