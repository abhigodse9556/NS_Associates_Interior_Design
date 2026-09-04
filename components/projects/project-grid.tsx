import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={index === 0 || index === projects.length - 1}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
