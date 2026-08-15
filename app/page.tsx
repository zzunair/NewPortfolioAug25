import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqList from "@/components/FaqList";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";
import { AUTHOR_BIO, CREDLY_BADGE_URL, YEARS_EXPERIENCE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  description: AUTHOR_BIO,
  path: "/",
});

const BADGES = [
  { label: "✓ Shopify Certified", href: CREDLY_BADGE_URL },
  { label: `${YEARS_EXPERIENCE} Years`, href: null },
  { label: "100+ Stores", href: null },
  { label: "Top Rated ★", href: null },
];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={faqPageJsonLd(FAQ_ITEMS)} />

      {/* HERO */}
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,212,255,0.08),transparent)] px-8 pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-accent-soft">
            <span className="h-1.5 w-1.5 animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full bg-accent" />
            Available for new retainer partnerships
          </div>
          <h1 className="max-w-[920px] text-[40px] font-bold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-[84px]">
            Zunair Shahid
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-snug text-muted sm:text-2xl lg:text-[26px]">
            Your long-term Shopify partner — <span className="text-accent">not just another developer.</span>
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {BADGES.map((badge) =>
              badge.href ? (
                <a
                  key={badge.label}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-accent/30 bg-accent/[0.06] px-3.5 py-2 font-mono text-xs text-accent hover:border-accent/60"
                >
                  {badge.label}
                </a>
              ) : (
                <div
                  key={badge.label}
                  className="rounded-md border border-accent/30 bg-accent/[0.06] px-3.5 py-2 font-mono text-xs text-accent"
                >
                  {badge.label}
                </div>
              ),
            )}
          </div>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-8 py-4 text-base font-semibold text-bg transition-shadow hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]"
            >
              Start a project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md border border-accent px-8 py-4 text-base font-semibold text-accent transition-shadow hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>

      {/* CREDIBILITY STRIP */}
      <div className="border-y border-border bg-surface px-8 py-[22px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-6 text-center">
          <span className="text-sm text-muted">
            Trusted by brands across <span className="text-text">🇺🇸 US</span> ·{" "}
            <span className="text-text">🇬🇧 UK</span> · <span className="text-text">🇨🇦 Canada</span>
          </span>
          <span className="text-border">|</span>
          <span className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-accent-soft">
            Shopify Partner
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <div className="mx-auto max-w-[1240px] px-8 py-28 sm:py-32">
        <div className="mb-16 max-w-xl">
          <Eyebrow>services</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[44px]">
            What I bring to the table
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      {/* CASE STUDIES */}
      <div className="border-y border-border bg-surface px-8 py-28 sm:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>case studies</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[44px]">
                Recent work
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-accent">
              View all work →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mx-auto max-w-[1240px] px-8 py-28 sm:py-32">
        <div className="mb-16 max-w-xl">
          <Eyebrow>testimonials</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[44px]">
            What clients say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* ABOUT TEASER */}
      <div className="border-y border-border bg-surface px-8 py-24">
        <div className="mx-auto max-w-[820px] text-center">
          <Image
            src="/images/others/dp.png"
            alt="Zunair Shahid, Certified Shopify Plus Developer"
            width={88}
            height={88}
            className="mx-auto mb-7 h-[88px] w-[88px] rounded-full border-2 border-accent object-cover"
          />
          <p className="text-xl leading-relaxed text-text">
            I&apos;ve spent {YEARS_EXPERIENCE} years building and scaling Shopify stores for brands across the US, UK,
            and Canada — not as a hired gun, but as the developer teams keep coming back to.
          </p>
          <Link href="/about" className="mt-6 inline-block text-[15px] font-semibold text-accent">
            Read my full story →
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-[900px] px-8 py-28 sm:py-32">
        <div className="mb-14">
          <Eyebrow>faq</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[44px]">
            Frequently asked questions
          </h2>
        </div>
        <FaqList items={FAQ_ITEMS} />
      </div>

      {/* CONTACT CTA */}
      <div className="border-t border-border bg-surface px-8 py-28 sm:py-32">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[48px]">
            Looking for a long-term Shopify partner?
          </h2>
          <p className="mt-4 text-base text-muted">
            Tell me about your store and let&apos;s see if we&apos;re a good fit.
          </p>
        </div>
        <div className="mx-auto max-w-[560px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
