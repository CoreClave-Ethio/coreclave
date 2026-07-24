"use client";

import { motion } from "framer-motion";
import { Award, Users, Briefcase, Percent, Target, Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";
import { StatsSection } from "@/components/stats-section";

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "20+", label: "Experts" },
  { icon: Briefcase, value: "30+", label: "Projects" },
  { icon: Percent, value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every line of code we write and every design we create.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We do what we say we'll do, and communicate honestly every step of the way.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description: "We work closely with our clients as true partners, not just vendors.",
  },
];

export default function AboutPage() {
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
              About <span className="text-core-accent">CoreClave</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We are a team of engineers, designers and innovators passionate about building
              software that makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <section className="py-24">
        <div className="section-padding mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-core-blue h-[420px] sm:h-[480px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1530] via-[#0A0C1B] to-[#0A0C1B]" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_40%,rgba(37,99,235,0.25),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_70%,rgba(6,182,212,0.15),transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="relative h-full flex items-end p-10 sm:p-14">
              <div>
                {["Build.", "Innovate.", "Create.", "Impact."].map((word, i) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-4xl sm:text-6xl font-bold text-white leading-[1.05] tracking-tight"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-core-blue">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/60 mb-4 leading-relaxed">
                To empower businesses and startups with innovative software solutions that drive
                growth, efficiency and meaningful impact.
              </p>
              <p className="text-white/60 leading-relaxed">
                We believe technology should be a force multiplier for the businesses we work
                with — reliable, scalable, and built around real outcomes rather than trends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="p-5 rounded-xl bg-core-navy border border-core-blue hover:border-core-accent/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-core-accent" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
