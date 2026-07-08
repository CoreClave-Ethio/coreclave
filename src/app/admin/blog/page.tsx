"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import { Plus, Edit, Trash2, RefreshCw, Eye, FileText } from "lucide-react";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadPosts = async () => {
    setIsLoading(true);
    const supabase = createClient();
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const toggleStatus = async (id: string, currentStatus: string) => {
    const supabase = createClient();
    const newStatus = currentStatus === "published" ? "draft" : "published";
    await supabase.from("posts").update({ status: newStatus }).eq("id", id);
    loadPosts();
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    const supabase = createClient();
    await supabase.from("posts").delete().eq("id", id);
    loadPosts();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Blog Posts</h2>
          <p className="text-white/60">Manage your blog posts and articles.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={loadPosts}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm" asChild>
            <Link href="/admin/blog/new">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <p className="text-white/40 mb-4">No posts yet.</p>
          <Button asChild>
            <Link href="/admin/blog/new">
              <Plus className="w-4 h-4 mr-2" />
              Create First Post
            </Link>
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-3">
                      {post.cover_image ? (
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                          <img src={post.cover_image} alt="" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-white/30 font-bold">{post.title[0]}</span>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="truncate max-w-[250px]">{post.title}</span>
                        <span className="text-xs text-white/40">/{post.slug}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-white/60">{post.author}</TableCell>
                  <TableCell className="text-white/60">
                    {formatDate(post.created_at)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={post.status === "published" ? "success" : "warning"}
                    >
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleStatus(post.id, post.status)}
                        title={post.status === "published" ? "Unpublish" : "Publish"}
                      >
                        <Eye className="w-4 h-4 text-white/60" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.push(`/admin/blog/new?id=${post.id}`)}
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-white/60" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deletePost(post.id)}
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
