"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[40px] bg-primary h-[72px] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
      {/* Left: Logo + Desktop Nav */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src={withBasePath("/images/shared/logo.png")}
            alt={siteConfig.businessName}
            width={200}
            height={64}
            className="h-16 w-auto object-contain"
            preload
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "uppercase text-[12px] font-bold tracking-[0.15em] font-body transition-colors duration-200",
                pathname === item.href
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Phone + Request Service + Mobile Toggle */}
      <div className="flex items-center gap-6">
        <a
          href={siteConfig.phoneHref}
          className="hidden md:block uppercase text-[16px] font-bold tracking-[0.1em] font-headline text-white"
        >
          {siteConfig.phone}
        </a>

        <Link
          href="/contact"
          className="hidden sm:block bg-secondary text-white px-7 py-3 uppercase text-[14px] font-bold tracking-[0.1em] font-headline hover:opacity-90 transition-all"
        >
          Request Service
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] bg-primary z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "uppercase text-[16px] font-bold tracking-[0.15em] font-body transition-colors duration-200",
                pathname === item.href
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-white uppercase text-[14px] font-bold tracking-[0.15em] font-body mt-4"
          >
            <Phone size={18} />
            {siteConfig.phone}
          </a>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-secondary text-white px-8 py-3 uppercase text-[14px] font-bold tracking-[0.15em] font-body hover:opacity-90 transition-all mt-2"
          >
            Request Service
          </Link>
        </div>
      )}
    </nav>
  );
}
