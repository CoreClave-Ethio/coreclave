import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { BlogSection } from "@/components/blog-section";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
