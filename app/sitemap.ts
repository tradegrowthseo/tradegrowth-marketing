import type { MetadataRoute } from "next";

// Required for `output: 'export'` — forces Next.js to statically generate
// the sitemap at build time and emit it to the exported `out/` folder.
export const dynamic = "force-static";

const BASE_URL = "https://tradegrowthseo.com";

// Every real route under app/. Paths are stored without a trailing slash and
// normalised below so the emitted URLs match the site's canonical format
// (trailingSlash: true), e.g. https://tradegrowthseo.com/pricing/
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/aeo", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/audit", priority: 0.9 },
  { path: "/results", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    // Root stays as the bare domain with a trailing slash; every other route
    // gets an explicit trailing slash to match the canonical URL format.
    url: path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}/`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
