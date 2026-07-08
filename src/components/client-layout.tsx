"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      {isAdmin ? (
        <div>{children}</div>
      ) : (
        <main className="flex-1">{children}</main>
      )}
      {!isAdmin && <Footer />}
    </>
  );
}

