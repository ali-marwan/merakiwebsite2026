import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { eInvoicingPoints, eInvoicingChecklist } from "@/lib/content";

export const metadata: Metadata = {
  title: "UAE E-Invoicing Readiness & Tax Invoice Compliance",
  description:
    "Prepare your business for UAE e-invoicing. Tax invoice format reviews, software readiness, document workflow planning, and AI-assisted invoice capture by Meraki Consultants.",
};

export default function EInvoicingPage() {
  return (
    <>
      <PageHero
        eyebrow="E-Invoicing readiness"
        title="Prepare your business for UAE E-Invoicing."
        description="UAE businesses are moving toward structured digital invoicing. Meraki helps you review your invoice formats, document workflows, and accounting software — and prepare a clear plan before it becomes operationally critical."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact?topic=e-invoicing" className="btn-primary">Request Readiness Review <span aria-hidden>→</span></Link>
          <Link href="#checklist" className="btn-ghost">See readiness checklist ↓</Link>
        </div>
      </PageHero>

      {/* Why this matters */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eInvoicingPoints.map((p, i) => (
            <div key={p.title} className="card p-7 card-hover">
              <span className="font-mono text-[11px] text-bronze-500">0{i + 1}</span>
              <h3 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display mt-3 text-ink-900">{p.title}</h3>
              <p className="body mt-3">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Checklist */}
      <Section id="checklist" tone="sand">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="Readiness checklist"
              title="What we review with you."
              description="A practical, business-ready checklist covering invoice content, archive policy, software readiness, workflow, and people."
            />
            <div className="mt-8">
              <Link href="/contact?topic=e-invoicing" className="btn-primary">
                Book a readiness review <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {eInvoicingChecklist.map((c, i) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-bronze-50 text-bronze-700 text-[12px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14.5px] text-ink-700 leading-snug">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tax invoice compliance */}
      <Section>
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeader
              eyebrow="Tax invoice compliance"
              title="Your invoices are the foundation of your VAT position."
              description="Weak tax invoices cause input VAT issues, reconciliation problems, and friction during reviews. We make sure yours hold up — formatting, sequencing, archive, and content."
            />
            <ul className="mt-7 space-y-3">
              {[
                "Tax invoice content & layout review",
                "Sequence & archive policy",
                "Customer & supplier invoice workflow",
                "Credit note & refund handling",
                "Multi-currency & multi-entity considerations",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-bronze-400" />
                  <p className="text-[15px] text-ink-700">{it}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ComplianceVisual />
          </div>
        </div>
      </Section>

      {/* AI capture teaser */}
      <Section tone="ink">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">AI-assisted invoice capture</p>
            <h2 className="heading-md mt-4 text-bone text-balance">
              Capture invoices the moment they arrive — your records stay clean.
            </h2>
            <p className="body-lg mt-5 text-ink-200 text-balance">
              Drop or photograph supplier invoices into the Meraki AI Portal. OCR reads the fields, suggests categories, flags missing information, and prepares the entry for review — so your books and your VAT recovery don't drift.
            </p>
            <div className="mt-7">
              <Link href="/ai-portal" className="btn-accent">Explore AI Portal <span aria-hidden>→</span></Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <CaptureFlow />
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-ink-100 bg-bronze-50/50 p-8 md:p-10">
          <p className="eyebrow">Important</p>
          <p className="mt-3 text-[15px] text-ink-700 leading-relaxed max-w-3xl">
            UAE e-invoicing requirements are evolving. Specific timelines, technical formats, and submission rules continue to be defined by the relevant authorities. Meraki's role is to help your business prepare its invoice quality, document workflow, and accounting software — so you are positioned to adopt requirements quickly and accurately as they become applicable.
          </p>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

function ComplianceVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-radial-fade blur-2xl opacity-60" aria-hidden />
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "TRN present", state: "ok" },
          { label: "VAT line", state: "ok" },
          { label: "Sequence", state: "ok" },
          { label: "Archive policy", state: "warn" },
          { label: "Customer details", state: "ok" },
          { label: "Software ready", state: "warn" },
        ].map((it) => (
          <div key={it.label} className="rounded-xl border border-ink-100 bg-white p-4 flex items-center justify-between">
            <p className="text-[13.5px] text-ink-700">{it.label}</p>
            <span
              className={`h-6 w-6 rounded-full inline-flex items-center justify-center text-[11px] ${
                it.state === "ok"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-bronze-50 text-bronze-700 border border-bronze-200"
              }`}
            >
              {it.state === "ok" ? "✓" : "!"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaptureFlow() {
  const steps = [
    { t: "Capture", s: "Email, drop or photograph" },
    { t: "OCR read", s: "Supplier, TRN, lines, VAT" },
    { t: "Suggest", s: "Category & VAT treatment" },
    { t: "Review", s: "Meraki team confirms" },
    { t: "Archive", s: "Indexed & searchable" },
  ];
  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-900 p-6">
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className="flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-950 px-4 py-3"
          >
            <span className="h-7 w-7 rounded-full border border-bronze-400/40 bg-bronze-500/10 text-bronze-300 text-[12px] font-mono inline-flex items-center justify-center">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[14px] text-bone font-medium">{s.t}</p>
              <p className="text-[12px] text-ink-200">{s.s}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="ml-auto text-ink-200" aria-hidden>↓</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
