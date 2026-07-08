import { createClient } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/markdown-renderer";

interface BlogPostPageProps {
  params: { slug: string };
}

const samplePosts: Record<string, any> = {
  "building-scalable-apis-nodejs-express": {
    id: "1",
    title: "Building Scalable APIs with Node.js and Express",
    slug: "building-scalable-apis-nodejs-express",
    excerpt: "Learn how to design and build APIs that can handle millions of requests with proper architecture patterns.",
    content: `# Building Scalable APIs with Node.js and Express

In today's digital landscape, APIs are the backbone of modern applications. Whether you're building a mobile app, a web platform, or integrating with third-party services, a well-designed API is crucial for success.

## Why Scalability Matters

Scalability isn't just about handling more traffic — it's about maintaining performance, reliability, and developer experience as your application grows. A poorly designed API can become a bottleneck that slows down your entire system.

## Key Principles

1. **Stateless Design**: Each request should contain all the information needed to process it. This makes horizontal scaling much easier.

2. **Proper Caching**: Implement caching at multiple levels — response caching, database query caching, and CDN caching for static assets.

3. **Rate Limiting**: Protect your API from abuse and ensure fair usage across all clients.

4. **Pagination**: Never return unbounded lists. Always implement cursor-based or offset pagination.

## Architecture Patterns

### Microservices Architecture
Breaking your API into smaller, focused services allows independent scaling and deployment. Each service can use the technology best suited for its specific requirements.

### Event-Driven Architecture
Using message queues and event streams can decouple your services and improve resilience. When one service is temporarily unavailable, events can be queued and processed later.

## Conclusion

Building scalable APIs requires careful planning and adherence to best practices. By following these principles, you can create APIs that grow with your business and delight your developers.`,
    cover_image: null,
    published_at: "2024-06-15T00:00:00Z",
    created_at: "2024-06-10T00:00:00Z",
    updated_at: "2024-06-15T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["Node.js", "API", "Backend"],
  },
  "future-of-react-server-components": {
    id: "2",
    title: "The Future of React: Server Components Explained",
    slug: "future-of-react-server-components",
    excerpt: "Deep dive into React Server Components and how they change the way we build modern web applications.",
    content: `# The Future of React: Server Components Explained

React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow components to render exclusively on the server, reducing the amount of JavaScript sent to the client.

## What Are Server Components?

Server Components are React components that run only on the server. They can access server-side resources directly, like databases or file systems, and they never ship their code to the client.

## Benefits

- **Zero Bundle Size**: Server component code never reaches the client, reducing JavaScript bundle size.
- **Direct Backend Access**: Query databases directly from your components without creating API endpoints.
- **Automatic Code Splitting**: Client components are automatically split and loaded on demand.
- **Improved Performance**: Less JavaScript to download, parse, and execute on the client.

## How They Work

Server Components render on the server and produce a special JSON format that React can stream to the client. The client then reconciles this output with its existing tree without needing the component's source code.

## Best Practices

1. Use Server Components for data fetching and backend logic
2. Use Client Components for interactivity and browser APIs
3. Keep Client Components as leaf nodes in your tree when possible

## Conclusion

Server Components are the future of React. By carefully choosing which components run on the server versus the client, you can build applications that are both highly interactive and incredibly performant.`,
    cover_image: null,
    published_at: "2024-06-10T00:00:00Z",
    created_at: "2024-06-05T00:00:00Z",
    updated_at: "2024-06-10T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["React", "Frontend", "Web"],
  },
  "cloud-native-architecture-best-practices": {
    id: "3",
    title: "Cloud-Native Architecture Best Practices",
    slug: "cloud-native-architecture-best-practices",
    excerpt: "Essential patterns and practices for building resilient, scalable cloud-native applications.",
    content: `# Cloud-Native Architecture Best Practices

Cloud-native architecture is more than just running your application on cloud infrastructure. It's about designing systems that leverage the full potential of cloud computing paradigms.

## Core Principles

### Containers and Orchestration
Containerization with Docker and orchestration with Kubernetes provide the foundation for cloud-native applications. They enable consistent environments and efficient resource utilization.

### Microservices
Breaking monolithic applications into smaller, independently deployable services allows teams to develop, deploy, and scale components separately.

### DevOps and CI/CD
Automated pipelines for building, testing, and deploying applications are essential for moving fast without breaking things.

## Resilience Patterns

- **Circuit Breakers**: Prevent cascading failures by failing fast when a service is down
- **Bulkheads**: Isolate failures to specific components
- **Retry with Exponential Backoff**: Handle transient failures gracefully
- **Health Checks**: Enable automatic recovery and traffic routing

## Observability

Cloud-native applications must be observable. Implement comprehensive logging, metrics, and tracing to understand system behavior and diagnose issues quickly.

## Conclusion

Adopting cloud-native architecture requires a shift in mindset, but the benefits in terms of scalability, resilience, and developer velocity are well worth the investment.`,
    cover_image: null,
    published_at: "2024-06-05T00:00:00Z",
    created_at: "2024-06-01T00:00:00Z",
    updated_at: "2024-06-05T00:00:00Z",
    status: "published",
    author: "Coreclave Team",
    tags: ["Cloud", "AWS", "DevOps"],
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .single();

  const displayPost = post || samplePosts[params.slug];

  if (!displayPost) {
    notFound();
  }

  return (
    <div className="pt-16">
      <article className="py-24 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="section-padding mx-auto max-w-4xl relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Cover Image */}
          {displayPost.cover_image && (
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-10">
              <img
                src={displayPost.cover_image}
                alt={displayPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(displayPost.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {displayPost.author}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {displayPost.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {displayPost.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <MarkdownRenderer content={displayPost.content} />
        </div>
      </article>
    </div>
  );
}
