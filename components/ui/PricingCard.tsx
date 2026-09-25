import Link from "next/link";

/**
 * A package card. Used for the three monthly tiers on /pricing and in the
 * home-page teaser. The featured card is wrapped in a gradient hairline via
 * `.border-gradient-brand` — the wrapper supplies the 1px border, the inner
 * div repaints the middle white.
 */
export interface PricingCardProps {
  eyebrow: string;
  name: string;
  price: string;
  /** Text after the price, e.g. "/ month" or "fixed". */
  priceSuffix?: string;
  /** Term and payment line under the price. */
  meta: string;
  /** One more line under the meta, e.g. the annual option. */
  note?: string;
  best: string;
  includesHeading?: string;
  features: string[];
  /** Named extras. Rendered under the features with their own heading. */
  bonuses?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  /** Small pill above the name, e.g. "Recommended". */
  badge?: string;
}

const Tick = () => (
  <svg
    className="w-4 h-4 text-[#3d4cf5] flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function PricingCard({
  eyebrow,
  name,
  price,
  priceSuffix,
  meta,
  note,
  best,
  includesHeading,
  features,
  bonuses,
  ctaLabel = "Start with the audit",
  ctaHref = "/audit",
  featured = false,
  badge,
}: PricingCardProps) {
  const card = (
    <div
      className={`relative flex flex-col h-full bg-white rounded-xl p-8 ${
        featured
          ? "rounded-[11px] shadow-[0_12px_50px_rgba(61,76,245,0.16)]"
          : "border border-[#e6e8f2]"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand-static text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(61,76,245,0.4)]">
          {badge}
        </span>
      )}

      <div className={badge ? "pt-3" : ""}>
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3d4cf5]">
          {eyebrow}
        </span>
        <h3 className="text-[#171a26] font-bold text-2xl mt-2 mb-4">{name}</h3>
      </div>

      <div className="mb-1 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold text-[#171a26] tracking-tight">{price}</span>
        {priceSuffix && (
          <span className="text-[#8a90a0] text-sm font-medium">{priceSuffix}</span>
        )}
      </div>
      <p className={`text-[#8a90a0] text-sm ${note ? "mb-1.5" : "mb-5"}`}>{meta}</p>
      {note && <p className="text-[#3d4cf5] text-sm font-semibold mb-5">{note}</p>}

      <p className="text-[#565c6b] text-sm leading-relaxed mb-6 pb-6 border-b border-[#e6e8f2]">
        {best}
      </p>

      {includesHeading && (
        <p className="text-[#171a26] text-sm font-semibold mb-4">{includesHeading}</p>
      )}

      <ul className="space-y-3 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
            <Tick />
            {f}
          </li>
        ))}
      </ul>

      {bonuses && bonuses.length > 0 && (
        <div className="mb-8 rounded-lg bg-[#f6f7fc] border border-[#e6e8f2] p-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2.5">
            Included extras
          </p>
          <ul className="space-y-2.5">
            {bonuses.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={ctaHref}
        className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg transition-all text-sm mt-auto ${
          featured
            ? "bg-gradient-brand text-white shadow-[0_8px_24px_rgba(61,76,245,0.3)]"
            : "border border-[#e6e8f2] text-[#171a26] hover:border-[#3d4cf5] hover:text-[#3d4cf5]"
        }`}
      >
        {ctaLabel}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );

  return featured ? (
    <div className="border-gradient-brand rounded-xl h-full">{card}</div>
  ) : (
    <div className="h-full">{card}</div>
  );
}
