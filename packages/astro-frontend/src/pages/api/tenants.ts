import type { APIRoute } from "astro";
import { sqlService } from "../../server/services/index.js";
import {
  parseQueryParams,
  TenantsQuerySchema,
  TenantsResponseSchema,
  type TenantsResponse,
} from "../../server/models/api.js";
import { makeApiProblem } from "../../server/models/errors.js";
import { emptyErrorMapper } from "pagopa-interop-public-models";

export const GET: APIRoute = async ({ url, locals }) => {
  try {
    const queryParams = parseQueryParams(url, TenantsQuerySchema);
    const { q, limit, offset } = queryParams;

    locals.logger.info(
      `Fetching tenants with query: ${q}, Limit: ${limit}, Offset: ${offset}`
    );

    const rawData = await sqlService.searchTenants({ q, limit, offset });

    const data = TenantsResponseSchema.parse({
      results: rawData.results,
      pagination: {
        offset,
        limit,
        totalCount: rawData.totalCount,
      },
    } satisfies TenantsResponse);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    locals.logger.error("Error fetching tenants from the database");

    const errorRes = makeApiProblem(err, emptyErrorMapper, locals);

    return new Response(JSON.stringify(errorRes), {
      status: errorRes.status,
      headers: { "Content-Type": "application/problem+json" },
    });
  }
};
