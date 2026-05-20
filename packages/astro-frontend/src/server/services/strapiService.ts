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
import qs from "qs";

export function strapiServiceBuilder(_endpoint: string, _token: string) {
  return {
    /**
     * Methods to fetch static content for pages like 404, 500, catalogo, faq, etc.
     * These methods can be used to fetch the content from Strapi at build time.
     */
    async get404Content(
      locale: SupportedLanguage,
    ): Promise<StrapiEntity<Error404> | undefined> {
      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/error-404?locale=${locale}&populate=*`,
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
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/error-500?locale=${locale}&populate=*`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/faq?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/normativa?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/interoperabilita?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/general?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/homepage?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/single-catalog?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici-archivio?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/scheda-e-service?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/esempi-pratici?${query}`,
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
            start: 0,
            limit: examples.length,
            total: examples.length,
          },
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/pages?${query}`,
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

      const response = await fetch(
        `${_endpoint.endsWith("/") ? _endpoint : _endpoint + "/"}api/macrocategories?${query}`,
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
