import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/lib/blog";
import { serializeJsonLd } from "@/lib/json-ld";

const SITE_URL = "https://beautyondemandtx.com";

/** on-page-seo.md requires a table of contents on posts of this length or more. */
const TOC_WORD_THRESHOLD = 1500;

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
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url,
      publishedTime: post.date,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: post.heroImage ? [post.heroImage] : undefined,
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

  const url = `${SITE_URL}/blog/${slug}`;
  const showToc = post.wordCount >= TOC_WORD_THRESHOLD && post.headings.length > 2;

  const author = {
    "@type": "Person",
    name: "Elizabeth Nerbun",
    jobTitle: "Licensed Cosmetologist & Certified Beauty Instructor",
    url: `${SITE_URL}/about`,
  };

  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      author,
      publisher: {
        "@type": "Organization",
        name: "Beauty on Demand",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.jpg` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(post.heroImage ? { image: post.heroImage } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faqs.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />

      {/* Header */}
      <section id="top" className="pt-36 pb-12 px-6 text-center bg-cream">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/blog"
            className="font-sans text-xs text-charcoal/40 uppercase tracking-widest hover:text-terracotta transition-colors inline-block"
          >
            ← Back to Blog
          </Link>
        </nav>
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
        {showToc && (
          <nav
            aria-label="Table of contents"
            className="max-w-2xl mx-auto mb-12 border border-dusty-rose/40 p-6"
          >
            <h2 className="font-sans text-xs uppercase tracking-widest text-charcoal/50 mb-4">
              In This Article
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              {post.headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="font-sans text-sm text-terracotta hover:text-terracotta-dark underline underline-offset-4"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className="prose-blog max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {showToc && (
          <p className="max-w-2xl mx-auto mt-12 text-center">
            <a
              href="#top"
              className="font-sans text-xs uppercase tracking-widest text-charcoal/50 hover:text-terracotta transition-colors"
            >
              ↑ Back to top
            </a>
          </p>
        )}
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
