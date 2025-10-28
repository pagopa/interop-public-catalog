import type { GoodPractice, StrapiEntityList, StrapiEntity } from 'pagopa-interop-public-models'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getGoodPracticesDataMockByLocale } from '../mocks/good-practices.mocks.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export function strapiServiceBuilder(_endpoint: string, _token: string) {
  return {
    getGoodPractices: async (
      filters: {
        macroCategoryIds?: number[]
        isFeaturedInHomepage?: boolean
        limit: number
        offset: number
      },
      locale: SupportedLanguage
    ): Promise<StrapiEntityList<GoodPractice>> => {
      const { offset, limit, macroCategoryIds, isFeaturedInHomepage } = filters

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
  }
}
