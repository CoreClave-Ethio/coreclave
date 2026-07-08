"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ImageUpload } from "@/components/image-upload";
import { createClient } from "@/lib/supabase";
import { ArrowLeft, Save, X } from "lucide-react";
import Link from "next/link";

function BlogForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [author, setAuthor] = useState("Coreclave Team");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editId) {
      const loadPost = async () => {
        setIsLoading(true);
        const supabase = createClient();
        const { data } = await supabase.from("posts").select("*").eq("id", editId).single();
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt || "");
          setContent(data.content || "");
          setCoverImage(data.cover_image || null);
          setAuthor(data.author || "Coreclave Team");
          setTags(data.tags?.join(", ") || "");
          setStatus(data.status);
        }
        setIsLoading(false);
      };
      loadPost();
    }
  }, [editId]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .substring(0, 100);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!editId) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent, publish = false) => {
    e.preventDefault();
    setIsSaving(true);

    const supabase = createClient();
    const postData = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage,
      author,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      status: publish ? "published" : status,
      updated_at: new Date().toISOString(),
    };

    if (editId) {
      await supabase.from("posts").update(postData).eq("id", editId);
    } else {
      await supabase.from("posts").insert({
        ...postData,
        created_at: new Date().toISOString(),
        published_at: publish ? new Date().toISOString() : null,
      });
    }

    setIsSaving(false);
    router.push("/admin/blog");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-white/80 mb-2 block">Title</label>
          <Input
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/80 mb-2 block">Slug</label>
          <Input
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="post-url-slug"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Author</label>
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Excerpt</label>
        <Textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Short description of the post"
          rows={2}
        />
      </div>

      {/* Cover Image Upload */}
      <ImageUpload value={coverImage} onChange={setCoverImage} />

      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Content (Markdown)</label>
        <Textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content in Markdown..."
          rows={20}
          className="font-mono text-sm"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Tags</label>
        <Input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="tag1, tag2, tag3"
        />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-white/80">Status:</span>
        <Badge variant={status === "published" ? "success" : "warning"}>{status}</Badge>
      </div>

      <div className="flex flex-wrap gap-3 pt-4">
        <Button type="submit" disabled={isSaving}>
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? "Saving..." : editId ? "Update Draft" : "Save as Draft"}
        </Button>
        <Button type="button" onClick={(e) => handleSubmit(e, true)} disabled={isSaving}>
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? "Publishing..." : "Publish"}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/admin/blog">
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Link>
        </Button>
      </div>
    </form>
  );
}

export default function AdminBlogNewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-white">New Blog Post</h2>
          <p className="text-white/60">Create a new blog post or article.</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <Suspense fallback={<div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" /></div>}>
          <BlogForm />
        </Suspense>
      </div>
    </div>
  );
}
