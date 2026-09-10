import { DraftingCompass, Zap, Building2, Sofa } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { primaryAudiences, relatedAudiences } from "@/lib/audiences";

// Shared by the home page, /about and /contact so the four primary disciplines
// are described the same way everywhere. The related professions render as a
// single grouped list beneath the cards — the brief is deliberately one strong
// "who we work with" block, not a long list repeated down every page.
const iconMap: Record<string, React.ReactNode> = {
  architects: <DraftingCompass className="w-6 h-6" strokeWidth={1.8} />,
  mep: <Zap className="w-6 h-6" strokeWidth={1.8} />,
  structural: <Building2 className="w-6 h-6" strokeWidth={1.8} />,
  "interior-design": <Sofa className="w-6 h-6" strokeWidth={1.8} />,
};

export default function AudienceCards({
  /** Cards sit on white by default; pass `alt` when the section is #f6f7fc. */
  alt = false,
  showRelated = true,
}: {
  alt?: boolean;
  showRelated?: boolean;
}) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {primaryAudiences.map((a, i) => (
          <FadeIn key={a.id} delay={i * 0.08} className="h-full">
            <div
              className={`h-full border border-[#e6e8f2] rounded-xl p-7 ${
                alt ? "bg-white" : "bg-[#f6f7fc]"
              }`}
            >
              <span
                className={`w-12 h-12 rounded-xl border border-[#e6e8f2] flex items-center justify-center text-[#3d4cf5] mb-5 ${
                  alt ? "bg-[#f6f7fc]" : "bg-white"
                }`}
              >
                {iconMap[a.id]}
              </span>
              <h3 className="text-[#171a26] font-bold text-lg mb-1.5 leading-snug">{a.name}</h3>
              <p className="text-[#8a90a0] text-xs font-medium mb-4">{a.summary}</p>
              <p className="text-[#565c6b] text-sm leading-relaxed">{a.benefit}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {showRelated && (
        <FadeIn delay={0.2}>
          <div
            className={`mt-8 rounded-xl border border-[#e6e8f2] p-7 ${
              alt ? "bg-white" : "bg-[#f6f7fc]"
            }`}
          >
            <h3 className="text-[#171a26] font-bold text-base mb-1.5">
              We also work with
            </h3>
            <p className="text-[#8a90a0] text-sm mb-5">
              Related consultancies and contractors across the built environment.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
              {relatedAudiences.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-1.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}
    </>
  );
}
