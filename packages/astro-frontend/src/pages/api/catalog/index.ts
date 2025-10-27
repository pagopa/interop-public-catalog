import type { APIRoute } from 'astro'
import { sqlService } from '../../../server/services/index.js'
import { categoriesMap } from '../../../server/config/categories.js'
import { eserviceOrderBy } from 'pagopa-interop-public-models'

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('q') ?? ''
  const orderBy = (url.searchParams.get('orderBy') ?? '')
    .split(',')
    .map((entry) => {
      const trimmedEntry = entry.trim()
      return Object.hasOwn(eserviceOrderBy, trimmedEntry) ? trimmedEntry : ''
    })
    .filter(Boolean)
  const producerIds = (url.searchParams.get('producerIds') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const categories = (url.searchParams.get('categories') ?? '')
    .split(',')
    .map((cat) => {
      const trimmedCat = cat.trim()
      return Object.hasOwn(categoriesMap, trimmedCat) ? trimmedCat : ''
    })
    .filter(Boolean)
  const limit = Number(url.searchParams.get('limit') ?? 10)
  const offset = Number(url.searchParams.get('offset') ?? 0)

  try {
    const data = await sqlService.searchCatalog({
      q,
      orderBy,
      limit,
      offset,
      producerIds,
      categories,
    })
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Error fetching catalog data:', err)
    return new Response(JSON.stringify({ items: [{ name: 'PG is not connected...' }] }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
