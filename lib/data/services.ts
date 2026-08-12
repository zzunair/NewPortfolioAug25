export type Service = {
  slug: string;
  number: string;
  icon: string;
  title: string;
  blurb: string;
  whoFor: string;
  included: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "store-builds",
    number: "01",
    icon: "◆",
    title: "Custom Shopify & Shopify Plus Store Builds",
    blurb:
      "Fully custom Shopify & Shopify Plus storefronts built for conversion and scale.",
    whoFor: "DTC brands launching on Shopify, or Shopify Plus merchants outgrowing their current theme.",
    included: [
      "Custom theme development in Liquid",
      "Mobile-first, performance-optimized build",
      "Third-party app & API integrations",
      "Checkout customization (Shopify Plus)",
      "QA across devices and browsers",
    ],
  },
  {
    slug: "migrations",
    number: "02",
    icon: "⇄",
    title: "WooCommerce → Shopify Migrations",
    blurb: "Seamless WooCommerce → Shopify migrations with zero SEO or data loss.",
    whoFor: "WordPress/WooCommerce store owners hitting scaling or reliability limits.",
    included: [
      "Full product, customer & order data migration",
      "301 redirect mapping to preserve SEO equity",
      "Theme rebuild matching your existing brand",
      "Staged cutover with zero storefront downtime",
      "Post-launch monitoring for 2 weeks",
    ],
  },
  {
    slug: "app-development",
    number: "03",
    icon: "▣",
    title: "Shopify App Development",
    blurb: "Custom Shopify apps that extend your store beyond what themes allow.",
    whoFor: "Brands with a workflow no existing app covers, or agencies building for their own clients.",
    included: [
      "Requirements scoping & architecture",
      "Embedded app UI (Shopify App Bridge / Polaris)",
      "Webhooks & third-party API integration",
      "App Store submission support (public apps)",
    ],
  },
  {
    slug: "cro",
    number: "04",
    icon: "△",
    title: "CRO & Conversion Optimization",
    blurb: "Data-driven testing to turn more of your traffic into revenue.",
    whoFor: "Stores with steady traffic but a conversion rate that's plateaued.",
    included: [
      "Funnel & heatmap analysis",
      "A/B testing roadmap",
      "Checkout & PDP friction fixes",
      "Site speed optimization",
      "Monthly performance reporting",
    ],
  },
  {
    slug: "retainer",
    number: "05",
    icon: "∞",
    title: "Retainer & Ongoing Maintenance",
    blurb: "Ongoing support so your store keeps shipping, long after launch.",
    whoFor: "Brands that want a developer on-call rather than rebuilding a relationship every time something breaks.",
    included: [
      "Monthly bucket of development hours",
      "Priority bug fixes & theme updates",
      "Shopify version & app compatibility monitoring",
      "Direct line for quick turnaround requests",
    ],
  },
];
