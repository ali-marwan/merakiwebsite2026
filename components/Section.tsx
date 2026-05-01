import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "sand" | "ink";
};

export function Section({ children, className = "", id, tone = "default" }: Props) {
  const toneClass =
    tone === "sand"
      ? "bg-sand"
      : tone === "ink"
      ? "bg-ink-950 text-ink-100"
      : "bg-bone";
  return (
    <section id={id} className={`${toneClass} py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
