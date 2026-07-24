"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { ImageSlot } from "@/components/image-slot";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group rounded-2xl border border-core-blue bg-core-navy overflow-hidden hover:border-core-accent/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-3">
        <ImageSlot
          src={project.thumbnailImage}
          alt={`${project.title} preview`}
          icon={<project.icon className="w-6 h-6 text-core-accent/70" strokeWidth={1.5} />}
          chrome
          className="aspect-[16/10] group"
        />
      </div>

      <div className="p-6 pt-3">
        <span className="text-xs font-semibold text-core-accent uppercase tracking-wide">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white mt-1.5 mb-2.5">{project.title}</h3>
        <p className="text-sm text-white/50 mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-xs font-medium text-white/60 bg-white/5 border border-core-blue rounded-full px-3 py-1"
            >
              {h}
            </span>
          ))}
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-core-accent hover:gap-2.5 transition-all"
        >
          View Case Study
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
