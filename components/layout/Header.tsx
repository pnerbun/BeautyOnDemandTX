"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
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
          <a
            href="https://www.instagram.com/elizabethnerbun?igsh=OHNkY3dvOWJzcDh5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex items-center gap-1.5 transition-colors hover:text-terracotta ${transparent ? "text-warm-white/90" : "text-charcoal"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-sans text-xs tracking-wide">@elizabethnerbun</span>
          </a>
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
