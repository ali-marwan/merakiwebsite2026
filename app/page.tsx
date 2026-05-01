import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { PackageCard } from "@/components/PackageCard";
import { ProcessStep } from "@/components/ProcessStep";
import { DashboardMockup } from "@/components/DashboardMockup";
import { ContactCTA } from "@/components/ContactCTA";
import {
  serviceStrip,
  riskCards,
  pillars,
  packagePreview,
  whyMeraki,
  howItWorks,
  portalFeatures,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 2 — Service strip */}
      <div className="border-y border-ink-100 bg-white">
        <div className="container-x py-5 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-between text-[12px] uppercase tracking-[0.18em] text-ink-400">
          {serviceStrip.map((s, i) => (
            <span key={s} className="inline-flex items-center gap-3">
              {i > 0 && <span className="hidden md:inline-block h-1 w-1 rounded-full bg-ink-200" />}
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 3 — Problem */}
      <Section tone="default">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="The problem"
              title={<>Cheap accounting can become<br className="hidden md:block" /> expensive.</>}
              description="Many UAE businesses try to save on accounting. Then weak records, missing invoices, incorrect VAT submissions, and poor cash-flow tracking show up at the wrong time — usually right before a deadline or a review."
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {riskCards.map((r) => (
                <div key={r.title} className="card p-5 card-hover">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
                    <h3 className="font-display text-[20px] text-ink-900">{r.title}</h3>
                  </div>
                  <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4 — Solution */}
      <Section tone="sand">
        <div className="grid grid-cols-12 gap-10 items-end">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            className="card card-hover p-7 flex flex-col justify-between bg-ink-900 text-bone border-ink-700 group"
          >
            <div>
              <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">Connected</p>
              <h3 className="font-display text-[26px] mt-3 text-bone">
                Pillars work together.
              </h3>
              <p className="text-[14px] text-ink-200 mt-2 leading-relaxed">
                The same team that sets you up handles your monthly accounts, files your VAT, prepares your reports, and feeds your AI Portal.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-bronze-300 text-[14px]">
              See full services list <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </Section>

      {/* 6 — Packages preview */}
      <Section tone="sand">
        <div className="grid grid-cols-12 gap-10 items-end">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <p className="mt-8 text-[12px] text-ink-400 text-center">
          Final pricing depends on transaction volume, VAT status, employees, reporting and scope.
        </p>
      </Section>

      {/* 7 — E-Invoicing */}
      <Section>
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeader
              eyebrow="E-Invoicing readiness"
              title="Prepare your business for UAE E-Invoicing."
              description="Meraki helps companies review tax invoice formats, digital record workflows, accounting software readiness, and document processes — before e-invoicing becomes operationally critical."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/e-invoicing" className="btn-primary">
                Request Readiness Review <span aria-hidden>→</span>
              </Link>
              <Link href="/e-invoicing" className="btn-ghost">Learn more</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <EInvoiceVisual />
          </div>
        </div>
      </Section>

      {/* 8 — AI Portal */}
      <Section tone="ink">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">Meraki AI Portal</p>
            <h2 className="heading-lg mt-4 text-bone text-balance">
              AI-assisted workflows, professional review where it matters.
            </h2>
            <p className="body-lg mt-5 text-ink-200 text-balance">
              Upload invoices, receipts, petty cash records, and voice notes through a smart finance portal. Meraki AI organises documents, suggests categories, flags missing information, and prepares records for accounting and tax review.
            </p>
            <div className="mt-7">
              <Link href="/ai-portal" className="btn-accent">
                Explore AI Portal <span aria-hidden>→</span>
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portalFeatures.slice(0, 4).map((f) => (
                <li
                  key={f.title}
                  className="rounded-xl border border-ink-700 bg-ink-900 p-4"
                >
                  <p className="text-[14px] text-bone font-medium">{f.title}</p>
                  <p className="text-[12px] text-ink-200 mt-1 leading-relaxed">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <DashboardMockup />
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyMeraki.map((w, i) => (
            <div key={w.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">0{i + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
              </div>
              <h3 className="font-display text-[22px] mt-3 text-ink-900">{w.title}</h3>
              <p className="text-[14px] text-ink-600 mt-2 leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 — How it works */}
      <Section>
        <div className="grid grid-cols-12 gap-10">
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

function WorkflowGraphic() {
  const nodes = ["Start", "Record", "Comply", "Control", "Automate", "Review"];
  return (
    <div className="mt-12 rounded-2xl border border-ink-100 bg-white p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {nodes.map((n, i) => (
          <div key={n} className="relative">
            <div className="rounded-xl border border-ink-100 bg-bone px-3 py-4 text-center">
              <span className="font-mono text-[10px] text-bronze-500">0{i + 1}</span>
              <p className="font-display text-[18px] mt-1 text-ink-900">{n}</p>
            </div>
            {i < nodes.length - 1 && (
              <span className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 h-6 w-4 items-center justify-center text-ink-200" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 text-[12px] text-ink-400">
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
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-radial-fade blur-2xl opacity-70" aria-hidden />
      <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-wider text-ink-400">Tax Invoice — preview</p>
          <span className="chip-accent">Compliance ready</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-ink-400">Issuer</p>
            <p className="text-ink-900">Your Company LLC</p>
            <p className="text-ink-400 text-[11px]">TRN 100123456700003</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-ink-400">Invoice</p>
            <p className="text-ink-900 font-mono">INV-2026-0241</p>
            <p className="text-ink-400 text-[11px]">03 May 2026</p>
          </div>
        </div>
        <div className="mt-5 rounded-xl border border-ink-100 overflow-hidden">
          <div className="grid grid-cols-12 bg-sand text-[11px] text-ink-400 px-3 py-2">
            <span className="col-span-6">Description</span>
            <span className="col-span-2 text-right">Qty</span>
            <span className="col-span-2 text-right">Rate</span>
            <span className="col-span-2 text-right">Amount</span>
          </div>
          {[
            ["Consulting services", "10", "350.00", "3,500.00"],
            ["Documentation pack", "1", "450.00", "450.00"],
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 px-3 py-2 text-[12px] text-ink-700 border-t border-ink-100">
              <span className="col-span-6">{row[0]}</span>
              <span className="col-span-2 text-right">{row[1]}</span>
              <span className="col-span-2 text-right">{row[2]}</span>
              <span className="col-span-2 text-right">{row[3]}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[12px]">
          <div className="flex flex-wrap gap-1.5">
            <span className="chip">TRN ✓</span>
            <span className="chip">VAT ✓</span>
            <span className="chip">Sequence ✓</span>
            <span className="chip">Archive ✓</span>
          </div>
          <div className="text-right">
            <p className="text-ink-400 text-[11px]">VAT (5%)</p>
            <p className="text-ink-900 font-mono">AED 197.50</p>
            <p className="text-ink-900 font-mono mt-1">Total: AED 4,147.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}
