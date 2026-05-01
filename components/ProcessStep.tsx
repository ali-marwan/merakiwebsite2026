type Props = {
  step: string;
  title: string;
  body: string;
  isLast?: boolean;
};

export function ProcessStep({ step, title, body, isLast = false }: Props) {
  return (
    <div className="relative pl-14">
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-bronze-200 bg-bronze-50 text-bronze-700 font-mono text-[12px]">
        {step}
      </div>
      {!isLast && (
        <div
          className="absolute left-[19px] top-10 bottom-0 w-px bg-ink-100"
          aria-hidden
        />
      )}
      <h4 className="font-display text-[22px] md:text-[24px] font-semibold tracking-display text-ink-900">
        {title}
      </h4>
      <p className="body mt-2.5 mb-12">{body}</p>
    </div>
  );
}
