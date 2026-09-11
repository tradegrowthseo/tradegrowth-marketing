import type { Metadata } from "next";

/**
 * Per-route canonical + Open Graph URL.
 *
 * Next does NOT deep-merge `openGraph`: a page that sets it replaces the
 * layout's object outright. Setting `openGraph: { url }` on a page therefore
 * silently drops the site-wide image, siteName, locale and type — which is
 * exactly what happened here, and it renders clean in source while shipping
 * broken link previews.
 *
 * So the shared fields are declared once below and spread into every route.
 * Use `routeMeta()` rather than hand-writing `alternates`/`openGraph` on a page.
 */
const OG_SHARED = {
  siteName: "TradeGrowth Marketing",
  locale: "en_GB",
  type: "website" as const,
  images: [
    {
      url: "/images/og-card.png",
      width: 1200,
      height: 630,
      alt: "TradeGrowth Marketing — marketing for construction, engineering and design",
    },
  ],
};

/** Canonical and og:url for one route. Pass the path with its trailing slash. */
export function routeMeta(canonical: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical },
    openGraph: { ...OG_SHARED, url: canonical },
  };
}

export { OG_SHARED };
