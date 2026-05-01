import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactCTA } from "@/components/ContactCTA";
import { PackageCard } from "@/components/PackageCard";
import { allPackages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages — Accounting, Tax, Setup & AI Portal Plans",
  description:
    "Compare Meraki packages: monthly accounting, VAT and corporate tax, business setup, and AI portal subscriptions. Transparent starting prices for UAE businesses.",
};

const sections = [
  {
    key: "accounting",
    name: "Accounting Packages",
    eyebrow: "Manage",
    description: "Monthly accounting and bookkeeping plans, from micro-business basics to a full outsourced finance team.",
    items: allPackages.accounting,
  },
  {
    key: "tax",
    name: "Tax Packages",
    eyebrow: "Comply",
    description: "VAT, corporate tax, and tax health support — built around UAE FTA processes and timelines.",
    items: allPackages.tax,
  },
  {
    key: "setup",
    name: "Business Setup Packages",
    eyebrow: "Start",
    description: "Mainland and free zone setup with PRO services, banking coordination, and accounting bundled where useful.",
    items: allPackages.setup,
  },
  {
    key: "ai",
    name: "AI Portal Packages",
    eyebrow: "Automate",
    description: "Subscribe to the Meraki AI Portal with the level of human review and accounting support that fits.",
    items: allPackages.ai,
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Choose the level of support your business needs."
        description="Transparent starting prices. Clear scope. Custom quotes when your business needs more."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">Request Custom Quote <span aria-hidden>→</span></Link>
          <Link href="#accounting" className="btn-ghost">Browse plans ↓</Link>
        </div>
      </PageHero>

      {/* package navigation */}
      <div className="border-b border-ink-100 bg-white sticky top-[72px] z-30 backdrop-blur">
        <div className="container-x flex flex-wrap items-center gap-2 py-3 text-[13px]">
          <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mr-2">Categories</span>
          {sections.map((s) => (
            <a
              key={s.key}
              href={`#${s.key}`}
              className="rounded-full border border-ink-100 px-3 py-1 text-ink-700 hover:bg-ink-900 hover:text-bone hover:border-ink-900 transition"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>

      {sections.map((s, idx) => (
        <Section key={s.key} id={s.key} tone={idx % 2 === 0 ? "default" : "sand"} className="scroll-mt-32">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="heading-md mt-3">{s.name}</h2>
              <p className="body mt-3 max-w-2xl">{s.description}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <Link href="/contact" className="btn-ghost">Need a custom mix? <span aria-hidden>→</span></Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.items.map((p) => (
              <PackageCard
                key={p.name}
                name={p.name}
                best={p.best}
                price={p.price}
                includes={p.includes}
                excludes={p.excludes}
                featured={p.featured}
                cta={p.featured ? "Subscribe" : "Enquire"}
              />
            ))}
          </div>
        </Section>
      ))}

      <Section tone="default">
        <div className="rounded-2xl border border-ink-100 bg-white p-8 md:p-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow">Important note on pricing</p>
              <h3 className="font-display text-[26px] md:text-[32px] font-semibold tracking-display mt-3 text-ink-900">
                Starting prices are transparent. Final pricing is shaped by your business.
              </h3>
              <p className="body mt-3 max-w-2xl">
                Final pricing depends on transaction volume, VAT status, number of employees, reporting requirements, and service scope. Speak to our team for a tailored quote — we'll match the package to your reality, not the other way around.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link href="/contact" className="btn-primary">Request Custom Quote <span aria-hidden>→</span></Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
