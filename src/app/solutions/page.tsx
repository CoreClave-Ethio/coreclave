"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, Layers3, Check, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Rocket,
    title: "For Startups",
    description: "MVP development, rapid prototyping and scalable architecture to launch and grow faster.",
    items: ["MVP Development", "Product Strategy", "Scalable Architecture", "Funding Support"],
  },
  {
    icon: Building2,
    title: "For Enterprises",
    description: "Digital transformation, system integration and custom solutions to optimize your operations.",
    items: ["Digital Transformation", "System Integration", "Process Automation", "Custom Software"],
  },
  {
    icon: Layers3,
    title: "SaaS Products",
    description: "We build modern, secure and scalable SaaS products that solve real business problems.",
    items: ["Product Design", "SaaS Development", "Multi-tenant Architecture", "Ongoing Support"],
  },
];

export default function SolutionsPage() {
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
              Solutions For <span className="text-core-accent">Every Stage</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Whether you&apos;re a startup validating an idea or an enterprise transforming
              operations, we have the right solution for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-core-navy border border-core-blue hover:border-core-accent/40 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-core-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-core-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-core-accent" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
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
        </div>
      </section>

      <section className="pb-24">
        <div className="section-padding mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-core-blue bg-gradient-to-r from-core-accent/15 via-core-navy to-core-cyan/10 p-10 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="absolute -right-10 -top-10 w-56 h-56 bg-core-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Not sure which solution fits you?
              </h2>
              <p className="text-white/60 max-w-lg">
                Let&apos;s discuss your needs and find the best approach.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-lg border border-core-accent/50 hover:bg-core-accent/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
