"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/contacts", label: "Contacts", icon: MessageSquare },
  { href: "/admin/blog", label: "Blog Posts", icon: FileText },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if we're on the login page — if so, just render children without sidebar
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Skip auth check on login page itself
    if (isLoginPage) {
      setIsLoading(false);
      return;
    }

    const checkAuth = async () => {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, isLoginPage]);

  // Listen for auth state changes (login/logout across tabs)
  useEffect(() => {
    if (isLoginPage) return;

    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        setIsAuthenticated(false);
        router.replace("/admin/login");
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        setIsAuthenticated(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [router, isLoginPage]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  // Login page: render children without any sidebar/layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading state for authenticated pages
  if (isLoading) {
    return (
      <div className="min-h-screen bg-core-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not authenticated and not on login page: show spinner while redirecting
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-core-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-core-dark flex">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-core-navy border-r border-white/5 flex flex-col transition-transform lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/">
            <Logo size={32} />
          </Link>
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-core-accent/10 text-core-accent border border-core-accent/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-core-dark/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 lg:px-8">
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-white hidden lg:block">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-core-accent/20 border border-core-accent/30 flex items-center justify-center">
              <span className="text-xs font-bold text-core-accent">A</span>
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
