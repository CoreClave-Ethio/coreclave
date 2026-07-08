"use client";

import { motion } from "framer-motion";
import {
  Check,
  Users,
  Target,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import { StatsSection } from "@/components/stats-section";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every line of code we write and every design we create.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about technology and committed to delivering the best results.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We optimize our processes to deliver high-quality solutions on time and on budget.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in software engineering.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in cloud architecture and scalable systems.",
  },
  {
    name: "Michael Brown",
    role: "Lead Designer",
    bio: "Award-winning designer specializing in UX/UI.",
  },
  {
    name: "Emily Davis",
    role: "Head of Engineering",
    bio: "Full-stack expert with a passion for clean code.",
  },
];

export default function AboutPage() {
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
              About <span className="text-core-accent">Coreclave</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We are a passionate team of software engineers, designers, and innovators dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                At Coreclave, we believe in the power of technology to transform businesses and improve lives. Our mission is to deliver cutting-edge software solutions that drive growth, efficiency, and innovation for our clients.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Founded in 2014, we have grown from a small team of developers to a full-service software company serving clients across the globe. Our diverse team brings together expertise in web development, mobile apps, cloud solutions, and more.
              </p>
              <div className="space-y-3">
                {["10+ Years of Experience", "500+ Projects Completed", "50+ Happy Clients", "24/7 Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-core-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-core-accent" />
                      </div>
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-40 rounded-xl bg-gradient-to-br from-core-accent/20 to-core-cyan/10 flex items-center justify-center">
                      <Users className="w-12 h-12 text-core-accent" />
                    </div>
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white/80">50+</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white/80">500+</span>
                    </div>
                    <div className="h-40 rounded-xl bg-gradient-to-br from-core-cyan/20 to-core-accent/10 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-core-cyan" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-core-accent/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-24 border-t border-white/5">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-core-accent">Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-core-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-core-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet the <span className="text-core-accent">Team</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The talented people behind Coreclave.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-core-accent/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-core-accent/20 to-core-cyan/20 flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <span className="text-2xl font-bold text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-core-accent mb-2">{member.role}</p>
                <p className="text-sm text-white/50">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
