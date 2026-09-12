import type { MetadataRoute } from "next";
import sitemapDates from "@/lib/sitemap-dates.json";

// Required for `output: 'export'` — forces Next.js to statically generate
// the sitemap at build time and emit it to the exported `out/` folder.
export const dynamic = "force-static";

const BASE_URL = "https://tradegrowthseo.com";

// Per-page dates, generated from git history by scripts/generate-sitemap-dates.mjs
// and committed. Stamping every URL with the build time — the framework default —
// claims the whole site changed on every deploy, and Google discounts a lastmod
// it cannot trust. Regenerate with `npm run sitemap-dates` before committing
// content changes.
const lastModifiedFor = (path: string): Date => {
  const iso = (sitemapDates as Record<string, string>)[path];
  if (!iso) {
    throw new Error(
      `No committed lastmod for "${path}". Run \`npm run sitemap-dates\` and commit the result.`
    );
  }
  return new Date(iso);
};

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
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    // Root stays as the bare domain with a trailing slash; every other route
    // gets an explicit trailing slash to match the canonical URL format.
    url: path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}/`,
    lastModified: lastModifiedFor(path),
    changeFrequency: "monthly",
    priority,
  }));
}
