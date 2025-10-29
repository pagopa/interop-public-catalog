import type { GoodPractice, StrapiEntityList, StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getGoodPracticesDataMockByLocale } from '../mocks/good-practices.mocks.js'
import {
  catalogMockData,
  catalogMockDataEn,
  ecosystemMockData,
  ecosystemMockDataEn,
  faqMockData,
  faqMockDataEn,
  generalMockData,
  generalMockDataEn,
  genericErrorMockData,
  genericErrorMockDataEn,
  getCatalogSingleApiMockData,
  getCatalogSingleApiMockDataEn,
  getGoodPracticeSingleMockData,
  getGoodPracticeSingleMockDataEn,
  goodPracticesMockData,
  goodPracticesMockDataEn,
  legalNotesMockData,
  legalNotesMockDataEn,
  legislationMockData,
  legislationMockDataEn,
  notFoundErrorMockData,
  notFoundErrorMockDataEn,
  privacyPolicyMockData,
  privacyPolicyMockDataEn,
} from '../mocks/meta-data.mocks.js'
import type { MetaDataType } from '../types/metaData.types.js'
import type { RouteKey } from '../../config/routes.js'
import { match } from 'ts-pattern'

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
      locale: SupportedLanguage,
      routeKey: RouteKey | 'DEFAULT',
      pageParams?: { eserviceId?: string; pageSlug?: string }
    ): Promise<StrapiEntityList<MetaDataType>> {
      const strapiMockedData: MetaDataType = match(routeKey)
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
