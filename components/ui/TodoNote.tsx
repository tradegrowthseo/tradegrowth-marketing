interface TodoNoteProps {
  children: React.ReactNode;
  /** Short label for the amber pill — e.g. "Placeholder", "To replace". */
  label?: string;
  className?: string;
}

/**
 * A visible placeholder flag.
 *
 * These are meant to be SEEN — they mark content that is provisional (invented
 * case-study figures, stock social links, forms that aren't wired to a backend)
 * so nothing provisional can go live unnoticed. Deliberately amber and
 * un-branded so it never reads as part of the design.
 *
 * ⚠️ Every one of these must be removed before the site goes live.
 * Find them all with: grep -rn "TodoNote" app components
 */
export default function TodoNote({ children, label = "Placeholder", className = "" }: TodoNoteProps) {
  return (
    <div
      className={`flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-lg px-4 py-3 ${className}`}
    >
      <svg
        className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <div className="text-sm text-amber-900 leading-relaxed">
        <span className="font-bold uppercase tracking-wide text-[11px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded mr-2 align-[1px]">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}
