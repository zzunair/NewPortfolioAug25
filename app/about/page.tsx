import type { Metadata } from "next";
import Image from "next/image";
import Pill from "@/components/Pill";
import JsonLd from "@/components/JsonLd";
import { SKILLS, EXPERIENCE, EDUCATION, CERTIFICATION } from "@/lib/data/about";
import { personJsonLd, buildPageMetadata } from "@/lib/seo";
import { SOCIAL_LINKS, YEARS_EXPERIENCE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description: `Certified Shopify Plus developer based in Lahore, Pakistan, with ${YEARS_EXPERIENCE} years building ecommerce stores.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={personJsonLd()} />

      <div className="mx-auto max-w-[1000px] px-8 pb-16 pt-28">
        <Image
          src="/images/others/dp.png"
          alt="Zunair Shahid, Certified Shopify Plus Developer based in Lahore, Pakistan"
          width={96}
          height={96}
          className="mb-7 h-24 w-24 rounded-full border-2 border-accent object-cover"
        />
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[52px]">
          Zunair Shahid
        </h1>
        <p className="mt-2.5 text-[17px] font-medium text-accent">Certified Shopify Plus Developer</p>
        <p className="mt-1.5 font-mono text-sm text-muted">Lahore, Pakistan</p>
      </div>

      <div className="mx-auto flex max-w-[760px] flex-col gap-5 px-8 pb-24">
        <p className="text-lg leading-relaxed text-text">
          I build and run Shopify stores for brands that plan to be around for a while — which
          means I care less about shipping something fast and more about shipping something that
          still works cleanly a year later.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Over the past {YEARS_EXPERIENCE} years I&apos;ve built 100+ Shopify and Shopify Plus stores for DTC
          brands, enterprise retailers, and the agencies that serve them — mostly across the US,
          UK, and Canada. Clients tend to start with a single project and stay for years, because I
          treat every store like it&apos;s still mine to look after once it&apos;s live.
        </p>
        <p className="text-base leading-relaxed text-muted">
          That&apos;s the whole model: fewer clients, deeper relationships, and a developer who
          already knows your codebase when something needs to change.
        </p>
      </div>

      <div className="border-y border-border bg-surface px-8 py-14">
        <a
          href={CERTIFICATION.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-[760px] flex-wrap items-center gap-5 hover:opacity-90"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-accent font-mono text-xl text-accent">
            ✓
          </div>
          <div>
            <div className="text-[15px] font-semibold text-text">{CERTIFICATION.title}</div>
            <div className="mt-1 font-mono text-[13px] text-muted">{CERTIFICATION.issuer}</div>
          </div>
        </a>
      </div>

      <div className="mx-auto max-w-[760px] px-8 py-24">
        <h2 className="mb-6 text-2xl font-semibold text-text">Skills</h2>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-surface px-8 py-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mb-10 text-2xl font-semibold text-text">Experience</h2>
          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((job) => (
              <div key={job.title} className="flex gap-5">
                <div
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                    job.current ? "bg-accent shadow-[0_0_8px_rgba(0,212,255,0.6)]" : "bg-border"
                  }`}
                />
                <div>
                  <div className="text-base font-semibold text-text">{job.title}</div>
                  <div className="mt-0.5 text-sm text-accent">{job.company}</div>
                  <div className="mt-0.5 font-mono text-[13px] text-muted">{job.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[760px] px-8 py-24">
        <h2 className="mb-6 text-2xl font-semibold text-text">Education</h2>
        <div className="text-base font-semibold text-text">{EDUCATION.school}</div>
        <div className="mt-1 text-sm text-muted">{EDUCATION.degree}</div>
        <div className="mt-1 font-mono text-[13px] text-muted">{EDUCATION.period}</div>
      </div>

      <div className="border-t border-border px-8 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              rel="me"
              target="_blank"
              className="text-sm font-medium text-muted hover:text-accent-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
