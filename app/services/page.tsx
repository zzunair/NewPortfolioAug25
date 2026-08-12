import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Five ways I help Shopify brands: custom builds, migrations, app development, CRO, and ongoing retainers.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="mx-auto max-w-[900px] px-8 pb-16 pt-28">
        <Eyebrow>services</Eyebrow>
        <h1 className="mt-3.5 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[52px]">
          How I can help your store
        </h1>
        <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-muted">
          Five ways brands typically bring me in — most start with one and move into an ongoing
          retainer.
        </p>
      </div>

      <div className="flex flex-col">
        {SERVICES.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className={`border-t border-border px-8 py-20 ${i % 2 === 0 ? "bg-surface" : ""}`}
          >
            <div className="mx-auto max-w-[900px]">
              <div className="mb-3 font-mono text-xs text-accent">{service.number}</div>
              <h2 className="mb-3.5 text-[28px] font-semibold text-text">{service.title}</h2>
              <p className="mb-5 max-w-[640px] text-[15px] leading-relaxed text-muted">
                {service.blurb}
              </p>
              <p className="mb-2 font-mono text-xs text-accent-soft">WHO IT&apos;S FOR</p>
              <p className="mb-5 text-sm text-muted">{service.whoFor}</p>
              <p className="mb-2.5 font-mono text-xs text-accent-soft">WHAT&apos;S INCLUDED</p>
              <ul className="mb-7 flex flex-col gap-1 text-sm leading-[2] text-muted">
                {service.included.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-shadow hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                Start a project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
