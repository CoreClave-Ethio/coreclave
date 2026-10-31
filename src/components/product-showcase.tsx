"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";

export function ProductShowcase() {
  return (
    <section className="py-24 border-t border-core-blue relative">
      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            More Products We&apos;ve <span className="text-core-accent">Built</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A selection of platforms and apps delivered for businesses across
            manufacturing, real estate, coffee, and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group rounded-2xl border border-core-blue bg-core-navy overflow-hidden hover:border-core-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="p-3">
                <div
                  className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${product.tile} flex items-center justify-center ${
                    product.cover ? "" : "p-8"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.logo}
                    alt={`${product.client} brand`}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.05] ${
                      product.cover ? "object-cover" : "object-contain"
                    }`}
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-core-navy/80 backdrop-blur border border-core-blue px-3 py-1 text-[11px] font-medium text-white/70">
                    {product.client}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-3 flex flex-col flex-1">
                <span className="text-xs font-semibold text-core-accent uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1.5 mb-2.5">{product.title}</h3>
                <p className="text-sm text-white/50 mb-5 leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-white/60 bg-white/5 border border-core-blue rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
