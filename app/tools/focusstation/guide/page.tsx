import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { MDXContent } from "@/components/mdx-content";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

const guidePath = path.join(
  process.cwd(),
  "content/guides/focusstation.mdx"
);
const guideSource = fs.readFileSync(guidePath, "utf-8");
const { data, content } = matter(guideSource);

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
  alternates: {
    canonical: "https://gajanand.info/tools/focusstation/guide",
  },
  openGraph: {
    title: data.title,
    description: data.subtitle,
    type: "article",
    publishedTime: data.date,
    url: "https://gajanand.info/tools/focusstation/guide",
  },
};

export default function FocusStationGuidePage() {
  const readingTime = `${Math.max(
    1,
    Math.ceil(content.split(/\s+/).length / 200)
  )} min read`;

  return (
    <article className="container mx-auto px-4 pt-24 pb-16 max-w-2xl">
      <Link
        href="/tools/focusstation"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        FocusStation
      </Link>

      <header className="mb-14">
        <div className="flex items-center gap-4 mb-5">
          <Image
            src="/focusstation/icon.png"
            alt="FocusStation app icon"
            width={64}
            height={64}
            priority
            className="h-16 w-16 rounded-2xl"
          />
          <div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium mb-2 inline-block">
              User guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-tight">
              {data.title}
            </h1>
          </div>
        </div>
        <div className="w-12 h-[3px] bg-foreground/20 mb-4" />
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-5">
          {data.subtitle}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Updated {formatDate(data.date)}</span>
          <span className="text-muted-foreground/40">·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <MDXContent source={content} />
    </article>
  );
}
