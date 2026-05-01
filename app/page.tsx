import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { PackageCard } from "@/components/PackageCard";
import { ProcessStep } from "@/components/ProcessStep";
import { AssistantMockup } from "@/components/AssistantMockup";
import { ContactCTA } from "@/components/ContactCTA";
import {
  serviceStrip,
  riskCards,
  pillars,
  packagePreview,
  whyMeraki,
  howItWorks,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 2 — Service strip */}
      <div className="border-y border-ink-100 bg-white">
        <div className="container-x py-6 flex flex-wrap items-center gap-x-10 gap-y-3 justify-center lg:justify-between text-[12px] font-medium uppercase tracking-[0.2em] text-ink-400">
          {serviceStrip.map((s, i) => (
            <span key={s} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span className="hidden lg:inline-block h-1 w-1 rounded-full bg-ink-200" />
              )}
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Brand anchor — One system. One team. One standard. */}
      <BrandAnchor />

      {/* 3 — Problem */}
      <Section tone="default">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="The problem"
              title={
                <>
                  Cheap accounting can become<br className="hidden md:block" />{" "}
                  expensive.
                </>
              }
              description="Many UAE businesses try to save on accounting. Then weak records, missing invoices, incorrect VAT submissions, and poor cash-flow tracking show up at the wrong time — usually right before a deadline or a review."
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {riskCards.map((r) => (
                <div key={r.title} className="card p-7 card-hover">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
                    <h3 className="font-display text-[20px] md:text-[21px] font-semibold tracking-display text-ink-900">
                      {r.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14.5px] text-ink-600 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4 — Solution */}
      <Section tone="sand">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeader
              eyebrow="The Meraki system"
              title="One connected system for finance, tax, and compliance."
              description="Meraki brings the work into one structured flow: collect records, categorise documents, manage submissions, review compliance, report performance, and support decision-making. One team. One workflow."
            />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <Link href="/services" className="btn-secondary">
              View All Services <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <WorkflowGraphic />
      </Section>

      {/* 5 — Service Pillars */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Five pillars, one connected workflow."
          description="Each pillar can stand alone — but their value compounds when run as one system."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <ServiceCard
              key={p.key}
              index={`0${i + 1}`}
              name={p.name}
              summary={p.summary}
              items={p.items}
              href={`/services#${p.key}`}
            />
          ))}
          <Link
            href="/services"
            className="card card-hover p-8 md:p-9 flex flex-col justify-between bg-ink-900 text-bone border-ink-700 group hover:!border-bronze-400/50"
          >
            <div>
              <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">
                Connected
              </p>
              <h3 className="font-display text-[26px] md:text-[28px] font-semibold tracking-display mt-4 text-bone">
                Pillars work together.
              </h3>
              <p className="text-[14.5px] text-ink-200 mt-3 leading-relaxed">
                The same team that sets you up handles your monthly accounts,
                files your VAT, prepares your reports, and powers your Meraki
                AI workflow.
              </p>
            </div>
            <span className="mt-7 inline-flex items-center gap-2 text-bronze-300 text-[14px] font-medium">
              See full services list <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </Section>

      {/* 6 — Packages preview */}
      <Section tone="sand">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <SectionHeader
              eyebrow="Packages"
              title="Choose the level of support your business needs."
              description="Transparent starting prices. Clear scope. Custom quotes when your business needs more."
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Link href="/packages" className="btn-secondary">
              View All Packages <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {packagePreview.map((p) => (
            <PackageCard
              key={p.name}
              name={p.name}
              badge={p.badge}
              price={p.price}
              includes={p.points}
              featured={p.featured}
              cta={p.cta}
            />
          ))}
        </div>
        <p className="mt-10 text-[12.5px] text-ink-400 text-center">
          Final pricing depends on transaction volume, VAT status, employees,
          reporting and scope.
        </p>
      </Section>

      {/* 7 — E-Invoicing */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeader
              eyebrow="E-Invoicing readiness"
              title="Prepare your business for UAE E-Invoicing."
              description="Meraki helps companies review tax invoice formats, digital record workflows, accounting software readiness, and document processes — before e-invoicing becomes operationally critical."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/e-invoicing" className="btn-primary">
                Request Readiness Review <span aria-hidden>→</span>
              </Link>
              <Link href="/e-invoicing" className="btn-ghost">
                Learn more
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <EInvoiceVisual />
          </div>
        </div>
      </Section>

      {/* 8 — Meraki AI */}
      <Section tone="ink">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">
              Meraki AI
            </p>
            <h2 className="heading-md mt-5 text-bone text-balance">
              Meraki AI: Your UAE Invoice Compliance Copilot.
            </h2>
            <p className="body-lg mt-6 text-ink-200 text-pretty">
              AI-powered invoice review, VAT checking, tax categorisation, and
              e-invoicing readiness — built to work with your existing
              accounting systems.
            </p>
            <p className="body mt-5 text-ink-200 text-pretty prose-readable">
              Meraki AI helps SMEs, business owners, accountants, and admin
              teams review invoices before they become accounting, VAT, or
              compliance problems. Upload invoices, receipts, supplier
              documents, quotations, LPOs, emails, or WhatsApp screenshots.
              Meraki AI extracts the key details, checks for missing
              information, flags VAT risks, and prepares a clear review report
              for accountant approval.
            </p>
            <div className="mt-6 rounded-xl border border-bronze-400/40 bg-bronze-500/10 px-5 py-4">
              <p className="font-display text-[15px] font-semibold tracking-display text-bronze-300 leading-relaxed">
                Meraki AI does not replace your accounting software. It works
                with your accounting system as a compliance and intelligence
                layer.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/meraki-ai" className="btn-accent">
                Explore Meraki AI <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact?topic=invoice-review"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-700 bg-transparent px-7 py-[14px] text-[14.5px] font-medium text-bone transition-all hover:bg-bone hover:text-ink-900"
              >
                Start Invoice Review <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="btn-ghost text-ink-200 hover:bg-ink-900 hover:text-bone"
              >
                Speak to Our Team
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  title: "Invoice & VAT review",
                  body: "TRN, VAT amount, sequence, supplier validation.",
                },
                {
                  title: "Duplicate detection",
                  body: "Catches duplicates before they hit your books.",
                },
                {
                  title: "Tax categorisation",
                  body: "Suggested categories for VAT and corporate tax.",
                },
                {
                  title: "Works with your stack",
                  body: "Zoho, QuickBooks, Xero, Tally, or Excel.",
                },
              ].map((f) => (
                <li
                  key={f.title}
                  className="rounded-xl border border-ink-700 bg-ink-900 p-5"
                >
                  <p className="text-[14.5px] text-bone font-semibold">
                    {f.title}
                  </p>
                  <p className="text-[13px] text-ink-200 mt-1.5 leading-relaxed">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <AssistantMockup />
          </div>
        </div>
      </Section>

      {/* 9 — Why Meraki */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="Why Meraki"
          title="Built for UAE businesses that want one team behind their numbers."
          description="Not the cheapest. Not the largest. The most structured option for businesses that take their finance and compliance seriously."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyMeraki.map((w, i) => (
            <div key={w.title} className="card p-8 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">
                  0{i + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
              </div>
              <h3 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display mt-4 text-ink-900">
                {w.title}
              </h3>
              <p className="text-[14.5px] text-ink-600 mt-3 leading-relaxed">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 — How it works */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeader
              eyebrow="How it works"
              title="From first conversation to monthly clarity."
              description="A clear process — no guesswork about who handles what."
            />
          </div>
          <div className="col-span-12 lg:col-span-8">
            {howItWorks.map((s, i) => (
              <ProcessStep
                key={s.step}
                step={s.step}
                title={s.title}
                body={s.body}
                isLast={i === howItWorks.length - 1}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* 11 — Final CTA */}
      <ContactCTA />
    </>
  );
}

function BrandAnchor() {
  return (
    <section className="bg-bone border-b border-ink-100">
      <div className="container-x py-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-bold tracking-display-tight text-ink-900 leading-[1.02]">
            One <span className="text-bronze-500">system</span>.<br />
            One <span className="text-bronze-500">team</span>.<br />
            One <span className="text-bronze-500">standard</span>.
          </h2>
          <p className="body-lg max-w-md md:text-right">
            A single accountable team running setup, accounting, tax,
            compliance, and AI-assisted workflows for UAE businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkflowGraphic() {
  const nodes = ["Start", "Record", "Comply", "Control", "Automate", "Review"];
  return (
    <div className="mt-14 rounded-2xl border border-ink-100 bg-white p-7 md:p-10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
        {nodes.map((n, i) => (
          <div key={n} className="relative">
            <div className="rounded-xl border border-ink-100 bg-bone px-4 py-5 text-center">
              <span className="font-mono text-[10px] text-bronze-500">
                0{i + 1}
              </span>
              <p className="font-display text-[18px] md:text-[19px] font-semibold tracking-display mt-1 text-ink-900">
                {n}
              </p>
            </div>
            {i < nodes.length - 1 && (
              <span
                className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 h-6 w-5 items-center justify-center text-ink-200"
                aria-hidden
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-7 grid grid-cols-3 gap-3 text-[12.5px] text-ink-400 font-medium">
        <p>One workflow</p>
        <p className="text-center">One team</p>
        <p className="text-right">One standard</p>
      </div>
    </div>
  );
}

function EInvoiceVisual() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[28px] bg-radial-fade blur-2xl opacity-70"
        aria-hidden
      />
      <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-8 shadow-soft">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
            Tax Invoice — preview
          </p>
          <span className="chip-accent">Compliance ready</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-[12.5px]">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-ink-400">
              Issuer
            </p>
            <p className="text-ink-900 font-medium">Your Company LLC</p>
            <p className="text-ink-400 text-[11px]">TRN 100123456700003</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-ink-400">
              Invoice
            </p>
            <p className="text-ink-900 font-mono">INV-2026-0241</p>
            <p className="text-ink-400 text-[11px]">03 May 2026</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-ink-100 overflow-hidden">
          <div className="grid grid-cols-12 bg-sand text-[11px] font-medium text-ink-400 px-3.5 py-2.5">
            <span className="col-span-6">Description</span>
            <span className="col-span-2 text-right">Qty</span>
            <span className="col-span-2 text-right">Rate</span>
            <span className="col-span-2 text-right">Amount</span>
          </div>
          {[
            ["Consulting services", "10", "350.00", "3,500.00"],
            ["Documentation pack", "1", "450.00", "450.00"],
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-3.5 py-2.5 text-[12.5px] text-ink-700 border-t border-ink-100"
            >
              <span className="col-span-6">{row[0]}</span>
              <span className="col-span-2 text-right">{row[1]}</span>
              <span className="col-span-2 text-right">{row[2]}</span>
              <span className="col-span-2 text-right">{row[3]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-[12.5px]">
          <div className="flex flex-wrap gap-1.5">
            <span className="chip">TRN ✓</span>
            <span className="chip">VAT ✓</span>
            <span className="chip">Sequence ✓</span>
            <span className="chip">Archive ✓</span>
          </div>
          <div className="text-right">
            <p className="text-ink-400 text-[11px]">VAT (5%)</p>
            <p className="text-ink-900 font-mono">AED 197.50</p>
            <p className="text-ink-900 font-mono mt-1 font-semibold">
              Total: AED 4,147.50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
