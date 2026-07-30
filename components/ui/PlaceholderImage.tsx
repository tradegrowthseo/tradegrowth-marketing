interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1", "3/2"
  className?: string;
  hint?: string;
}

/**
 * Stand-in for imagery we don't have yet (client photos, filmed testimonials).
 * Neutral grey with a grid pattern so it never gets mistaken for finished art.
 */
export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
  hint,
}: PlaceholderImageProps) {
  // Pattern ids are document-global; derive a safe unique one from the label.
  const patternId = `ph-grid-${label.replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <div
      className={`relative w-full bg-[#eceef6] flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#e6e8f2] ${className}`}
      style={{ aspectRatio }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#8a90a0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <svg
        className="w-10 h-10 text-[#8a90a0] mb-3 relative"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 6.75h.008v.008H18V6.75zM2.25 19.5V4.5A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5z"
        />
      </svg>

      <span className="relative text-[#8a90a0] text-sm font-semibold text-center px-4">{label}</span>
      {hint && (
        <span className="relative text-[#8a90a0]/80 text-xs mt-1 text-center px-4">{hint}</span>
      )}
    </div>
  );
}
