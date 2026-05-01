import Link from "next/link";

type Props = {
  index: string;
  name: string;
  summary: string;
  items: readonly string[];
  href?: string;
};

export function ServiceCard({
  index,
  name,
  summary,
  items,
  href = "/services",
}: Props) {
  return (
    <Link
      href={href}
      className="group card card-hover p-8 md:p-9 flex flex-col h-full"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-bronze-500">
          {index}
        </span>
        <span
          className="text-ink-200 group-hover:text-bronze-500 transition-colors"
          aria-hidden
        >
          →
        </span>
      </div>
      <h3 className="font-display text-[26px] md:text-[28px] font-semibold tracking-display mt-4 text-ink-900">
        {name}
      </h3>
      <p className="body mt-3">{summary}</p>
      <ul className="mt-6 pt-6 border-t border-ink-100 space-y-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2.5 text-[14.5px] text-ink-700 leading-relaxed"
          >
            <span
              className="mt-2 h-1 w-1 rounded-full bg-bronze-400 shrink-0"
              aria-hidden
            />
            {it}
          </li>
        ))}
      </ul>
    </Link>
  );
}
