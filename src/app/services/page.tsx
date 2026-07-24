"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Code2,
  Lightbulb,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Percent,
} from "lucide-react";
import Link from "next/link";
import { StatsSection } from "@/components/stats-section";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, responsive and scalable web applications built with modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive and user-centered designs that drive engagement.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and solutions that grow with your business.",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Robust, secure and well-documented APIs to power your products.",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic technology guidance to help you build the right products.",
  },
];

const stats = [
  { icon: Award, value: "30+", label: "Projects Completed" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Percent, value: "98%", label: "Client Satisfaction" },
];

export default function ServicesPage() {
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
              Our <span className="text-core-accent">Services</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              End-to-end digital solutions to help your business innovate, grow and lead in your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-core-navy border border-core-blue hover:border-core-accent/40 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-5 group-hover:bg-core-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-core-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/50 mb-5 leading-relaxed">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-core-accent hover:gap-2.5 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 rounded-2xl border border-core-blue bg-gradient-to-r from-core-accent/15 via-core-navy to-core-cyan/10 p-10 sm:p-12 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-56 h-56 bg-core-accent/20 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-0 w-24 h-24 border border-core-accent/30 rounded-2xl rotate-12" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Need a custom solution?
                </h2>
                <p className="text-white/60 max-w-lg">
                  Tell us about your project and we&apos;ll create a solution that fits your unique needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-core-accent hover:bg-core-accentDark px-6 py-3.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection stats={stats} />
    </div>
  );
}
