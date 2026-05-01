"use client";
import { useState } from "react";

const services = [
  "Accounting & Bookkeeping",
  "VAT",
  "Corporate Tax",
  "Business Setup",
  "PRO Services",
  "Cash Flow Management",
  "E-Invoicing Readiness",
  "AI Portal",
  "Audit Readiness",
  "Custom Advisory",
];

const packages = [
  "Starter",
  "Compliance",
  "Growth",
  "Managed Finance",
  "AI Self-Service",
  "AI + Monthly Review",
  "AI + Accounting Support",
  "Full Managed AI Finance",
  "Not sure — recommend",
];

const businessTypes = [
  "Mainland LLC",
  "Free Zone",
  "Sole Establishment",
  "Branch Office",
  "Other",
];

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

const intents = ["Speak to team", "Book consultation", "Request custom quote", "Subscribe to AI Portal"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: in production wire this up to your handler / CRM.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink-100 bg-white p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bronze-50 border border-bronze-200 text-bronze-700 text-xl">
          ✓
        </span>
        <h3 className="mt-5 font-display text-[28px] md:text-[32px] font-semibold tracking-display text-ink-900">Thanks — we'll be in touch.</h3>
        <p className="body mt-3 max-w-md mx-auto">
          A member of our team will respond within one business day. For urgent matters, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required />
        <Field label="Company name" name="company" />
        <Field type="email" label="Email" name="email" required />
        <Field label="Phone / WhatsApp" name="phone" required placeholder="+971 ..." />

        <Select label="Emirate" name="emirate" options={emirates} />
        <Select label="Business type" name="businessType" options={businessTypes} />

        <Select label="Service of interest" name="service" options={services} />
        <Select label="Package of interest" name="package" options={packages} />

        <Field label="Monthly transaction volume (approx.)" name="volume" placeholder="e.g. 50 / month" />
        <Select label="VAT registered?" name="vatRegistered" options={["Yes", "No", "Not sure"]} />

        <div className="md:col-span-2">
          <Select label="What would you like to do?" name="intent" options={intents} />
        </div>

        <div className="md:col-span-2">
          <label className="block text-[12px] uppercase tracking-wider text-ink-400 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-ink-100 bg-bone px-4 py-3 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-ink-900 transition"
            placeholder="Tell us briefly about your business and what you need."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-[12px] text-ink-400 max-w-md">
          By submitting, you consent to be contacted by Meraki Consultants regarding your enquiry.
        </p>
        <button type="submit" className="btn-primary">
          Send enquiry <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] uppercase tracking-wider text-ink-400 mb-2">
        {label}
        {required && <span className="text-bronze-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-100 bg-bone px-4 py-3 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-ink-900 transition"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[12px] uppercase tracking-wider text-ink-400 mb-2">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-xl border border-ink-100 bg-bone px-4 py-3 text-[14.5px] text-ink-900 focus:outline-none focus:border-ink-900 transition appearance-none"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
