"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-core-dark">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0C1B] via-[#0d1530] to-[#0A0C1B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(37,99,235,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(6,182,212,0.08),transparent)]" />

      <div className="section-padding mx-auto max-w-7xl w-full relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left content */}
          <div className="relative z-10 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-core-blue bg-white/[0.03] px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-core-accent" />
              <span className="text-xs sm:text-sm text-white/70 font-medium">
                Software Solutions That Scale
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-bold tracking-tight text-white leading-[1.12] mb-6"
            >
              Building Core Solutions That Drive{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">
                Real Impact
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 mb-10 max-w-xl leading-relaxed"
            >
              We help startups and enterprises build reliable, scalable and
              high-performance digital products with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-core-accent hover:bg-core-accentDark px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-core-blue bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right side - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
