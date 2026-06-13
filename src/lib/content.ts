import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src", "content");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  date: string;
  readTime: string;
  mainImage: string;
  banner: string;
  authorName: string;
  authorDesignation: string;
  authorIcon: string;
  excerpt: string;
  order: number;
}

export interface IntegrationFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  comboDescription: string;
  icon: string;
  socialImage: string;
  order: number;
}

interface MDXItem<T> {
  data: T;
  body: string;
}

function readCollection<T>(dir: string): MDXItem<T>[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(fullDir, file), "utf8");
      const { data, content } = matter(raw);
      return { data: data as T, body: content };
    });
}

export function getBlogPosts(): BlogFrontmatter[] {
  return readCollection<BlogFrontmatter>("blog")
    .map((i) => i.data)
    .sort((a, b) => a.order - b.order);
}

export function getBlogPost(slug: string): MDXItem<BlogFrontmatter> | null {
  return readCollection<BlogFrontmatter>("blog").find((i) => i.data.slug === slug) ?? null;
}

export function getIntegrations(): IntegrationFrontmatter[] {
  return readCollection<IntegrationFrontmatter>("integrations")
    .map((i) => i.data)
    .sort((a, b) => a.order - b.order);
}

export function getIntegration(slug: string): MDXItem<IntegrationFrontmatter> | null {
  return (
    readCollection<IntegrationFrontmatter>("integrations").find((i) => i.data.slug === slug) ?? null
  );
}
