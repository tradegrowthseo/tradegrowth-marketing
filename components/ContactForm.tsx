"use client";

import { useState } from "react";
import { submitToWeb3Forms, WEB3FORMS_ENDPOINT, WEB3FORMS_ACCESS_KEY } from "@/lib/forms";

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  trade: string;
  message: string;
}

// Trades first — still the primary audience — then local service businesses.
// The submitted field is named `trade` for continuity with existing enquiry
// emails; the visible label reads "trade or service".
const sectorOptions = [
  "Electrician",
  "Plumber / heating engineer",
  "Gas engineer",
  "Roofer",
  "Builder",
  "Joiner / carpenter",
  "Plasterer",
  "Kitchen / bathroom fitter",
  "Painter & decorator",
  "EV charger installer",
  "Landscaper / garden care",
  "Cleaning company",
  "Mobile mechanic",
  "Salon / barber",
  "Personal trainer / gym",
  "Pest control / property care",
  "Removals / man with a van",
  "Other trade or service",
];

// Delivery goes through Web3Forms — endpoint, access key and the POST itself
// all live in lib/forms.ts so this form and AuditForm share one configuration.

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    phone: "",
    trade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const elements = e.currentTarget.elements;

    // Spam honeypot: real users never see or tick this field.
    const botcheck =
      (elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false;

    // Subject lives in a hidden input so the email subject line can be edited
    // in the markup without touching this handler.
    const subject =
      (elements.namedItem("subject") as HTMLInputElement | null)?.value ??
      "New enquiry from TradeGrowth Marketing website";

    try {
      await submitToWeb3Forms({
        subject,
        botcheck,
        name: form.name,
        business: form.business || undefined,
        email: form.email,
        phone: form.phone || undefined,
        trade: form.trade || undefined,
        message: form.message,
      });

      setForm({ name: "", business: "", email: "", phone: "", trade: "", message: "" });

      // GA4 conversion — only fires on a confirmed successful send.
      window.gtag?.("event", "generate_lead", { form_name: "contact" });

      setSubmitted(true);
    } catch {
      setError(
        "Sorry, something went wrong sending your enquiry. Please try again, or email us directly at contact@tradegrowthseo.com."
      );
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-lg px-4 py-3 text-[#171a26] text-sm placeholder-[#8a90a0] focus:outline-none focus:border-[#3d4cf5] focus:ring-2 focus:ring-[#3d4cf5]/20 transition";
  const labelClass = "block text-[#171a26] text-sm font-semibold mb-1.5";

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-[#eef0ff] flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-[#3d4cf5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-[#171a26] font-bold text-xl mb-2">Message sent</h3>
        <p className="text-[#8a90a0]">
          Thanks — we&apos;ll be in touch within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={WEB3FORMS_ENDPOINT}
      method="POST"
      className="space-y-5"
    >
      {/* Web3Forms routing — the access key is public by design (see lib/forms.ts) */}
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="New enquiry from TradeGrowth Marketing website"
      />

      {/* Spam honeypot — hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-[#3d4cf5]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Dave Smith"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            value={form.business}
            onChange={handleChange}
            placeholder="Smith Electrical Ltd"
            className={field}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-[#3d4cf5]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.co.uk"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 900000"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="trade" className={labelClass}>
          Your trade or service
        </label>
        <select
          id="trade"
          name="trade"
          value={form.trade}
          onChange={handleChange}
          className={`${field} text-[#171a26]`}
        >
          <option value="">Select your trade or service…</option>
          {sectorOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-[#3d4cf5]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business: where you work, what you'd like more of, and what you've tried so far…"
          className={`${field} resize-none`}
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          <svg
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-brand disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-[#8a90a0] text-xs text-center">
        {/* TODO: link a privacy policy once written */}
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
