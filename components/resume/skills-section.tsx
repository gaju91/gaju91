"use client";

import { Card } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks",
    skills: ["Node.js", "React.js", "Express.js", "Vue.js"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Cloud",
    skills: ["AWS", "GCP", "Docker"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL"]
  }
];

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}