"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const previewPhotos = [
  "img_2418.jpg",
  "img_2594.jpg",
  "img_6928.jpg",
  "170930_001-2.jpg",
  "img_7042.jpg",
  "img_2669.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif italic text-terracotta text-lg mb-3">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
            Gallery
          </h2>
          <div className="w-12 h-px bg-dusty-rose mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewPhotos.map((photo, i) => (
            <motion.div
              key={photo}
              className="relative aspect-[3/4] overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Image
                src={`/gallery/${photo}`}
                alt="Bridal beauty work by Beauty on Demand"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/gallery"
            className="font-sans text-xs tracking-widest uppercase text-terracotta border border-terracotta px-8 py-3.5 hover:bg-terracotta hover:text-warm-white transition-colors"
          >
            See Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
