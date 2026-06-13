import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of bridal hair and makeup work. On-location wedding beauty serving Rockwall, TX and the DFW area.",
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const images = fs
    .readdirSync(galleryDir)
    .filter((f) => /\.(jpg|jpeg|JPG|JPEG)$/i.test(f))
    .sort();

  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          Our Portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Gallery
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-charcoal/60 text-base max-w-lg mx-auto">
          A glimpse into our bridal work — every look crafted with care,
          delivered on-location.
        </p>
      </section>

      {/* Gallery grid */}
      <section className="py-10 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <GalleryClient images={images} />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-lg mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl text-charcoal mb-4">
          Follow Along
        </h2>
        <p className="font-sans text-charcoal/60 text-sm max-w-sm mx-auto mb-6">
          Follow us on Instagram for the latest looks, behind-the-scenes moments,
          and wedding day inspiration.
        </p>
        <a
          href="https://www.instagram.com/elizabethnerbun?igsh=OHNkY3dvOWJzcDh5&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-sm font-medium text-terracotta border border-terracotta px-6 py-2.5 rounded hover:bg-terracotta hover:text-warm-white transition-colors"
        >
          @elizabethnerbun on Instagram
        </a>
      </section>
    </>
  );
}
