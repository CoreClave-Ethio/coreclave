import { HeartPulse, CalendarCheck, Building2, LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface GalleryImage {
  src?: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  industry: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  heroImage?: string;
  thumbnailImage?: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  process: ProcessStep[];
  gallery: GalleryImage[];
  results: string[];
  testimonial?: Testimonial;
}

/**
 * Image slots (heroImage / thumbnailImage / gallery[].src) are intentionally left
 * undefined until real project screenshots are provided. Drop files into
 * public/images/projects/<slug>/ and set the matching path here — the
 * ImageSlot component will automatically render the real asset instead of
 * the placeholder frame.
 */
export const projects: Project[] = [
  {
    slug: "hospital-health-management-system",
    title: "Hospital Health Management System",
    tagline: "One digital platform replacing paper-based hospital workflows.",
    category: "Healthcare",
    client: "Healthcare Facility",
    industry: "Healthcare & Hospital Administration",
    icon: HeartPulse,
    description:
      "A comprehensive digital hospital management system that replaces paper-based workflows with a centralized platform — streamlining registration, records, pharmacy, lab, billing, and staff administration.",
    highlights: ["Patient Records", "Appointments", "Billing", "Pharmacy & Lab"],
    heroImage: "/images/projects/hospital-health-management-system/hero.jpg",
    thumbnailImage: "/images/projects/hospital-health-management-system/hero.jpg",
    challenge:
      "The hospital relied on manual, paper-based processes for patient registration, appointments, medical records, and billing. This created inefficiencies, delays at the front desk, and a higher risk of lost or inconsistent records across departments.",
    solution:
      "CoreClave designed and built a centralized Hospital Health Management System that digitizes the entire patient journey — from registration and appointments to electronic medical records, pharmacy, laboratory, billing, and staff administration — giving hospital staff one unified platform to work from instead of scattered paper files.",
    features: [
      "Patient registration and profile management",
      "Appointment scheduling across departments",
      "Electronic medical records (EMR)",
      "Pharmacy inventory and dispensing",
      "Laboratory test tracking and results",
      "Centralized billing and invoicing",
      "Staff and role management",
      "Hospital-wide administrative dashboard",
    ],
    techStack: [
      "Responsive Web Application",
      "Secure Patient Data Storage",
      "Role-Based Staff Access",
      "Centralized Records Database",
      "Billing & Reporting Modules",
    ],
    process: [
      { title: "Discovery & Requirements", description: "Mapped existing paper-based workflows across departments to understand where digitization would have the most impact." },
      { title: "UX/UI Design", description: "Designed clear, low-friction interfaces for front-desk staff, clinicians, and administrators with very different daily workflows." },
      { title: "Development & Integration", description: "Built the platform module by module — registration, records, pharmacy, lab, and billing — as one connected system." },
      { title: "Testing & QA", description: "Validated data accuracy and access controls across roles before rollout." },
      { title: "Deployment & Training", description: "Rolled out the system with hands-on staff training to ease the transition away from paper records." },
    ],
    gallery: [
      { src: "/images/projects/hospital-health-management-system/hero.jpg", alt: "Hospital Health Management System — login" },
      { src: "/images/projects/hospital-health-management-system/register.png", alt: "Hospital Health Management System — staff registration" },
    ],
    results: [
      "Replaced paper-based records with a single digital system across the facility",
      "Faster patient registration and appointment scheduling",
      "Unified billing that reduced reconciliation errors",
      "Better coordination between pharmacy, lab, and administration",
    ],
  },
  {
    slug: "k5-safari-booking-platform",
    title: "K5 Safari Booking Platform",
    tagline: "A modern booking platform built for the Japanese market.",
    category: "Travel & Bookings",
    client: "K5 Safari",
    industry: "Tour, Travel & Cultural Experiences",
    icon: CalendarCheck,
    description:
      "A modern tour and travel booking platform for the Japanese market, letting customers browse offerings, schedule appointments, and make reservations — with complete booking and customer management for the K5 Safari team.",
    highlights: ["Online Booking", "Reservations", "Customer Management", "Japanese Market"],
    heroImage: "/images/projects/k5-safari-booking-platform/hero.png",
    thumbnailImage: "/images/projects/k5-safari-booking-platform/hero.png",
    challenge:
      "K5 Safari needed a modern way for customers to discover and book experiences online, along with a reliable back office for staff to manage reservations and customer relationships — replacing manual, ad-hoc booking coordination.",
    solution:
      "CoreClave built a tailored booking platform for the Japanese market that lets customers browse packages, schedule appointments, and make reservations with ease, while giving K5 Safari's team complete visibility and control over bookings and customer management.",
    features: [
      "Browse travel packages and experiences",
      "Online appointment scheduling",
      "Reservation and booking management",
      "Customer profile and history tracking",
      "Admin dashboard for bookings and customers",
      "Localized experience for Japanese users",
    ],
    techStack: [
      "Responsive Booking Platform",
      "Real-Time Reservation Management",
      "Admin Dashboard",
      "Customer Relationship Tools",
      "Localized for the Japanese Market",
    ],
    process: [
      { title: "Discovery & Requirements", description: "Understood K5 Safari's booking flow, customer journey, and the day-to-day needs of the admin team." },
      { title: "UX/UI Design", description: "Designed an intuitive, modern booking experience tailored to Japanese users and K5 Safari's brand." },
      { title: "Development & Integration", description: "Built the customer-facing booking flow alongside a complete admin management system." },
      { title: "Testing & QA", description: "Tested the full reservation lifecycle to ensure bookings, changes, and customer records stayed in sync." },
      { title: "Deployment & Training", description: "Launched the platform and trained the team on managing bookings and customers day-to-day." },
    ],
    gallery: [
      { src: "/images/projects/k5-safari-booking-platform/gallery-5.png", alt: "K5 Safari booking platform — reservation inquiry form" },
      { src: "/images/projects/k5-safari-booking-platform/gallery-1.png", alt: "K5 Safari booking platform — experience details" },
      { src: "/images/projects/k5-safari-booking-platform/gallery-4.png", alt: "K5 Safari booking platform — how booking works" },
      { src: "/images/projects/k5-safari-booking-platform/gallery-2.png", alt: "K5 Safari booking platform — about the experience" },
      { src: "/images/projects/k5-safari-booking-platform/gallery-3.png", alt: "K5 Safari booking platform — session highlights" },
    ],
    results: [
      "Simplified how customers discover and book experiences online",
      "Reduced manual back-and-forth for booking coordination",
      "Gave administrators a clear view of bookings and customers",
      "A modern, intuitive experience tailored to the Japanese market",
    ],
    testimonial: {
      quote:
        "Partnering with CoreClave Software Solutions was an excellent experience. They quickly understood our business needs and developed a modern, intuitive tour and travel booking platform that exceeded our expectations. Their responsiveness, technical expertise, and commitment to delivering a polished product made the entire collaboration seamless. We confidently recommend CoreClave to any organization looking for a trusted software development partner.",
      name: "Yuta Kawano",
      role: "CEO",
      company: "K5 Safari",
    },
  },
  {
    slug: "kaimesh-erp-system",
    title: "Kaimesh ERP System",
    tagline: "An AI-powered work operating system unifying ERP, CRM, and collaboration.",
    category: "Enterprise Software",
    client: "Kaimesh",
    industry: "Enterprise Resource Planning & Work Operations",
    icon: Building2,
    description:
      "A complete AI-powered business operating system for Kaimesh — unifying core ERP functions with CRM, project management, team communication, virtual meetings, document management, and reporting in one connected platform.",
    highlights: ["ERP & CRM", "Project Management", "Team Chat & Meetings", "AI Assistant"],
    heroImage: "/images/projects/kaimesh-erp-system/01-ai-briefing.png",
    thumbnailImage: "/images/projects/kaimesh-erp-system/01-ai-briefing.png",
    challenge:
      "As Kaimesh scaled, teams were relying on separate, disconnected tools for finance, sales, projects, communication, and documents. This fragmented data across the business and slowed down cross-department collaboration and decision-making.",
    solution:
      "CoreClave built Kaimesh into a complete work operating system that unifies core ERP functions — finance & accounting, inventory, procurement, and HR — with a full CRM, project management, team messaging, virtual meetings, document management with e-signatures, and AI-powered reporting, all on one connected platform with an AI assistant woven throughout.",
    features: [
      "Finance & accounting management",
      "Inventory and procurement tracking",
      "Human resources management",
      "Full CRM with sales pipeline, contacts, and deals",
      "Project & task management with budgets and timelines",
      "Team messaging with channels, like Slack",
      "Virtual office with live presence and meeting rooms",
      "AI-generated meeting notes and transcripts",
      "Document management with e-signatures",
      "Marketing automation and campaign tools",
      "AI-powered daily briefings and cross-module reporting",
      "Centralized admin, security, and access control",
    ],
    techStack: [
      "Modular Work-OS Architecture",
      "Unified Cross-Module Data Model",
      "Built-In AI Assistant & Automation",
      "Role-Based Access & Governance",
      "Real-Time Collaboration Tools",
      "AI-Powered Reporting & Analytics",
    ],
    process: [
      { title: "Discovery & Requirements", description: "Mapped Kaimesh's finance, sales, project, and communication workflows to scope a single unified platform." },
      { title: "UX/UI Design", description: "Designed a consistent interface across every hub — from CRM to chat to documents — so switching modules feels seamless." },
      { title: "Development & Integration", description: "Built each hub — ERP, CRM, Projects, Marketing, Chat, Meetings, Documents, Reporting — on one shared data model." },
      { title: "AI Integration", description: "Wove an AI assistant throughout the platform for daily briefings, meeting summaries, lead scoring, and cross-module reports." },
      { title: "Testing & QA", description: "Validated data flow between modules and access controls before rollout." },
      { title: "Deployment & Training", description: "Rolled out the platform and trained teams across departments on their respective hubs." },
    ],
    gallery: [
      { src: "/images/projects/kaimesh-erp-system/02-team-chat.png", alt: "Kaimesh — team chat channels" },
      { src: "/images/projects/kaimesh-erp-system/03-virtual-office.png", alt: "Kaimesh — virtual office and meeting rooms" },
      { src: "/images/projects/kaimesh-erp-system/04-task-board.png", alt: "Kaimesh — task management board" },
      { src: "/images/projects/kaimesh-erp-system/05-drive.png", alt: "Kaimesh — document drive" },
      { src: "/images/projects/kaimesh-erp-system/06-meeting-notes.png", alt: "Kaimesh — AI meeting notes and transcripts" },
      { src: "/images/projects/kaimesh-erp-system/07-sales-hub-crm.png", alt: "Kaimesh — Sales Hub CRM dashboard" },
      { src: "/images/projects/kaimesh-erp-system/08-projects-hub.png", alt: "Kaimesh — Projects Hub dashboard" },
      { src: "/images/projects/kaimesh-erp-system/09-marketing-hub.png", alt: "Kaimesh — Marketing Hub" },
      { src: "/images/projects/kaimesh-erp-system/10-documents-esign.png", alt: "Kaimesh — documents and e-signatures" },
      { src: "/images/projects/kaimesh-erp-system/11-command-center.png", alt: "Kaimesh — AI-powered reporting Command Center" },
      { src: "/images/projects/kaimesh-erp-system/12-platform-console.png", alt: "Kaimesh — admin and security console" },
    ],
    results: [
      "Unified ERP, CRM, projects, and communication into one connected platform",
      "Reduced reliance on disconnected spreadsheets and point tools",
      "Gave every department a live view of the business through AI-powered reporting",
      "Cut down on manual coordination with built-in chat, meetings, and automation",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
