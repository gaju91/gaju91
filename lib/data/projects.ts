import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Patient Management Platform",
    description:
      "A comprehensive patient-management platform serving modern clinics, hospitals, and telehealth providers. Handles appointment scheduling, real-time patient data analytics, and secure health records at scale.",
    role: "Lead Backend Engineer",
    status: "client-work",
    challenge:
      "The client needed a HIPAA-compliant platform capable of handling thousands of concurrent patient sessions with sub-second response times, deployed across multiple geographic regions.",
    result:
      "Delivered a NestJS microservices backend on GCP Kubernetes with Firebase integration, achieving 99.9% uptime and supporting real-time patient data sync across 3 regions.",
    technologies: ["NestJS", "Firebase", "GCP", "Kubernetes", "TypeScript"],
  },
  {
    title: "Industrial IoT Monitoring",
    description:
      "A real-time industrial IoT asset monitoring platform that tracks machinery, pipelines, and hardware at scale using MQTT-based messaging and cloud infrastructure.",
    role: "Backend Architect",
    status: "client-work",
    challenge:
      "A manufacturing plant needed to ingest and process millions of sensor data points per day from hundreds of IoT devices, with anomaly detection triggering alerts within 5 seconds of occurrence.",
    result:
      "Architected an MQTT-based pipeline using HiveMQ on GCP. The system processes 2M+ daily sensor events with predictive maintenance alerts, reducing unplanned downtime by an estimated 30%.",
    technologies: ["MQTT", "HiveMQ", "GCP", "Node.js", "TypeScript"],
  },
  {
    title: "Fitness Tracking Platform",
    description:
      "A personalized workout tracking application with goal setting, activity logging, and progress analytics. Designed as a virtual personal trainer with real-time updates and intuitive visualizations.",
    role: "Full Stack Engineer",
    status: "client-work",
    challenge:
      "The fitness startup needed to go from concept to launch in under 3 months with a small budget, requiring a fast iteration cycle and a tech stack that could scale with user growth.",
    result:
      "Built and shipped the full platform — MongoDB + Express backend, React frontend — in 10 weeks. Supported 5,000+ users in the first quarter post-launch with zero downtime.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Distributed Queue System",
    description:
      "A microservices-based queue management platform leveraging gRPC and Protocol Buffers for high-performance inter-service communication. Built for companies handling large-scale event-driven data flows.",
    role: "Systems Engineer",
    status: "client-work",
    challenge:
      "The existing queue system used REST-based communication between services, creating latency bottlenecks at 10K+ concurrent messages. The client needed sub-10ms inter-service latency at scale.",
    result:
      "Replaced REST with gRPC + Protocol Buffers, achieving 4ms average latency between services. The system now handles 50K+ concurrent messages with fault-tolerant reliability using Go-based microservices.",
    technologies: ["Go", "gRPC", "Protocol Buffers", "PostgreSQL"],
  },
  {
    title: "TeamRef",
    description:
      "I spent months building a complete SaaS platform for employee referrals — multi-tenant, Slack bot, kanban pipeline, Docker deployment, and a full marketing site. It didn't take off commercially. But I shipped something real, and I learned more from this failure than from any success.",
    role: "Solo Founder & Engineer",
    status: "lessons-learned",
    challenge:
      "Could I build and launch a complete B2B SaaS product entirely solo? I wanted to test every skill — full-stack development, DevOps, product design, marketing, and sales — all at once.",
    result:
      "I shipped a fully functional product with 99 commits across 3 months: multi-tenant SaaS, Slack bot integration, kanban referral pipeline, landing page, and Docker deployment. But I validated nothing before building. I spent 90% of my time on code and 10% on talking to customers. I built something technically solid that nobody asked for. The product works. The business didn't.",
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Slack API",
      "Nginx",
    ],
    githubUrl: "https://github.com/gaju91/reffy",
    liveUrl: "https://www.teamref.org",
  },
];

export const clientProjects = projects.filter(
  (p) => p.status === "client-work"
);

export const lessonsLearned = projects.filter(
  (p) => p.status === "lessons-learned"
);
