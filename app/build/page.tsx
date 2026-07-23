import { getAllBuildLogs } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build",
  description:
    "Building products in public — raw logs, real progress, no polish.",
  alternates: {
    canonical: "https://gajanand.info/build",
  },
};

const productColors: Record<string, string> = {
  focusstation: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

export default function BuildPage() {
  const logs = getAllBuildLogs();

  const grouped: Record<string, typeof logs> = {};
  for (const log of logs) {
    if (!grouped[log.product]) grouped[log.product] = [];
    grouped[log.product].push(log);
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
      <header className="mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2">
          Build
        </h1>
        <div className="w-8 h-[2px] bg-foreground/20 mb-5" />
        <p className="text-muted-foreground max-w-lg">
          Building products in public. Raw logs, real progress, no polish.
        </p>
      </header>

      {logs.length === 0 && (
        <p className="text-muted-foreground text-sm">
          Nothing here yet. Check back soon.
        </p>
      )}

      <div className="space-y-16">
        {Object.entries(grouped).map(([product, productLogs]) => (
          <section key={product}>
            <div className="flex items-center gap-2 mb-6">
              {product === "focusstation" && (
                <Image
                  src="/focusstation/icon.png"
                  alt="FocusStation app icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl mr-1"
                />
              )}
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  productColors[product] || "bg-muted text-muted-foreground"
                }`}
              >
                {product}
              </span>
            </div>

            <div className="border rounded-lg divide-y">
              {productLogs.map((log) => (
                <Link
                  key={log.slug}
                  href={`/build/${log.slug}`}
                  className="block group px-5 py-4 hover:bg-muted/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(log.date)}
                    </span>
                    <span
                      className={`text-[10px] font-medium px-1.5 py-[1px] rounded-full ${
                        log.status === "in-progress"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : "bg-green-500/10 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {log.status === "in-progress"
                        ? "In Progress"
                        : "Shipped"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] group-hover:text-foreground/80 transition-colors">
                    {log.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
