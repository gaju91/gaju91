"use client";

import { stats } from "@/lib/data/stats";
import { Card } from "@/components/ui/card";
import { Folder, Book, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  folder: Folder,
  book: Book,
  briefcase: Briefcase,
};

export function StatsSection() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}