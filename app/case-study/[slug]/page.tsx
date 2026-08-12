import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/lib/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.name, description: project.desc };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const techStack = project.caseStudy?.techStack ?? [
    ...project.tag.split(" · "),
    project.category,
  ];
  const resultLine = project.caseStudy?.resultLine ?? project.metric;

  return (
    <div>
      <div className="mx-auto max-w-[900px] px-8 pb-10 pt-28">
        <Link href="/portfolio" className="text-[13px] text-muted hover:text-accent-soft">
          ← Back to work
        </Link>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.tag.split(" · ").map((t) => (
            <span
              key={t}
              className="rounded-md border border-border px-3 py-1.5 font-mono text-[11px] text-accent-soft"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4.5 text-4xl font-bold tracking-tight text-text sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 text-base text-muted">{project.desc}</p>
      </div>

      <div className="mx-auto max-w-[900px] px-8 pb-10">
        <div className="overflow-hidden rounded-xl border border-border">
          <Image
            src={project.img}
            alt={project.alt}
            width={900}
            height={520}
            className="block w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[760px] flex-col gap-12 px-8 py-14">
        <div>
          <h2 className="mb-3.5 text-xl font-semibold text-text">Overview</h2>
          <p className="text-[15px] leading-relaxed text-muted">{project.desc}</p>
        </div>

        {project.caseStudy && (
          <>
            <div>
              <h2 className="mb-3.5 text-xl font-semibold text-text">The Challenge</h2>
              <p className="text-[15px] leading-relaxed text-muted">
                {project.caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="mb-3.5 text-xl font-semibold text-text">The Solution</h2>
              <p className="text-[15px] leading-relaxed text-muted">
                {project.caseStudy.solution}
              </p>
            </div>
          </>
        )}

        <div>
          <h2 className="mb-3.5 text-xl font-semibold text-text">Tech Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-accent/30 px-3.5 py-2 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3.5 text-xl font-semibold text-text">Result</h2>
          <p className="font-mono text-lg text-accent">{resultLine}</p>
        </div>
      </div>

      <div className="border-t border-border bg-surface px-8 py-20 text-center">
        <h2 className="text-[26px] font-semibold text-text">Have a similar project?</h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-accent px-8 py-4 text-[15px] font-semibold text-bg transition-shadow hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
        >
          Let&apos;s talk →
        </Link>
      </div>
    </div>
  );
}
