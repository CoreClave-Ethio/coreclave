"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Arada Sub City, Addis Ababa, Ethiopia",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+251 (996) 995-878",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@coreclave.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="section-padding mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="text-core-accent">Touch</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Ready to start your next project? Let&apos;s discuss how we can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-core-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                <p className="text-sm text-white/60 mb-4">
                  Stay updated with our latest projects and insights.
                </p>
                <div className="flex gap-3">
                  {["GitHub", "Twitter", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-core-accent/30 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
