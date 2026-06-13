"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <Image
        src="/gallery/img_1995.jpg"
        alt="Bridal hair and makeup by Beauty on Demand"
        fill
        className="object-cover object-center"
        priority
        quality={65}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          className="font-serif italic text-dusty-rose text-xl md:text-2xl mb-5 tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Wedding Hair &amp; Makeup · Rockwall, TX
        </motion.p>

        <h1 className="font-serif font-light text-warm-white text-5xl md:text-7xl lg:text-8xl mb-6">
          Beauty on Demand
        </h1>

        <motion.p
          className="font-sans font-light text-warm-white/80 text-base md:text-lg mb-10 tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          On-location bridal beauty for Rockwall, TX &amp; the surrounding DFW area
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        >
          <Link
            href="/gallery"
            className="border border-warm-white/80 text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-warm-white hover:text-charcoal transition-colors"
          >
            View Gallery
          </Link>
          <Link
            href="/contact"
            className="bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors"
          >
            Book Your Date
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-px h-12 bg-warm-white/40 mx-auto" />
      </motion.div>
    </section>
  );
}
