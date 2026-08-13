export const SITE_URL = "https://www.zunairshahid.com";
export const SITE_NAME = "Zunair Shahid";
/** Stable node id so every Person reference across pages resolves to one entity. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const SITE_TITLE = "Zunair Shahid | Shopify Plus Developer";
export const JOB_TITLE = "Shopify Plus Developer";
export const OG_IMAGE = "/images/others/dp.png";
export const YEARS_EXPERIENCE = "8+";

export const AUTHOR_BIO =
  "Certified Shopify Plus developer with 8+ years building and scaling ecommerce stores.";

export const SOCIAL = {
  linkedin: "https://pk.linkedin.com/in/zunair-shahid",
  github: "https://github.com/zzunair",
  upwork: "https://www.upwork.com/freelancers/~0129309c6c512e86ea",
  x: "https://x.com/zunair_says",
} as const;

export const SOCIAL_LINKS = [
  { href: SOCIAL.linkedin, label: "LinkedIn" },
  { href: SOCIAL.github, label: "GitHub" },
  { href: SOCIAL.upwork, label: "Upwork" },
] as const;

export const SAME_AS = [SOCIAL.linkedin, SOCIAL.github, SOCIAL.upwork] as const;

export const CREDLY_BADGE_URL =
  "https://www.credly.com/badges/e9433e5b-83e8-4947-adbf-7e6cb8addc06/public_url";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
