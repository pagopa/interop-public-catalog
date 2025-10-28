import type { GoodPractice, StrapiEntityList, StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getGoodPracticesDataMockByLocale } from '../mocks/good-practices.mocks.js'
import { catalogMockData, catalogMockDataEn, ecosystemMockData, ecosystemMockDataEn, faqMockData, faqMockDataEn, generalMockData, generalMockDataEn, genericErrorMockData, genericErrorMockDataEn, getCatalogSingleApiMockData, getCatalogSingleApiMockDataEn, getGoodPracticeSingleMockData, getGoodPracticeSingleMockDataEn, goodPracticesMockData, goodPracticesMockDataEn, legalNotesMockData, legalNotesMockDataEn, legislationMockData, legislationMockDataEn, notFoundErrorMockData, notFoundErrorMockDataEn, privacyPolicyMockData, privacyPolicyMockDataEn } from '../mocks/meta-data.mocks.js'
import type { MetaDataType, PageNames } from '../types/metaData.types.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export function strapiServiceBuilder(_endpoint: string, _token: string) {
  return {
    getGoodPractices: async (
      filters: {
        macroCategoryIds?: number[]
        isFeaturedInHomepage?: boolean
        random?: boolean
        limit: number
        offset: number
      },
      locale: SupportedLanguage
    ): Promise<StrapiEntityList<GoodPractice>> => {
      const { offset, limit, macroCategoryIds, isFeaturedInHomepage, random } = filters

      const filteredData = getGoodPracticesDataMockByLocale(locale)
        .filter((g) =>
          macroCategoryIds
            ? g.data.tenantMacrocategories.some((mc) => macroCategoryIds.includes(mc.id))
            : true
        )
        .filter((g) =>
          typeof isFeaturedInHomepage === 'boolean'
            ? g.data.isFeaturedInHomepage === isFeaturedInHomepage
            : true
        )
        .sort(() => (random ? (Math.random() > 0.5 ? 1 : -1) : 0))

      const paginatedResult = filteredData.slice(offset, offset + limit).map((r) => r.data)

      const total = filteredData.length
      const page = Math.floor(offset / limit) + 1
      const pageCount = Math.ceil(total / limit)

      return Promise.resolve({
        data: paginatedResult,
        meta: {
          pagination: {
            page,
            pageSize: limit,
            pageCount,
            total,
          },
        },
      })
    },

    getGoodPracticeBySlug: async (
      slug: string,
      locale: SupportedLanguage
    ): Promise<StrapiEntity<GoodPractice> | undefined> =>
      Promise.resolve(getGoodPracticesDataMockByLocale(locale).find((g) => g.data.slug === slug)),

    async getSeoMetaData(
      locale: 'it' | 'en',
      pageName: PageNames,
      eserviceId?: string,
      pageSlug?: string
    ): Promise<StrapiEntityList<MetaDataType>> {
      let strapiMockedData: MetaDataType
      switch (pageName) {
        case 'catalog':
          strapiMockedData = locale === 'it' ? catalogMockData : catalogMockDataEn
        case 'catalog_single':
          strapiMockedData =
            locale === 'it'
              ? getCatalogSingleApiMockData(eserviceId!)
              : getCatalogSingleApiMockDataEn(eserviceId!)
        case 'ecosystem':
          strapiMockedData = locale === 'it' ? ecosystemMockData : ecosystemMockDataEn
        case 'faq':
          strapiMockedData = locale === 'it' ? faqMockData : faqMockDataEn
        case 'good_practices':
          strapiMockedData = locale === 'it' ? goodPracticesMockData : goodPracticesMockDataEn
        case 'good_practices_single':
          strapiMockedData =
            locale === 'it'
              ? getGoodPracticeSingleMockData(pageSlug!)
              : getGoodPracticeSingleMockDataEn(pageSlug!)
        case 'legal_notes':
          strapiMockedData = locale === 'it' ? legalNotesMockData : legalNotesMockDataEn
        case 'legislation':
          strapiMockedData = locale === 'it' ? legislationMockData : legislationMockDataEn
        case 'privacy_policy':
          strapiMockedData = locale === 'it' ? privacyPolicyMockData : privacyPolicyMockDataEn
        case 'generic_error':
          strapiMockedData = locale === 'it' ? genericErrorMockData : genericErrorMockDataEn
        case '404':
          strapiMockedData = locale === 'it' ? notFoundErrorMockData : notFoundErrorMockDataEn
        case 'general':
        default:
          strapiMockedData = locale === 'it' ? generalMockData : generalMockDataEn
      }
      return Promise.resolve({
        data: [strapiMockedData],
        meta: {
          pagination: {
            page: 1,
            pageSize: 1,
            pageCount: 1,
            total: 1,
          },
        },
      })
    },
  }
}
