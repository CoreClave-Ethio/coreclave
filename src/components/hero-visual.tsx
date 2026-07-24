"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Cloud, Database, Sparkles } from "lucide-react";
import { Logo } from "./logo";

const nodes = [
  { icon: Globe, label: "Web", x: -0.62, y: -0.82, color: "#2563eb" },
  { icon: Smartphone, label: "Mobile", x: 0.62, y: -0.82, color: "#3b82f6" },
  { icon: Palette, label: "UI/UX", x: -1.0, y: 0, color: "#06b6d4" },
  { icon: Cloud, label: "Cloud", x: 1.0, y: 0, color: "#0ea5e9" },
  { icon: Database, label: "Data", x: -0.62, y: 0.82, color: "#60a5fa" },
  { icon: Sparkles, label: "AI", x: 0.62, y: 0.82, color: "#38bdf8" },
];

const floatingParticles = [
  { x: "5%", y: "8%", size: 24, delay: 0, duration: 6, rotate: 0 },
  { x: "92%", y: "12%", size: 18, delay: 0.8, duration: 7, rotate: 45 },
  { x: "88%", y: "78%", size: 20, delay: 1.5, duration: 5.5, rotate: 15 },
  { x: "6%", y: "80%", size: 16, delay: 2.2, duration: 6.5, rotate: -10 },
  { x: "50%", y: "3%", size: 20, delay: 1, duration: 5, rotate: 30 },
  { x: "3%", y: "45%", size: 14, delay: 1.2, duration: 6, rotate: -30 },
];

export function HeroVisual() {
  const orbitRadius = 190;
  const centerSize = 340;

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] xl:min-h-[650px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full bg-[#2563eb]/[0.08] blur-[120px]" />
        <div className="absolute w-[260px] h-[260px] rounded-full bg-[#06b6d4]/[0.06] blur-[80px]" />
      </div>

      {/* Floating particles */}
      {floatingParticles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -18, 0, 18, 0],
            rotate: [p.rotate, p.rotate + 12, p.rotate, p.rotate - 12, p.rotate],
            opacity: [0.25, 0.55, 0.25, 0.55, 0.25],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        >
          <div
            className="border border-[#2563eb]/25 rounded-sm"
            style={{
              width: p.size,
              height: p.size,
              background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.04) 100%)",
              boxShadow: `0 0 ${p.size / 2}px rgba(37,99,235,0.1)`,
            }}
          />
        </motion.div>
      ))}

      {/* Central system */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: centerSize, height: centerSize }}>
          {/* Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#2563eb]/[0.1]"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full border border-dashed border-[#06b6d4]/[0.08]"
            style={{ inset: 30 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {nodes.map((node, i) => {
              const cx = centerSize / 2;
              const cy = centerSize / 2;
              const x = cx + node.x * orbitRadius;
              const y = cy + node.y * orbitRadius;
              return (
                <motion.line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke={node.color}
                  strokeWidth="1"
                  strokeOpacity="0.18"
                  strokeDasharray="3 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 4,
                    repeatType: "reverse",
                  }}
                />
              );
            })}
          </svg>

          {/* Orbit nodes */}
          {nodes.map((node, i) => {
            const cx = centerSize / 2;
            const cy = centerSize / 2;
            const x = node.x * orbitRadius;
            const y = node.y * orbitRadius;
            const nodeSize = 76;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - ${nodeSize / 2}px)`,
                  top: `calc(50% + ${y}px - ${nodeSize / 2}px)`,
                  width: nodeSize,
                  height: nodeSize,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.6 + i * 0.12 },
                  scale: { duration: 0.6, delay: 0.6 + i * 0.12, type: "spring", stiffness: 150 },
                  y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-transform hover:scale-110"
                    style={{
                      borderColor: `${node.color}30`,
                      background: `linear-gradient(135deg, ${node.color}18 0%, ${node.color}08 100%)`,
                      boxShadow: `0 0 24px ${node.color}15, inset 0 1px 0 ${node.color}20`,
                    }}
                  >
                    <node.icon className="w-6 h-6" style={{ color: node.color }} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Center logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120, damping: 12 }}
          >
            <div className="relative">
              <div className="absolute inset-0 scale-[2.5] opacity-30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2563eb]/30 to-[#06b6d4]/20 blur-[40px]" />
              </div>

              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-[-30px] rounded-2xl border"
                  style={{ borderColor: ring === 2 ? "#06b6d420" : "#2563eb20" }}
                  animate={{ scale: [1, 1.4 + ring * 0.15, 1.7 + ring * 0.15], opacity: [0.4, 0.15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: ring * 1.3 }}
                />
              ))}

              <div className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-core-accent to-core-accentDark shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                <Logo size={56} showText={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
