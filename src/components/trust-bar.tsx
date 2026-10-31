"use client";

import { motion } from "framer-motion";

const companies: { name: string; className: string; href?: string }[] = [
  { name: "Kaimesh", className: "font-orbitron font-bold tracking-wide", href: "https://kaimesh.com/" },
  { name: "Mobile Vet", className: "font-sans font-bold tracking-tight" },
  { name: "K5-safari", className: "font-serif italic font-semibold tracking-normal" },
  { name: "Elecnovatech", className: "font-orbitron font-bold tracking-wide", href: "https://elechnovatech.com/" },
  { name: "EthioStar", className: "font-serif font-semibold tracking-wider", href: "https://ethiostar-coffee-processing.vercel.app/" },
  { name: "Semay", className: "font-sans font-light tracking-[0.25em] uppercase", href: "https://www.semayproperties.com/" },
  { name: "AI Barber Shop", className: "font-serif italic font-bold tracking-normal", href: "https://barber-ai-suite.vercel.app/" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-t border-core-blue relative">
      <div className="section-padding mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-white/40 mb-10">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {company.href ? (
                <a
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${company.name}`}
                  className={`text-2xl text-white whitespace-nowrap cursor-pointer ${company.className}`}
                >
                  {company.name}
                </a>
              ) : (
                <span className={`text-2xl text-white whitespace-nowrap ${company.className}`}>
                  {company.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
