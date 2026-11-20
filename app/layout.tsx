import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { analyticsMeasurementId } from "@/lib/analytics";
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
  const gaId = analyticsMeasurementId();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {gaId ? (
          <Suspense fallback={null}>
            <Analytics gaId={gaId} />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
