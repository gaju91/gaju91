export interface Project {
  title: string;
  description: string;
  role: string;
  status: "client-work" | "lessons-learned";
  challenge: string;
  result: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
