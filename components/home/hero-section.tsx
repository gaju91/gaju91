"use client";

import { Button } from "@/components/ui/button";
import { FileText, Github, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-gradient" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Gajanand Sharma
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground">
          Senior Backend Engineer | Aspiring Entrepreneur
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building scalable, secure, and high-performance systems
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/resume">
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/gaju91" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://gajuhere.medium.com/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Read My Blogs
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}