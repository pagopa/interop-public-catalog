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

type MetaDataType = {
  title: string
  locale: 'it' | 'en'
  seo: SeoData
  // La proprietà siteName è presente solo in generalMockData
  siteName?: string
}
