export default function SectionHeading({
  index,
  eyebrow,
  title,
  meta,
}: {
  index: string;
  eyebrow: string;
  title: string;
  meta?: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
        {index} — {eyebrow}
      </p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {meta && (
          <span className="shrink-0 pb-2 font-mono text-xs text-muted-foreground">
            {meta}
          </span>
        )}
      </div>
      <div className="mt-5 h-px bg-border" />
    </div>
  );
}
