import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zunair Shahid | Shopify Plus Developer",
    template: "%s | Zunair Shahid",
  },
  description:
    "Certified Shopify Plus developer with 8+ years building and scaling ecommerce stores for brands across the US, UK, and Canada.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zunair Shahid",
  jobTitle: "Shopify Plus Developer",
  description:
    "Certified Shopify Plus developer specializing in custom storefronts, WooCommerce-to-Shopify migrations, app development, and conversion optimization.",
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
