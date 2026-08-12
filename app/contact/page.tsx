import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me about your Shopify store and let's see if we're a good fit.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-[1000px] gap-16 px-8 py-28 sm:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl">
          Let&apos;s build something long-term
        </h1>
        <p className="mt-4.5 text-base leading-relaxed text-muted">
          I typically respond within 4 hours.
        </p>
        <div className="mt-12 flex flex-col gap-4">
          <a
            href="https://linkedin.com"
            className="inline-block rounded-md border border-border px-4 py-3 text-sm font-semibold text-accent"
          >
            Message on LinkedIn →
          </a>
          <a
            href="https://upwork.com"
            className="inline-block rounded-md border border-border px-4 py-3 text-sm font-semibold text-accent"
          >
            Hire on Upwork →
          </a>
        </div>
      </div>

      <ContactForm showBudget />
    </div>
  );
}
