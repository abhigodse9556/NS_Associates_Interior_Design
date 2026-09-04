import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/data/projects";

const stats = [
  ["120+", "Projects delivered"],
  ["13", "Years in practice"],
  ["8", "Countries served"],
];

export function Hero() {
  const featured = projects[0];

  return (
    <section className="relative min-h-screen">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-end bg-canvas px-6 pb-16 pt-32 md:px-16 md:pb-24">
          <div className="max-w-xl">
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-stone-dim">
              Interior Design Studio / Est. 2011
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.08] text-cream md:text-6xl lg:text-7xl">
              Spaces that <em className="font-light text-stone">feel</em>
              <br />
              as deliberate
              <br />
              as they look.
            </h1>
            <p className="mb-12 mt-8 max-w-sm text-base leading-relaxed text-stone-dim md:text-lg">
              We design residential and commercial interiors for clients who
              value precision, restraint, and the slow craft of getting every
              detail right.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/projects">View Our Work -&gt;</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a Project
              </ButtonLink>
            </div>
          </div>
          <dl className="mt-16 flex flex-wrap gap-8 border-t border-rule pt-10 md:gap-10">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-light text-stone">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-stone-dim">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative order-first h-[42vh] bg-canvas-mid md:order-last md:h-auto">
          <Image
            src={featured.coverImage}
            alt="Warm living room interior by NS Associates"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-canvas/25" />
          <div className="absolute bottom-6 right-6 hidden border border-rule bg-canvas/85 px-4 py-3 backdrop-blur-sm md:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-dim">
              Featured Project
            </p>
            <p className="mt-0.5 text-sm font-light text-cream">
              {featured.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
