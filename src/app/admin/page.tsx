"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Users,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";

const statsCards = [
  { label: "Total Contacts", icon: MessageSquare, key: "contacts" },
  { label: "Blog Posts", icon: FileText, key: "posts" },
  { label: "Published Posts", icon: Eye, key: "published" },
  { label: "New Contacts", icon: Users, key: "newContacts" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    contacts: 0,
    posts: 0,
    published: 0,
    newContacts: 0,
  });
  const [recentContacts, setRecentContacts] = useState<any[]>([]);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const supabase = createClient();

      const { count: contactsCount } = await supabase
        .from("contacts")
        .select("*", { count: "exact", head: true });
      const { count: newContactsCount } = await supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .eq("status", "new");
      const { count: postsCount } = await supabase
        .from("posts")
        .select("*", { count: "exact", head: true });
      const { count: publishedCount } = await supabase
        .from("posts")
        .select("*", { count: "exact", head: true })
        .eq("status", "published");

      const { data: contacts } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);
      const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      setStats({
        contacts: contactsCount || 0,
        posts: postsCount || 0,
        published: publishedCount || 0,
        newContacts: newContactsCount || 0,
      });
      setRecentContacts(contacts || []);
      setRecentPosts(posts || []);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Dashboard</h2>
        <p className="text-white/60">Overview of your website activity.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card) => (
          <Card key={card.key} className="border-white/5">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-white/60">
                  {card.label}
                </CardTitle>
                <card.icon className="w-4 h-4 text-core-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {stats[card.key as keyof typeof stats]}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-white/5">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-white">Recent Contacts</CardTitle>
              <Link
                href="/admin/contacts"
                className="text-sm text-core-accent hover:text-core-cyan transition-colors flex items-center gap-1"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentContacts.length === 0 ? (
              <p className="text-sm text-white/40 py-8 text-center">No contacts yet.</p>
            ) : (
              <div className="space-y-3">
                {recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">
                        {contact.first_name} {contact.last_name}
                      </p>
                      <p className="text-xs text-white/50">{contact.email}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === "new"
                          ? "bg-core-accent/20 text-core-accent"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-white/5">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-white">Recent Blog Posts</CardTitle>
              <Link
                href="/admin/blog"
                className="text-sm text-core-accent hover:text-core-cyan transition-colors flex items-center gap-1"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentPosts.length === 0 ? (
              <p className="text-sm text-white/40 py-8 text-center">No posts yet.</p>
            ) : (
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{post.title}</p>
                      <p className="text-xs text-white/50">{formatDate(post.created_at)}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.status === "published"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
