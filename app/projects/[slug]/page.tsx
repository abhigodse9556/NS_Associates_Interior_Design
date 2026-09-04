import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/projects/image-gallery";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);

    if (!project) {
      return {
        title: "Project Not Found",
      };
    }

    return {
      title: project.title,
      description: project.summary,
      openGraph: {
        title: `${project.title} | NS Associates`,
        description: project.summary,
        images: [project.coverImage],
      },
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-24">
      <Container>
        <Link
          href="/projects"
          className="mb-10 inline-flex text-xs uppercase tracking-[0.2em] text-stone-dim transition-colors hover:text-stone"
        >
          &lt;- All projects
        </Link>
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-dim">
              {project.category} / {project.location}
            </p>
            <h1 className="font-display text-5xl font-light leading-tight text-cream md:text-7xl">
              {project.title}
            </h1>
          </div>
          <div className="self-end">
            <p className="text-base leading-relaxed text-stone-dim">
              {project.summary}
            </p>
          </div>
        </div>
      </Container>

      <div className="relative mt-16 aspect-[16/9] min-h-[360px] bg-canvas-mid">
        <Image
          src={project.coverImage}
          alt={`${project.title} hero image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <aside className="grid grid-cols-3 gap-4 md:block md:space-y-8">
            {project.stats.map((stat) => (
              <div key={stat.label} className="border-t border-rule pt-4">
                <p className="font-display text-2xl font-light text-stone">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </aside>
          <div>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-dim">
              {project.description}
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="mb-4 font-display text-2xl font-light text-cream">
                  Scope
                </h2>
                <ul className="space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="border-t border-rule pt-3 text-sm text-stone-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 font-display text-2xl font-light text-cream">
                  Details
                </h2>
                <dl className="space-y-3 text-sm">
                  <div className="border-t border-rule pt-3">
                    <dt className="text-stone-dim">Year</dt>
                    <dd className="mt-1 text-cream">
                      {project.completionYear}
                    </dd>
                  </div>
                  <div className="border-t border-rule pt-3">
                    <dt className="text-stone-dim">Type</dt>
                    <dd className="mt-1 text-cream">{project.projectType}</dd>
                  </div>
                  <div className="border-t border-rule pt-3">
                    <dt className="text-stone-dim">Location</dt>
                    <dd className="mt-1 text-cream">{project.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="pb-24 md:pb-36">
        <ImageGallery images={project.gallery} title={project.title} />
      </Container>
    </article>
  );
}
