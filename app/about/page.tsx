import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQSection } from "@/components/FAQSection";
import { aboutPoints, faq, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — UAE Business Consultancy & Finance Operations",
  description:
    "Meraki Consultants is a UAE business consultancy and finance operations partner. One connected system for setup, accounting, tax, compliance, and AI-assisted workflows.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Meraki"
        title="One connected team behind your numbers."
        description="Meraki Consultants brings UAE business setup, accounting, tax, compliance, and AI-assisted workflows under one roof — for businesses that want one accountable team rather than a stack of disconnected providers."
      />

      {/* Approach */}
      <Section>
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <p className="eyebrow">Our principle</p>
            <h2 className="font-display text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-display-tight leading-[1.02] text-ink-900">
              One <span className="text-bronze-500">system</span>.<br />
              One <span className="text-bronze-500">team</span>.<br />
              One <span className="text-bronze-500">standard</span>.
            </h2>
            <p className="body-lg mt-5 max-w-md">
              We replace fragmentation with one workflow. The same team that handles your setup runs your accounts, files your VAT, prepares your reports, and powers your portal.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-7">
            {aboutPoints.map((p, i) => (
              <div key={p.title} className="border-l border-ink-100 pl-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-bronze-500">0{i + 1}</span>
                  <h3 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display text-ink-900">{p.title}</h3>
                </div>
                <p className="body mt-3">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Numbers / signals */}
      <Section tone="ink">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "One", v: "Single point of accountability" },
            { k: "UAE", v: "Mainland & free zone focus" },
            { k: "AI + Human", v: "Smart workflows, professional review" },
            { k: "SME → Established", v: "Packaged for any stage" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-ink-700 bg-ink-900 p-6">
              <p className="font-display text-[28px] font-bold tracking-display-tight text-bronze-300">{s.k}</p>
              <p className="text-[13px] text-ink-200 mt-2">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who we work with */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="Who we work with"
          title="Built around UAE businesses that take their finance seriously."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              t: "SMEs & shops",
              b: "Owners who don't want to hire a full finance team but need professional records and clean compliance.",
            },
            {
              t: "Founders & investors",
              b: "First-time setup, mainland or free zone, with accounting bundled from day one.",
            },
            {
              t: "Established companies",
              b: "Audit readiness, restructuring, advisory, partner settlement reports, and finance ops review.",
            },
          ].map((g) => (
            <div key={g.t} className="card p-7">
              <h3 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display text-ink-900">{g.t}</h3>
              <p className="body mt-3">{g.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions, direct answers."
              description="Anything specific to your business is best handled in a quick consultation."
            />
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">Speak to Our Team <span aria-hidden>→</span></Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <FAQSection items={faq} />
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
