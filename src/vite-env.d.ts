/// <reference types="vite/client" />

// Google reCAPTCHA v3 type definitions
interface Window {
  grecaptcha: {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
}
