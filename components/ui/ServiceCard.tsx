import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
  /** Draws the gradient top-edge and a "headline service" flag. */
  headline?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
  headline = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col h-full bg-white border rounded-xl p-8 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(61,76,245,0.14)] ${
        headline ? "border-[#3d4cf5]/40" : "border-[#e6e8f2] hover:border-[#3d4cf5]/40"
      }`}
    >
      {headline && (
        <>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-brand-static" />
          <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-[#3d4cf5]">
            Headline
          </span>
        </>
      )}

      <div className="w-14 h-14 rounded-xl bg-[#eef0ff] flex items-center justify-center mb-5 transition-colors group-hover:bg-[#e2e5ff]">
        <span className="text-[#3d4cf5]">{icon}</span>
      </div>
      <h3 className="text-[#171a26] font-bold text-xl mb-3 group-hover:text-[#3d4cf5] transition-colors">
        {title}
      </h3>
      <p className="text-[#8a90a0] text-sm leading-relaxed mb-5">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#565c6b]">
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
      )}
      <span className="flex items-center gap-1.5 text-[#3d4cf5] text-sm font-semibold mt-auto group-hover:gap-2.5 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
