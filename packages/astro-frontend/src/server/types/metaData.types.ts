interface SeoImage {
  url: string
}

interface SeoData {
  canonical: string
  metaTitle: string
  metaDescription: string
  // Le proprietà twitterImage e opengraphImage sono presenti solo in generalMockData
  twitterImage?: SeoImage
  opengraphImage?: SeoImage
}

export type MetaDataType = {
  title: string
  locale: 'it' | 'en'
  seo: SeoData
  // La proprietà siteName è presente solo in generalMockData
  siteName?: string
}

export type PageNames =
  | 'catalog'
  | 'catalog_single'
  | 'ecosystem'
  | 'faq'
  | 'good_practices'
  | 'good_practices_single'
  | 'legal_notes'
  | 'normativa'
  | 'privacy_policy'
  | 'errore'
  | '404'
  | 'general'
