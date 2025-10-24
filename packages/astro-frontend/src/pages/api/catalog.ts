import type { APIRoute } from 'astro'
import { sqlService } from '../../server/services/index.js'
import { categoriesMap } from '../../server/config/categories.js'

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('q') ?? ''
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
    const data = await sqlService.searchCatalog({ q, limit, offset, producerIds, categories })
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ items: [{ name: 'PG is not connected...' }] }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
