import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Beauty on Demand — Home"
          >
            <Image
              src="/logo-dark.png"
              alt="Beauty on Demand"
              width={632}
              height={336}
              className="h-12 w-auto"
            />
          </Link>
          <p className="font-sans text-sm leading-relaxed text-warm-white/60">
            On-location bridal hair &amp; makeup serving Rockwall, TX and the
            DFW metro area.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-warm-white text-lg mb-5">Explore</h3>
          <nav className="flex flex-col gap-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm text-warm-white/60 hover:text-dusty-rose transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Areas we serve */}
        <div>
          <h3 className="font-serif text-warm-white text-lg mb-2">
            Areas We Serve
          </h3>
          <p className="font-sans text-xs text-warm-white/70 mb-2 leading-relaxed">
            Rockwall, TX and the DFW metro area
          </p>
          <p className="font-sans text-xs text-warm-white/50 mb-4 leading-relaxed">
            Including popular venues in these areas:
          </p>
          <nav className="flex flex-col gap-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="font-sans text-sm text-warm-white/60 hover:text-dusty-rose transition-colors"
              >
                {city.name}, TX
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-warm-white text-lg mb-5">Get in Touch</h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:elizabethnerbun@gmail.com"
              className="font-sans text-sm text-warm-white/60 hover:text-dusty-rose transition-colors inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 shrink-0"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              elizabethnerbun@gmail.com
            </a>
            <a
              href="https://www.instagram.com/elizabethnerbun?igsh=OHNkY3dvOWJzcDh5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-warm-white/60 hover:text-dusty-rose transition-colors inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 shrink-0"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @elizabethnerbun
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-warm-white/60">
            &copy; {new Date().getFullYear()} Beauty on Demand. All rights reserved.
            {" · "}
            <Link
              href="/privacy"
              className="text-warm-white/60 hover:text-dusty-rose transition-colors underline"
            >
              Privacy Policy
            </Link>
          </p>
          <Link
            href="/contact"
            className="font-sans text-xs text-dusty-rose hover:text-warm-white/80 transition-colors tracking-widest uppercase"
          >
            Book Your Date →
          </Link>
        </div>
      </div>
    </footer>
  );
}
