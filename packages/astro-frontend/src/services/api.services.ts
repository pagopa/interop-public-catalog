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
import type { EService } from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../i18n/types.i18n";

const apiClient = axios.create({
  headers: { "Content-Type": "application/json" },
  paramsSerializer: serializeQueryString,
  /**
   * The reason we inject this query parameters in all requests
   * is that we had a cache issue in production where calls were cached 
   * for one year.
   * Right now we have users with api requests cached, for one year, with old data. 
   * This is a workaround to invalidate those caches.
   */
  params: {
    _v: "2",
  },
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
  getGoodPracticeBySlug: async (
    slug: GoodPracticeSlugQuery,
    locale: SupportedLanguage,
  ) => {
    const response = await apiClient.get(`/api/good-practices/${slug}`, {
      params: { locale },
    });
    return response.data;
  },
  getGoodPractices: async (params: GoodPracticesQuery) => {
    const response = await apiClient.get<GoodPracticesResponse>(
      `/api/good-practices`,
      {
        params,
      },
    );
    return response.data;
  },
};
