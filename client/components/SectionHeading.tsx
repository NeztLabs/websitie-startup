export default function SectionHeading({
  label,
  title,
  intro,
  className = "",
}: {
  label: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="label-tech">{label}</span>
      </div>
      <h2 className="mt-5 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
      )}
    </div>
  );
}
