"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import type { BlogPost } from "@/types";

const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Node.js and Express",
    slug: "building-scalable-apis-nodejs-express",
    excerpt: "Learn how to design and build APIs that can handle millions of requests with proper architecture patterns.",
    content: "",
    cover_image: null,
    published_at: "2024-06-15T00:00:00Z",
    created_at: "2024-06-10T00:00:00Z",
    updated_at: "2024-06-15T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: "2",
    title: "The Future of React: Server Components Explained",
    slug: "future-of-react-server-components",
    excerpt: "Deep dive into React Server Components and how they change the way we build modern web applications.",
    content: "",
    cover_image: null,
    published_at: "2024-06-10T00:00:00Z",
    created_at: "2024-06-05T00:00:00Z",
    updated_at: "2024-06-10T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["React", "Frontend", "Web"],
  },
  {
    id: "3",
    title: "Cloud-Native Architecture Best Practices",
    slug: "cloud-native-architecture-best-practices",
    excerpt: "Essential patterns and practices for building resilient, scalable cloud-native applications.",
    content: "",
    cover_image: null,
    published_at: "2024-06-05T00:00:00Z",
    created_at: "2024-06-01T00:00:00Z",
    updated_at: "2024-06-05T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["Cloud", "AWS", "DevOps"],
  },
];

export function BlogSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Latest <span className="text-core-accent">Blog</span>
            </h2>
            <p className="text-white/60">
              Insights, tutorials, and updates from our team.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
