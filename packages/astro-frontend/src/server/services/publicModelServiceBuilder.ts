import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import {
  EServiceSearchResult,
  EService,
  EServiceQuery,
} from "pagopa-interop-public-models";

export async function searchCatalog(
  db: ReturnType<typeof drizzle>,
  { limit, offset, q }: EServiceQuery
): Promise<EServiceSearchResult> {
  if (!(limit >= 1 && limit <= 50)) {
    throw new Error("limit must be >= 1 and <= 50");
  }
  if (offset < 0) {
    throw new Error("offset must be >= 0");
  }

  // Total count
  const countResult = await db.execute<{ count: number }>(
    sql`select count(*)::int from search_eservices(${q}::text, ${limit}::int, ${offset}::int)`
  );

  const count = countResult.rows[0]?.count ?? 0;

  // Page items
  const searchResult = await db.execute(
    sql`select * from search_eservices(${q}::text, ${limit}::int, ${offset}::int)`
  );

  const items = searchResult.rows as EService[];
  return { total: count || 0, items, limit, offset, q };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function publicModelServiceBuilder(db: ReturnType<typeof drizzle>) {
  return {
    searchCatalog: searchCatalog.bind(null, db),
  };
}
