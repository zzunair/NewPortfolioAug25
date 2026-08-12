import Link from "next/link";
import type { Service } from "@/lib/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-accent/40">
      <div className="mb-4 font-mono text-xl text-accent">{service.icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-text">{service.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted">{service.blurb}</p>
      <Link href={`/services#${service.slug}`} className="text-sm font-semibold text-accent">
        Learn more →
      </Link>
    </div>
  );
}
