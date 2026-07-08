"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Expert Development Team",
  "Agile Development Process",
  "Cutting-edge Technologies",
  "On-time Delivery",
  "24/7 Support",
  "Scalable Solutions",
];

export function AboutSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About <span className="text-core-accent">Coreclave</span>
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              We are a passionate team of software engineers, designers, and innovators dedicated to creating exceptional digital experiences. With over a decade of experience, we have helped businesses transform their ideas into powerful software solutions.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              At Coreclave, we believe in the power of technology to transform businesses and improve lives. Our mission is to deliver cutting-edge software solutions that drive growth, efficiency, and innovation for our clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-5 h-5 rounded-full bg-core-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-core-accent" />
                  </div>
                  {reason}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 rounded-xl bg-gradient-to-br from-core-accent/20 to-core-cyan/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-core-accent">10+</span>
                    </div>
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/80">500+</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/80">50+</span>
                    </div>
                    <div className="h-32 rounded-xl bg-gradient-to-br from-core-cyan/20 to-core-accent/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-core-cyan">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-core-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-core-cyan/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
