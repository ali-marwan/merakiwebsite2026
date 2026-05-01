import Link from "next/link";

type Props = {
  name: string;
  badge?: string;
  price: string;
  best?: string;
  includes: string[];
  excludes?: string[];
  cta?: string;
  href?: string;
  featured?: boolean;
};

export function PackageCard({
  name,
  badge,
  price,
  best,
  includes,
  excludes = [],
  cta = "Enquire",
  href = "/contact",
  featured = false,
}: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 h-full transition-all ${
        featured
          ? "bg-ink-900 text-bone border border-ink-700 shadow-glow"
          : "bg-white border border-ink-100 hover:border-bronze-200 hover:shadow-soft"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-bronze-500 px-3 py-1 text-[11px] tracking-wider uppercase text-white">
          Most chosen
        </span>
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3
            className={`font-display text-[26px] ${
              featured ? "text-bone" : "text-ink-900"
            }`}
          >
            {name}
          </h3>
          {best ? (
            <p className={`text-[13px] mt-1 ${featured ? "text-ink-200" : "text-ink-400"}`}>
              For {best.toLowerCase()}
            </p>
          ) : badge ? (
            <p className={`text-[13px] mt-1 ${featured ? "text-ink-200" : "text-ink-400"}`}>
              {badge}
            </p>
          ) : null}
        </div>
      </div>

      <p
        className={`mt-5 text-[15px] font-mono ${
          featured ? "text-bronze-300" : "text-bronze-600"
        }`}
      >
        {price}
      </p>

      <div className={`mt-5 pt-5 border-t ${featured ? "border-ink-700" : "border-ink-100"}`}>
        <p className={`text-[12px] uppercase tracking-wider ${featured ? "text-ink-200" : "text-ink-400"}`}>
          Included
        </p>
        <ul className="mt-3 space-y-2">
          {includes.map((it) => (
            <li
              key={it}
              className={`flex items-start gap-2 text-[14px] ${
                featured ? "text-ink-100" : "text-ink-700"
              }`}
            >
              <span className={`mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-bronze-500/20 text-bronze-300" : "bg-bronze-50 text-bronze-600"}`}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4.2L3.2 6.4L7 1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {it}
            </li>
          ))}
        </ul>

        {excludes.length > 0 && (
          <>
            <p className={`mt-5 text-[12px] uppercase tracking-wider ${featured ? "text-ink-200" : "text-ink-400"}`}>
              Not included
            </p>
            <ul className="mt-3 space-y-2">
              {excludes.map((it) => (
                <li
                  key={it}
                  className={`flex items-start gap-2 text-[14px] ${
                    featured ? "text-ink-200/70" : "text-ink-400"
                  }`}
                >
                  <span className="mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-current text-[8px]">
                    ×
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="mt-7 pt-5 flex items-center justify-between gap-3">
        <Link
          href={href}
          className={
            featured
              ? "inline-flex items-center justify-center gap-2 rounded-full bg-bronze-500 px-5 py-2.5 text-[14px] font-medium text-white hover:bg-bronze-400 transition w-full"
              : "inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[14px] font-medium text-bone hover:bg-ink-700 transition w-full"
          }
        >
          {cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
