import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { SubscribeForm } from "@/components/subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Deep dives on backend engineering, system architecture, and building products that scale.",
  alternates: {
    canonical: "https://gajanand.info/blog",
  },
};

function getYear(date: string) {
  return new Date(date).getFullYear();
}

export default function BlogPage() {
  const posts = getAllPosts();

  const grouped = posts.reduce<Record<number, typeof posts>>((acc, post) => {
    const year = getYear(post.date);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2">
          Writing
        </h1>
        <div className="w-8 h-[2px] bg-foreground/20 mb-5" />
        <p className="text-muted-foreground max-w-lg">
          Deep dives on backend engineering, system architecture, and building
          products that scale.
        </p>
      </header>

      <div className="space-y-14">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-xs font-medium text-muted-foreground/60 tracking-widest uppercase mb-6">
              {year}
            </h2>

            <div className="border rounded-lg divide-y">
              {grouped[year].map((post) => {
                const readingTime = `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read`;

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group px-5 py-5 hover:bg-muted/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{readingTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-[-0.01em] mb-1.5 group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.subtitle}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        {post.tags.map((tag, i) => (
                          <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70">
                            {tag}
                            {i < post.tags.length - 1 && (
                              <span className="text-muted-foreground/30">▸</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <SubscribeForm />
    </div>
  );
}
