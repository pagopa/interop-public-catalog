import type { APIRoute } from "astro";

const allowRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

const disallowRobotsTxt = () => `\
User-agent: *
Disallow: /
`;

export const GET: APIRoute = ({ request }) => {
  const origin = new URL(request.url).origin;
  const sitemapURL = new URL("sitemap.xml", origin);
  const body = origin.toString().includes("dev")
    ? disallowRobotsTxt()
    : allowRobotsTxt(sitemapURL);
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
