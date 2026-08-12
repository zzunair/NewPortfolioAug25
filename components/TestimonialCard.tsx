import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const attribution =
    testimonial.company && testimonial.companyUrl ? (
      <>
        {testimonial.role} @{" "}
        <a
          href={testimonial.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-border underline-offset-2 hover:text-accent-soft"
        >
          {testimonial.company}
        </a>
      </>
    ) : testimonial.company ? (
      `${testimonial.role} @ ${testimonial.company}`
    ) : (
      testimonial.role
    );

  return (
    <div className="rounded-xl border border-border bg-card p-8">
      <p className="text-[15px] leading-relaxed text-text">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-2.5">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <div>
          <div className="text-sm font-semibold text-text">{testimonial.name}</div>
          <div className="text-[13px] text-muted">{attribution}</div>
        </div>
      </div>
    </div>
  );
}
