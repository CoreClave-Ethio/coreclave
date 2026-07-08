"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-core-accent/10 via-core-cyan/5 to-core-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mx-auto mb-6">
            <Hexagon className="w-8 h-8 text-core-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build Something{" "}
            <span className="text-core-accent">Amazing</span>?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help bring your ideas to life. Our team is ready to transform your vision into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
