import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  children?: React.ReactNode;
  /** Unique per page — SVG pattern ids are global, so duplicates would collide. */
  patternId: string;
}

/**
 * The dark page hero used by every route except the home page: faint grid
 * pattern, a blurred brand-colour bloom top-right, and a violet counter-bloom
 * bottom-left so the gradient reads across the whole band.
 */
export default function PageHero({ eyebrow, title, sub, children, patternId }: PageHeroProps) {
  return (
    <section className="bg-[#0f1220] pt-40 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#3d4cf5] opacity-[0.18] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] bg-[#5b1cf0] opacity-[0.16] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionLabel light>{eyebrow}</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl tracking-tight leading-[1.08]">
            {title}
          </h1>
          <p className="text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed">{sub}</p>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
