"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Code2,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and responsive design principles.",
    features: ["React & Vue.js Applications", "E-commerce Platforms", "Progressive Web Apps"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    features: ["React Native Development", "iOS & Android Apps", "App Store Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement.",
    features: ["User Interface Design", "User Experience Research", "Prototyping & Testing"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: ["AWS & Azure Integration", "DevOps & CI/CD", "Database Management"],
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Robust and secure APIs that power your applications and integrate with third-party services.",
    features: ["RESTful API Design", "GraphQL Implementation", "API Security & Testing"],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Strategic technology consulting to help you make informed decisions about your software projects.",
    features: ["Technology Assessment", "Architecture Planning", "Project Management"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-core-accent">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From web development to mobile apps, we offer comprehensive software solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full gradient-border hover:bg-white/10 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-4 group-hover:bg-core-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-core-accent" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-white/50 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-core-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
