import { ExperienceTimeline } from "@/components/resume/experience-timeline";
import { SkillsSection } from "@/components/resume/skills-section";
import { Certifications } from "@/components/resume/certifications";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Resume</h1>
        <a 
          href="/resume.pdf" 
          download 
          className="inline-flex items-center px-4 py-2 border border-indigo-500 text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download PDF
        </a>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <ExperienceTimeline />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <SkillsSection />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <Certifications />
        </section>
      </div>
    </div>
  );
}