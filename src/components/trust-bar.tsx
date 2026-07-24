"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Kaimesh", className: "font-orbitron font-bold tracking-wide" },
  { name: "Mobile Vet", className: "font-sans font-bold tracking-tight" },
  { name: "K5-safari", className: "font-serif italic font-semibold tracking-normal" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-t border-core-blue relative">
      <div className="section-padding mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-white/40 mb-10">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className={`text-2xl text-white whitespace-nowrap ${company.className}`}>
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
