"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CoreClave Software Solutions delivered our project with exceptional professionalism, excellent communication, and outstanding technical expertise. The team consistently met deadlines, kept us informed throughout the development process, and demonstrated a genuine commitment to building a high-quality solution. Their innovative thinking, attention to detail, and reliability made them an outstanding technology partner. We highly recommend CoreClave for businesses seeking dependable software development services.",
    name: "Francis Kangethe Nganga",
    role: "Founder & CEO",
    company: "Sigma Sita",
  },
  {
    quote:
      "Partnering with CoreClave Software Solutions was an excellent experience. They quickly understood our business needs and developed a modern, intuitive tour and travel booking platform that exceeded our expectations. Their responsiveness, technical expertise, and commitment to delivering a polished product made the entire collaboration seamless. We confidently recommend CoreClave to any organization looking for a trusted software development partner.",
    name: "Yuta Kawano",
    role: "CEO",
    company: "K5 Safari",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="py-24 relative border-t border-core-blue">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.06),transparent_50%)]" />
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our <span className="text-core-accent">Clients Say</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real feedback from the businesses we&apos;ve partnered with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative p-8 sm:p-10 rounded-2xl bg-core-navy border border-core-blue hover:border-core-accent/40 transition-colors duration-300 flex flex-col"
            >
              <Quote className="w-9 h-9 text-core-accent/20 mb-4" strokeWidth={1.5} />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-core-accent text-core-accent" />
                ))}
              </div>

              <blockquote className="text-white/70 leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-core-accent to-core-accentDark flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{initials(t.name)}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
