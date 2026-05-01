import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="bg-ink-950 text-bone">
      <div className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-10 md:p-16">
          <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="eyebrow text-ink-200 [&::before]:bg-bronze-400">Final step</p>
            <h2 className="heading-lg mt-4 text-bone text-balance">
              Build your business on a cleaner finance and compliance system.
            </h2>
            <p className="body-lg mt-5 text-ink-200 text-balance">
              View our packages, explore the AI Portal, or speak directly with our team about a custom solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/packages" className="btn-accent">
                View Packages <span aria-hidden>→</span>
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-700 bg-transparent px-6 py-3 text-sm font-medium text-bone transition-all hover:bg-bone hover:text-ink-900"
              >
                Explore AI Portal <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink-900 transition-all hover:bg-bronze-100"
              >
                Speak to Our Team <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
