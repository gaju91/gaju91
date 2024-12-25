"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Invent",
    role: "Senior Backend Engineer",
    period: "2022 - Present",
    achievements: [
      "Led IoT automation projects improving efficiency by 40%",
      "Architected fitness apps serving 50K+ users",
      "Designed and implemented API gateways",
      "Mentored junior developers and led technical initiatives"
    ],
    technologies: ["Node.js", "AWS", "MongoDB", "Docker"]
  },
  {
    company: "SumHR",
    role: "Backend Developer",
    period: "2020 - 2022",
    achievements: [
      "Developed HRMS automation solutions",
      "Integrated PostgreSQL for data management",
      "Built core HR modules from scratch"
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Express.js"]
  },
  {
    company: "Kirnani Technologies",
    role: "Junior Developer",
    period: "2019 - 2020",
    achievements: [
      "Developed RESTful APIs",
      "Optimized backend performance",
      "Implemented caching solutions"
    ],
    technologies: ["JavaScript", "MongoDB", "Express.js"]
  }
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-muted-foreground">{exp.role}</p>
            </div>
            <span className="text-sm text-muted-foreground mt-2 md:mt-0">
              {exp.period}
            </span>
          </div>
          <ul className="list-disc list-inside mb-4 space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-muted-foreground">
                {achievement}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}