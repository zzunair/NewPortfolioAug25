import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import JsonLd from "@/components/JsonLd";
import ProjectsFilter from "@/components/ProjectsFilter";
import { SHOWCASE_PROJECTS } from "@/lib/data/showcase";
import {
  breadcrumbJsonLd,
  buildOgImageUrl,
  buildPageMetadata,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  projectsItemListJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLES.projects,
  description: PAGE_DESCRIPTIONS.projects,
  path: "/projects",
  image: buildOgImageUrl("Projects", "84 live builds"),
});

export default function ProjectsPage() {
  const linked = SHOWCASE_PROJECTS.filter((project) => project.url).length;

  return (
    <div>
      <JsonLd
        data={[
          projectsItemListJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-[1240px] px-8 pb-32 pt-28">
        <Eyebrow>projects</Eyebrow>
        <h1 className="mt-3.5 max-w-[760px] text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[52px]">
          Every build, with its stack and link
        </h1>
        <p className="mt-4 max-w-[640px] text-lg leading-relaxed text-muted">
          {SHOWCASE_PROJECTS.length} projects across Shopify Plus, Shopify, apps, BigCommerce,
          WordPress, Next.js, and MERN. {linked} of them link out to the live site.
        </p>
        <div className="mt-9">
          <ProjectsFilter projects={SHOWCASE_PROJECTS} />
        </div>
      </div>
    </div>
  );
}
