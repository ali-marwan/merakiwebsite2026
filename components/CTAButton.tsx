import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

const map: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
  external = false,
}: Props) {
  const cls = `${map[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
