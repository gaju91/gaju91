import { HeroSection } from "@/components/home/hero-section";
import { ServicesPillars } from "@/components/home/services-pillars";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { BuildPreview } from "@/components/home/build-preview";
import { ScrollFocusSection } from "@/components/home/scroll-focus-section";
import { personSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gajanand Sharma — AI Engineering, Backend Architecture & Automation",
  description:
    "I build AI-powered backend systems, automate business operations, and ship products that scale. 6+ years building systems for startups and enterprises.",
  openGraph: {
    title: "Gajanand Sharma — AI Engineering, Backend Architecture",
    description:
      "I build AI-powered backend systems, automate business operations, and ship products that scale.",
    url: "https://gajanand.info",
  },
  alternates: {
    canonical: "https://gajanand.info",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema()),
        }}
      />
      <div>
        <ScrollFocusSection>
          <HeroSection />
        </ScrollFocusSection>
        <ScrollFocusSection>
          <div className="container mx-auto px-4">
            <ServicesPillars />
          </div>
        </ScrollFocusSection>
        <ScrollFocusSection>
          <div className="container mx-auto px-4">
            <FeaturedProjects />
          </div>
        </ScrollFocusSection>
        <ScrollFocusSection>
          <div className="container mx-auto px-4">
            <BuildPreview />
          </div>
        </ScrollFocusSection>
      </div>
    </>
  );
}
