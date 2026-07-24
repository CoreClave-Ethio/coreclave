"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="section-padding mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Recent <span className="text-core-accent">Projects</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              A look at some of the enterprise software solutions we&apos;ve recently
              designed and built for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="pb-24">
        <div className="section-padding mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-core-blue bg-gradient-to-r from-core-accent/20 via-core-navy to-core-cyan/10 p-10 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="absolute -right-10 -top-10 w-56 h-56 bg-core-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Have a project in mind?
              </h2>
              <p className="text-white/60 max-w-lg">
                Let&apos;s build something amazing together.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-core-accent hover:bg-core-accentDark px-6 py-3.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
