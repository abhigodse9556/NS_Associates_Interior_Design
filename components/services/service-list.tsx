import type { Service } from "@/data/services";

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="flex flex-col">
      {services.map((service, index) => (
        <article
          key={service.id}
          className={`group border-t border-rule py-8 transition-colors hover:border-stone/40 ${
            index === services.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="flex items-start gap-6 md:gap-10">
            <span className="shrink-0 pt-1 font-display text-xs tracking-widest text-stone-dim">
              {service.number}
            </span>
            <div className="flex-1">
              <h2 className="mb-3 font-display text-2xl font-light text-cream transition-colors group-hover:text-stone">
                {service.title}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-stone-dim">
                {service.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="border border-stone/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-stone-dim"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <span className="mt-1 hidden text-stone-dim transition-transform group-hover:translate-x-1 group-hover:text-stone md:block">
              -&gt;
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
