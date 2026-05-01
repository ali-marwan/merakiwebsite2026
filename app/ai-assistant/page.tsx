import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { AssistantMockup } from "@/components/AssistantMockup";
import { PackageCard } from "@/components/PackageCard";
import { aiAssistant, allPackages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meraki AI Assistant — Smart Finance Workflow with Human Review",
  description:
    "The Meraki AI Assistant captures invoices, receipts, and notes, runs OCR, suggests categories, flags missing data, and prepares records for professional review. Coming soon.",
};

export default function AIAssistantPage() {
  const { hero, helps, steps, builtFor, humanReview, finalCta } = aiAssistant;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bone pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28 border-b border-ink-100">
        <div
          className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
          aria-hidden
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full bg-radial-fade blur-3xl opacity-70"
          aria-hidden
        />
        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="col-span-12 lg:col-span-7 animate-fade-up">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="chip-accent">{hero.badge}</span>
                <span className="chip">Human review built in</span>
                <span className="chip">UAE-focused</span>
              </div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="heading-xl mt-6 text-balance">{hero.headline}</h1>
              <p className="body-xl mt-7 max-w-2xl text-pretty">{hero.sub}</p>
              <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink-100 bg-white/80 backdrop-blur px-5 py-2.5 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
                <p className="font-display text-[14.5px] md:text-[15.5px] font-semibold tracking-display text-ink-900">
                  {hero.principle}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {/* TODO(subscriptions): wire to startCheckout("ai-self-service") */}
                <Link href="#subscribe" className="btn-accent">
                  Subscribe When Available <span aria-hidden>→</span>
                </Link>
                {/* TODO(subscriptions): wire to joinWaitlist(email) */}
                <Link
                  href="/contact?topic=ai-assistant"
                  className="btn-secondary"
                >
                  Join Waitlist <span aria-hidden>→</span>
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

      {/* A — What It Helps With */}
      <Section>
        <SectionHeader
          eyebrow="What it helps with"
          title="A finance workflow built around UAE business reality."
          description="Capture as work happens. Let the Assistant organise. Review on schedule."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {helps.map((h, i) => (
            <div key={h.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <FeatureIcon name={h.icon} />
              </div>
              <h3 className="font-display text-[18px] md:text-[19px] font-semibold tracking-display mt-5 text-ink-900">
                {h.title}
              </h3>
              <p className="text-[13.5px] text-ink-600 mt-2 leading-relaxed">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* B — How It Works */}
      <Section tone="sand">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="How it works"
              title="From document capture to professional review."
              description="The Assistant runs the routine. Meraki handles the judgement."
            />
            <div className="mt-9 hidden lg:block">
              <UploadFlowVisual />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ol className="space-y-7">
              {steps.map((s, i) => (
                <li key={s.step} className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-bronze-200 bg-bronze-50 text-bronze-700 font-mono text-[12px]">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
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
            <div className="mt-10 lg:hidden">
              <UploadFlowVisual />
            </div>
          </div>
        </div>
      </Section>

      {/* C — Built for Business Owners */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeader
              eyebrow="Built for business owners"
              title={builtFor.title}
              description={builtFor.body}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {builtFor.audiences.map((a, i) => (
                <div
                  key={a}
                  className="rounded-xl border border-ink-100 bg-white p-5 flex items-start gap-3"
                >
                  <span className="font-mono text-[11px] text-bronze-500 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-[14.5px] text-ink-700 leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* D — Human Review */}
      <Section tone="ink">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">
              Human review
            </p>
            <h2 className="heading-md mt-5 text-bone text-balance">
              {humanReview.title}
            </h2>
            <p className="body-lg mt-6 text-ink-200 text-pretty">
              {humanReview.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-ink-700 bg-ink-900 px-4 py-2 text-[13px] text-bone font-medium">
                AI captures & organises
              </span>
              <span className="rounded-full bg-bronze-500 px-4 py-2 text-[13px] text-white font-medium">
                Meraki reviews & signs off
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ReviewSplitVisual />
          </div>
        </div>
      </Section>

      {/* E — Subscription Preview */}
      <Section id="subscribe" tone="sand">
        <SectionHeader
          eyebrow="Subscription preview"
          title="Choose how much human review you want."
          description="From self-service to a fully managed AI finance setup. Subscribe when available, or join the waitlist."
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
              cta={p.featured ? "Subscribe When Available" : "Join Waitlist"}
              href="/contact?topic=ai-assistant"
            />
          ))}
        </div>
        <p className="mt-10 text-[12.5px] text-ink-400 text-center">
          Final pricing depends on usage volume and the level of review and
          accounting support included. {/* TODO(subscriptions): live pricing */}
        </p>
      </Section>

      {/* F — Final CTA */}
      <section className="bg-bone">
        <div className="container-x py-24 md:py-32 lg:py-36">
          <div className="rounded-3xl border border-ink-100 bg-white p-10 md:p-16 lg:p-20 text-center">
            <p className="eyebrow justify-center inline-flex">
              One system. One team. One standard.
            </p>
            <h2 className="heading-lg mt-6 text-balance max-w-3xl mx-auto">
              {finalCta.title}
            </h2>
            <p className="body-xl mt-6 text-pretty max-w-2xl mx-auto">
              {finalCta.sub}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact?topic=ai-assistant" className="btn-accent">
                Subscribe When Available <span aria-hidden>→</span>
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

function FeatureIcon({ name }: { name: string }) {
  // Minimal abstract glyph per feature — no emoji, no robot iconography.
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
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 4v12M6 10l6-6 6 6M4 20h16" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <circle cx="12" cy="13.5" r="3.5" />
          <path d="M9 7l1.5-2h3L15 7" />
        </svg>
      );
    case "scan":
      return (
        <svg {...common}>
          <path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M3 12l9-9h7v7l-9 9-7-7z" />
          <circle cx="14.5" cy="9.5" r="1.2" fill={stroke} />
        </svg>
      );
    case "cash":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0014 0M12 18v3" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3l9-16zM12 10v4M12 17h.01" />
        </svg>
      );
    case "vat":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "invoice":
      return (
        <svg {...common}>
          <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M12 4l8 4v6c0 4-3.5 6-8 6s-8-2-8-6V8l8-4z" />
          <path d="M9 12l2 2 4-4" />
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

function UploadFlowVisual() {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-5">
      <div className="border border-dashed border-ink-200 rounded-xl p-5 text-center bg-bone">
        <p className="font-display text-[16px] font-semibold tracking-display text-ink-900">
          Drop documents here
        </p>
        <p className="text-[11.5px] text-ink-400 mt-1">
          PDF · JPG · HEIC · email-in
        </p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-bronze-400 animate-pulse" />
          <p className="text-[10.5px] text-ink-700 font-medium">
            3 files · OCR running
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-ink-100 bg-white">
        {[
          { f: "INV-2041.pdf", s: "Al Madina Trading", st: "ok" },
          { f: "Receipt-IMG.jpg", s: "Carrefour", st: "warn" },
          { f: "INV-A82.pdf", s: "DEWA", st: "ok" },
        ].map((r) => (
          <div
            key={r.f}
            className="flex items-center justify-between px-3.5 py-2.5 border-b last:border-b-0 border-ink-100"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="h-6 w-6 rounded-md bg-sand inline-flex items-center justify-center text-[9.5px] text-ink-400 font-mono">
                PDF
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] text-ink-900 truncate font-medium">
                  {r.f}
                </p>
                <p className="text-[10.5px] text-ink-400 truncate">{r.s}</p>
              </div>
            </div>
            <span
              className={`h-5 w-5 rounded-full inline-flex items-center justify-center text-[10px] ${
                r.st === "ok"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-bronze-50 text-bronze-700 border border-bronze-200"
              }`}
            >
              {r.st === "ok" ? "✓" : "!"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewSplitVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-ink-700 bg-ink-900 p-5">
        <p className="text-[11px] uppercase tracking-wider text-ink-200 font-medium">
          AI Assistant
        </p>
        <p className="font-display text-[19px] font-semibold tracking-display text-bone mt-2">
          Captures · Organises
        </p>
        <ul className="mt-4 space-y-2 text-[12.5px] text-ink-200">
          <li>• OCR extraction</li>
          <li>• Category suggestions</li>
          <li>• Missing-data alerts</li>
          <li>• Draft reports</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-bronze-400/40 bg-gradient-to-b from-bronze-500 to-bronze-600 p-5 text-white">
        <p className="text-[11px] uppercase tracking-wider text-bronze-50 font-medium">
          Meraki Team
        </p>
        <p className="font-display text-[19px] font-semibold tracking-display mt-2">
          Reviews · Signs off
        </p>
        <ul className="mt-4 space-y-2 text-[12.5px] text-bronze-50">
          <li>• Edge-case judgement</li>
          <li>• VAT & CT review</li>
          <li>• Audit-ready records</li>
          <li>• Final submission</li>
        </ul>
      </div>
    </div>
  );
}
