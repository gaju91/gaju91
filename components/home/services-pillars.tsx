import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Bot, Server, Monitor, Rocket } from "lucide-react";

const pillars = [
  {
    title: "AI Automation",
    description:
      "AI agents, workflow automation, and intelligent systems that reduce manual work.",
    icon: Bot,
  },
  {
    title: "Backend Systems",
    description:
      "Scalable APIs, microservices, message queues, and database architecture.",
    icon: Server,
  },
  {
    title: "Internal Tools",
    description:
      "Custom dashboards, admin panels, and internal business applications.",
    icon: Monitor,
  },
  {
    title: "SaaS Development",
    description:
      "From zero to production — architecture, build, deploy, and iterate.",
    icon: Rocket,
  },
];

export function ServicesPillars() {
  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-[-0.02em] mb-3">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          I solve engineering problems across the full backend stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            className="p-6 border-border/60 hover:border-border transition-colors duration-200"
          >
            <pillar.icon className="h-6 w-6 text-muted-foreground mb-4" />
            <h3 className="font-semibold mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
