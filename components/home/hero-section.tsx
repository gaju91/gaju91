import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />

      <div className="text-center space-y-8 relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em]">
          Gajanand Sharma
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I build AI-powered backend systems, automate business operations,
          and ship products that scale.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/projects">
              See My Work
              <ArrowDown className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/contact">
              Work With Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-6">
          6+ years building systems for startups and enterprises
        </p>
      </div>
    </section>
  );
}
