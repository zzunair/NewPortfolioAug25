"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function sendPageView(gaId: string, pagePath: string) {
  window.gtag?.("event", "page_view", {
    send_to: gaId,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export default function Analytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    let attempts = 0;

    const send = () => {
      if (typeof window.gtag === "function") {
        sendPageView(gaId, pagePath);
        return;
      }
      if (attempts < 20) {
        attempts += 1;
        window.setTimeout(send, 100);
      }
    };

    send();
  }, [gaId, pathname, searchParams]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
