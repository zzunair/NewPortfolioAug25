import type { Metadata } from "next";
import {
  CREDLY_BADGE_URL,
  OG_IMAGE,
  PERSON_ID,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  absoluteUrl,
} from "@/lib/site";
import type { FaqItem } from "@/lib/data/faq";
import type { BlogPost } from "@/lib/data/blog";
import type { Project } from "@/lib/data/projects";

const TWITTER_HANDLE = "@zunair_says";

export const PAGE_DESCRIPTIONS = {
  home: "Zunair Shahid — Certified Shopify Plus developer, 8+ years, 100+ stores. Custom builds, WooCommerce migrations & long-term retainer partnerships for US, UK & Canada brands.",
  about:
    "Learn about Zunair Shahid — Certified Shopify Plus developer in Lahore, Pakistan, with 8+ years building ecommerce stores for brands across the US, UK, and Canada.",
  services:
    "Custom Shopify store builds, WooCommerce to Shopify migrations, app development, CRO, and retainer support — by Certified Shopify Plus developer Zunair Shahid.",
  portfolio:
    "Case studies from 100+ Shopify and Shopify Plus projects — custom storefronts, migrations, and app builds by Certified Shopify Plus developer Zunair Shahid.",
  blog: "Practical guides on Shopify development, store migrations, app builds, and ecommerce strategy — written by Certified Shopify Plus developer Zunair Shahid.",
  contact:
    "Start a Shopify project or retainer partnership with Zunair Shahid — Certified Shopify Plus developer serving US, UK & Canada brands. Responds within 4 hours.",
} as const;

export const PAGE_TITLES = {
  home: "Zunair Shahid | Certified Shopify Plus Developer",
  about: "About Zunair Shahid — Certified Shopify Plus Developer",
  services: "Shopify Development Services — Builds, Migrations & Apps | Zunair Shahid",
  portfolio: "Shopify Portfolio — 100+ Store Projects | Zunair Shahid",
  blog: "Shopify Development Blog — Tips, Migrations & Strategy | Zunair Shahid",
  contact: "Work With Zunair Shahid — Certified Shopify Plus Developer",
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
};

export function buildOgImageUrl(title: string, subtitle: string) {
  const params = new URLSearchParams({
    title,
    subtitle,
  });
  return `/api/og?${params.toString()}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt = SITE_NAME,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : absoluteUrl(OG_IMAGE);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function blogPostTitle(post: BlogPost) {
  return `${post.title} | Zunair Shahid — Shopify Plus Developer`;
}

export function caseStudyTitle(project: Project) {
  return `${project.name} Case Study — Shopify Development | Zunair Shahid`;
}

export function caseStudyDescription(project: Project) {
  const serviceType = project.category.toLowerCase();
  return `How Zunair Shahid built ${project.desc.charAt(0).toLowerCase()}${project.desc.slice(1)} — a Shopify ${serviceType} case study with real results.`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: "Certified Shopify Plus Developer",
    description:
      "Certified Senior Shopify Plus and BigCommerce developer with 8+ years building custom stores, WooCommerce migrations, Shopify apps, and long-term ecommerce partnerships for brands in the US, UK, and Canada.",
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [
      SOCIAL.linkedin,
      SOCIAL.github,
      SOCIAL.upwork,
      CREDLY_BADGE_URL,
      SOCIAL.x,
    ],
    knowsAbout: [
      "Shopify Plus",
      "Shopify Theme Development",
      "Liquid",
      "Shopify App Development",
      "BigCommerce",
      "WooCommerce to Shopify Migration",
      "Headless Commerce",
      "Next.js",
      "Conversion Rate Optimization",
      "MERN Stack",
      "React",
      "Node.js",
      "Tailwind CSS",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Liquid Storefronts for Theme Developers",
      credentialCategory: "Certification",
      dateCreated: "2024-04",
      url: CREDLY_BADGE_URL,
      recognizedBy: {
        "@type": "Organization",
        name: "Shopify",
        url: "https://www.shopify.com",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Zunair Shahid — Freelance",
      url: SITE_URL,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Punjab University College of Information Technology (PUCIT)",
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

function toIsoDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${parsed.getFullYear()}-${month}-${day}`;
}

export function blogPostingJsonLd(post: BlogPost) {
  const datePublished = toIsoDate(post.date);
  const ogImage = buildOgImageUrl(post.title, post.tag);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    image: absoluteUrl(ogImage),
    keywords: post.tag,
    articleSection: post.tag,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: absoluteUrl("/about"),
      jobTitle: "Certified Shopify Plus Developer",
      sameAs: SOCIAL.linkedin,
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      image: absoluteUrl(OG_IMAGE),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shopify Development Services by Zunair Shahid",
    description:
      "Five ways Zunair Shahid helps Shopify brands grow — from custom builds to long-term retainer partnerships.",
    url: absoluteUrl("/services"),
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Custom Shopify & Shopify Plus Store Builds",
          description:
            "Fully custom Shopify & Shopify Plus storefronts built for conversion and scale. Includes custom theme development in Liquid, mobile-first performance-optimized build, third-party integrations, and checkout customization.",
          provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          areaServed: ["US", "GB", "CA"],
          url: absoluteUrl("/services#store-builds"),
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "WooCommerce to Shopify Migration",
          description:
            "Seamless WooCommerce to Shopify migrations with zero SEO or data loss. Includes full product, customer & order data migration, 301 redirect mapping, staged cutover with zero downtime, and 2 weeks post-launch monitoring.",
          provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          areaServed: ["US", "GB", "CA"],
          url: absoluteUrl("/services#migrations"),
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Shopify App Development",
          description:
            "Custom Shopify apps that extend your store beyond what themes allow. Includes private and public apps, embedded app UI with Shopify App Bridge and Polaris, webhooks, and third-party API integration.",
          provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          areaServed: ["US", "GB", "CA"],
          url: absoluteUrl("/services#app-development"),
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "CRO & Conversion Optimization",
          description:
            "Data-driven testing to turn more traffic into revenue. Includes funnel and heatmap analysis, A/B testing roadmap, checkout and PDP friction fixes, site speed optimization, and monthly performance reporting.",
          provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          areaServed: ["US", "GB", "CA"],
          url: absoluteUrl("/services#cro"),
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Shopify Retainer & Ongoing Maintenance",
          description:
            "Ongoing development support so your store keeps shipping after launch. Includes monthly development hours, priority bug fixes, theme updates, Shopify version monitoring, and a direct line for quick turnaround.",
          provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          areaServed: ["US", "GB", "CA"],
          url: absoluteUrl("/services#retainer"),
        },
      },
    ],
  };
}
