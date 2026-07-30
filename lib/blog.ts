import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface Heading {
  id: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  contentHtml: string;
  /** H2s in document order, for the table of contents. */
  headings: Heading[];
  /** Parsed "Frequently Asked Questions" section, for FAQPage schema. */
  faqs: Faq[];
  wordCount: number;
  /** First image in the post, used for Article schema and og:image. */
  heroImage: string | null;
}

export interface PostMeta extends Omit<Post, "contentHtml"> {}

/** GitHub-style heading slug, used for both the TOC links and the injected ids. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Strip the inline markdown we use (bold, italic, links) down to plain text. */
function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .trim();
}

function extractHeroImage(markdown: string): string | null {
  return markdown.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1] ?? null;
}

function extractHeadings(markdown: string): Heading[] {
  const seen = new Map<string, number>();
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = stripMarkdown(m[1].trim());
    const base = slugify(text);
    // Disambiguate if a post ever repeats a heading.
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return { id: n === 0 ? base : `${base}-${n}`, text };
  });
}

/**
 * Pull Q&A pairs out of the FAQ section. Posts follow a fixed convention: a
 * line that is entirely bold is the question, and the lines beneath it up to
 * the next blank line are the answer.
 */
function extractFaqs(markdown: string): Faq[] {
  const section = markdown.split(/^##\s+Frequently Asked Questions\s*$/m)[1];
  if (!section) return [];
  // Stop at the next H2 or horizontal rule, whichever comes first.
  const body = section.split(/^(?:##\s|---\s*$)/m)[0];

  const faqs: Faq[] = [];
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const q = lines[i].trim().match(/^\*\*(.+\?)\*\*$/);
    if (!q) continue;
    const answer: string[] = [];
    for (let j = i + 1; j < lines.length && lines[j].trim() !== ""; j++) {
      answer.push(lines[j].trim());
    }
    if (answer.length) {
      faqs.push({
        question: stripMarkdown(q[1]),
        answer: stripMarkdown(answer.join(" ")),
      });
    }
  }
  return faqs;
}

/**
 * remark-html emits bare `<h2>`; add the ids the TOC links point at. Markdown
 * H2s map 1:1 onto rendered `<h2>`s in document order, so positional
 * replacement is safe and avoids re-parsing entity-encoded heading text.
 */
function addHeadingIds(html: string, headings: Heading[]): string {
  let i = 0;
  return html.replace(/<h2>/g, () =>
    i < headings.length ? `<h2 id="${headings[i++].id}">` : "<h2>"
  );
}

function extractDateFromSlug(slug: string): string {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "2026-01-01";
}

/**
 * Normalise a frontmatter `date` to `YYYY-MM-DD`. YAML parses an unquoted date
 * into a Date object, so handle both that and a plain string.
 */
function normaliseDate(value: unknown): string | null {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  return null;
}

function extractExcerpt(text: string): string {
  const lines = text.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.length > 60 &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("!") &&
      !trimmed.startsWith("|") &&
      !trimmed.startsWith("---")
    ) {
      return trimmed.replace(/\*\*/g, "").replace(/\*/g, "").slice(0, 180);
    }
  }
  return "";
}

async function parseFile(filename: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const slug = filename.replace(/\.md$/, "");

  // Try YAML frontmatter first
  const parsed = matter(raw);
  if (parsed.data.title) {
    const result = await remark().use(remarkHtml).process(parsed.content);
    const headings = extractHeadings(parsed.content);
    return {
      slug,
      title: parsed.data.title,
      date: parsed.data.date ?? extractDateFromSlug(slug),
      metaTitle: parsed.data.metaTitle ?? parsed.data.title,
      metaDescription: parsed.data.metaDescription ?? "",
      excerpt: parsed.data.excerpt ?? extractExcerpt(parsed.content),
      contentHtml: addHeadingIds(result.toString(), headings),
      headings,
      faqs: extractFaqs(parsed.content),
      wordCount: parsed.content.split(/\s+/).length,
      heroImage: extractHeroImage(parsed.content),
    };
  }

  // Legacy format: extract from the markdown body. Read from `parsed.content`
  // rather than `raw` so a post can still carry a frontmatter block (used to
  // supply a `date:` when the filename has no YYYY-MM-DD prefix) without its
  // delimiters shifting the `---` split below.
  const body = parsed.content;

  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const metaTitleMatch = body.match(/\*\*Meta title:\*\*\s*(.+)/);
  const metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : title;

  const metaDescMatch = body.match(/\*\*Meta description:\*\*\s*(.+)/);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : "";

  // Content is everything after the second --- separator
  const parts = body.split(/\n---\n/);
  const content = parts.length >= 3 ? parts.slice(2).join("\n---\n").trim() : body;

  const result = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const headings = extractHeadings(content);

  return {
    slug,
    title,
    date: normaliseDate(parsed.data.date) ?? extractDateFromSlug(slug),
    metaTitle,
    metaDescription,
    excerpt: extractExcerpt(content),
    contentHtml: addHeadingIds(result.toString(), headings),
    headings,
    faqs: extractFaqs(content),
    wordCount: content.split(/\s+/).length,
    heroImage: extractHeroImage(content),
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse();

  const posts = await Promise.all(
    files.map(async (f) => {
      const post = await parseFile(f);
      const { contentHtml: _html, ...meta } = post;
      return meta;
    })
  );

  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const filename = slug + ".md";
  const filepath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return parseFile(filename);
}

export async function getAllSlugs(): Promise<string[]> {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
