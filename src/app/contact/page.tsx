"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Linkedin, Github, Twitter, Youtube } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Arada Sub City, Addis Ababa, Ethiopia",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@coreclave.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+251 996 995 878",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
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
              Let&apos;s Build Something <span className="text-core-accent">Great Together</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to say hello? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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

              <div className="p-6 rounded-xl bg-core-navy border border-core-blue">
                <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                <p className="text-sm text-white/60 mb-4">
                  Stay updated with our latest projects and insights.
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-core-blue flex items-center justify-center text-white/60 hover:text-white hover:border-core-accent/30 transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-core-navy border border-core-blue"
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
