"use client";

import { motion } from "framer-motion";
import { Code2, Box, ShieldCheck, Rocket } from "lucide-react";
import { HeroVisual } from "./hero-visual";

const features = [
  { icon: Code2, label: "Custom\nDevelopment" },
  { icon: Box, label: "Scalable\nArchitecture" },
  { icon: ShieldCheck, label: "Secure &\nReliable" },
  { icon: Rocket, label: "Performance\nDriven" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-core-dark">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0d1a3a] to-[#0a0e27]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(37,99,235,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(6,182,212,0.08),transparent)]" />

      {/* Floating geometric shapes background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid floor effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center'
          }}
        />
        
        {/* Floating cubes */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[8%] w-12 h-12 opacity-30"
        >
          <div className="w-full h-full bg-gradient-to-br from-core-accent/40 to-transparent rounded-lg border border-core-accent/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[35%] right-[15%] w-8 h-8 opacity-20"
        >
          <div className="w-full h-full bg-gradient-to-br from-core-cyan/30 to-transparent rounded-md border border-core-cyan/20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] right-[25%] w-6 h-6 opacity-25"
        >
          <div className="w-full h-full bg-core-accent/30 rounded-sm border border-core-accent/20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[60%] right-[5%] w-10 h-10 opacity-15"
        >
          <div className="w-full h-full border border-core-light/20 rounded-lg" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[40%] right-[12%] w-5 h-5 opacity-20"
        >
          <div className="w-full h-full bg-core-cyan/20 rounded-sm" />
        </motion.div>
      </div>

      <div className="section-padding mx-auto max-w-7xl w-full relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <div className="relative z-10 py-12">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-4">
                Building{" "}
                <span className="text-[#2563eb]">Core</span>{" "}
                Solutions
                <br />
                That Drive{" "}
                <span className="text-[#2563eb]">Real Impact</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-white/50 mb-12 max-w-2xl"
            >
              Custom Software. Scalable Systems. Lasting Value.
            </motion.p>

            {/* Feature icons row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-lg border border-[#2563eb]/30 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#2563eb]" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-white/50 whitespace-pre-line leading-relaxed">
                    {feature.label}
                  </span>
                </div>
              ))}
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
