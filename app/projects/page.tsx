import { ProjectsGrid } from "@/components/projects/projects-grid";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground">
          A collection of my key projects showcasing expertise in backend development,
          cloud architecture, and distributed systems.
        </p>
      </div>
      <ProjectsGrid />
    </div>
  );
}