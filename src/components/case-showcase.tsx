"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Gauge, Sparkles, TrendingUp, Activity } from "lucide-react";

const features = [
  { icon: Layers, label: "Scalable Architecture" },
  { icon: ShieldCheck, label: "Secure by Design" },
  { icon: Gauge, label: "Performance Focused" },
  { icon: Sparkles, label: "Future Ready" },
];

export function CaseShowcase() {
  return (
    <section className="py-24 relative border-t border-core-blue">
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              We turn ideas into powerful digital products.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed max-w-lg">
              From MVPs to enterprise systems, we build products that are
              scalable, secure, and built to last.
            </p>
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-core-accent/10 border border-core-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-core-accent" />
                  </div>
                  <span className="text-sm text-white/70 font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-core-accent hover:bg-core-accentDark px-6 py-3.5 text-sm font-semibold text-white transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-core-blue bg-core-navy p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl bg-white/[0.03] border border-core-blue p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 font-medium">Overview</span>
                    <TrendingUp className="w-3.5 h-3.5 text-core-accent" />
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-core-accent/80 to-core-cyan/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-core-blue p-4 flex flex-col justify-between">
                  <Activity className="w-4 h-4 text-core-cyan" />
                  <div>
                    <div className="text-lg font-bold text-white">98%</div>
                    <div className="text-[10px] text-white/40">Satisfaction</div>
                  </div>
                </div>
                <div className="col-span-3 rounded-xl bg-white/[0.03] border border-core-blue p-4 space-y-2.5">
                  {[
                    { label: "Uptime", value: "99.9%", w: "95%" },
                    { label: "Response Time", value: "120ms", w: "70%" },
                    { label: "Deployments", value: "24/wk", w: "55%" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span className="text-[11px] text-white/40 w-24 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-core-accent to-core-cyan"
                          style={{ width: row.w }}
                        />
                      </div>
                      <span className="text-[11px] text-white/60 font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-core-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-core-cyan/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
