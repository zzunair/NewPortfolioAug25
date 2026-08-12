export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; text: string };

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body?: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "woocommerce-to-shopify-migrations-fail",
    tag: "Migrations",
    title: "Why WooCommerce → Shopify Migrations Fail (and How to Avoid It)",
    excerpt:
      "A breakdown of the most common migration mistakes — and the checklist I run on every one.",
    date: "Aug 12, 2026",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Most failed migrations don't fail on launch day — they fail three weeks later, when organic traffic quietly drops and nobody notices until the numbers are already down.",
      },
      { type: "h2", text: "1. Redirect mapping gets skipped" },
      {
        type: "p",
        text: "Every WooCommerce URL structure is different from Shopify's. Without a full 301 redirect map from old paths to new ones, you lose the SEO equity built over years in a single migration.",
      },
      { type: "code", text: "/product/old-slug → /products/new-slug" },
      { type: "h2", text: "2. Metafields aren't mapped before the move" },
      {
        type: "p",
        text: "Custom product fields in WooCommerce don't have a direct Shopify equivalent — they need to be mapped to metafields ahead of the migration, not patched in afterward.",
      },
      { type: "h2", text: "3. There's no staged cutover" },
      {
        type: "p",
        text: "Migrating live, in one shot, invites downtime and untested edge cases. A staged cutover — DNS switched only after the new store is fully QA'd — is what keeps this boring instead of risky.",
      },
      {
        type: "p",
        text: "The pattern across every failed migration I've fixed after the fact is the same: rushing the parts that don't show up in a demo.",
      },
    ],
  },
  {
    slug: "liquid-performance-patterns",
    tag: "Shopify Tips",
    title: "5 Liquid Performance Patterns Every Plus Store Should Use",
    excerpt: "Section rendering tricks that shave real seconds off Shopify Plus storefronts.",
    date: "Jul 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "build-vs-buy-shopify-app",
    tag: "Apps",
    title: "When to Build a Custom Shopify App vs. Buy One",
    excerpt: "A framework for deciding when off-the-shelf apps stop being the right answer.",
    date: "Jul 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "retainer-developer-vs-project-hires",
    tag: "Ecommerce Strategy",
    title: "The Case for a Retainer Developer Over Project-Based Hires",
    excerpt: "Why brands that switch developers every project pay more for less continuity.",
    date: "Jun 22, 2026",
    readTime: "4 min read",
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
