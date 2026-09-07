import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOgImageUrl, PAGE_DESCRIPTIONS, PAGE_TITLES } from "@/lib/seo";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultOgImage = buildOgImageUrl("Zunair Shahid", "Certified Shopify Plus Developer");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLES.home,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_DESCRIPTIONS.home,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: PAGE_TITLES.home,
    description: PAGE_DESCRIPTIONS.home,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: defaultOgImage, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: PAGE_TITLES.home,
    description: PAGE_DESCRIPTIONS.home,
    images: [defaultOgImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
