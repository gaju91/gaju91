import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx-content";
import { ReadingProgress } from "@/components/reading-progress";
import { CopyLinkButton } from "@/components/copy-link-button";
import { ArrowLeft, Github } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: post.date,
      url: `https://gajanand.info/blog/${params.slug}`,
    },
    alternates: {
      canonical: `https://gajanand.info/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const readingTime = `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read`;

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post.title, post.subtitle, post.date)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Writing", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <article className="container mx-auto px-4 pt-24 pb-16 max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Writing
        </Link>

        <header className="mb-14">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="w-12 h-[3px] bg-foreground/20 mb-4" />

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-5">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-muted-foreground/40">·</span>
            <span>{readingTime}</span>
            <span className="text-muted-foreground/40 ml-2">·</span>
            <CopyLinkButton slug={post.slug} />
          </div>
        </header>

        <MDXContent source={post.content} />

        <div className="mt-20 pt-10 border-t">
          <AuthorCard />
        </div>

        {(prevPost || nextPost) && (
          <div className="mt-16 pt-10 border-t">
            <PostNavigation prev={prevPost} next={nextPost} />
          </div>
        )}

        <div className="mt-12 pt-10 border-t">
          <h3 className="text-sm font-medium text-muted-foreground mb-5">
            More Writing
          </h3>
          <RelatedPosts allPosts={allPosts} currentSlug={post.slug} />
        </div>
      </article>
    </>
  );
}

function AuthorCard() {
  return (
    <div className="border rounded-lg p-5">
      <h4 className="text-sm font-semibold mb-1">Written by Gajanand Sharma</h4>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        Building AI-powered backend systems, automating business operations, and
        shipping products.
      </p>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/gaju91"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function PostNavigation({
  prev,
  next,
}: {
  prev: ReturnType<typeof getPostBySlug> | null;
  next: ReturnType<typeof getPostBySlug> | null;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className="group block"
          >
            <span className="text-xs text-muted-foreground">← Previous</span>
            <p className="text-sm font-medium mt-1 group-hover:text-foreground/70 transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group block"
          >
            <span className="text-xs text-muted-foreground">Next →</span>
            <p className="text-sm font-medium mt-1 group-hover:text-foreground/70 transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

function RelatedPosts({
  allPosts,
  currentSlug,
}: {
  allPosts: ReturnType<typeof getAllPosts>;
  currentSlug: string;
}) {
  const posts = allPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="space-y-3">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="flex items-baseline gap-3 group"
        >
          <span className="text-sm font-medium group-hover:text-foreground/70 transition-colors">
            {p.title}
          </span>
          <span className="text-xs text-muted-foreground shrink-0">
            {formatDate(p.date)}
          </span>
        </Link>
      ))}
    </div>
  );
}
