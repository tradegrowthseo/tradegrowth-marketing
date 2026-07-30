import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#0f1220] min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative text-center px-6">
        <div className="text-[#8b93ff] font-bold text-sm tracking-widest uppercase mb-4">404</div>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-lg transition-all shadow-[0_8px_30px_rgba(61,76,245,0.35)]"
          >
            Back to home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white/85 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a free AEO audit
          </Link>
        </div>
      </div>
    </section>
  );
}
