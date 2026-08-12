import { SOCIAL } from "@/lib/site";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  /** Verifiable attribution URL (Upwork profile for public client reviews). */
  companyUrl?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Zunair is highly responsive, while bringing creative and quick solutions to common Shopify issues or roadblocks. Highly recommend!",
    name: "Josh A.",
    role: "COO",
    company: "drinklic.com",
    companyUrl: SOCIAL.upwork,
  },
  {
    quote:
      "I worked with Zunair for almost two years on a Shopify site... he was an excellent development partner... I would absolutely work with Zunair again.",
    name: "Colin S.",
    role: "Senior Manager, Ecommerce",
    companyUrl: SOCIAL.upwork,
  },
  {
    quote:
      "I first engaged Zunair to update my company website... I continue to refer my friends and clients to him, and he always exceeds expectations.",
    name: "Agnes M.",
    role: "President",
    company: "Agnes Mura International",
    companyUrl: SOCIAL.upwork,
  },
  {
    quote:
      "Zunair worked with my team and I for over three years and was always a very trusted teammate... a formidable lead developer with a strong sense of strategy.",
    name: "Jake M.",
    role: "Project Delivery & Program Management",
    companyUrl: SOCIAL.upwork,
  },
];
