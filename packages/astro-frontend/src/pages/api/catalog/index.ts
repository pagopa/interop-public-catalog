import type { APIRoute } from "astro";
import { sqlService } from "../../../server/services/index.js";
import {
  GetEServicesQuery,
  GetEServicesResponse,
  parseQueryParams,
} from "../../../server/models/api.js";
import { emptyErrorMapper } from "pagopa-interop-public-models";
import { makeApiProblem } from "../../../server/models/errors.js";

export const GET: APIRoute = async ({ url, locals }) => {
  try {
    const queryParams = parseQueryParams(url, GetEServicesQuery);
    const { q, orderBy, producerIds, categories, limit, offset } = queryParams;

    locals.logger.info(
      `Fetching catalog. Query: ${q}, Order By: ${orderBy}, Producer IDs: ${producerIds}, Categories: ${categories}, Limit: ${limit}, Offset: ${offset}`
    );
    const rawData = await sqlService.searchCatalog({
      q,
      orderBy,
      producerIds,
      categories,
      limit,
      offset,
    });

    const data = GetEServicesResponse.parse({
      results: rawData.results,
      pagination: {
        offset,
        limit,
        totalCount: rawData.totalCount,
      },
    } satisfies GetEServicesResponse);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    locals.logger.error("Error fetching catalog data from the database");

    const errorRes = makeApiProblem(err, emptyErrorMapper, locals);

    return new Response(JSON.stringify(errorRes), {
      status: errorRes.status,
      headers: { "Content-Type": "application/problem+json" },
    });
  }
};
