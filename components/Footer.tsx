import Link from "next/link";
import { brand, nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-100">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-[20px] text-bone">
                {brand.name}
              </span>
            </div>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-200">
              {brand.positioning}
            </p>
            <p className="mt-2 font-display text-[18px] text-bronze-300">
              {brand.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/packages" className="btn-accent">View Packages</Link>
              <Link href="/contact" className="btn-secondary !border-ink-700 !bg-transparent !text-ink-100 hover:!bg-bone hover:!text-ink-900">
                Speak to Our Team
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-400">Site</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-[14px] text-ink-100 hover:text-bronze-300 transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-400">Services</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {["Accounting", "VAT & Corporate Tax", "Business Setup", "PRO Services", "E-Invoicing", "AI Portal"].map((s) => (
                <li key={s} className="text-ink-100">{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-400">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-100">
              <li>{brand.address}</li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-bronze-300">{brand.email}</a>
              </li>
              <li>
                <a href={`tel:${brand.whatsapp}`} className="hover:text-bronze-300">{brand.phoneDisplay}</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-bronze-300 hover:text-bronze-200"
                >
                  WhatsApp Us <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-ink-400">
            © {new Date().getFullYear()} {brand.name}. Licensed accounting & bookkeeping services in the United Arab Emirates.
          </p>
          <p className="text-[12px] text-ink-400">
            Final pricing depends on transaction volume, VAT status, employees, reporting and scope.
          </p>
        </div>
      </div>
    </footer>
  );
}
