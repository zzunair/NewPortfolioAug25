export const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

export function analyticsMeasurementId() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!gaId || !GA_ID_PATTERN.test(gaId)) return null;

  const onVercel = Boolean(process.env.VERCEL_ENV);
  const enabled = onVercel
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production";

  return enabled ? gaId : null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
