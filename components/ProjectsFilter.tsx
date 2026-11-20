"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SHOWCASE_PLATFORMS,
  type ShowcaseProject,
} from "@/lib/data/showcase";

function ProjectTile({ project }: { project: ShowcaseProject }) {
  const inner = (
    <>
      <div className="relative h-[200px] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.platform} project`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1240px) 400px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-accent-soft">
          {project.platform}
        </span>
        <h2 className="mt-3.5 text-lg font-semibold text-text">{project.name}</h2>
        {project.industry ? (
          <p className="mt-1.5 text-[13px] text-muted">{project.industry}</p>
        ) : null}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <span
          className={`mt-auto pt-4 text-sm font-semibold ${project.url ? "text-accent" : "font-normal text-muted"}`}
        >
          {project.url ? "Visit site →" : "No public link"}
        </span>
      </div>
    </>
  );

  const className = "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card";

  if (!project.url) {
    return <article className={className}>{inner}</article>;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:border-accent/40`}
    >
      {inner}
    </a>
  );
}

export default function ProjectsFilter({ projects }: { projects: ShowcaseProject[] }) {
  const [platform, setPlatform] = useState<(typeof SHOWCASE_PLATFORMS)[number]>("All");

  const filtered =
    platform === "All" ? projects : projects.filter((project) => project.platform === platform);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2.5">
        {SHOWCASE_PLATFORMS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={item === platform}
            onClick={() => setPlatform(item)}
            className={`rounded-md border px-4.5 py-2.5 text-[13px] font-medium ${
              item === platform
                ? "border-accent bg-accent font-semibold text-bg"
                : "border-border text-muted hover:border-accent/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mb-9 font-mono text-[12px] text-muted">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectTile key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
