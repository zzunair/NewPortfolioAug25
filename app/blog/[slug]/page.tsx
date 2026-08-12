import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <div className="mx-auto max-w-[720px] px-8 pt-28">
        <Link href="/blog" className="text-[13px] text-muted hover:text-accent-soft">
          ← Back to insights
        </Link>
        <span className="mt-6 inline-block rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-accent-soft">
          {post.tag}
        </span>
        <h1 className="mt-4.5 text-[30px] font-bold leading-[1.15] tracking-tight text-text sm:text-[44px]">
          {post.title}
        </h1>
        <div className="mt-5 flex gap-4 font-mono text-[13px] text-muted">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="mt-8 flex items-center gap-3 border-y border-border py-5">
          <Image
            src="/images/others/dp.png"
            alt="Zunair Shahid"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-accent object-cover"
          />
          <span className="text-sm text-muted">
            Written by <span className="text-text">Zunair Shahid</span> — Certified Shopify Plus
            Developer
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[720px] flex-col gap-5 px-8 py-12">
        {post.body ? (
          post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="mt-2.5 text-[22px] font-semibold text-text">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "code") {
              return (
                <p
                  key={i}
                  className="rounded-lg border border-accent/20 bg-accent/[0.06] p-4 font-mono text-[13px] text-accent"
                >
                  {block.text}
                </p>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-muted">
                {block.text}
              </p>
            );
          })
        ) : (
          <p className="text-base leading-relaxed text-muted">
            The full article is coming soon. In the meantime, get in touch through the{" "}
            <Link href="/contact">contact page</Link> if you have a question on this topic.
          </p>
        )}
      </div>

      <div className="border-t border-border bg-surface px-8 py-16">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-6 text-lg font-semibold text-text">Related articles</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="block rounded-xl border border-border bg-card p-5 hover:border-accent/40"
              >
                <span className="font-mono text-[11px] text-accent-soft">{r.tag}</span>
                <h3 className="mt-2 text-[15px] font-semibold text-text">{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[720px] items-center gap-3.5 px-8 py-10">
        <span className="text-[13px] text-muted">Share:</span>
        <a
          href="https://linkedin.com"
          className="rounded-md border border-border px-3 py-1.5 text-[13px] text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          className="rounded-md border border-border px-3 py-1.5 text-[13px] text-accent"
        >
          X
        </a>
      </div>
    </div>
  );
}
