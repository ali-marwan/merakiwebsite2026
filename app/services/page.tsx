import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactCTA } from "@/components/ContactCTA";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — UAE Accounting, Tax, Setup, AI Workflows",
  description:
    "Five connected pillars: Start, Manage, Comply, Control, Automate. One Meraki team across business setup, accounting, tax, cash flow, and AI-assisted workflows.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five pillars. One connected workflow."
        description="Start your UAE business, manage daily accounting, comply with tax, control cash flow, and automate the routine — all under one team."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/packages" className="btn-primary">View Packages <span aria-hidden>→</span></Link>
          <Link href="/contact" className="btn-secondary">Speak to Our Team <span aria-hidden>→</span></Link>
        </div>
      </PageHero>

      <Section>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3 sticky top-20 self-start hidden md:block">
            <p className="eyebrow">Jump to</p>
            <ul className="mt-4 space-y-2">
              {pillars.map((p, i) => (
                <li key={p.key}>
                  <a
                    href={`#${p.key}`}
                    className="flex items-center gap-3 text-[14px] text-ink-600 hover:text-ink-900 transition-colors group"
                  >
                    <span className="font-mono text-[11px] text-bronze-500">0{i + 1}</span>
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-9 space-y-20">
            {pillars.map((p, i) => (
              <article id={p.key} key={p.key} className="scroll-mt-28">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-bronze-500">0{i + 1}</span>
                  <h2 className="font-display text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-display-tight text-ink-900 leading-[1.05]">
                    {p.name}
                  </h2>
                </div>
                <p className="body-lg max-w-2xl mt-4">{p.summary}</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {p.items.map((it) => (
                    <div key={it} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-bronze-400 shrink-0" />
                      <p className="text-[14.5px] text-ink-700 leading-snug">{it}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link href="/contact" className="btn-ghost">
                    Discuss this pillar <span aria-hidden>→</span>
                  </Link>
                  <span className="text-[12px] text-ink-400">
                    Often paired with: {pillars
                      .filter((x) => x.key !== p.key)
                      .slice(0, 2)
                      .map((x) => x.name)
                      .join(" + ")}
                  </span>
                </div>

                {i < pillars.length - 1 && <div className="hairline mt-16" />}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
