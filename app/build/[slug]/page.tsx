import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllBuildLogs, getBuildLogBySlug } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx-content";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const logs = getAllBuildLogs();
  return logs.map((log) => ({ slug: log.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const log = getBuildLogBySlug(params.slug);
  if (!log) return { title: "Not Found" };

  return {
    title: log.title,
    description: `Build log for ${log.product} — ${log.status === "in-progress" ? "In Progress" : "Shipped"}`,
    openGraph: {
      title: log.title,
      type: "article",
      publishedTime: log.date,
      url: `https://gajanand.info/build/${params.slug}`,
    },
    alternates: {
      canonical: `https://gajanand.info/build/${params.slug}`,
    },
  };
}

export default function BuildLogPage({ params }: Props) {
  const log = getBuildLogBySlug(params.slug);

  if (!log) {
    notFound();
  }

  const readingTime = `${Math.max(1, Math.ceil(log.content.split(/\s+/).length / 200))} min read`;

  return (
    <article className="container mx-auto px-4 pt-24 pb-16 max-w-2xl">
      <Link
        href="/build"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Build
      </Link>

      <header className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          {log.product === "focusstation" && (
            <Image
              src="/focusstation/icon.png"
              alt="FocusStation app icon"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl mr-1"
            />
          )}
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
            {log.product}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              log.status === "in-progress"
                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                : "bg-green-500/10 text-green-600 dark:text-green-400"
            }`}
          >
            {log.status === "in-progress" ? "In Progress" : "Shipped"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-tight mb-4">
          {log.title}
        </h1>

        <div className="w-12 h-[3px] bg-foreground/20 mb-4" />

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={log.date}>{formatDate(log.date)}</time>
          <span className="text-muted-foreground/40">·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <MDXContent source={log.content} />
    </article>
  );
}
