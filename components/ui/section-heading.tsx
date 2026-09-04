export function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-dim">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-light leading-tight text-cream md:text-5xl">
        {title}
        {accent ? (
          <>
            <br />
            <em className="font-light text-stone">{accent}</em>
          </>
        ) : null}
      </h1>
    </div>
  );
}
