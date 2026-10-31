export interface Product {
  title: string;
  category: string;
  client: string;
  description: string;
  stack: string[];
  logo: string;
  /** Tailwind gradient classes for the brand tile backdrop */
  tile: string;
  /** Show the artwork edge-to-edge instead of as a contained logo */
  cover?: boolean;
}

/** Additional products built by CoreClave, shown as brand tiles on the portfolio page. */
export const products: Product[] = [
  {
    title: "Barber Booking & AI Receptionist",
    category: "AI Barber Shop",
    client: "AI Barber Shop",
    description:
      "A barber shop platform for guest appointments, AI-assisted reception, hairstyle advice, and staff and owner dashboards.",
    stack: ["Next.js", "Supabase", "AI"],
    logo: "/images/products/barber-preview.svg",
    tile: "from-slate-800 to-teal-900",
    cover: true,
  },
  {
    title: "Elecnovatech Enterprise AI Operating System",
    category: "Manufacturing Operations",
    client: "Elecnovatech",
    description:
      "An operations platform for block and recycling factories, bringing production, inventory, sales, finance, HR, and reporting together.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    logo: "/images/products/hybrid-mark.png",
    tile: "from-slate-900 to-slate-700",
  },
  {
    title: "Elec CRM Platform",
    category: "Business CRM & Delivery",
    client: "Elecnovatech",
    description:
      "A CRM and delivery platform for managing customer accounts, sales pipelines, project requirements, approvals, and customer-facing updates.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    logo: "/images/products/elec-crm-logo.jpg",
    tile: "from-red-50 to-gray-100",
  },
  {
    title: "Elec CRM Mobile App",
    category: "Mobile Application",
    client: "Elecnovatech",
    description:
      "A companion mobile client for the Elec CRM, with secure sign-in and session-ready records that remain accessible when the network drops.",
    stack: ["Expo", "React Native", "TypeScript"],
    logo: "/images/products/elec-crm-mobile-logo.jpg",
    tile: "from-red-50 to-red-100",
  },
  {
    title: "EthioStar Coffee Processing System",
    category: "Coffee Industry",
    client: "EthioStar",
    description:
      "A coffee processing management system built to support EthioStar's operational workflows.",
    stack: ["Next.js", "Drizzle", "TypeScript"],
    logo: "/images/products/ethiostar-logo.png",
    tile: "from-amber-50 to-emerald-50",
  },
  {
    title: "Semay Real Estate",
    category: "Real Estate Website & CRM",
    client: "Semay Real Estate",
    description:
      "A public property website and internal CRM with listings, lead management, visitor tracking, analytics, and an AI concierge.",
    stack: ["Next.js", "PostgreSQL", "AI"],
    logo: "/images/products/semay-logo.svg",
    tile: "from-sky-50 to-orange-50",
  },
];
