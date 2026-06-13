import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  contentHtml: string;
}

export interface PostMeta extends Omit<Post, "contentHtml"> {}

function extractDateFromSlug(slug: string): string {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "2026-01-01";
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
    return {
      slug,
      title: parsed.data.title,
      date: parsed.data.date ?? extractDateFromSlug(slug),
      metaTitle: parsed.data.metaTitle ?? parsed.data.title,
      metaDescription: parsed.data.metaDescription ?? "",
      excerpt: parsed.data.excerpt ?? extractExcerpt(parsed.content),
      contentHtml: result.toString(),
    };
  }

  // Legacy format: extract from markdown body
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const metaTitleMatch = raw.match(/\*\*Meta title:\*\*\s*(.+)/);
  const metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : title;

  const metaDescMatch = raw.match(/\*\*Meta description:\*\*\s*(.+)/);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : "";

  // Content is everything after the second --- separator
  const parts = raw.split(/\n---\n/);
  const content = parts.length >= 3 ? parts.slice(2).join("\n---\n").trim() : raw;

  const result = await remark().use(remarkHtml, { sanitize: false }).process(content);

  return {
    slug,
    title,
    date: extractDateFromSlug(slug),
    metaTitle,
    metaDescription,
    excerpt: extractExcerpt(content),
    contentHtml: result.toString(),
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
