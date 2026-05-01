import Link from "next/link";
import { hero } from "@/lib/content";
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bone pt-12 md:pt-20 pb-20 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-radial-fade blur-3xl opacity-70" aria-hidden />

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-7 animate-fade-up">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="heading-xl mt-5 text-balance">
              {hero.headline.split(",").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 ? "," : ""}
                  {i === 0 && <br className="hidden md:block" />}
                </span>
              ))}
            </h1>
            <p className="body-lg mt-7 max-w-xl text-balance">{hero.sub}</p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-100 bg-white/70 backdrop-blur px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
              <p className="font-display text-[16px] text-ink-900">
                {hero.tagline}
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
              {hero.ctas.map((cta, i) => (
                <CTAGroup key={cta.href} cta={cta} priority={i === 0} />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <DashboardMockup compact />
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-ink-400">
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
  priority,
}: {
  cta: { label: string; href: string; micro: string; variant: string };
  priority: boolean;
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
      <p className="text-[12px] text-ink-400 mt-2 leading-snug">{cta.micro}</p>
    </div>
  );
}
