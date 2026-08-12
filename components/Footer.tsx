import { SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <div className="border-t border-border px-8 py-14">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6">
        <div>
          <div className="text-[15px] font-semibold text-text">Zunair Shahid</div>
          <div className="mt-1.5 text-[13px] text-muted">Lahore, Pakistan</div>
        </div>
        <div className="flex flex-wrap gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              rel="me"
              target="_blank"
              className="text-[13px] text-muted hover:text-accent-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-[13px] text-muted">© 2026 Zunair Shahid</div>
      </div>
    </div>
  );
}
