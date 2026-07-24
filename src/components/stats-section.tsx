"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, Clock, LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  { icon: Calendar, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export function StatsSection({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="py-16 relative border-y border-core-blue">
      <div className="absolute inset-0 bg-gradient-to-r from-core-accent/5 via-transparent to-core-cyan/5" />

      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-core-accent" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
