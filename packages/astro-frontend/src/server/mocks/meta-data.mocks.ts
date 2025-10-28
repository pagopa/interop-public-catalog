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

const normativaMockData: MetaDataType = {
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

export {
  generalMockData,
  catalogMockData,
  ecosystemMockData,
  faqMockData,
  goodPracticesMockData,
  legalNotesMockData,
  normativaMockData,
  privacyPolicyMockData,
  genericErrorMockData,
  notFoundErrorMockData,
  getCatalogSingleApiMockData,
  getGoodPracticeSingleMockData,
}
