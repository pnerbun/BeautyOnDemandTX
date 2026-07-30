import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <Image
        src="/gallery/wedding-04-bridesmaids-01.jpg"
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
        <p className="anim-fade-up font-serif italic text-dusty-rose text-xl md:text-2xl mb-5 tracking-wide">
          Wedding Hair &amp; Makeup · Rockwall, TX
        </p>

        <h1 className="font-serif font-light text-warm-white text-5xl md:text-7xl lg:text-8xl mb-6">
          Beauty on Demand
        </h1>

        <p className="anim-fade-up [animation-delay:0.3s] font-sans text-warm-white/80 text-base md:text-lg mb-10 tracking-wide">
          On-location bridal beauty for Rockwall, TX &amp; the surrounding DFW area
        </p>

        <div className="anim-fade-up [animation-delay:0.45s] flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-fade-in [animation-delay:1.2s] absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-warm-white/40 mx-auto" />
      </div>
    </section>
  );
}
