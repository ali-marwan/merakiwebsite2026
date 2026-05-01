"use client";
import { useState } from "react";

type Item = { q: string; a: string };

export function FAQSection({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink-100 border-y border-ink-100">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className={`font-display text-[20px] md:text-[22px] transition-colors ${isOpen ? "text-ink-900" : "text-ink-700 group-hover:text-ink-900"}`}>
                {it.q}
              </span>
              <span
                className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                  isOpen
                    ? "border-bronze-400 bg-bronze-50 text-bronze-700 rotate-45"
                    : "border-ink-200 text-ink-400"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="body max-w-2xl">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
