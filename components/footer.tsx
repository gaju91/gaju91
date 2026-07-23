import Link from "next/link";
import { Github, Newspaper } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/gaju91",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://gajuhere.medium.com",
    label: "Medium",
    icon: Newspaper,
  },
];

export function Footer() {
  return (
    <footer className="border-t mt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-[-0.02em]"
            >
              Gajanand Sharma
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
              AI-powered backend systems, workflow automation, and SaaS
              development.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Links</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Gajanand Sharma</span>
        </div>
      </div>
    </footer>
  );
}
