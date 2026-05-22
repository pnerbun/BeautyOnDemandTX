"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-warm-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Beauty on Demand — Home"
        >
          <Image
            src={transparent ? "/logo-transparent.png" : "/logo.jpg"}
            alt="Beauty on Demand"
            width={632}
            height={336}
            priority
            sizes="105px"
            className={`h-14 w-auto transition-all duration-300 ${
              transparent
                ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                : ""
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors hover:text-terracotta ${
                transparent ? "text-warm-white/90" : "text-charcoal"
              } ${pathname === href ? "text-terracotta" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-terracotta-dark transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            transparent ? "text-warm-white" : "text-charcoal"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform" />
          <span
            className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span className="block w-6 h-0.5 bg-current transition-transform" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white border-t border-dusty-rose/30">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm tracking-widest uppercase py-3 border-b border-cream transition-colors hover:text-terracotta ${
                  pathname === href ? "text-terracotta" : "text-charcoal"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-5 py-3 text-center hover:bg-terracotta-dark transition-colors"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
