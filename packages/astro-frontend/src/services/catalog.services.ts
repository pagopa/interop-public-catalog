import { EServiceSearchResult, TenantSearchResult } from 'pagopa-interop-public-models'
import type { CatalogQueryParams } from '../components/EServiceCatalog/types'

export const getEServices = async (filter: CatalogQueryParams) => {
  const catalogUrl = new URL('/api/catalog', window.location.origin)

  console.log('API: ', filter)

  catalogUrl.searchParams.set('q', filter.q)
  catalogUrl.searchParams.set('offset', filter.offset.toString())
  filter.producerIds && catalogUrl.searchParams.set('producerIds', filter.producerIds)
  filter.consumerIds && catalogUrl.searchParams.set('consumerIds', filter.consumerIds)
  filter.limit && catalogUrl.searchParams.set('limit', filter.limit.toString())
  filter.orderBy && catalogUrl.searchParams.set('orderBy', filter.orderBy)

  const response = await fetch(catalogUrl)

  console.log('searchParams:', catalogUrl.searchParams.get('producerIds'))
  const eserviceResponse: EServiceSearchResult = await response.json()

  return eserviceResponse
}

export const getProducer = async (inputText: string) => {
  // Replace with tenant logic
  const catalogUrl = new URL('/api/tenants', window.location.origin)
  catalogUrl.searchParams.set('q', inputText)

  const response = await fetch(catalogUrl)
  const producer: TenantSearchResult = await response.json()

  return producer.items.map((it) => ({
    value: it.producer_id,
    label: it.name,
  }))
}

export const getConsumer = async (inputText: string) => {
  // Replace with tenant logic
  const catalogUrl = new URL('/api/catalog', window.location.origin)
  catalogUrl.searchParams.set('q', inputText)

  const response = await fetch(catalogUrl)
  const eservices = await response.json()

  return eservices.items.map((it: { id: string; name: string }) => ({
    value: it.id,
    label: it.name,
  }))
}
