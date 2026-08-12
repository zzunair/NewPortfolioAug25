"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECT_CATEGORIES, type Project } from "@/lib/data/projects";

export default function PortfolioFilter({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const filtered = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-md border px-4.5 py-2.5 text-[13px] font-medium ${
              cat === category
                ? "border-accent bg-accent font-semibold text-bg"
                : "border-border text-muted hover:border-accent/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
