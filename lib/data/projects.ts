export type ProjectCategory = "Store Builds" | "Migrations" | "Apps" | "CRO";

export type CaseStudyDetail = {
  challenge: string;
  solution: string;
  techStack: string[];
  resultLine: string;
};

export type Project = {
  slug: string;
  name: string;
  tag: string;
  category: ProjectCategory;
  img: string;
  alt: string;
  desc: string;
  metric: string;
  caseStudy?: CaseStudyDetail;
};

export const PROJECTS: Project[] = [
  {
    slug: "wooloomooloo-shoes",
    name: "Wooloomooloo Shoes",
    tag: "Shopify Plus · Fashion",
    category: "Store Builds",
    img: "/images/projects/apt2b.webp",
    alt: "Wooloomooloo Shoes Shopify Plus storefront screenshot",
    desc: "Rebuilt storefront + checkout customization for a footwear DTC brand.",
    metric: "+38% conversion rate",
    caseStudy: {
      challenge:
        "Slow page loads, a rigid theme that blocked new merchandising layouts, and a checkout that couldn't support their planned loyalty program integration.",
      solution:
        "Rebuilt the theme from scratch in Liquid with a modular section architecture, integrated Shopify Plus Checkout Extensibility for the loyalty program, and restructured the codebase for faster iteration going forward.",
      techStack: ["Shopify Plus", "Liquid", "Checkout Extensibility", "Tailwind CSS"],
      resultLine: "+38% conversion rate · -1.4s page load",
    },
  },
  {
    slug: "mchn",
    name: "MCHN",
    tag: "Shopify · App Dev",
    category: "Apps",
    img: "/images/projects/ethelm.webp",
    alt: "MCHN custom Shopify app",
    desc: "Custom subscription app built to handle complex bundling logic.",
    metric: "4,200+ active subscribers",
  },
  {
    slug: "drinklic",
    name: "Drinklic",
    tag: "Migration · CRO",
    category: "Migrations",
    img: "/images/projects/foxlife.webp",
    alt: "Drinklic WooCommerce to Shopify migration",
    desc: "WooCommerce → Shopify migration with zero downtime and SEO preserved.",
    metric: "100% SEO equity retained",
  },
  {
    slug: "bayou-supply-co",
    name: "Bayou Supply Co.",
    tag: "Shopify · CRO",
    category: "CRO",
    img: "/images/projects/bayou.webp",
    alt: "Bayou Supply Co conversion optimization project",
    desc: "Checkout and PDP friction fixes across a growing outdoor gear catalog.",
    metric: "+21% add-to-cart rate",
  },
  {
    slug: "carrera-studio",
    name: "Carrera Studio",
    tag: "Shopify Plus · Retail",
    category: "Store Builds",
    img: "/images/projects/carrera.webp",
    alt: "Carrera Studio Shopify Plus build",
    desc: "Full custom theme build for a multi-region retail brand.",
    metric: "3 storefronts launched",
  },
  {
    slug: "grande-collective",
    name: "Grande Collective",
    tag: "Shopify · Retainer",
    category: "CRO",
    img: "/images/projects/grande.webp",
    alt: "Grande Collective ongoing retainer project",
    desc: "Ongoing retainer covering monthly feature builds and testing.",
    metric: "18 months and counting",
  },
  {
    slug: "kreatures-of-habbit",
    name: "Kreatures of Habbit",
    tag: "Shopify Plus · Apparel",
    category: "Store Builds",
    img: "/images/projects/kreatures-of-habbit.webp",
    alt: "Kreatures of Habbit Shopify Plus store",
    desc: "Headless-ready storefront rebuild with custom size-guide app.",
    metric: "-1.2s page load time",
  },
  {
    slug: "effortless-goods",
    name: "Effortless Goods",
    tag: "Migration",
    category: "Migrations",
    img: "/images/projects/effortless.webp",
    alt: "Effortless Goods migration project",
    desc: "Legacy platform migration with full catalog and metafield mapping.",
    metric: "Zero data loss",
  },
  {
    slug: "enkel",
    name: "Enkel",
    tag: "Shopify · App Dev",
    category: "Apps",
    img: "/images/projects/enkel.webp",
    alt: "Enkel custom Shopify app project",
    desc: "Private app for custom loyalty and rewards logic.",
    metric: "9,000+ redemptions",
  },
  {
    slug: "bowwow-supply",
    name: "BowWow Supply",
    tag: "Shopify · CRO",
    category: "CRO",
    img: "/images/projects/bowwow.webp",
    alt: "BowWow Supply CRO project",
    desc: "A/B tested PDP layout across the full catalog.",
    metric: "+16% AOV",
  },
  {
    slug: "blu-living",
    name: "Blu Living",
    tag: "Shopify Plus · Home",
    category: "Store Builds",
    img: "/images/projects/blu.webp",
    alt: "Blu Living Shopify Plus build",
    desc: "Custom Plus build with dynamic bundling for home goods.",
    metric: "2x catalog throughput",
  },
  {
    slug: "honeybalm",
    name: "Honeybalm",
    tag: "Shopify Plus · Multi-region",
    category: "Store Builds",
    img: "/images/projects/honeybalm-us.png",
    alt: "Honeybalm multi-region Shopify Plus build",
    desc: "Multi-market storefront rollout across 8 regional domains.",
    metric: "8 regional storefronts",
  },
];

export const PROJECT_CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Store Builds",
  "Migrations",
  "Apps",
  "CRO",
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
