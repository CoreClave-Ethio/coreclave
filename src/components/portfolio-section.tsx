"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SecureBank Pro",
    category: "FinTech",
    description: "A comprehensive banking platform with advanced security features and real-time transaction processing.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "ShopSmart Mobile",
    category: "E-Commerce",
    description: "A feature-rich mobile shopping app with AI-powered recommendations and seamless checkout.",
    tech: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "MediCare Connect",
    category: "Healthcare",
    description: "A comprehensive healthcare management system connecting patients, doctors, and hospitals.",
    tech: ["Vue.js", "Django", "PostgreSQL"],
  },
  {
    title: "EduTech Pro",
    category: "Learning Platform",
    description: "An interactive online learning platform with video streaming and progress tracking.",
    tech: ["Angular", "AWS", "GraphQL"],
  },
  {
    title: "DataViz Pro",
    category: "Analytics",
    description: "A powerful analytics dashboard with real-time data visualization and reporting tools.",
    tech: ["D3.js", "Python", "Redis"],
  },
  {
    title: "SalesPro CRM",
    category: "CRM",
    description: "A comprehensive customer relationship management system with automation and analytics.",
    tech: ["Laravel", "MySQL", "Docker"],
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-core-accent">Portfolio</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore some of our recent projects and see how we&apos;ve helped businesses achieve their goals.
          </p>
        </div>

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
  );
}
