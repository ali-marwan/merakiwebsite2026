import Link from "next/link";

type Props = {
  index: string;
  name: string;
  summary: string;
  items: readonly string[];
  href?: string;
};

export function ServiceCard({ index, name, summary, items, href = "/services" }: Props) {
  return (
    <Link
      href={href}
      className="group card card-hover p-7 flex flex-col h-full"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-bronze-500">
          {index}
        </span>
        <span className="text-ink-200 group-hover:text-bronze-500 transition-colors" aria-hidden>
          →
        </span>
      </div>
      <h3 className="font-display text-[26px] mt-3 text-ink-900">{name}</h3>
      <p className="body mt-2">{summary}</p>
      <ul className="mt-5 pt-5 border-t border-ink-100 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[14px] text-ink-700">
            <span className="mt-2 h-1 w-1 rounded-full bg-bronze-400 shrink-0" aria-hidden />
            {it}
          </li>
        ))}
      </ul>
    </Link>
  );
}
