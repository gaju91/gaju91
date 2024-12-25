import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4">
        <StatsSection />
        <FeaturedProjects />
      </div>
    </div>
  );
}