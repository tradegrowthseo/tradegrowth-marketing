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
    "The AI-powered growth engine built for UK trades. AEO to get you recommended by ChatGPT and Google AI Overviews, a trade-specific CRM, done-for-you sales and a closed referral network.",
  keywords: [
    "AEO for trades",
    "answer engine optimisation UK",
    "get recommended by ChatGPT",
    "marketing for tradesmen",
    "trades marketing agency",
    "SEO for electricians",
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
  // were serving the old starter icon. The ?v=2 query busts browser caches still
  // holding it; bump it if the logo changes.
  //
  // public/favicon.ico is a byte-identical copy of public/images/favicon.ico,
  // kept only so crawlers that request the root path by convention (ignoring
  // these tags) still get the right logo. Static export can't redirect, so it
  // has to be a real file. Update both if the icon ever changes.
  icons: {
    icon: [
      { url: "/images/favicon.ico?v=2", sizes: "any" },
      { url: "/images/favicon-16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-64.png?v=2", type: "image/png", sizes: "64x64" },
    ],
    apple: { url: "/images/apple-touch-icon.png?v=2", sizes: "180x180" },
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
