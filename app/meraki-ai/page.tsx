import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { AssistantMockup } from "@/components/AssistantMockup";
import { PackageCard } from "@/components/PackageCard";
import { merakiAi, allPackages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meraki AI — UAE Invoice Compliance Copilot",
  description:
    "Meraki AI is an AI-powered UAE invoicing and compliance assistant. It reviews invoices, detects VAT errors, classifies transactions, prepares for e-invoicing, and works with Zoho, QuickBooks, Xero, Tally, or Excel.",
};

export default function MerakiAIPage() {
  const {
    hero,
    whatItIs,
    checks,
    mvp,
    integrations,
    workflow,
    compliance,
    audience,
    finalCta,
  } = merakiAi;

  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-bone pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28 border-b border-ink-100">
        <div
          className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)]"
          aria-hidden
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[1100px] rounded-full bg-radial-fade blur-3xl opacity-80"
          aria-hidden
        />
        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="col-span-12 lg:col-span-7 animate-fade-up">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="chip-accent">{hero.badge}</span>
                <span className="chip">Works with your accounting software</span>
                <span className="chip">UAE-focused</span>
              </div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="heading-xl mt-6 text-balance">{hero.headline}</h1>
              <p className="body-xl mt-7 prose-readable text-pretty">
                {hero.sub}
              </p>
              <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink-100 bg-white/80 backdrop-blur px-5 py-2.5 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
                <p className="font-display text-[14.5px] md:text-[15.5px] font-semibold tracking-display text-ink-900">
                  {hero.principle}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {/* TODO(invoice-upload): wire to upload flow */}
                <Link
                  href="/contact?topic=invoice-review"
                  className="btn-accent"
                >
                  Start Invoice Review <span aria-hidden>→</span>
                </Link>
                <Link href="#packages" className="btn-secondary">
                  View AI Packages <span aria-hidden>→</span>
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Speak to Our Team
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 animate-fade-up [animation-delay:120ms]">
              <AssistantMockup />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Not accounting software */}
      <Section>
        <SectionHeader
          eyebrow="What Meraki AI is"
          title={whatItIs.title}
          description={whatItIs.body}
        />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ComparisonColumn
            title="Accounting software"
            sub="Zoho · QuickBooks · Xero · Tally"
            items={whatItIs.accountingSoftware}
            tone="muted"
          />
          <ComparisonColumn
            title="Meraki AI"
            sub="UAE invoice compliance copilot"
            items={whatItIs.merakiAi}
            tone="accent"
          />
        </div>
        <div className="mt-10 rounded-2xl border border-bronze-200 bg-bronze-50/50 p-6 md:p-8 text-center">
          <p className="font-display text-[20px] md:text-[24px] font-semibold tracking-display text-ink-900">
            {whatItIs.statement}
          </p>
        </div>
      </Section>

      {/* SECTION 2 — What it checks */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="What it checks"
          title="Invoice checks before they become tax problems."
          description="Each upload runs through a layered set of compliance and accuracy checks built around UAE VAT and tax practice."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {checks.map((c, i) => (
            <div key={c.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CheckIcon name={c.icon} />
              </div>
              <h3 className="font-display text-[17px] md:text-[18px] font-semibold tracking-display mt-5 text-ink-900">
                {c.title}
              </h3>
              <p className="text-[13.5px] text-ink-600 mt-2 leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — MVP product */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">First product</p>
            <h2 className="heading-md mt-5 text-balance">{mvp.title}</h2>
            <p className="body-lg mt-5 text-pretty">{mvp.sub}</p>
            <div className="mt-8 rounded-2xl border border-ink-100 bg-bone p-6">
              <p className="text-[12px] uppercase tracking-wider font-medium text-ink-400">
                The review report shows
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mvp.reportShows.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-[14px] text-ink-700"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-bronze-400 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              {/* TODO(invoice-upload): connect to upload + AI parser */}
              <Link
                href="/contact?topic=invoice-review"
                className="btn-primary"
              >
                Request AI Invoice Review <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ol className="space-y-7">
              {mvp.steps.map((s, i) => (
                <li key={s.step} className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-bronze-200 bg-bronze-50 text-bronze-700 font-mono text-[12px]">
                    {s.step}
                  </div>
                  {i < mvp.steps.length - 1 && (
                    <div
                      className="absolute left-[19px] top-10 -bottom-3 w-px bg-ink-100"
                      aria-hidden
                    />
                  )}
                  <h4 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display text-ink-900">
                    {s.title}
                  </h4>
                  <p className="body mt-2.5">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — Integrations */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="Integration direction"
          title={integrations.title}
          description={integrations.body}
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3">
          {integrations.items.map((i) => (
            <div
              key={i.name}
              className="rounded-xl border border-ink-100 bg-white p-4 text-center"
            >
              <p className="text-[14px] text-ink-900 font-medium">{i.name}</p>
              <p className="text-[10.5px] text-ink-400 mt-1.5 font-medium uppercase tracking-wider">
                {i.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12.5px] text-ink-400 text-center">
          Integrations listed are planned or export-ready directions, not live
          backend connections at this stage.
        </p>
      </Section>

      {/* SECTION 5 — Workflow */}
      <Section>
        <SectionHeader
          eyebrow="Workflow"
          title="From document upload to accountant-ready data."
          description="A single, structured path for every document — from capture to clean export."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-3">
          {workflow.map((w, i) => (
            <div
              key={w.step}
              className="relative rounded-xl border border-ink-100 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">
                  {w.step}
                </span>
                {i < workflow.length - 1 && (
                  <span className="text-ink-200 hidden xl:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
              <p className="font-display text-[15.5px] font-semibold tracking-display mt-4 text-ink-900 leading-snug">
                {w.title}
              </p>
              <p className="text-[12.5px] text-ink-600 mt-2 leading-relaxed">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 6 — Compliance strategy */}
      <Section tone="ink">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">
              Compliance strategy
            </p>
            <h2 className="heading-md mt-5 text-bone text-balance">
              {compliance.title}
            </h2>
            <p className="body-lg mt-6 text-ink-200 text-pretty">
              {compliance.body}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              {[
                ["Today", "Invoice validation & VAT checks"],
                ["Today", "Workflow automation & accountant routing"],
                ["Today", "E-invoicing readiness preparation"],
                ["Future", "Integration with accredited e-invoicing providers"],
              ].map(([phase, item]) => (
                <div
                  key={item}
                  className="rounded-xl border border-ink-700 bg-ink-900 px-5 py-4 flex items-center justify-between gap-3"
                >
                  <span className="text-[13.5px] text-bone font-medium">
                    {item}
                  </span>
                  <span
                    className={`text-[10.5px] uppercase tracking-wider font-semibold rounded-full px-2.5 py-1 border ${
                      phase === "Today"
                        ? "border-bronze-400 bg-bronze-500/15 text-bronze-300"
                        : "border-ink-700 text-ink-200"
                    }`}
                  >
                    {phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7 — Audience */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="Who it's for"
              title={audience.title}
              description={audience.body}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="flex flex-wrap gap-2.5">
              {audience.segments.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink-100 bg-white px-4 py-2 text-[14px] text-ink-700 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — Subscription packages */}
      <Section id="packages" tone="sand">
        <SectionHeader
          eyebrow="Subscription packages"
          title="Choose how much human review you want."
          description="From a basic monthly invoice review to a fully managed finance and compliance setup."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {allPackages.ai.map((p) => (
            <PackageCard
              key={p.name}
              name={p.name}
              best={p.best}
              price={p.price}
              includes={p.includes}
              excludes={p.excludes}
              featured={p.featured}
              cta={
                p.name === "AI Invoice Review"
                  ? "Start Review"
                  : p.name === "AI Compliance Workflow"
                  ? "Request Setup"
                  : p.featured
                  ? "Subscribe"
                  : "Speak to Team"
              }
              href="/contact?topic=meraki-ai"
            />
          ))}
        </div>
        <p className="mt-10 text-[12.5px] text-ink-400 text-center">
          Final pricing depends on usage volume and the level of human review
          and accounting support included.
          {/* TODO(subscriptions): live pricing via billing provider */}
        </p>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-bone">
        <div className="container-x py-24 md:py-32 lg:py-36">
          <div className="rounded-3xl border border-ink-100 bg-white p-10 md:p-16 lg:p-20 text-center">
            <p className="eyebrow justify-center inline-flex">
              Your UAE invoice compliance copilot
            </p>
            <h2 className="heading-lg mt-6 text-balance max-w-3xl mx-auto">
              {finalCta.title}
            </h2>
            <p className="body-xl mt-6 text-pretty max-w-2xl mx-auto">
              {finalCta.sub}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact?topic=invoice-review"
                className="btn-accent"
              >
                Start Invoice Review <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-primary">
                Speak to Our Team <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function ComparisonColumn({
  title,
  sub,
  items,
  tone,
}: {
  title: string;
  sub: string;
  items: string[];
  tone: "muted" | "accent";
}) {
  const isAccent = tone === "accent";
  return (
    <div
      className={`rounded-2xl border p-7 md:p-8 ${
        isAccent
          ? "border-bronze-200 bg-bronze-50/40"
          : "border-ink-100 bg-white"
      }`}
    >
      <p
        className={`text-[12px] font-semibold uppercase tracking-wider ${
          isAccent ? "text-bronze-700" : "text-ink-400"
        }`}
      >
        {sub}
      </p>
      <h3 className="font-display text-[26px] md:text-[28px] font-semibold tracking-display mt-2 text-ink-900">
        {title}
      </h3>
      <ul className="mt-6 pt-6 border-t border-ink-100 space-y-3">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 text-[14.5px] text-ink-700 leading-relaxed"
          >
            <span
              className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                isAccent
                  ? "bg-bronze-100 text-bronze-700"
                  : "bg-sand text-ink-400"
              }`}
            >
              <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1 4.2L3.2 6.4L7 1.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon({ name }: { name: string }) {
  const stroke = "#A88149";
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "vat":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "id":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="9" cy="12" r="2" />
          <path d="M14 10h4M14 14h4" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M12 4l8 4v6c0 4-3.5 6-8 6s-8-2-8-6V8l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "duplicate":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="12" height="14" rx="2" />
          <rect x="8" y="8" width="12" height="14" rx="2" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M3 12l9-9h7v7l-9 9-7-7z" />
          <circle cx="14.5" cy="9.5" r="1.2" fill={stroke} />
        </svg>
      );
    case "supplier":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M7 11h4M7 15h6M16 11h2M16 15h2" />
          <path d="M9 7V4h6v3" />
        </svg>
      );
    case "ct":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 13h8M8 17h5" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "invoice":
      return (
        <svg {...common}>
          <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3l9-16zM12 10v4M12 17h.01" />
        </svg>
      );
    case "queue":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h10" />
          <circle cx="19" cy="18" r="2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
