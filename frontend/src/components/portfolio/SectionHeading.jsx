// Shared heading block for each portfolio section: a mono "// LABEL", a large
// title, and an optional one-line subtitle.
export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
