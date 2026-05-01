type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-bone pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28 border-b border-ink-100">
      <div
        className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[900px] rounded-full bg-radial-fade blur-3xl opacity-70"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="max-w-4xl animate-fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-lg mt-6 text-balance">{title}</h1>
          {description && (
            <p className="body-xl mt-6 max-w-3xl text-pretty">{description}</p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}
