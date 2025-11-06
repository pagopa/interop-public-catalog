import axios from "axios";
import { serializeQueryString } from "../utils/qs.utils";
import type {
  GetEServicesResponse,
  GetGoodPracticesResponse,
  GetGoodPracticesQuery,
  GetTenantsResponse,
  GetEServicesQuery,
} from "../server/models/api";
import type { EService } from "pagopa-interop-public-models";
import type { SupportedLanguage } from "../i18n/types.i18n";

const apiClient = axios.create({
  headers: { "Content-Type": "application/json" },
  paramsSerializer: serializeQueryString,
});

export const apiService = {
  getEServiceById: async (id: string) => {
    const response = await apiClient.get<EService>(`/api/catalog/${id}`);
    return response.data;
  },
  getEServices: async (params: GetEServicesQuery) => {
    const response = await apiClient.get<GetEServicesResponse>("/api/catalog", {
      params,
    });
    return response.data;
  },
  getTenants: async (q: string) => {
    const response = await apiClient.get<GetTenantsResponse>("/api/tenants", {
      params: {
        q,
        limit: 50,
      },
    });
    return response.data;
  },
  getGoodPracticeBySlug: async (slug: string, locale: SupportedLanguage) => {
    const response = await apiClient.get(`/api/good-practices/${slug}`, {
      params: {
        locale,
      },
    });
    return response.data;
  },
  getGoodPractices: async (params: GetGoodPracticesQuery) => {
    const response = await apiClient.get<GetGoodPracticesResponse>(
      "/api/good-practices",
      {
        params,
      },
    );
    return response.data;
  },
};
