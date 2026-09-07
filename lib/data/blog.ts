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
        text: "If you're planning a [WooCommerce to Shopify migration](/services#migrations), these are the exact failure points I audit before every project.",
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
    body: [
      {
        type: "p",
        text: "Most Shopify Plus stores leave performance on the table because themes load everything on every page — sections that only matter on the product page, scripts that run site-wide, and Liquid loops that re-fetch the same collection data three times in one template.",
      },
      {
        type: "h2",
        text: "1. Lazy-load sections below the fold",
      },
      {
        type: "p",
        text: "Use section rendering APIs and defer non-critical sections until the user scrolls. On Plus stores with heavy merchandising blocks, this alone can cut Time to Interactive by a full second.",
      },
      {
        type: "h2",
        text: "2. Cache collection lookups",
      },
      {
        type: "p",
        text: "If you're calling the same collection in a header, footer, and homepage hero, assign it once to a variable at the top of the template instead of re-querying in each section.",
      },
      {
        type: "p",
        text: "These patterns are part of how I approach every [custom Shopify Plus store build](/services#store-builds) — performance isn't a post-launch fix, it's baked into the theme architecture from day one.",
      },
    ],
  },
  {
    slug: "build-vs-buy-shopify-app",
    tag: "Apps",
    title: "When to Build a Custom Shopify App vs. Buy One",
    excerpt: "A framework for deciding when off-the-shelf apps stop being the right answer.",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The App Store has 8,000+ apps. That doesn't mean one of them solves your specific workflow — especially when your business logic sits at the intersection of two or three off-the-shelf tools that don't talk to each other.",
      },
      {
        type: "h2",
        text: "Buy when the problem is common",
      },
      {
        type: "p",
        text: "Reviews, email capture, basic subscriptions, and standard loyalty programs are solved problems. A $29/month app beats a $15,000 custom build every time for these.",
      },
      {
        type: "h2",
        text: "Build when the logic is yours alone",
      },
      {
        type: "p",
        text: "Custom bundling rules, proprietary pricing engines, B2B wholesale portals with unique approval flows — these are the cases where no app fits without duct tape and workarounds.",
      },
      {
        type: "p",
        text: "If you've decided to build, here's what my [custom Shopify app development](/services#app-development) process looks like — from scoping through App Store submission.",
      },
    ],
  },
  {
    slug: "retainer-developer-vs-project-hires",
    tag: "Ecommerce Strategy",
    title: "The Case for a Retainer Developer Over Project-Based Hires",
    excerpt: "Why brands that switch developers every project pay more for less continuity.",
    date: "Jun 22, 2026",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "Every new developer starts from zero. They read your theme files, guess at past decisions, and spend the first two weeks just getting oriented — time you're paying for at full rate.",
      },
      {
        type: "h2",
        text: "The hidden cost of project-based hires",
      },
      {
        type: "p",
        text: "Brands that hire a new freelancer for every sprint lose institutional knowledge with each handoff. The checkout tweak from six months ago? Nobody remembers why it was done that way.",
      },
      {
        type: "h2",
        text: "What a retainer actually gives you",
      },
      {
        type: "p",
        text: "A retainer developer already knows your store, your codebase, and your priorities. When something breaks on a Friday, you're not posting a job and waiting three days for someone to respond.",
      },
      {
        type: "p",
        text: "This is the model behind my [Shopify retainer service](/services#retainer) — fewer clients, deeper relationships, and a developer who treats your store like it's still theirs to look after.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
