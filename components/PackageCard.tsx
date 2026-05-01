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
      className={`relative flex flex-col rounded-2xl p-8 md:p-9 h-full transition-all ${
        featured
          ? "bg-ink-900 text-bone border border-ink-700 shadow-glow"
          : "bg-white border border-ink-100 hover:border-bronze-200 hover:shadow-soft"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-bronze-500 px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-white">
          Most chosen
        </span>
      )}

      <div>
        <h3
          className={`font-display text-[26px] md:text-[28px] font-semibold tracking-display ${
            featured ? "text-bone" : "text-ink-900"
          }`}
        >
          {name}
        </h3>
        {best ? (
          <p
            className={`text-[13.5px] mt-1.5 ${
              featured ? "text-ink-200" : "text-ink-400"
            }`}
          >
            For {best.toLowerCase()}
          </p>
        ) : badge ? (
          <p
            className={`text-[13.5px] mt-1.5 ${
              featured ? "text-ink-200" : "text-ink-400"
            }`}
          >
            {badge}
          </p>
        ) : null}
      </div>

      <p
        className={`mt-6 text-[15px] font-mono ${
          featured ? "text-bronze-300" : "text-bronze-600"
        }`}
      >
        {price}
      </p>

      <div
        className={`mt-6 pt-6 border-t ${
          featured ? "border-ink-700" : "border-ink-100"
        }`}
      >
        <p
          className={`text-[12px] font-medium uppercase tracking-wider ${
            featured ? "text-ink-200" : "text-ink-400"
          }`}
        >
          Included
        </p>
        <ul className="mt-4 space-y-2.5">
          {includes.map((it) => (
            <li
              key={it}
              className={`flex items-start gap-2.5 text-[14.5px] leading-relaxed ${
                featured ? "text-ink-100" : "text-ink-700"
              }`}
            >
              <span
                className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-bronze-500/20 text-bronze-300"
                    : "bg-bronze-50 text-bronze-600"
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

        {excludes.length > 0 && (
          <>
            <p
              className={`mt-6 text-[12px] font-medium uppercase tracking-wider ${
                featured ? "text-ink-200" : "text-ink-400"
              }`}
            >
              Not included
            </p>
            <ul className="mt-4 space-y-2.5">
              {excludes.map((it) => (
                <li
                  key={it}
                  className={`flex items-start gap-2.5 text-[14.5px] leading-relaxed ${
                    featured ? "text-ink-200/70" : "text-ink-400"
                  }`}
                >
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-current text-[8px]">
                    ×
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="mt-8 pt-2 mt-auto">
        <Link
          href={href}
          className={
            featured
              ? "inline-flex items-center justify-center gap-2 rounded-full bg-bronze-500 px-6 py-3 text-[14px] font-medium text-white hover:bg-bronze-400 transition w-full"
              : "inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-[14px] font-medium text-bone hover:bg-ink-700 transition w-full"
          }
        >
          {cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
