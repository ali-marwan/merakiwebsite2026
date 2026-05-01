type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-bone pt-12 md:pt-16 pb-14 md:pb-20 border-b border-ink-100">
      <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_60%)]" aria-hidden />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-radial-fade blur-3xl opacity-70" aria-hidden />
      <div className="container-x relative">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-lg mt-4 text-balance">{title}</h1>
          {description && <p className="body-lg mt-5 max-w-2xl text-balance">{description}</p>}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
