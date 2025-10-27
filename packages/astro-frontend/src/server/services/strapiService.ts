import type { GoodPractice, StrapiEntityList, StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getGoodPracticesDataMockByLocale } from '../mocks/good-practices.mocks.js'
import { catalogMockData, ecosystemMockData, faqMockData, generalMockData, genericErrorMockData, getCatalogSingleApiMockData, getGoodPracticeSingleMockData, goodPracticesMockData, legalNotesMockData, normativaMockData, notFoundErrorMockData, privacyPolicyMockData } from '../mocks/meta-data.mocks.js'

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
      pageName: string,
      eserviceId?: string,
      pageSlug?: string
    ): Promise<StrapiEntityList<MetaDataType>> {
      let strapiMockedData
      switch (pageName) {
        case 'catalog':
          strapiMockedData = catalogMockData
        case 'catalog_single':
          strapiMockedData = getCatalogSingleApiMockData(eserviceId!)
        case 'ecosystem':
          strapiMockedData = ecosystemMockData
        case 'faq':
          strapiMockedData = faqMockData
        case 'good_practices':
          strapiMockedData = goodPracticesMockData
        case 'good_practices_single':
          strapiMockedData = getGoodPracticeSingleMockData(pageSlug!)
        case 'legal_notes':
          strapiMockedData = legalNotesMockData
        case 'normativa':
          strapiMockedData = normativaMockData
        case 'privacy_policy':
          strapiMockedData = privacyPolicyMockData
        case 'errore':
          strapiMockedData = genericErrorMockData
        case '404':
          strapiMockedData = notFoundErrorMockData
        case 'general':
        default:
          strapiMockedData = generalMockData
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
