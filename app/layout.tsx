import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "TradeGrowth Marketing | Get Found, Get Booked, Get Recommended by AI",
    template: "%s | TradeGrowth Marketing",
  },
  description:
    "The AI-powered growth engine for UK trades and local service businesses. AEO to get you recommended by ChatGPT and Google AI Overviews, an industry-specific CRM, done-for-you sales and a closed referral network.",
  keywords: [
    "AEO for trades",
    "AEO for local service businesses",
    "answer engine optimisation UK",
    "get recommended by ChatGPT",
    "marketing for tradesmen",
    "trades marketing agency",
    "marketing for service businesses",
    "SEO for electricians",
    "SEO for cleaning companies",
    "CRM for trades",
    "AI voice agent for trades",
    "local SEO UK",
  ],
  openGraph: {
    siteName: "TradeGrowth Marketing",
    locale: "en_GB",
    type: "website",
    images: ["/images/tradegrowth-marketing-logo.png"],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
