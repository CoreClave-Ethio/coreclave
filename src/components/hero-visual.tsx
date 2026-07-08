"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  ShieldCheck,
  Globe,
  Smartphone,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import { Logo } from "./logo";

const orbitNodes = [
  { icon: Code2, label: "Develop", angle: 0, color: "#2563eb" },
  { icon: Palette, label: "Design", angle: 45, color: "#06b6d4" },
  { icon: Rocket, label: "Deploy", angle: 90, color: "#3b82f6" },
  { icon: ShieldCheck, label: "Secure", angle: 135, color: "#60a5fa" },
  { icon: Globe, label: "Scale", angle: 180, color: "#0ea5e9" },
  { icon: Smartphone, label: "Deliver", angle: 225, color: "#38bdf8" },
  { icon: Database, label: "Data", angle: 270, color: "#2563eb" },
  { icon: Cpu, label: "AI/ML", angle: 315, color: "#06b6d4" },
];

const floatingParticles = [
  { x: "5%", y: "8%", size: 28, delay: 0, duration: 6, rotate: 0 },
  { x: "92%", y: "12%", size: 20, delay: 0.8, duration: 7, rotate: 45 },
  { x: "88%", y: "65%", size: 24, delay: 1.5, duration: 5.5, rotate: 15 },
  { x: "8%", y: "70%", size: 18, delay: 2.2, duration: 6.5, rotate: -10 },
  { x: "50%", y: "5%", size: 22, delay: 1, duration: 5, rotate: 30 },
  { x: "95%", y: "45%", size: 16, delay: 2.8, duration: 7.5, rotate: 60 },
  { x: "3%", y: "40%", size: 14, delay: 1.2, duration: 6, rotate: -30 },
  { x: "75%", y: "88%", size: 20, delay: 0.5, duration: 5.8, rotate: 20 },
  { x: "25%", y: "92%", size: 18, delay: 1.8, duration: 7, rotate: 50 },
];

export function HeroVisual() {
  const orbitRadius = 170; // Larger orbit
  const centerSize = 320; // Larger container

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] xl:min-h-[650px]">
      {/* Large ambient glow behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-[#2563eb]/[0.07] blur-[120px]" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#06b6d4]/[0.05] blur-[80px]" />
      </div>

      {/* Floating geometric particles */}
      {floatingParticles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -18, 0, 18, 0],
            rotate: [p.rotate, p.rotate + 12, p.rotate, p.rotate - 12, p.rotate],
            opacity: [0.25, 0.55, 0.25, 0.55, 0.25],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="border border-[#2563eb]/25 rounded-sm"
            style={{
              width: p.size,
              height: p.size,
              background: `linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.04) 100%)`,
              boxShadow: `0 0 ${p.size / 2}px rgba(37,99,235,0.1)`,
            }}
          />
        </motion.div>
      ))}

      {/* Central orbit system */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative"
          style={{ width: centerSize, height: centerSize }}
        >
          {/* Outer ring - solid */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#2563eb]/[0.08]"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle ring - dashed */}
          <motion.div
            className="absolute rounded-full border border-dashed border-[#06b6d4]/[0.06]"
            style={{ inset: 20 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute rounded-full border border-[#2563eb]/[0.05]"
            style={{ inset: 40 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Connection lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {orbitNodes.map((node, i) => {
              const angle = (node.angle * Math.PI) / 180;
              const cx = centerSize / 2;
              const cy = centerSize / 2;
              const r = orbitRadius;
              const x = cx + r * Math.cos(angle);
              const y = cy + r * Math.sin(angle);
              return (
                <motion.line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke={node.color}
                  strokeWidth="1"
                  strokeOpacity="0.15"
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

            {/* Small arc segments between nodes */}
            {orbitNodes.map((node, i) => {
              const nextNode = orbitNodes[(i + 1) % orbitNodes.length];
              const angle1 = (node.angle * Math.PI) / 180;
              const angle2 = (nextNode.angle * Math.PI) / 180;
              const cx = centerSize / 2;
              const cy = centerSize / 2;
              const r = orbitRadius + 35;
              const x1 = cx + r * Math.cos(angle1);
              const y1 = cy + r * Math.sin(angle1);
              const x2 = cx + r * Math.cos(angle2);
              const y2 = cy + r * Math.sin(angle2);
              const largeArc = nextNode.angle - node.angle > 180 ? 1 : 0;
              return (
                <motion.path
                  key={`arc-${i}`}
                  d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="0.5"
                  strokeOpacity="0.08"
                  strokeDasharray="2 4"
                  animate={{ strokeOpacity: [0.05, 0.12, 0.05] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              );
            })}
          </svg>

          {/* Orbiting nodes */}
          {orbitNodes.map((node, i) => {
            const angle = (node.angle * Math.PI) / 180;
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;
            const nodeSize = 52;

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
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.12,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-full rounded-xl flex items-center justify-center border backdrop-blur-sm transition-all hover:scale-110"
                    style={{
                      borderColor: `${node.color}25`,
                      background: `linear-gradient(135deg, ${node.color}12 0%, ${node.color}05 100%)`,
                      boxShadow: `0 0 20px ${node.color}10, inset 0 1px 0 ${node.color}15`,
                    }}
                  >
                    <node.icon
                      className="w-5 h-5"
                      style={{ color: node.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[9px] font-semibold text-white/30 uppercase tracking-widest whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Central Logo - EXACT match */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
          >
            <div className="relative">
              {/* Ambient glow behind logo */}
              <div className="absolute inset-0 scale-[2.5] opacity-30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2563eb]/30 to-[#06b6d4]/20 blur-[40px]" />
              </div>

              {/* Pulse ring 1 */}
              <motion.div
                className="absolute inset-[-30px] rounded-2xl border border-[#2563eb]/20"
                animate={{ scale: [1, 1.4, 1.7], opacity: [0.4, 0.15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
              />
              {/* Pulse ring 2 */}
              <motion.div
                className="absolute inset-[-30px] rounded-2xl border border-[#2563eb]/15"
                animate={{ scale: [1, 1.6, 2], opacity: [0.3, 0.1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.3,
                }}
              />
              {/* Pulse ring 3 */}
              <motion.div
                className="absolute inset-[-30px] rounded-2xl border border-[#06b6d4]/15"
                animate={{ scale: [1, 1.5, 1.9], opacity: [0.25, 0.08, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 2.6,
                }}
              />

              {/* Actual Logo component - exact match */}
              <div className="relative z-10">
                <Logo size={100} showText={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom tech tags */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 max-w-[90%]">
        {["Web", "Mobile", "Cloud", "AI / ML", "DevOps", "Cybersecurity"].map(
          (tech, i) => (
            <motion.div
              key={tech}
              className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(37, 99, 235, 0.2)",
                backgroundColor: "rgba(37, 99, 235, 0.05)",
              }}
            >
              <span className="text-[11px] text-white/40 font-medium uppercase tracking-wider">
                {tech}
              </span>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
