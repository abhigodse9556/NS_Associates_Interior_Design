import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  featured = false,
  priority = false,
}: {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block overflow-hidden bg-canvas-mid ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="image-shade relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} interior design project`}
          fill
          priority={priority}
          sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-stone">
            {project.category}
          </p>
          <h2 className="font-display text-xl font-light text-cream">{project.title}</h2>
          <p className="mt-1 text-xs text-stone-dim">
            {project.location} / {project.completionYear}
          </p>
        </div>
      </div>
      <div className="border-t border-stone/10 p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-dim">
          {project.category} / {project.projectType}
        </p>
        <h3 className="mt-1 font-display text-lg font-light text-cream">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
