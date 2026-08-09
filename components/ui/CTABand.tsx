import Link from "next/link";
import FadeIn from "./FadeIn";

interface CTABandProps {
  heading?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  heading = "Find out if the AI is recommending you",
  sub = "Get a free AEO audit: we'll scan how ChatGPT, Perplexity, Gemini and Google AI Overviews answer when someone asks for what you do in your area — and send you the report.",
  primaryLabel = "Get my free AEO audit",
  primaryHref = "/audit",
  secondaryLabel = "See pricing",
  secondaryHref = "/pricing",
}: CTABandProps) {
  return (
    <section className="bg-[#0f1220] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {heading}
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto">{sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-8 py-4 rounded-lg transition-all text-base shadow-[0_8px_30px_rgba(61,76,245,0.35)]"
            >
              {primaryLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white/85 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              {secondaryLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
