import type {
  GoodPractice,
  StrapiEntityList,
  StrapiEntity,
} from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
import { getGoodPracticesDataMockByLocale } from "../mocks/good-practices.mocks.js";
import { getSeoMockData } from "../mocks/meta-data.mocks.js";
import type { MetaDataType } from "../types/metaData.types.js";
import type { RouteKey } from "../../config/routes.js";
import type { FaqContent } from "../types/faq.types.js";
import { getFAQContentMockByLocale } from "../mocks/faq.mocks.js";
import type { NormativaReferenceContent } from "../types/normativa.types.js";
import { getNormativaDataMockByLocale } from "../mocks/normativa.mocks.js";

export function strapiServiceBuilder(_endpoint: string, _token: string) {
  return {
    getGoodPractices: async (
      filters: {
        macroCategoryIds?: number[];
        isFeaturedInHomepage?: boolean;
        random?: boolean;
        limit: number;
        offset: number;
      },
      locale: SupportedLanguage,
    ): Promise<StrapiEntityList<GoodPractice>> => {
      const { offset, limit, macroCategoryIds, isFeaturedInHomepage, random } =
        filters;

      const filteredData = getGoodPracticesDataMockByLocale(locale)
        .filter((g) =>
          macroCategoryIds
            ? g.data.tenantMacrocategories.some((mc) =>
                macroCategoryIds.includes(mc.id),
              )
            : true,
        )
        .filter((g) =>
          typeof isFeaturedInHomepage === "boolean"
            ? g.data.isFeaturedInHomepage === isFeaturedInHomepage
            : true,
        )
        .sort(() => (random ? (Math.random() > 0.5 ? 1 : -1) : 0));

      const paginatedResult = filteredData
        .slice(offset, offset + limit)
        .map((r) => r.data);

      const total = filteredData.length;
      const page = Math.floor(offset / limit) + 1;
      const pageCount = Math.ceil(total / limit);

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
      });
    },

    getGoodPracticeBySlug: async (
      slug: string,
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<GoodPractice> | undefined> =>
      Promise.resolve(
        getGoodPracticesDataMockByLocale(locale).find(
          (g) => g.data.slug === slug,
        ),
      ),

    async getSeoMetaData(
      locale: SupportedLanguage,
      origin: string,
      routeKey: RouteKey | "DEFAULT",
      pageParams?: { eserviceId?: string; pageSlug?: string },
    ): Promise<StrapiEntityList<MetaDataType>> {
      return Promise.resolve({
        data: [getSeoMockData(locale, origin, routeKey, pageParams)],
        meta: {
          pagination: {
            page: 1,
            pageSize: 1,
            pageCount: 1,
            total: 1,
          },
        },
      });
    },

    async getFaqContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<FaqContent> | undefined> {
      return Promise.resolve(getFAQContentMockByLocale(locale));
    },

    async getNormativaContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<NormativaReferenceContent> | undefined> {
      return Promise.resolve(getNormativaDataMockByLocale(locale));
    },
  };
}
