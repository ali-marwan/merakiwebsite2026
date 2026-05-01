import Link from "next/link";
import { hero } from "@/lib/content";
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-bone min-h-[calc(100vh-84px)] flex items-center">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[1300px] rounded-full bg-radial-fade blur-3xl opacity-80"
        aria-hidden
      />

      <div className="container-x relative w-full py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* Left content — 7 cols on desktop (~58%) */}
          <div className="col-span-12 lg:col-span-7 animate-fade-up">
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="heading-xl mt-7 text-balance">{hero.headline}</h1>

            <p className="body-xl mt-8 prose-readable text-pretty">
              {hero.sub}
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink-100 bg-white/80 backdrop-blur px-5 py-2.5 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
              <p className="font-display text-[15px] md:text-[16px] font-semibold tracking-display text-ink-900">
                {hero.tagline}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[680px]">
              {hero.ctas.map((cta) => (
                <CTAGroup key={cta.href} cta={cta} />
              ))}
            </div>
          </div>

          {/* Right mockup — 5 cols on desktop (~42%) */}
          <div className="col-span-12 lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <DashboardMockup />
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[12px]">
              <span className="chip-accent">AI-assisted</span>
              <span className="chip">Human review</span>
              <span className="chip">UAE-focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAGroup({
  cta,
}: {
  cta: { label: string; href: string; micro: string; variant: string };
}) {
  const variantClass =
    cta.variant === "accent"
      ? "btn-accent"
      : cta.variant === "secondary"
      ? "btn-secondary"
      : "btn-primary";
  return (
    <div className="flex flex-col">
      <Link href={cta.href} className={`${variantClass} w-full`}>
        {cta.label} <span aria-hidden>→</span>
      </Link>
      <p className="text-[12.5px] text-ink-400 mt-2.5 leading-snug">
        {cta.micro}
      </p>
    </div>
  );
}
