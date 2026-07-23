import { clientProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProjects() {
  const featured = clientProjects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-[-0.02em] mb-3">
          Selected Work
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Systems I&apos;ve architected and shipped across healthcare, IoT,
          fitness, and infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  );
}
