import type {
  // GoodPractice,
  StrapiEntityList,
  StrapiEntity,
} from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
// import { getGoodPracticesDataMockByLocale } from "../mocks/good-practices.mocks.js";
import { getSeoMockData } from "../mocks/meta-data.mocks.js";
import type { MetaDataType } from "../types/metaData.types.js";
import type { RouteKey } from "../../config/routes.js";
// import type { FaqContent } from "../types/faq.types.js";
// import { getFAQContentMockByLocale } from "../mocks/faq.mocks.js";
// import type { NormativaReferenceContent } from "../types/normativa.types.js";
// import { getNormativaDataMockByLocale } from "../mocks/normativa.mocks.js";
import type { Error404 } from "../../types/pages/404.js";
import type { Error500 } from "../../types/pages/500.js";
import type { Catalog } from "../../types/pages/catalogo.js";
import type {
  EsempiPratici,
  MacroCategory,
  Route,
} from "../../types/collectionTypes.js";
import type { Faq } from "../../types/pages/faq.js";
import type { General } from "../../types/general.js";
import type { Homepage } from "../../types/pages/homepage.js";
import type { Interoperabilita } from "../../types/pages/interoperabilita.js";
import type { Normativa } from "../../types/pages/normativa.js";
import type { EsempiPraticiCatalog } from "../../types/pages/esempiPratici.js";
import type { EServiceDetails } from "../../types/pages/eserviceDetails.js";

export function strapiServiceBuilder(_endpoint: string, _token: string) {
  return {
    // getGoodPractices: async (
    //   filters: {
    //     macroCategoryIds?: number[];
    //     isFeaturedInHomepage?: boolean;
    //     limit: number;
    //     offset: number;
    //   },
    //   locale: SupportedLanguage,
    // ): Promise<StrapiEntityList<GoodPractice>> => {
    //   const { offset, limit, macroCategoryIds, isFeaturedInHomepage } = filters;

    //   const filteredData = getGoodPracticesDataMockByLocale(locale)
    //     .filter((g) =>
    //       macroCategoryIds
    //         ? g.data.tenantMacrocategories.some((mc) =>
    //             macroCategoryIds.includes(mc.id),
    //           ) || g.data.tenantMacrocategories.length === 0
    //         : true,
    //     )
    //     .filter((g) =>
    //       typeof isFeaturedInHomepage === "boolean"
    //         ? g.data.isFeaturedInHomepage === isFeaturedInHomepage
    //         : true,
    //     );

    //   const paginatedResult = filteredData
    //     .slice(offset, offset + limit)
    //     .map((r) => r.data);

    //   const total = filteredData.length;
    //   const page = Math.floor(offset / limit) + 1;
    //   const pageCount = Math.ceil(total / limit);

    //   return Promise.resolve({
    //     data: paginatedResult,
    //     meta: {
    //       pagination: {
    //         page,
    //         pageSize: limit,
    //         pageCount,
    //         total,
    //       },
    //     },
    //   });
    // },

    // getGoodPracticesExamples: async (
    //   currentGoodPracticeSlug: string,
    //   locale: SupportedLanguage,
    //   numberOfExamples: number = 2,
    // ): Promise<StrapiEntityList<GoodPractice>> => {
    //   const allGoodPractices = getGoodPracticesDataMockByLocale(locale);
    //   const currentGoodPracticeIndex = allGoodPractices.findIndex(
    //     (g) => g.data.slug === currentGoodPracticeSlug,
    //   );

    //   const examples: GoodPractice[] = [];
    //   let offset = 1;

    //   while (
    //     examples.length < numberOfExamples &&
    //     offset < allGoodPractices.length
    //   ) {
    //     const nextIndex =
    //       (currentGoodPracticeIndex + offset) % allGoodPractices.length;

    //     if (allGoodPractices[nextIndex].data.slug !== currentGoodPracticeSlug) {
    //       examples.push(allGoodPractices[nextIndex].data);
    //     }

    //     offset++;
    //   }

    //   return Promise.resolve({
    //     data: examples,
    //     meta: {
    //       pagination: {
    //         page: 1,
    //         pageSize: examples.length,
    //         pageCount: 1,
    //         total: examples.length,
    //       },
    //     },
    //   });
    // },

    // getGoodPracticeBySlug: async (
    //   slug: string,
    //   locale: SupportedLanguage,
    // ): Promise<StrapiEntity<GoodPractice> | undefined> =>
    //   Promise.resolve(
    //     getGoodPracticesDataMockByLocale(locale).find(
    //       (g) => g.data.slug === slug,
    //     ),
    //   ),

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

    // async getFaqContent(
    //   locale: SupportedLanguage,
    // ): Promise<StrapiEntity<FaqContent> | undefined> {
    //   return Promise.resolve(getFAQContentMockByLocale(locale));
    // },

    // async getNormativaContent(
    //   locale: SupportedLanguage,
    // ): Promise<StrapiEntity<NormativaReferenceContent> | undefined> {
    //   return Promise.resolve(getNormativaDataMockByLocale(locale));
    // },

    /**
     * Methods to fetch static content for pages like 404, 500, catalogo, faq, etc.
     * These methods can be used to fetch the content from Strapi at build time.
     */
    async get404Content(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Error404> | undefined> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/error-404?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async get500Content(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Error500> | undefined> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/error-500?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getFaqContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Faq> | undefined> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/faq?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getNormativaContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Normativa>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/normativa?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getInteroperabilityContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Interoperabilita>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/interoperabilita?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getGeneralContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<General>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/general?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getHomepageContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Homepage>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/homepage?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getCatalogContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Catalog>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/catalog?locale=${locale}&pLevel`, //single-catalog? TODO check
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getGoodPracticesCatalogContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EsempiPraticiCatalog>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici-archivio?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getEServiceDetailsContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EServiceDetails>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/scheda-e-service?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    /**
     * Methods to fetch content from collections
     */
    async getGoodPractices(
      locale: SupportedLanguage,
      filters: {
        macroCategoryIds?: string[];
        limit: number;
        offset: number;
      },
    ): Promise<StrapiEntityList<EsempiPratici>> {
      const { offset, limit, macroCategoryIds } = filters;

      const paginationParams = new URLSearchParams();
      paginationParams.append("pagination[start]", offset.toString());
      paginationParams.append("pagination[limit]", limit.toString());

      const macroCategoryParams = new URLSearchParams();

      if (macroCategoryIds) {
        // Cicliamo l'array per aggiungere ogni ID con la sintassi corretta
        macroCategoryIds.forEach((id, index) => {
          macroCategoryParams.append(
            `filters[macrocategories][MacrocategoryId][$in][${index}]`,
            id.toString(),
          );
        });
      }

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici?locale=${locale}&pLevel&${paginationParams.toString()}${macroCategoryParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getGoodPracticeBySlug(
      slug: string,
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EsempiPratici> | undefined> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici?locale=${locale}&pLevel&filters[Slug][$eq]=${slug}`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getGoodPracticesExamples(
      currentGoodPracticeSlug: string,
      locale: SupportedLanguage,
      numberOfExamples: number = 2,
    ): Promise<StrapiEntityList<EsempiPratici> | undefined> {
      const allGoodPractices = await this.getGoodPractices(locale, {
        limit: 100,
        offset: 0,
      });
      const currentGoodPracticeIndex = allGoodPractices.data.findIndex(
        (g) => g.Slug === currentGoodPracticeSlug,
      );

      const examples: EsempiPratici[] = [];
      let offset = 1;

      while (
        examples.length < numberOfExamples &&
        offset < allGoodPractices.data.length
      ) {
        const nextIndex =
          (currentGoodPracticeIndex + offset) % allGoodPractices.data.length;

        if (allGoodPractices.data[nextIndex].Slug !== currentGoodPracticeSlug) {
          examples.push(allGoodPractices.data[nextIndex]);
        }

        offset++;
      }

      return Promise.resolve({
        data: examples,
        meta: {
          pagination: {
            page: 1,
            pageSize: examples.length,
            pageCount: 1,
            total: examples.length,
          },
        },
      });
    },

    async getRoutes(
      locale: SupportedLanguage,
    ): Promise<StrapiEntityList<Route>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/pages?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },

    async getMacrocategories(
      locale: SupportedLanguage,
    ): Promise<StrapiEntityList<MacroCategory>> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/macrocategories?locale=${locale}&pLevel`,
        {
          headers: {
            Authorization: `Bearer ${_token}`,
          },
        },
      );

      return response.json();
    },
  };
}
