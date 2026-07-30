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
