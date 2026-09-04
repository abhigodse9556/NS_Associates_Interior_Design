import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Hero } from "@/components/home/hero";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ServiceList } from "@/components/services/service-list";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const processSteps = [
  {
    title: "Discover",
    text: "We study your space, daily rituals, constraints, and ambitions before a line is drawn.",
  },
  {
    title: "Design",
    text: "Concept boards, plans, palettes, and visual direction turn feeling into a precise proposal.",
  },
  {
    title: "Develop",
    text: "Drawings, schedules, contractors, suppliers, and details are coordinated into a buildable plan.",
  },
  {
    title: "Deliver",
    text: "Installation, styling, snagging, and handover bring the finished interior into daily use.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24 md:py-36">
        <Container>
          <div className="mb-16 flex items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Selected Work"
              title="Every project,"
              accent="a different story."
            />
            <Link
              href="/contact"
              className="hidden border-b border-stone/20 pb-0.5 text-sm uppercase tracking-widest text-stone-dim transition-colors hover:border-stone hover:text-stone md:inline-flex"
            >
              Commission a project -&gt;
            </Link>
          </div>
          <ProjectGrid projects={getFeaturedProjects()} />
        </Container>
      </section>

      <div className="mx-auto h-px max-w-7xl bg-rule" />

      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div className="md:sticky md:top-24 md:self-start">
              <SectionHeading eyebrow="What We Do" title="Services" />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-dim">
                A focused range of design services for residential, commercial,
                and hospitality clients, from comprehensive transformations to
                targeted room styling.
              </p>
              <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden bg-canvas-mid md:block">
                <Image
                  src="https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=900&h=700&fit=crop&auto=format"
                  alt="Material samples and interior design planning"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <ServiceList services={services} />
          </div>
        </Container>
      </section>

      <section className="bg-canvas-mid py-24 md:py-36">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
                <Image
                  src="https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?w=1000&h=800&fit=crop&auto=format"
                  alt="Dining room project designed by NS Associates"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden w-52 border border-rule bg-canvas p-6 md:block">
                <p className="font-display text-3xl font-light text-stone">
                  2011
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-dim">
                  Studio founded in Satara by its principal designers.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="About the Studio"
                title="Designing with intention,"
                accent="building for time."
              />
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone-dim">
                <p>
                  NS Associates was founded by two architects who wanted
                  interiors that look composed in photographs and feel even
                  better in use.
                </p>
                <p>
                  We work with a deliberately small client list each year,
                  giving every project senior attention from concept through
                  installation.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-10 inline-flex text-sm uppercase tracking-widest text-stone transition-colors hover:text-cream"
              >
                Read our story -&gt;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className="border-y border-rule bg-canvas-mid">
        <Container className="py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
            {processSteps.map((step, index) => (
              <article key={step.title}>
                <p className="mb-3 font-display text-xs uppercase tracking-widest text-stone">
                  {String(index + 1).padStart(2, "0")} / {step.title}
                </p>
                <p className="text-xs leading-relaxed text-stone-dim">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Tell us about"
                accent="your space."
              />
              <p className="mb-12 mt-8 max-w-sm text-sm leading-relaxed text-stone-dim">
                We take on a limited number of new projects each season. Reach
                out and we will arrange an introductory call within two working
                days.
              </p>
              <ContactDetails />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactDetails() {
  const details = [
    ["Email", "nikhilsalunkhe4399@gmail.com"],
    ["Phone", "+91 9075135232 | +91 7385171520"],
    ["Studio", "Satara | Pune"],
    ["Hours", "Mon-Fri, 9:00-18:00 GMT"],
  ];

  return (
    <div className="space-y-6">
      {details.map(([label, value]) => (
        <div key={label}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-dim">
            {label}
          </p>
          <p className="mt-1 text-sm text-cream">{value}</p>
        </div>
      ))}
    </div>
  );
}
