"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ScrollFocusSection({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setInView(true);
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
          setInView(false);
        }
      },
      { threshold: [0, 0.2, 0.4] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView
          ? "opacity-100"
          : "opacity-30",
        className
      )}
    >
      {children}
    </div>
  );
}
