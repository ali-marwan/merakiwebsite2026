import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "sand" | "ink";
  size?: "default" | "sm";
};

export function Section({
  children,
  className = "",
  id,
  tone = "default",
  size = "default",
}: Props) {
  const toneClass =
    tone === "sand"
      ? "bg-sand"
      : tone === "ink"
      ? "bg-ink-950 text-ink-100"
      : "bg-bone";
  const padClass = size === "sm" ? "section-pad-sm" : "section-pad";
  return (
    <section id={id} className={`${toneClass} ${padClass} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
