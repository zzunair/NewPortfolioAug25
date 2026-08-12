"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data/nav";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/portfolio") return pathname.startsWith("/portfolio") || pathname.startsWith("/case-study");
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="sticky top-0 z-50 border-b border-border bg-[#0d1117]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-8 py-[18px]">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-accent font-mono text-[13px] font-semibold text-accent">
            ZS
          </div>
          <span className="text-[16px] font-semibold text-text">Zunair Shahid</span>
        </Link>

        <div className="hidden items-center gap-8 min-[860px]:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium ${active ? "text-accent" : "text-muted hover:text-accent-soft"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-md bg-accent px-5 py-2.5 text-[14px] font-semibold text-bg transition-shadow hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] min-[860px]:flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-[18px] text-text min-[860px]:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </div>

    {open && (
      <div className="fixed inset-0 z-[100] flex flex-col bg-bg px-8 py-6 min-[860px]:hidden">
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-[18px] text-text"
          >
            ✕
          </button>
        </div>
        <div className="mt-12 flex flex-col items-start gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-semibold ${active ? "text-accent" : "text-text"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-md bg-accent px-7 py-3.5 text-base font-semibold text-bg"
          >
            Start a project
          </Link>
        </div>
      </div>
    )}
    </>
  );
}
