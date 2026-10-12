// ─── Web3Forms delivery ───────────────────────────────────────────────
// Web3Forms posts to a fixed endpoint and authenticates with a public access
// key sent in the request body. The key is public by design — it only routes
// submissions to the pre-configured recipient email, so exposing it in
// client-side code is safe and is how the service is meant to be used.
//
// Because the site is a static export, the browser POSTs directly to Web3Forms
// and no server is involved.

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Public access key from https://web3forms.com. Public by design — it only
// routes submissions to the pre-configured recipient email. Both ContactForm
// and AuditForm read this one constant.
export const WEB3FORMS_ACCESS_KEY = "faa2e804-425f-4507-9624-302264e38e14";

export interface Web3FormsPayload {
  /** Subject line on the notification email. */
  subject: string;
  /** Honeypot — true means a bot ticked the hidden checkbox. */
  botcheck: boolean;
  [field: string]: unknown;
}

/**
 * POSTs a submission to Web3Forms. Resolves on success, throws on failure so
 * the caller can render its error state.
 */
export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<void> {
  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!res.ok || !data.success) {
    throw new Error(data.message ?? "Web3Forms rejected the submission");
  }
}

// ─── CRM capture ──────────────────────────────────────────────────────
// After Web3Forms has delivered the email, the same enquiry is also sent to
// the agency's own CRM so it becomes a contact and an opportunity with its
// source recorded. The form key only identifies the form; it is public, like
// the Web3Forms key above. This send never blocks or fails the visitor's
// submission: if the CRM is unreachable the email has already gone.

const CRM_CAPTURE = "https://crm.tradegrowthseo.com/api/capture";

const CRM_FUNNELS = {
  audit: { key: "audit-621871bd", formKey: "80248291ba84414784e9a3ca5329042c44958b7acfcd4cf8abbb59050f6722d5" },
  contact: { key: "contact-4648744d", formKey: "bdfc6ce94a9f470493b9979d43931b7f7bcbc2acd99040a6b060578aad069c91" },
} as const;

/** The campaign tags the visitor arrived with, kept for the whole visit. */
export function captureAttribution(): Record<string, string> {
  try {
    const p = new URLSearchParams(window.location.search);
    const stored = JSON.parse(sessionStorage.getItem("tg_attr") ?? "{}") as Record<string, string>;
    const now: Record<string, string> = { ...stored };
    for (const k of ["utm_source", "utm_medium", "utm_campaign"]) {
      const v = p.get(k);
      if (v) now[k] = v.slice(0, 100);
    }
    if (!now.referrer && document.referrer && !document.referrer.includes(location.hostname)) {
      now.referrer = document.referrer.slice(0, 500);
    }
    sessionStorage.setItem("tg_attr", JSON.stringify(now));
    return now;
  } catch {
    return {};
  }
}

export function sendToCrm(
  funnel: keyof typeof CRM_FUNNELS,
  fields: { name: string; email: string; phone?: string; company?: string; message?: string; service?: string },
): void {
  const f = CRM_FUNNELS[funnel];
  try {
    fetch(`${CRM_CAPTURE}/${f.key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-capture-key": f.formKey },
      body: JSON.stringify({ ...fields, ...captureAttribution() }),
      keepalive: true,
      signal: AbortSignal.timeout(8000),
    }).catch(() => undefined);
  } catch {
    /* never let the CRM affect the visitor */
  }
}
