import { createClient } from "@/lib/supabase-server";
import { BlogCard } from "@/components/blog-card";

export default async function BlogPage() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const samplePosts = [
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

  const displayPosts = posts || samplePosts;

  return (
    <div className="pt-16">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="section-padding mx-auto max-w-7xl relative">
          <div
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-core-accent">Blog</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Insights, tutorials, and updates from our team of software engineers and designers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
