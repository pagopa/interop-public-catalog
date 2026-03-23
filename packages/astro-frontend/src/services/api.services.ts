import axios from "axios";
import { serializeQueryString } from "../utils/qs.utils";
import type {
  EServicesResponse,
  GoodPracticesResponse,
  GoodPracticesQuery,
  TenantsResponse,
  EServicesQuery,
  GoodPracticeSlugQuery,
} from "../server/models/api";
import type { EService, StrapiEntity } from "pagopa-interop-public-models";
import type { General } from "../types/general";
import type { EsempiPratici } from "../types/collectionTypes";
import type { SupportedLanguage } from "../i18n/types.i18n";
import type { Catalog } from "../types/pages";
// import type { SupportedLanguage } from "../i18n/types.i18n";
// TODO check comments

const apiClient = axios.create({
  headers: { "Content-Type": "application/json" },
  paramsSerializer: serializeQueryString,
});

export const apiService = {
  getEServiceById: async (id: string) => {
    const response = await apiClient.get<EService>(`/api/catalog/${id}`);
    return response.data;
  },
  getEServices: async (params: EServicesQuery) => {
    const response = await apiClient.get<EServicesResponse>("/api/catalog", {
      params,
    });
    return response.data;
  },
  getTenants: async (q: string) => {
    const response = await apiClient.get<TenantsResponse>("/api/tenants", {
      params: {
        q,
        limit: 50,
      },
    });
    return response.data;
  },
  getGoodPracticeBySlug: async (slug: GoodPracticeSlugQuery) => {
    const response = await apiClient.get<StrapiEntity<EsempiPratici>>(
      `/api/esempi-pratici`,
      {
        params: { slug: slug, pLevel: 3 },
      },
    );
    return response.data;
  },
  getGoodPractices: async (params: GoodPracticesQuery) => {
    const response = await apiClient.get<GoodPracticesResponse>(
      `/api/esempi-pratici`,
      {
        params: { ...params, pLevel: 3 },
      },
    );
    return response.data;
  },
  getGeneralContent: async (locale: SupportedLanguage) => {
    const response = await apiClient.get<StrapiEntity<General>>(
      `/api/general-content`,
      {
        params: { locale: locale, pLevel: 3 },
      },
    );
    return response.data;
  },
  getCatalogContent: async (locale: SupportedLanguage) => {
    const response = await apiClient.get<StrapiEntity<Catalog>>(
      `/api/catalog`,
      {
        params: { locale: locale, pLevel: 3 },
      },
    );
    return response.data;
  },
};
