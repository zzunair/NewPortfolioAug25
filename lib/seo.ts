import type { Metadata } from "next";
import {
  AUTHOR_BIO,
  JOB_TITLE,
  OG_IMAGE,
  PERSON_ID,
  SAME_AS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import type { FaqItem } from "@/lib/data/faq";
import type { Testimonial } from "@/lib/data/testimonials";
import type { BlogPost } from "@/lib/data/blog";

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
  const imageUrl = absoluteUrl(image);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: imageUrl, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE),
    description: AUTHOR_BIO,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [...SAME_AS],
    knowsAbout: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "BigCommerce",
      "Next.js",
      "Headless Commerce",
      "MERN Stack",
      "React",
      "Node.js",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Pakistan",
      addressCountry: "PK",
    },
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function reviewsJsonLd(testimonials: Testimonial[]) {
  const reviews = testimonials.map((t) => ({
    "@type": "Review",
    reviewBody: t.quote,
    author: {
      "@type": "Person",
      name: t.name,
      ...(t.companyUrl
        ? {
            sameAs: t.companyUrl,
            url: t.companyUrl,
          }
        : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: JOB_TITLE,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: String(testimonials.length),
      reviewCount: String(testimonials.length),
    },
    review: reviews,
  };
}

/**
 * Schema.org requires ISO 8601 dates; post dates are authored as "Aug 12, 2026".
 * Read back the local calendar parts — toISOString() would shift the day in non-UTC build zones.
 */
function toIsoDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${parsed.getFullYear()}-${month}-${day}`;
}

export function articleJsonLd(post: BlogPost) {
  const datePublished = toIsoDate(post.date);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: absoluteUrl("/about"),
      jobTitle: JOB_TITLE,
      image: absoluteUrl(OG_IMAGE),
      sameAs: [...SAME_AS],
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(OG_IMAGE),
  };
}
