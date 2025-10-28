import axios from 'axios'
import { serializeQueryString } from '../utils/qs.utils'
import type { GetEServicesResponse } from '../server/models/api'
import { type GetEServicesQuery } from '../server/models/api'

const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: serializeQueryString,
})

export const apiService = {
  getEServices: async (params: GetEServicesQuery) => {
    const response = await apiClient.get<GetEServicesResponse>('/api/catalog', {
      params,
    })
    return response.data
  },
  getTenants: async (q: string) => {
    const response = await apiClient.get('/api/tenants', {
      params: {
        q,
        limit: 50,
      },
    })
    return response.data
  },
}
