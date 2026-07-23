import { clientProjects, lessonsLearned } from "@/lib/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsGrid() {
  return (
    <div className="space-y-20">
      {clientProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-2">
            Client Work
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Production systems I&apos;ve architected and delivered for
            companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </section>
      )}

      {lessonsLearned.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-2">
            The One That Didn&apos;t Work
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Not everything ships to production. Here&apos;s what I learned from
            the projects that didn&apos;t make it.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {lessonsLearned.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
