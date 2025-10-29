import type { APIRoute } from 'astro'
import { sqlService } from '../../../server/services/index.js'
import { z } from 'zod'
import { emptyErrorMapper, EService, notFoundError } from 'pagopa-interop-public-models'
import { makeApiProblem } from '../../../server/models/errors.js'

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const id = z.string().uuid().parse(params.id)
    locals.logger.info(`Fetching eService by id: ${id}`)

    const rawData = await sqlService.getEService(id)

    if (!rawData) {
      throw notFoundError(`EService with id '${id}' not found`)
    }

    const data = EService.parse(rawData satisfies EService)

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    locals.logger.error('Error fetching eservice')

    const errorRes = makeApiProblem(err, emptyErrorMapper, locals)

    return new Response(JSON.stringify(errorRes), {
      status: errorRes.status,
      headers: { 'Content-Type': 'application/problem+json' },
    })
  }
}
