import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my expertise in
          backend development and system architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
}