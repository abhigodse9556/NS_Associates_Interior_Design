import type { Metadata } from "next";
import Image from "next/image";
import { ServiceList } from "@/components/services/service-list";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, styling, kitchen and bath design, commercial interiors, and design consultation services.",
};

export default function ServicesPage() {
  return (
    <section className="pt-32">
      <Container className="pb-24 md:pb-36">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
          <div className="md:sticky md:top-24 md:self-start">
            <SectionHeading
              eyebrow="Services"
              title="Designed support,"
              accent="from idea to install."
            />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-stone-dim">
              Choose a full-service commission or a focused engagement. Each path
              is structured to create clarity before major decisions are made.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-canvas-mid">
              <Image
                src="https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=900&h=700&fit=crop&auto=format"
                alt="Interior design material palette"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <ServiceList services={services} />
        </div>
      </Container>
    </section>
  );
}
