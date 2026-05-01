import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { DashboardMockup } from "@/components/DashboardMockup";
import { PackageCard } from "@/components/PackageCard";
import { portalFeatures, allPackages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meraki AI Portal — Smart Workflows, Professional Oversight",
  description:
    "The Meraki AI Finance Assistant. Upload invoices, receipts, and voice notes. OCR, smart categorisation, missing-document alerts, and review by Meraki — built for UAE businesses.",
};

export default function AIPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Meraki AI Finance Assistant"
        title="Smart workflows. Professional oversight."
        description="The Meraki AI Portal gives your business a clean way to capture, categorise, and review finance documents — backed by our team where accuracy matters."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#subscribe" className="btn-accent">Subscribe Online <span aria-hidden>→</span></Link>
          <Link href="/contact?topic=ai-portal" className="btn-secondary">Join Waitlist <span aria-hidden>→</span></Link>
          <Link href="/contact" className="btn-ghost">Speak to our team <span aria-hidden>→</span></Link>
        </div>
      </PageHero>

      {/* Mockup hero */}
      <Section>
        <DashboardMockup />
      </Section>

      {/* Features */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="What it does"
          title="A finance workflow your team will actually use."
          description="Built for the day-to-day reality of running a UAE business — not a textbook accounting flow."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portalFeatures.map((f, i) => (
            <div key={f.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-bronze-500">0{i + 1}</span>
                <span className="chip-accent">AI + Review</span>
              </div>
              <h3 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display mt-3 text-ink-900">{f.title}</h3>
              <p className="text-[14px] text-ink-600 mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Workflow detail */}
      <Section>
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow="How it works"
              title="Capture → AI → Review → Reports."
              description="Documents move through one workflow. Nothing gets lost between WhatsApp messages, email inboxes, and shoeboxes of receipts."
            />
            <ul className="mt-7 space-y-4">
              {[
                ["Capture", "Upload invoices, receipts, voice notes, or photos. Email-in supported."],
                ["AI assist", "OCR reads invoices. Suggested categories. Missing-field alerts."],
                ["Human review", "Meraki team validates. Edge cases handled by professionals."],
                ["Reports & filings", "Statements, dashboards, VAT and CT drafts ready for review."],
              ].map(([t, s], i) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-0.5 h-7 w-7 inline-flex items-center justify-center rounded-full border border-bronze-200 bg-bronze-50 text-bronze-700 text-[12px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[20px] font-semibold tracking-display text-ink-900">{t}</p>
                    <p className="text-[14px] text-ink-600">{s}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <UploadFlowVisual />
          </div>
        </div>
      </Section>

      {/* Integrations */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="Connect your stack"
          title="Designed to fit existing systems."
          description="Future integrations planned for Zoho Books, QuickBooks, and Meraki's own accounting environment."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {["Zoho Books", "QuickBooks", "Xero", "Bank feeds", "WhatsApp", "Email-in", "FTA", "Custom API"].map((p) => (
            <div key={p} className="rounded-xl border border-ink-100 bg-white p-4 text-center">
              <p className="text-[14px] text-ink-700">{p}</p>
              <p className="text-[10px] text-ink-400 mt-1">Planned</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Subscribe section */}
      <Section id="subscribe">
        <SectionHeader
          eyebrow="Subscribe"
          title="Choose how much human review you want."
          description="From self-service to a fully managed AI finance setup. Subscribe online or speak to our team."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allPackages.ai.map((p) => (
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
        <p className="mt-8 text-[12px] text-ink-400 text-center">
          Final pricing depends on usage volume and the level of review and accounting support included.
        </p>
      </Section>

      {/* Smart workflows reminder */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400 justify-center inline-flex">Our principle</p>
          <h2 className="heading-lg mt-4 text-bone text-balance">
            AI handles the routine. Our team handles the judgment.
          </h2>
          <p className="body-lg mt-5 text-ink-200">
            We don't claim AI replaces accountants. We claim AI makes professional accountants faster, more accurate, and more useful for your business.
          </p>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

function UploadFlowVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-radial-fade blur-2xl opacity-60" aria-hidden />
      <div className="rounded-2xl border border-ink-100 bg-white shadow-soft p-6 space-y-4">
        {/* Upload card */}
        <div className="border border-dashed border-ink-200 rounded-xl p-6 text-center bg-bone">
          <p className="font-display text-[18px] font-semibold tracking-display text-ink-900">Drop your invoices here</p>
          <p className="text-[12px] text-ink-400 mt-1">PDF, JPG, HEIC · or capture by phone</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-400 animate-pulse" />
            <p className="text-[11px] text-ink-700">3 files received · OCR running</p>
          </div>
        </div>

        {/* OCR results */}
        <div className="rounded-xl border border-ink-100 bg-white">
          {[
            { f: "INV-2041.pdf", s: "Al Madina Trading", a: "AED 2,450.00", st: "ok" },
            { f: "Receipt-IMG.jpg", s: "Carrefour", a: "AED 312.00", st: "warn" },
            { f: "INV-A82.pdf", s: "DEWA", a: "AED 1,182.40", st: "ok" },
          ].map((r) => (
            <div key={r.f} className="flex items-center justify-between px-4 py-3 border-b last:border-b-0 border-ink-100">
              <div className="flex items-center gap-3 min-w-0">
                <span className="h-7 w-7 rounded-md bg-sand inline-flex items-center justify-center text-[10px] text-ink-400 font-mono">PDF</span>
                <div className="min-w-0">
                  <p className="text-[13px] text-ink-900 truncate">{r.f}</p>
                  <p className="text-[11px] text-ink-400 truncate">{r.s}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[12px] text-ink-700 font-mono">{r.a}</p>
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
            </div>
          ))}
        </div>

        {/* Voice + petty cash */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-ink-100 bg-bone p-4">
            <p className="text-[11px] uppercase tracking-wider text-ink-400">Voice note</p>
            <p className="text-[13px] text-ink-900 mt-1">"Paid 80 dirhams cash — courier"</p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-bronze-700">
              <span className="h-1 w-1 rounded-full bg-bronze-400" /> Categorised: Logistics
            </div>
          </div>
          <div className="rounded-xl border border-ink-100 bg-bone p-4">
            <p className="text-[11px] uppercase tracking-wider text-ink-400">Status</p>
            <p className="text-[13px] text-ink-900 mt-1">Awaiting Meraki review</p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-ink-400">
              <span className="h-1 w-1 rounded-full bg-ink-400" /> Usually within one business day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
