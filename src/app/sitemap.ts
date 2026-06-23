import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://redek-web.vercel.app";
const LASTMOD = "2026-05-29";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/casos", priority: 0.8 },
    { path: "/seguridad", priority: 0.8 },
    { path: "/precios", priority: 0.8 },
    { path: "/privacidad", priority: 0.3 },
    { path: "/terminos", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: LASTMOD,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
