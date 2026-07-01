import type {
  StrapiEntityList,
  StrapiEntity,
} from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
import type { Error404 } from "../../types/pages/404.js";
import type { Error500 } from "../../types/pages/500.js";
import type { Catalog } from "../../types/pages/singleCatalog.js";
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
import axios, { type InternalAxiosRequestConfig } from "axios";
import qs from "qs";
import { logger as makeLogger, type Logger } from "../logger.js";

type StrapiServiceOptions = {
  logger?: Logger;
};

type GoodPracticeBySlugResponse =
  | StrapiEntityList<EsempiPratici>
  | StrapiEntity<EsempiPratici>;

type StrapiRequestConfig = InternalAxiosRequestConfig & {
  loggerMetadata?: {
    startedAt: number;
  };
};

export function strapiServiceBuilder(
  endpoint: string,
  token: string,
  options?: StrapiServiceOptions,
) {
  const serviceLogger = options?.logger ?? makeLogger({});
  const baseUrl = endpoint.endsWith("/") ? endpoint : `${endpoint}/`;
  const strapiClient = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  strapiClient.interceptors.request.use((config) => {
    const requestConfig = config as StrapiRequestConfig;

    serviceLogger.debug(
      `Fetching Strapi content URL: ${strapiClient.getUri(config)}`,
    );

    return requestConfig;
  });

  strapiClient.interceptors.response.use(
    (response) => {
      serviceLogger.debug(
        `Strapi request completed. Status: ${response.status}, Response: ${JSON.stringify(response.data)}`,
      );

      return response;
    },
    (error: unknown) => {
      if (axios.isAxiosError(error) && error.response) {
        serviceLogger.error(
          `Strapi request failed. Status: ${error.response.status}, Response: ${JSON.stringify(error.response.data)}`,
        );
      } else {
        serviceLogger.error(
          `Strapi request error. Error: ${error instanceof Error ? error.message : String(error)}`,
        );
      }

      return Promise.reject(error);
    },
  );

  const fetchFromStrapi = async <T>(path: string): Promise<T> => {
    const response = await strapiClient.get<T>(path);
    return response.data;
  };

  return {
    /**
     * Methods to fetch static content for pages like 404, 500, catalogo, faq, etc.
     * These methods can be used to fetch the content from Strapi at build time.
     */
    async get404Content(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Error404> | undefined> {
      return await fetchFromStrapi<StrapiEntity<Error404> | undefined>(
        `api/error-404?locale=${locale}&populate=*`,
      );
    },

    async get500Content(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Error500> | undefined> {
      return await fetchFromStrapi<StrapiEntity<Error500> | undefined>(
        `api/error-500?locale=${locale}&populate=*`,
      );
    },

    async getFaqContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Faq> | undefined> {
      const query = qs.stringify(
        {
          fields: ["Title", "Subtitle"],
          populate: [
            "FAQSection",
            "FAQSection.FAQSectionItem",
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<Faq> | undefined>(
        `api/faq?${query}`,
      );
    },

    async getNormativaContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Normativa>> {
      const query = qs.stringify(
        {
          fields: ["Title", "Subtitle", "IndexLabel", "LinkLabel"],
          populate: [
            "NormativaSection",
            "NormativaSection.NormativaSectionItem",
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<Normativa>>(
        `api/normativa?${query}`,
      );
    },

    async getInteroperabilityContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Interoperabilita>> {
      const query = qs.stringify(
        {
          fields: ["Title", "Description"],
          populate: [
            "Features",
            "Infographic",
            "Tools",
            "Tools.SingleTool",
            "Legislation",
            "InteroperabilityLevels",
            "InteroperabilityLevels.SingleInteroperabilityLevel",
            "InteroperabilityLevels.SingleInteroperabilityLevel.Illustration",
            "HowToSection",
            "HowToSection.HowTo",
            "HowToSection.HowTo.Illustration",
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<Interoperabilita>>(
        `api/interoperabilita?${query}`,
      );
    },

    async getGeneralContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<General>> {
      const query = qs.stringify(
        {
          fields: ["WebsiteTitle", "WebsiteTagline"],
          populate: [
            "WasPageUseful",
            "DefaultSeo",
            "DefaultSeo.OpenGraphImage",
            "DefaultSeo.TwitterImage",
            "FooterLinks",
            "FooterLinks.pagines",
            "CopyURL",
            "EServiceAccess",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<General>>(
        `api/general?${query}`,
      );
    },

    async getHomepageContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Homepage>> {
      const query = qs.stringify(
        {
          populate: [
            "Hero",
            "Hero.Illustration",
            "HowItWorks",
            "HowItWorks.HowItWorksItem",
            "HowItWorks.HowItWorksItem.Illustration",
            "Examples",
            "Examples.macrocategories",
            "Examples.macrocategories.MacrocategoryIllustration",
            "Examples.esempi_praticis",
            "Examples.esempi_praticis.macrocategories",
            "ShowcaseEservices",
            "ShowcaseEservices.EServices",
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
            "HowToSection",
            "HowToSection.HowTo",
            "HowToSection.HowTo.Illustration",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<Homepage>>(
        `api/homepage?${query}`,
      );
    },

    async getCatalogContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Catalog>> {
      const query = qs.stringify(
        {
          fields: ["Title", "Subtitle"],
          populate: [
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
            "Links",
            "Links.SingleLink",
            "HowToSection",
            "HowToSection.HowTo",
            "HowToSection.HowTo.Illustration",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<Catalog>>(
        `api/single-catalog?${query}`,
      );
    },

    async getGoodPracticesCatalogContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EsempiPraticiCatalog>> {
      const query = qs.stringify(
        {
          fields: ["Title", "Subtitle"],
          populate: [
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
            "Macrocategories",
            "Macrocategories.macrocategorie",
            "Macrocategories.macrocategorie.MacrocategoryIllustration",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<EsempiPraticiCatalog>>(
        `api/esempi-pratici-archivio?${query}`,
      );
    },

    async getEServiceDetailsContent(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EServiceDetails>> {
      const query = qs.stringify(
        {
          fields: ["PageIndexLabel"],
          populate: [
            "Header",
            "DescriptionSection",
            "APIDetailsSection",
            "APIDetailsSection.EServiceState",
            "APIDetailsSection.PublishDate",
            "APIDetailsSection.LastVersionPublishDate",
            "APIDetailsSection.Delegations",
            "APIDetailsSection.RequestAcceptancePolicy",
            "SpecSection",
            "SpecSection.Version",
            "SpecSection.Technology",
            "SpecSection.Mode",
            "SpecSection.SignalHub",
            "RequirementsSection",
            "DocumentationSection",
            "Label",
            "OtherProducerAPIs",
          ],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntity<EServiceDetails>>(
        `api/scheda-e-service?${query}`,
      );
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

      const query = qs.stringify(
        {
          fields: [
            "Title",
            "Slug",
            "Field",
            "GoodPracticeTenantDestination",
            "LastUpdate",
            "PageIndexLabel",
          ],
          populate: [
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
            "macrocategories",
            "macrocategories.MacrocategoryIllustration",
            "RelatedEservices",
          ],
          locale: locale,
          pagination: {
            start: offset,
            limit: limit,
          },
          filters: macroCategoryIds
            ? {
              macrocategories: {
                MacrocategoryId: {
                  $in: macroCategoryIds,
                },
              },
            }
            : undefined,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntityList<EsempiPratici>>(
        `api/esempi-pratici?${query}`,
      );
    },

    async getGoodPracticeBySlug(
      slug: string,
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<EsempiPratici> | undefined> {
      const query = qs.stringify(
        {
          fields: [
            "Title",
            "Slug",
            "Field",
            "GoodPracticeTenantDestination",
            "LastUpdate",
            "PageIndexLabel",
          ],
          populate: [
            "Seo",
            "Seo.OpenGraphImage",
            "Seo.TwitterImage",
            "EsempiPraticiSection",
            "EsempiPraticiSection.Image",
            "macrocategories",
            "macrocategories.MacrocategoryIllustration",
            "RelatedEservices",
          ],
          locale: locale,
          filters: {
            Slug: {
              $eq: slug,
            },
          },
        },
        {
          encodeValuesOnly: true,
        },
      );

      const rawResponse = await fetchFromStrapi<GoodPracticeBySlugResponse>(
        `api/esempi-pratici?${query}`,
      );

      // Strapi filtered queries return lists; normalize to a single entity.
      if (
        Array.isArray((rawResponse as StrapiEntityList<EsempiPratici>).data)
      ) {
        const listResponse = rawResponse as StrapiEntityList<EsempiPratici>;
        const first = listResponse.data[0];
        return first ? { data: first } : undefined;
      }

      return rawResponse as StrapiEntity<EsempiPratici>;
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

      const pagination = {
        start: 0,
        limit: examples.length,
        page: 1,
        pageSize: examples.length,
        pageCount: 1,
        total: examples.length,
      };

      return Promise.resolve({
        data: examples,
        meta: {
          pagination,
        },
      });
    },

    async getRoutes(
      locale: SupportedLanguage,
    ): Promise<StrapiEntityList<Route>> {
      const query = qs.stringify(
        {
          fields: ["PageTitle", "RouteKey", "Slug", "Breadcrumb"],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntityList<Route>>(
        `api/pages?${query}`,
      );
    },

    async getMacrocategories(
      locale: SupportedLanguage,
    ): Promise<StrapiEntityList<MacroCategory>> {
      const query = qs.stringify(
        {
          fields: ["MacrocategoryLabel", "MacrocategoryId"],
          populate: ["MacrocategoryIllustration"],
          locale: locale,
        },
        {
          encodeValuesOnly: true,
        },
      );

      return await fetchFromStrapi<StrapiEntityList<MacroCategory>>(
        `api/macrocategories?${query}`,
      );
    },
  };
}
