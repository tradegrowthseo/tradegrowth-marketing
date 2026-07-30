declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Injected at runtime by the GoogleAnalytics component in app/layout.tsx.
// Optional because the GA script may not have loaded yet — or at all, if a
// blocker stops it — so every call site must use `window.gtag?.(...)`.
interface Window {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, unknown>
  ) => void;
}
