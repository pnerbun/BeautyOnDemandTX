"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <Image
        src="/gallery/170930_004.jpg"
        alt="Bridal beauty"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/65" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif italic text-dusty-rose text-xl mb-4">
            Ready to Begin?
          </p>
          <h2 className="font-serif font-light text-warm-white text-4xl md:text-5xl mb-6">
            Let&apos;s Create Your
            <br />
            Dream Wedding Look
          </h2>
          <p className="font-sans text-warm-white/70 text-base mb-10 leading-relaxed">
            Serving Rockwall, Heath, Fate, Royse City, Rowlett, Wylie, Sachse,
            Forney, and the surrounding DFW area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors"
            >
              Book Your Date
            </Link>
            <Link
              href="/services"
              className="border border-warm-white/60 text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-warm-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
