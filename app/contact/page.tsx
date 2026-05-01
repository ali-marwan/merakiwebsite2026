import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Speak to Meraki Consultants",
  description:
    "Speak to Meraki Consultants about UAE accounting, VAT, corporate tax, business setup, e-invoicing readiness, or AI Portal subscriptions.",
};

export default function ContactPage() {
  const wa = brand.whatsapp.replace(/\D/g, "");
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak to our team."
        description="Tell us about your business. We'll suggest the right package, scope a custom solution, or book a consultation — whichever fits."
      />

      <Section>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <ContactCard
              label="WhatsApp"
              value={brand.phoneDisplay}
              href={`https://wa.me/${wa}?text=${encodeURIComponent("Hi Meraki — I'd like to learn more.")}`}
              accent
            />
            <ContactCard
              label="Email"
              value={brand.email}
              href={`mailto:${brand.email}`}
            />
            <ContactCard
              label="Phone"
              value={brand.phoneDisplay}
              href={`tel:${brand.whatsapp}`}
            />
            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-[12px] uppercase tracking-wider text-ink-400">Office</p>
              <p className="mt-2 text-[15px] text-ink-900">{brand.address}</p>
              <p className="mt-3 text-[13px] text-ink-400">By appointment.</p>
            </div>
            <div className="rounded-2xl border border-bronze-200 bg-bronze-50/50 p-6">
              <p className="font-display text-[20px] text-ink-900">Working hours</p>
              <ul className="mt-3 space-y-1.5 text-[14px] text-ink-700">
                <li className="flex items-center justify-between"><span>Mon — Fri</span><span>09:00 — 18:00</span></li>
                <li className="flex items-center justify-between"><span>Saturday</span><span>10:00 — 14:00</span></li>
                <li className="flex items-center justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  accent = false,
}: {
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      className={`block rounded-2xl border p-6 transition-all ${
        accent
          ? "border-bronze-200 bg-bronze-50/40 hover:bg-bronze-50"
          : "border-ink-100 bg-white hover:border-ink-900"
      }`}
    >
      <p className="text-[12px] uppercase tracking-wider text-ink-400">{label}</p>
      <p className="mt-2 font-display text-[24px] text-ink-900">{value}</p>
      <p className="mt-3 inline-flex items-center gap-2 text-[13px] text-bronze-700">
        Open <span aria-hidden>→</span>
      </p>
    </a>
  );
}
