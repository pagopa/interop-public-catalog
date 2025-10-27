import type { APIRoute } from 'astro'
import { sqlService } from '../../../server/services/index.js'

export const GET: APIRoute = async ({ params }) => {
  try {
    const data = await sqlService.getEService(params.id || '')
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ items: [{ name: 'PG is not connected...' }] }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
