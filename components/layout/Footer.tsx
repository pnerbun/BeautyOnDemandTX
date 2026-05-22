import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
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
            surrounding DFW area.
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

        {/* Contact */}
        <div>
          <h3 className="font-serif text-warm-white text-lg mb-5">Get in Touch</h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:elizabethnerbun@gmail.com"
              className="font-sans text-sm text-warm-white/60 hover:text-dusty-rose transition-colors"
            >
              elizabethnerbun@gmail.com
            </a>
            <p className="font-sans text-sm text-warm-white/70 italic">
              Instagram coming soon
            </p>
            <div className="mt-3">
              <p className="font-sans text-xs text-warm-white/70 leading-relaxed">
                Serving Rockwall, Heath, Fate, Royse City,
                <br />
                Rowlett, Wylie, Sachse &amp; Forney, TX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-warm-white/60">
            &copy; {new Date().getFullYear()} Beauty on Demand. All rights reserved.
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
