import type { APIRoute } from "astro";
import { strapiService } from "../../../server/services/index.js";
import {
  parseQueryParams,
  LocaleQuerySchema,
  GoodPracticeSlugSchema,
} from "../../../server/models/api.js";
import {
  emptyErrorMapper,
  GoodPractice,
  notFoundError,
} from "pagopa-interop-public-models";
import { makeApiProblem } from "../../../server/models/errors.js";

export const GET: APIRoute = async ({ params, url, locals }) => {
  try {
    const queryParams = parseQueryParams(url, LocaleQuerySchema);
    const { locale } = queryParams;
    const slug = GoodPracticeSlugSchema.parse(params.slug);

    locals.logger.info(
      `Fetching good practice by slug: ${slug}, Locale: ${locale}`,
    );

    const rawData = await strapiService.getGoodPracticeBySlug(slug, locale);

    if (!rawData) {
      throw notFoundError(`Good practice with slug '${slug}' not found`);
    }

    const data = GoodPractice.parse(rawData.data satisfies GoodPractice);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    locals.logger.error("Error fetching good practice data");

    const errorRes = makeApiProblem(err, emptyErrorMapper, locals);

    return new Response(JSON.stringify(errorRes), {
      status: errorRes.status,
      headers: { "Content-Type": "application/problem+json" },
    });
  }
};
