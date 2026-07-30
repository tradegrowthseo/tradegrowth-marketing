import Link from "next/link";
import type { Tier } from "@/lib/pricing";

/**
 * A monthly package card. The featured tier (Standard) is wrapped in a
 * gradient hairline via `.border-gradient-brand` — the wrapper supplies the 1px
 * border, the inner div repaints the middle white.
 */
export default function PricingCard({ tier }: { tier: Tier }) {
  const card = (
    <div
      className={`relative flex flex-col h-full bg-white rounded-xl p-8 ${
        tier.featured
          ? "rounded-[11px] shadow-[0_12px_50px_rgba(61,76,245,0.16)]"
          : "border border-[#e6e8f2]"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand-static text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(61,76,245,0.4)]">
          Most popular
        </span>
      )}

      <div className={tier.featured ? "pt-3" : ""}>
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3d4cf5]">
          {tier.tagline}
        </span>
        <h3 className="text-[#171a26] font-bold text-2xl mt-2 mb-4">{tier.name}</h3>
      </div>

      <div className="mb-1 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold text-[#171a26] tracking-tight">{tier.monthly}</span>
        <span className="text-[#8a90a0] text-sm font-medium">/ month</span>
      </div>
      <p className="text-[#8a90a0] text-sm mb-5">
        + {tier.setup} · {tier.minimum}
      </p>

      <p className="text-[#565c6b] text-sm leading-relaxed mb-6 pb-6 border-b border-[#e6e8f2]">
        {tier.best}
      </p>

      {tier.includesBelow && (
        <p className="text-[#171a26] text-sm font-semibold mb-4">{tier.includesBelow}</p>
      )}

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
            <svg
              className="w-4 h-4 text-[#3d4cf5] flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg transition-all text-sm mt-auto ${
          tier.featured
            ? "bg-gradient-brand text-white shadow-[0_8px_24px_rgba(61,76,245,0.3)]"
            : "border border-[#e6e8f2] text-[#171a26] hover:border-[#3d4cf5] hover:text-[#3d4cf5]"
        }`}
      >
        Get started
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );

  return tier.featured ? (
    <div className="border-gradient-brand rounded-xl h-full">{card}</div>
  ) : (
    <div className="h-full">{card}</div>
  );
}
