"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
      <p className="mb-12 text-center text-xs uppercase tracking-[0.25em] text-stone-dim">
        Client Voices
      </p>
      <div className="relative min-h-64 md:min-h-52">
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            className={`absolute inset-0 transition-all duration-500 ${
              index === active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
            }`}
          >
            <blockquote className="mb-8 text-center font-display text-2xl font-light italic leading-relaxed text-cream md:text-3xl">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="text-center">
              <p className="text-sm font-medium text-stone">{testimonial.name}</p>
              <p className="mt-1 text-xs tracking-wide text-stone-dim">
                {testimonial.project}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-12 flex justify-center gap-3 md:mt-20">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setActive(index)}
            className={`h-px transition-all duration-300 ${
              index === active ? "w-10 bg-stone" : "w-5 bg-stone-dim/40 hover:bg-stone-dim"
            }`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
