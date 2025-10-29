import type { CatalogQueryParams } from '../components/EServiceCatalog/types'
import { categoriesMap } from '../server/config/categories'
import type { GetEServicesResponse, GetTenantsResponse } from '../server/models/api'

export const getEServices = async (filter: CatalogQueryParams) => {
  const catalogUrl = new URL('/api/catalog', window.location.origin)

  catalogUrl.searchParams.set('q', filter.q)
  catalogUrl.searchParams.set('offset', filter.offset.toString())
  if (filter.producerIds) {
    catalogUrl.searchParams.set('producerIds', filter.producerIds)
  }

  if (filter.categories) {
    catalogUrl.searchParams.set('categories', filter.categories)
  }

  if (filter.limit) {
    catalogUrl.searchParams.set('limit', filter.limit.toString())
  }

  if (filter.orderBy) {
    catalogUrl.searchParams.set('orderBy', filter.orderBy)
  }

  const response = await fetch(catalogUrl)

  const eserviceResponse: GetEServicesResponse = await response.json()

  return eserviceResponse
}

export const getProducer = async (inputText: string) => {
  const catalogUrl = new URL('/api/tenants', window.location.origin)
  catalogUrl.searchParams.set('q', inputText)
  catalogUrl.searchParams.set('limit', '50')
  catalogUrl.searchParams.set('offset', '0')

  const response = await fetch(catalogUrl)
  const producer: GetTenantsResponse = await response.json()

  return producer.results.map((it) => ({
    value: it.producer_id,
    label: it.name,
  }))
}

export const getConsumers = async () => {
  const categoriesFe = Object.keys(categoriesMap).map((categoryName) => {
    const key = categoryName as keyof typeof categoriesMap

    return {
      value: categoryName,
      label: categoryName,
    }
  })

  return categoriesFe
}
