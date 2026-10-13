"use client";

import { useState } from "react";
import { sendToCrm, submitToWeb3Forms } from "@/lib/forms";

// The Local Search Check: the free first step on the Local Practice programme.
// Same delivery as AuditForm (Web3Forms, then the CRM), different questions:
// the service a homeowner would search for, and the town they would search in.

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  town: string;
  website: string;
}

const serviceOptions = [
  "Architect — extensions, lofts, new homes",
  "Structural engineer — beams, lofts, extensions",
  "Building surveyor — homebuyer and condition surveys",
  "Party wall surveyor",
  "Planning consultant — householder applications",
  "Interior designer — homes",
  "Design and build — domestic",
  "Garden or landscape design — private clients",
  "Other work for homeowners",
];

export default function LocalCheckForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    town: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const botcheck =
      (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false;

    try {
      await submitToWeb3Forms({
        subject: "Local Search Check request — tradegrowthseo.com",
        botcheck,
        ...form,
      });

      sendToCrm("audit", {
        name: form.name, email: form.email, phone: form.phone, company: form.business,
        service: "Local Search Check",
        message: ["Service: " + form.service, "Town: " + form.town, "Website: " + form.website].join(". "),
      });

      setForm({ name: "", business: "", email: "", phone: "", service: "", town: "", website: "" });
      window.gtag?.("event", "generate_lead", { form_name: "local_search_check" });
      setSubmitted(true);
    } catch {
      setError(
        "Sorry, something went wrong sending your request. Please try again, or email us directly at contact@tradegrowthseo.com."
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
      <div className="text-center py-14">
        <div className="w-16 h-16 rounded-full bg-gradient-brand-static flex items-center justify-center mx-auto mb-6 shadow-[0_8px_24px_rgba(61,76,245,0.35)]">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-[#171a26] font-bold text-2xl mb-3">Check requested</h3>
        <p className="text-[#565c6b] max-w-md mx-auto leading-relaxed">
          We&apos;ll run the searches a homeowner in {" "}
          your area would run, and email your five-page report within a few working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lsc-name" className={labelClass}>
            Your name <span className="text-[#3d4cf5]">*</span>
          </label>
          <input id="lsc-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Dave Smith" className={field} />
        </div>
        <div>
          <label htmlFor="lsc-business" className={labelClass}>
            Practice name <span className="text-[#3d4cf5]">*</span>
          </label>
          <input id="lsc-business" name="business" type="text" required value={form.business} onChange={handleChange} placeholder="Smith Structural Design Ltd" className={field} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lsc-email" className={labelClass}>
            Email address <span className="text-[#3d4cf5]">*</span>
          </label>
          <input id="lsc-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@yourpractice.co.uk" className={field} />
        </div>
        <div>
          <label htmlFor="lsc-phone" className={labelClass}>
            Phone number
          </label>
          <input id="lsc-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="07700 900000" className={field} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lsc-service" className={labelClass}>
            The work a homeowner would search for <span className="text-[#3d4cf5]">*</span>
          </label>
          <select id="lsc-service" name="service" required value={form.service} onChange={handleChange} className={`${field} text-[#171a26] text-ellipsis`}>
            <option value="">Select the service…</option>
            {serviceOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lsc-town" className={labelClass}>
            The town they would search in <span className="text-[#3d4cf5]">*</span>
          </label>
          <input id="lsc-town" name="town" type="text" required value={form.town} onChange={handleChange} placeholder="Preston, or Chester" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="lsc-website" className={labelClass}>
          Your website
        </label>
        <input id="lsc-website" name="website" type="text" value={form.website} onChange={handleChange} placeholder="yourpractice.co.uk — or leave blank if you don't have one" className={field} />
      </div>

      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-brand disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
      >
        {loading ? "Sending…" : "Send me my free Local Search Check"}
      </button>

      <p className="text-[#8a90a0] text-xs text-center">
        Free, no obligation, and no card details. We&apos;ll only use your details to send the
        check and follow it up once. See our{" "}
        <a href="/privacy/" className="text-[#3d4cf5] font-semibold hover:underline">privacy policy</a>.
      </p>
    </form>
  );
}
