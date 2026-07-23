import { ProjectsGrid } from "@/components/projects/projects-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of backend systems, IoT platforms, and SaaS products I've architected and shipped.",
  alternates: {
    canonical: "https://gajanand.info/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-3 tracking-[-0.02em]">
          Work
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Every project tells a story. Here are the systems I&apos;ve built, the
          problems I&apos;ve solved, and the lessons that shaped how I
          engineer.
        </p>
      </div>
      <ProjectsGrid />
    </div>
  );
}
