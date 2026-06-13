import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Elizabeth Nerbun — licensed cosmetologist, certified instructor, and the artist behind Beauty on Demand. On-location bridal beauty in Rockwall, TX.",
};

const cities = [
  "Rockwall",
  "Heath",
  "Fate",
  "Royse City",
  "Rowlett",
  "Wylie",
  "Sachse",
  "Forney",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          The Artist
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          About
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto" />
      </section>

      {/* Bio */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/about-elizabeth.jpeg"
              alt="Elizabeth Nerbun, bridal hair and makeup artist"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-serif italic text-terracotta text-xl mb-3">
                Elizabeth Nerbun
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
                Beauty Brought to You
              </h2>
              <div className="w-8 h-px bg-dusty-rose mb-6" />
            </div>

            <p className="font-sans text-charcoal/70 leading-relaxed">
              Elizabeth has been in love with the beauty industry for as long as
              she can remember. A licensed cosmetologist since 2002 and a
              certified instructor since 2013, she founded Beauty on Demand in
              2016 with a simple mission: bring the salon experience directly to
              the bride.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              Now based in Rockwall, TX, Elizabeth serves brides and wedding
              parties throughout the DFW area — coming to your home, hotel,
              venue, or church so you can spend your wedding morning surrounded
              by the people you love most, not stuck in a salon chair.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              Her greatest joy comes from helping each bride step into her
              wedding day feeling completely herself — just the most beautiful,
              confident version. Whether your vision is romantic and soft, sleek
              and editorial, or effortlessly boho, Elizabeth works with you to
              make it real.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mt-2">
              {[
                "Licensed Cosmetologist since 2002",
                "Certified Instructor since 2013",
                "Founded Beauty on Demand in 2016",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-sage text-lg">✦</span>
                  <span className="font-sans text-sm text-charcoal/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-terracotta text-xl mb-4">
            Where We Go
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
            Service Area
          </h2>
          <div className="w-12 h-px bg-dusty-rose mx-auto mb-8" />
          <p className="font-sans text-charcoal/60 mb-10 leading-relaxed">
            Beauty on Demand serves the Rockwall, TX metro area and surrounding
            communities — east, north, and south of Rockwall. All services are
            on-location at your getting-ready venue.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="font-sans text-sm text-charcoal border border-dusty-rose/40 px-4 py-2"
              >
                {city}, TX
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-charcoal/40 mt-6 italic">
            Not on the list? Reach out — we may still be able to accommodate
            your date and location.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-cream text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="font-sans text-charcoal/60 mb-8 max-w-sm mx-auto">
          Ready to start planning your wedding day beauty? Get in touch to check
          availability.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
