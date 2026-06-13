import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
    },
  };
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-12 px-6 text-center bg-cream">
        <Link
          href="/blog"
          className="font-sans text-xs text-charcoal/40 uppercase tracking-widest hover:text-terracotta transition-colors mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-4">
          {formatDate(post.date)}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-3xl mx-auto leading-tight mb-6">
          {post.title}
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto" />
      </section>

      {/* Content */}
      <section className="py-14 px-6 bg-warm-white">
        <div
          className="prose-blog max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-cream text-center">
        <p className="font-serif italic text-terracotta text-lg mb-3">
          Ready to Book?
        </p>
        <h2 className="font-serif text-4xl text-charcoal mb-5">
          Let&apos;s Talk About Your Wedding Day
        </h2>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-8" />
        <Link
          href="/contact"
          className="inline-block bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-terracotta-dark transition-colors"
        >
          Book Your Date
        </Link>
      </section>
    </>
  );
}
