"use client";

import { motion } from "framer-motion";
import { Target, Cpu, RefreshCw, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We start with understanding your goals and craft a roadmap that fits your business.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We build with modern stacks and cloud-native tooling for performance and scale.",
  },
  {
    icon: RefreshCw,
    title: "Agile & Transparent",
    description: "Iterative delivery, clear communication and full visibility into every project.",
  },
  {
    icon: Handshake,
    title: "Long Term Partner",
    description: "We build long-term technology partnerships, not just one-off deliverables.",
  },
];

export function ValuePillars() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.06),transparent_50%)]" />
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-core-navy border border-core-blue hover:border-core-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-core-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
