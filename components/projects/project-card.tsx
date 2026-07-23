import { Project } from "@/lib/types/project";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const isLessonsLearned = project.status === "lessons-learned";

  return (
    <Card
      className={`flex flex-col h-full p-6 group transition-colors duration-200 ${
        isLessonsLearned
          ? "border-amber-500/30 bg-amber-500/[0.03]"
          : "border-border/60 hover:border-border"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <Badge
          variant="secondary"
          className={`text-xs font-medium ${
            isLessonsLearned
              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              : ""
          }`}
        >
          {isLessonsLearned ? (
            <>
              <BookOpen className="h-3 w-3 mr-1" />
              Lessons Learned
            </>
          ) : (
            "Client Work"
          )}
        </Badge>
        <span className="text-xs text-muted-foreground">{project.role}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2 tracking-[-0.01em]">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-grow">
        {project.description}
      </p>

      {featured && (
        <div className="space-y-3 mb-5">
          <div>
            <span className="text-xs font-medium text-foreground">
              The Challenge
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-foreground">
              {isLessonsLearned ? "What I Learned" : "The Result"}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              {project.result}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3.5 w-3.5 mr-1.5" />
                  Source
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Live Site
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
