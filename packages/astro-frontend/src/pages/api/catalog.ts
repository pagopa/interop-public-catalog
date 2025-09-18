import type { APIRoute } from "astro";
import { sqlService } from "../../server/services/index.js";

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get("q") ?? "";
  const limit = Number(url.searchParams.get("limit") ?? 10);
  const offset = Number(url.searchParams.get("offset") ?? 0);

  try {
    const data = await sqlService.searchCatalog({ q, limit, offset });
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ items: [{ name: "PG is not connected..." }] }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
