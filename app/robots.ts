import type { MetadataRoute } from "next";

// Required for `output: 'export'` — forces Next.js to statically generate
// robots.txt at build time and emit it to the exported `out/` folder.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tradegrowthseo.com/sitemap.xml",
  };
}
