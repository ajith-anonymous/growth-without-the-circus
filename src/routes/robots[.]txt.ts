import { createFileRoute } from "@tanstack/react-router";
import { requestOrigin } from "@/lib/origin";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const body = `User-agent: *\nAllow: /\n\nSitemap: ${requestOrigin(request)}/sitemap.xml\n`;
        return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
      },
    },
  },
});
