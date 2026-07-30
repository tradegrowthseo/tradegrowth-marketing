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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
