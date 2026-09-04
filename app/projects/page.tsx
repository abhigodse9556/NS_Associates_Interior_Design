import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected interior design projects by NS Associates across residential, commercial, and hospitality spaces.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-32">
      <Container className="pb-24 md:pb-36">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected interiors,"
            accent="resolved with care."
          />
          <p className="max-w-sm text-sm leading-relaxed text-stone-dim">
            Residential homes, commercial studios, and hospitality suites shaped
            through considered planning, durable materials, and quiet detail.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
