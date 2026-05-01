"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-ink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[84px]">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={brand.name}
        >
          <Logo />
          <span className="font-display text-[20px] md:text-[22px] font-bold tracking-display-tight text-ink-900">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 xl:px-4 py-2 text-[14.5px] font-medium transition-colors ${
                  active ? "text-ink-900" : "text-ink-400 hover:text-ink-900"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3.5 right-3.5 xl:left-4 xl:right-4 -bottom-px h-px bg-bronze-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* TODO(auth): replace href with /portal/login when auth exists */}
          <Link href="/meraki-ai" className="btn-ghost">
            Client Login
          </Link>
          <Link href="/contact" className="btn-primary">
            Speak to Our Team
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-ink-100 bg-white text-ink-900"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-ink-900 transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink-900 transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-bone">
          <div className="container-x py-5 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3.5 border-b border-ink-100 text-ink-900 text-[16px] font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* TODO(auth): replace with /portal/login */}
              <Link href="/meraki-ai" className="btn-secondary w-full">
                Client Login
              </Link>
              <Link href="/contact" className="btn-primary w-full">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
