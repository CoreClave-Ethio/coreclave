"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Code2,
  MessageSquare,
  Check,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and responsive design principles. We create fast, scalable, and SEO-friendly websites that drive business growth.",
    features: [
      "React & Vue.js Applications",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "Server-Side Rendering",
      "API Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices. We deliver smooth, performant apps that users love.",
    features: [
      "React Native Development",
      "iOS & Android Apps",
      "App Store Optimization",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement. We put users at the center of every design decision.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Testing",
      "Design Systems",
      "Accessibility Compliance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications. We help you leverage the cloud for maximum efficiency.",
    features: [
      "AWS & Azure Integration",
      "DevOps & CI/CD",
      "Database Management",
      "Container Orchestration",
      "Serverless Architecture",
    ],
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Robust and secure APIs that power your applications and integrate with third-party services. We build APIs that developers love to use.",
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "API Security & Testing",
      "Documentation",
      "Rate Limiting & Monitoring",
    ],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Strategic technology consulting to help you make informed decisions about your software projects. We guide you from idea to launch.",
    features: [
      "Technology Assessment",
      "Architecture Planning",
      "Project Management",
      "Code Review & Audit",
      "Team Augmentation",
    ],
  },
];

export default function ServicesPage() {
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
              Our <span className="text-core-accent">Services</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From web development to mobile apps, we offer comprehensive software solutions tailored to your needs.
            </p>
          </motion.div>

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
                    <p className="text-white/60 text-sm mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-white/50 flex items-center gap-2">
                          <Check className="w-4 h-4 text-core-accent flex-shrink-0" />
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

      <section className="py-24 border-t border-white/5">
        <div className="section-padding mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We can tailor our services to fit your specific needs. Let&apos;s discuss your project.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
