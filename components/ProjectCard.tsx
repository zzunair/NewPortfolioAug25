import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.slug}`}
      className="block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
    >
      <div className="relative h-[200px] overflow-hidden border-b border-border">
        <Image
          src={project.img}
          alt={project.alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1240px) 400px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-accent-soft">
          {project.tag}
        </span>
        <h3 className="mt-3.5 text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.desc}</p>
        <p className="mt-3.5 font-mono text-[13px] text-accent">{project.metric}</p>
        <span className="mt-3.5 inline-block text-sm font-semibold text-accent">
          View case study →
        </span>
      </div>
    </Link>
  );
}
