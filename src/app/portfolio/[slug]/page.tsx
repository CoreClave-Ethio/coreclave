import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Quote } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ImageSlot } from "@/components/image-slot";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} - CoreClave Case Study`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="section-padding mx-auto max-w-7xl relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-semibold text-core-accent uppercase tracking-wide">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 max-w-3xl">
                {project.title}
              </h1>
              <p className="text-white/60 text-lg mt-4 max-w-2xl">{project.tagline}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10 flex-shrink-0">
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Client</div>
                <div className="text-sm font-semibold text-white">{project.client}</div>
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Industry</div>
                <div className="text-sm font-semibold text-white">{project.industry}</div>
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Services</div>
                <div className="text-sm font-semibold text-white">Custom Software</div>
              </div>
            </div>
          </div>

          <ImageSlot
            src={project.heroImage}
            alt={`${project.title} hero banner`}
            icon={<project.icon className="w-6 h-6 text-core-accent/70" strokeWidth={1.5} />}
            chrome
            className="aspect-[16/8]"
          />
        </div>
      </section>

      {/* Overview / Challenge / Solution */}
      <section className="py-20 border-t border-core-blue">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-white/60 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-white/60 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-core-navy border border-core-blue"
                >
                  <CheckCircle2 className="w-5 h-5 text-core-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Technology & Architecture</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-white/70 bg-white/5 border border-core-blue rounded-full px-4 py-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Development Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {project.process.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="w-9 h-9 rounded-lg bg-core-accent/10 border border-core-accent/20 flex items-center justify-center mb-4 text-sm font-bold text-core-accent">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Screenshots</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image) => (
                <ImageSlot
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  icon={<project.icon className="w-6 h-6 text-core-accent/70" strokeWidth={1.5} />}
                  className="aspect-[4/3]"
                />
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Results & Business Impact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result) => (
                <div key={result} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-core-accent/10 border border-core-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-core-accent" />
                  </div>
                  <span className="text-white/70 leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-20 p-8 sm:p-12 rounded-2xl bg-core-navy border border-core-blue relative">
              <Quote className="w-10 h-10 text-core-accent/20 mb-4" strokeWidth={1.5} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-core-accent text-core-accent" />
                ))}
              </div>
              <blockquote className="text-lg text-white/70 leading-relaxed mb-6 max-w-3xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-sm font-semibold text-white">{project.testimonial.name}</div>
              <div className="text-xs text-white/50">
                {project.testimonial.role} · {project.testimonial.company}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="relative rounded-2xl border border-core-blue bg-gradient-to-r from-core-accent/20 via-core-navy to-core-cyan/10 p-10 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="absolute -right-10 -top-10 w-56 h-56 bg-core-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Have a similar project in mind?
              </h2>
              <p className="text-white/60 max-w-lg">
                Let&apos;s talk about how we can build something just as impactful for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-core-accent hover:bg-core-accentDark px-6 py-3.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
