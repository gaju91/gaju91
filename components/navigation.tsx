"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, ArrowRight } from "lucide-react";

const routes = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/build", label: "Build" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-[-0.02em] shrink-0 text-base sm:text-lg"
        >
          Gajanand Sharma
        </Link>

        <span className="hidden md:block mx-5 w-[1px] h-4 bg-border" />

        <nav className="hidden md:flex items-center gap-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "relative px-3 py-2 text-sm transition-colors rounded-md",
                pathname === route.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {route.label}
              {pathname === route.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-foreground rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button size="default" className="hidden md:inline-flex gap-1.5" asChild>
            <Link href="/contact">
              Let&apos;s Talk
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden relative">
                <Menu
                  className={cn(
                    "h-5 w-5 transition-all duration-200",
                    open && "-rotate-90 scale-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute h-5 w-5 transition-all duration-200 rotate-90 scale-0",
                    open && "rotate-0 scale-100"
                  )}
                />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] pt-12 px-6">
              <nav className="flex flex-col">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={cn(
                      "py-3 text-lg border-l-2 transition-all duration-150 pl-4",
                      pathname === "/"
                        ? "border-foreground text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    )}
                  >
                    Home
                  </Link>
                </SheetClose>
                {routes.map((route) => (
                  <SheetClose key={route.href} asChild>
                    <Link
                      href={route.href}
                      className={cn(
                        "py-3 text-lg border-l-2 transition-all duration-150 pl-4",
                        pathname === route.href
                          ? "border-foreground text-foreground font-medium"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                      )}
                    >
                      {route.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className="border-t my-5" />

                <SheetClose asChild>
                  <Button className="w-full gap-1.5 py-6 text-base" asChild>
                    <Link href="/contact">
                      Let&apos;s Talk
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
