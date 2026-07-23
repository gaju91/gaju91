import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const BUILD_DIR = path.join(process.cwd(), "content/build");

export interface BlogFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        tags: data.tags || [],
        content,
      } as BlogPost;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      tags: data.tags || [],
      content,
    };
  } catch {
    return undefined;
  }
}

export interface BuildLogFrontmatter {
  title: string;
  date: string;
  product: string;
  status: "in-progress" | "shipped";
}

export interface BuildLog extends BuildLogFrontmatter {
  slug: string;
  content: string;
}

export function getAllBuildLogs(): BuildLog[] {
  try {
    const files = fs.readdirSync(BUILD_DIR);

    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(BUILD_DIR, file);
        const raw = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(raw);

        return {
          slug,
          title: data.title,
          date: data.date,
          product: data.product,
          status: data.status || "in-progress",
          content,
        };
      })
      .sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
  } catch {
    return [];
  }
}

export function getBuildLogBySlug(slug: string): BuildLog | undefined {
  try {
    const filePath = path.join(BUILD_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      product: data.product,
      status: data.status || "in-progress",
      content,
    };
  } catch {
    return undefined;
  }
}
