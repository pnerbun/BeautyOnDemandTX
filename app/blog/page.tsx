import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Beauty on Demand",
  description:
    "Bridal hair and makeup tips, wedding day timelines, and expert advice from Elizabeth Nerbun — on-location bridal beauty artist in Rockwall, TX.",
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center bg-cream">
        <p className="font-serif italic text-terracotta text-lg mb-3">
          Tips, Advice &amp; Inspiration
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          The Blog
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-charcoal/60 text-sm max-w-md mx-auto leading-relaxed">
          Real advice for real brides — from someone who has spent over two
          decades making wedding mornings beautiful.
        </p>
      </section>

      {/* Posts */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-3">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal group-hover:text-terracotta transition-colors mb-4 leading-snug">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <span className="font-sans text-xs text-terracotta tracking-widest uppercase border-b border-terracotta/40 pb-0.5 group-hover:border-terracotta transition-colors">
                  Read More
                </span>
              </Link>
              <div className="mt-10 h-px bg-dusty-rose/30" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
