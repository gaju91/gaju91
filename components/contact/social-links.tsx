import { socialLinks } from "@/lib/data/social-links";
import { Button } from "@/components/ui/button";
import { GitBranchPlus, Linkedin, BookOpen } from "lucide-react";

const iconMap = {
  github: GitBranchPlus,
  linkedin: Linkedin,
  'book-open': BookOpen,
};

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}