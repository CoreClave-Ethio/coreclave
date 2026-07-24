import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
  ],
  Solutions: [
    { label: "Startups", href: "/solutions" },
    { label: "Enterprises", href: "/solutions" },
    { label: "SaaS Products", href: "/solutions" },
    { label: "AI & Automation", href: "/solutions" },
  ],
};

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-core-blue bg-core-dark">
      <div className="section-padding mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo size={36} />
            </Link>
            <p className="text-white/50 text-sm max-w-sm mb-6">
              Building core solutions that drive real impact for startups and enterprises.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Let&apos;s Connect</h3>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-core-accent" />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-core-accent" />
                info@coreclave.com
              </li>
            </ul>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-core-blue flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-core-blue flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; 2026 CoreClave Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
