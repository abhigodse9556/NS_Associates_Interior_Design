import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NS Associates, an interior design practice focused on thoughtful, enduring spaces.",
};

const values = [
  "Design restraint before decoration",
  "Materials selected for touch, light, and longevity",
  "A small client list with senior attention",
  "Practical project management from concept to handover",
];

export default function AboutPage() {
  return (
    <section className="pt-32">
      <Container className="pb-24 md:pb-36">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          <div>
            <SectionHeading
              eyebrow="About NS Associates"
              title="Quiet interiors,"
              accent="carefully resolved."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone-dim">
              <p>
                NS Associates is a Satara-based interior design practice working
                across private homes, hospitality suites, and thoughtful
                commercial spaces.
              </p>
              <p>
                The studio was founded in 2011 by its principal designers after
                years in architecture and set design. Their shared approach is
                measured, tactile, and attentive to how rooms support real life.
              </p>
              <p>
                Today, a team of seven designers, procurement leads, and project
                coordinators keeps each commission personal while making
                delivery feel calm and legible.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-canvas-mid md:mt-12">
            <Image
              src="https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?w=1000&h=1250&fit=crop&auto=format"
              alt="Layered dining room interior"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>

      <div className="bg-canvas-mid py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
              A practice built around fewer, better decisions.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="border-t border-rule pt-4">
                  <p className="text-sm leading-relaxed text-stone-dim">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
