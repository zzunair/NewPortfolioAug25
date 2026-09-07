import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import PortfolioFilter from "@/components/PortfolioFilter";
import { PROJECTS } from "@/lib/data/projects";
import {
  buildOgImageUrl,
  buildPageMetadata,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLES.portfolio,
  description: PAGE_DESCRIPTIONS.portfolio,
  path: "/portfolio",
  image: buildOgImageUrl("Portfolio", "100+ Shopify Projects"),
});

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-8 pb-32 pt-28">
      <Eyebrow>work</Eyebrow>
      <h1 className="mt-3.5 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[52px]">
        Case studies &amp; projects
      </h1>
      <div className="mt-9">
        <PortfolioFilter projects={PROJECTS} />
      </div>
    </div>
  );
}
