import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "text-2xl font-bold mt-14 mb-4 tracking-[-0.01em]",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "text-xl font-semibold mt-12 mb-3 tracking-[-0.01em]",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className={cn("text-lg font-semibold mt-8 mb-2", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn("text-[17px] leading-[1.8] mb-6 text-foreground/85", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("text-[17px] list-disc pl-6 mb-6 space-y-1.5", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("text-[17px] list-decimal pl-6 mb-6 space-y-1.5", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("text-foreground/85 leading-[1.8]", className)} {...props} />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    const isInline = !className?.includes("language-");
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-foreground/85"
          {...props}
        />
      );
    }
    return <code className={cn("text-sm", className)} {...props} />;
  },
  pre: ({
    className,
    children,
    "data-language": lang,
    ...props
  }: ComponentPropsWithoutRef<"pre"> & { "data-language"?: string }) => (
    <div className="relative mb-8 group">
      {lang && (
        <span className="absolute top-2 right-3 text-[11px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {lang}
        </span>
      )}
      <pre
        className={cn(
          "overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  ),
  table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="mb-8 overflow-x-auto border rounded-lg">
      <table className={cn("w-full text-sm border-collapse", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className={cn(
        "border px-3 py-2 text-left font-medium bg-muted/50",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className={cn("border px-3 py-2", className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a
      className={cn(
        "underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground transition-colors",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn("border-l-2 border-muted-foreground/30 pl-4 italic text-muted-foreground mb-6 py-1", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-14 border-border", className)} {...props} />
  ),
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
                keepBackground: false,
              },
            ],
          ],
        },
      }}
    />
  );
}
