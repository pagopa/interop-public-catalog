import { APIRoute } from "astro";
import { strapiService } from "../../server/services/index.js";

export const GET: APIRoute = async () => {
  try {
    const data = await strapiService.getArticles();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    //  TODO: Remove
    return new Response(
      JSON.stringify({ data: [{ title: "Strapi is not connected..." }] }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
