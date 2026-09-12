import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import { siteSchema } from "@/lib/schema";

// Inter throughout — headings and body. Weights cover the display sizes used
// in the heroes (800) down to body copy (400).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// GA4 measurement id. Empty means the script isn't injected at all, rather
// than firing at a bad id.
const GA_MEASUREMENT_ID = "G-YJGZ12PSEN";

export const metadata: Metadata = {
  metadataBase: new URL("https://tradegrowthseo.com"),
  title: {
    default: "TradeGrowth Marketing | Marketing for Construction, Engineering & Design",
    template: "%s | TradeGrowth Marketing",
  },
  description:
    "Marketing for UK construction, engineering and design businesses. Websites, SEO, AI-search visibility and targeted advertising for architects, engineers, interior designers and construction specialists.",
  keywords: [
    "marketing for architects",
    "marketing for engineers",
    "SEO for architects",
    "SEO for structural engineers",
    "SEO for MEP engineers",
    "marketing for interior designers",
    "construction marketing agency UK",
    "website design for architects",
    "answer engine optimisation UK",
    "AI search visibility",
    "marketing for construction consultancies",
    "built environment marketing",
  ],
  openGraph: {
    siteName: "TradeGrowth Marketing",
    locale: "en_GB",
    type: "website",
    // Purpose-built 1.91:1 card. The raw logo is 963x330, which card renderers
    // letterbox or centre-crop — LinkedIn was clipping the wordmark. Regenerate
    // with `npm run og-image`.
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "TradeGrowth Marketing — marketing for construction, engineering and design",
      },
    ],
  },
  // The single source of truth for favicons. Deliberately no app/favicon.ico or
  // app/icon.* file-convention files — those take priority over this config and
  // were serving the old starter icon. The ?v=3 query busts browser caches still
  // holding an older one; bump it whenever the icons are regenerated.
  //
  // The 48/96/192/512 sizes exist for Google: it picks a search-result favicon
  // from these declarations and wants a square PNG that is a multiple of 48px.
  // The original 16/32/64 set had none, which is why search showed a generic
  // placeholder. 16 and 32 stay for browser tabs.
  //
  // public/favicon.ico is a byte-identical copy of public/images/favicon.ico,
  // kept only so crawlers that request the root path by convention (ignoring
  // these tags) still get the right logo. Static export can't redirect, so it
  // has to be a real file.
  //
  // Regenerate the whole set — both .ico files included — with:
  //   node design-assets/regenerate-favicons.js
  icons: {
    icon: [
      { url: "/images/favicon.ico?v=3", sizes: "any" },
      { url: "/images/favicon-16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-48.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/images/favicon-64.png?v=3", type: "image/png", sizes: "64x64" },
      { url: "/images/favicon-96.png?v=3", type: "image/png", sizes: "96x96" },
      { url: "/images/favicon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon-512.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/images/apple-touch-icon.png?v=3", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white antialiased">
        {/* One @graph for the whole site — see lib/schema.ts, and read the
            service-area note there before adding any address field. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#171a26] focus:font-semibold focus:px-5 focus:py-3 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3d4cf5]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Renders nothing — attaches the site-wide GA4 click listeners. */}
        <AnalyticsEvents />
        <CookieConsent />
      </body>
      {/* Gated on consent — see components/Analytics.tsx. */}
      {GA_MEASUREMENT_ID && <Analytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
