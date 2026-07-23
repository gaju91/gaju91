import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Products and tools I've built and shipped.",
  alternates: {
    canonical: "https://gajanand.info/tools",
  },
};

const tools = [
  {
    name: "FocusStation",
    description:
      "A native macOS menu bar task timer. Prioritize your day, time-box your work, and stop one task from eating your entire schedule.",
    status: "shipped",
    href: "/tools/focusstation",
    icon: "/focusstation/icon.png",
  },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
      <header className="mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2">
          Tools
        </h1>
        <div className="w-8 h-[2px] bg-foreground/20 mb-5" />
        <p className="text-muted-foreground max-w-lg">
          Products I&apos;ve built and shipped. Free, open source, and focused.
        </p>
      </header>

      <div className="border rounded-lg divide-y">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block group px-5 py-5 hover:bg-muted/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
          >
            <div className="flex items-start gap-4">
              <Image
                src={tool.icon}
                alt=""
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-xl shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold tracking-[-0.01em] group-hover:text-foreground/80 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] font-medium px-1.5 py-[1px] rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    Shipped
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
