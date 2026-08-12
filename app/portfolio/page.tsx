import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import PortfolioFilter from "@/components/PortfolioFilter";
import { PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and Shopify projects across store builds, migrations, apps, and CRO.",
};

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
