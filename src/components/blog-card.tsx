"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full group cursor-pointer hover:bg-white/10 transition-all duration-300 overflow-hidden">
          <div className="h-48 relative overflow-hidden">
            {post.cover_image ? (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-full bg-gradient-to-br from-core-blue/50 to-core-navy/50 relative flex items-center justify-center group-hover:from-core-accent/20 group-hover:to-core-cyan/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-core-accent">{post.title[0]}</span>
                </div>
              </div>
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-core-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3 mb-3 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.published_at)}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-core-accent transition-colors">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-white/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags?.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-core-accent group-hover:translate-x-1 transition-all" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
