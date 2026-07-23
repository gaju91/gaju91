import { getAllBuildLogs } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export function BuildPreview() {
  const logs = getAllBuildLogs().reverse().slice(0, 2);

  if (logs.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-[-0.02em] mb-3">
          What I&apos;m Building
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Following my journey as I build products in public.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {logs.map((log) => (
          <Link
            key={log.slug}
            href={`/build/${log.slug}`}
            className="block border rounded-lg p-5 group hover:border-border transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                {log.product}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(log.date)}
              </span>
              <span className="text-[10px] font-medium px-1.5 py-[1px] rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                {log.status === "in-progress" ? "In Progress" : "Shipped"}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-[-0.01em] group-hover:text-foreground/80 transition-colors">
              {log.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/build"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Follow the Build →
        </Link>
      </div>
    </section>
  );
}
