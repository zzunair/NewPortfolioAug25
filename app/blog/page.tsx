import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { BLOG_POSTS } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on Shopify, migrations, and ecommerce strategy.",
};

export default function BlogPage() {
  return (
    <div>
      <div className="mx-auto max-w-[900px] px-8 pb-16 pt-28">
        <Eyebrow>insights</Eyebrow>
        <h1 className="mt-3.5 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[52px]">
          Notes on Shopify &amp; ecommerce
        </h1>
      </div>

      <div className="mx-auto max-w-[900px] px-8 pb-32">
        {BLOG_POSTS.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`block border-t border-border py-8 ${
              i === BLOG_POSTS.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-accent-soft">
              {post.tag}
            </span>
            <h2 className="mt-3.5 text-[22px] font-semibold text-text">{post.title}</h2>
            <p className="mt-2.5 max-w-[640px] text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <div className="mt-4 flex gap-4 font-mono text-[13px] text-muted">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
