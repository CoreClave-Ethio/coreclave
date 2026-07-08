"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SecureBank Pro",
    category: "FinTech",
    description: "A comprehensive banking platform with advanced security features and real-time transaction processing. Built for a leading African bank.",
    tech: ["React", "Node.js", "MongoDB", "Redis"],
    stats: "99.9% Uptime",
  },
  {
    title: "ShopSmart Mobile",
    category: "E-Commerce",
    description: "A feature-rich mobile shopping app with AI-powered recommendations and seamless checkout. Processing thousands of daily orders.",
    tech: ["React Native", "Firebase", "Stripe", "TensorFlow"],
    stats: "50K+ Downloads",
  },
  {
    title: "MediCare Connect",
    category: "Healthcare",
    description: "A comprehensive healthcare management system connecting patients, doctors, and hospitals across multiple cities.",
    tech: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    stats: "100K+ Users",
  },
  {
    title: "EduTech Pro",
    category: "Education",
    description: "An interactive online learning platform with video streaming, progress tracking, and AI-powered tutoring.",
    tech: ["Angular", "AWS", "GraphQL", "OpenAI"],
    stats: "200K+ Students",
  },
  {
    title: "DataViz Pro",
    category: "Analytics",
    description: "A powerful analytics dashboard with real-time data visualization and reporting tools for enterprise clients.",
    tech: ["D3.js", "Python", "Redis", "Docker"],
    stats: "1M+ Data Points/Day",
  },
  {
    title: "SalesPro CRM",
    category: "CRM",
    description: "A comprehensive customer relationship management system with automation, analytics, and AI-driven insights.",
    tech: ["Laravel", "MySQL", "Docker", "Elasticsearch"],
    stats: "10K+ Businesses",
  },
];

export default function PortfolioPage() {
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
              Our <span className="text-core-accent">Portfolio</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Explore some of our recent projects and see how we&apos;ve helped businesses achieve their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full group cursor-pointer hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-core-blue/50 to-core-navy/50 relative flex items-center justify-center group-hover:from-core-accent/20 group-hover:to-core-cyan/20 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-core-accent">{project.title[0]}</span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-white/70" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="success" className="text-xs">
                        {project.stats}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
