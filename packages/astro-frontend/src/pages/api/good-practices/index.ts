import type { APIRoute } from 'astro'
import { strapiService } from '../../../server/services/index.js'
import { makeApiProblem } from '../../../server/models/errors.js'
import { emptyErrorMapper } from 'pagopa-interop-public-models'
import {
  GetGoodPracticesResponse,
  GetGoodPracticesQuery,
  parseQueryParams,
} from '../../../server/models/api.js'

export const GET: APIRoute = async ({ url, locals }) => {
  try {
    const queryParams = parseQueryParams(url, GetGoodPracticesQuery)
    const { locale, macroCategoryId, limit, offset } = queryParams

    locals.logger.info(
      `Fetching good practices. Locale: ${locale}, Macro Category ID: ${macroCategoryId}, Limit: ${limit}, Offset: ${offset}`
    )
    const rawData = await strapiService.getGoodPractices(
      {
        macroCategoryIds: typeof macroCategoryId !== 'undefined' ? [macroCategoryId] : undefined,
        limit,
        offset,
      },
      locale
    )

    const data = GetGoodPracticesResponse.parse({
      results: rawData.data,
      pagination: {
        offset,
        limit,
        totalCount: rawData.meta.pagination.total,
      },
    } satisfies GetGoodPracticesResponse)

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    locals.logger.error('Error fetching catalog data from Strapi')

    const errorRes = makeApiProblem(err, emptyErrorMapper, locals)

    return new Response(JSON.stringify(errorRes), {
      status: errorRes.status,
      headers: { 'Content-Type': 'application/problem+json' },
    })
  }
}
