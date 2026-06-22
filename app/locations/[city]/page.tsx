import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { getCity, citySlugs } from "@/lib/locations";

interface Props {
  params: Promise<{ city: string }>;
}

const services = [
  { title: "Bridal Hair & Makeup", price: "Starting at $150" },
  { title: "Bridesmaid & Wedding Party", price: "Starting at $110/person" },
  { title: "Trial Sessions", price: "Starting at $150" },
  { title: "Engagement Shoots", price: "Starting at $150" },
];

export async function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/locations/${data.slug}` },
    openGraph: {
      title: `${data.metaTitle} | Beauty on Demand`,
      description: data.metaDescription,
      type: "website",
      url: `https://beautyondemandtx.com/locations/${data.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  const baseUrl = "https://beautyondemandtx.com";
  const pageUrl = `${baseUrl}/locations/${data.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "On-location wedding hair and makeup",
    name: `Wedding Hair & Makeup in ${data.name}, TX`,
    url: pageUrl,
    provider: {
      "@type": "BeautySalon",
      name: "Beauty on Demand",
      url: baseUrl,
      image: `${baseUrl}/logo.jpg`,
      sameAs: ["https://www.instagram.com/elizabethnerbun"],
    },
    areaServed: {
      "@type": "City",
      name: data.name,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: `${data.name}, TX`,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          {data.heroKicker}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-5 max-w-3xl mx-auto">
          Wedding Hair &amp; Makeup in {data.name}, TX
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto" />
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {data.intro.map((para, i) => (
            <p
              key={i}
              className="font-sans text-charcoal/70 leading-relaxed text-lg"
            >
              {para}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors text-center"
            >
              Book Your Date
            </Link>
            <Link
              href="/gallery"
              className="border border-terracotta text-terracotta font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta hover:text-warm-white transition-colors text-center"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Local venues */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Where We Go
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              {data.name} Wedding Venues
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-8" />
            <p className="font-sans text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
              {data.venuesIntro}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {data.venues.map((venue) => (
              <div
                key={venue.name}
                className="bg-cream border-l-2 border-dusty-rose/50 px-6 py-5"
              >
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  {venue.name}
                </h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  {venue.blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-charcoal/50 mt-8 leading-relaxed text-center italic">
            {data.travelNote}
          </p>
        </div>
      </section>

      {/* Services recap */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Beauty Services in {data.name}
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-warm-white px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-serif text-xl text-charcoal">
                  {service.title}
                </span>
                <span className="font-sans text-xs text-terracotta border border-terracotta/40 px-3 py-1 shrink-0">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              href="/services"
              className="font-sans text-xs tracking-widest uppercase text-terracotta border border-terracotta px-8 py-3.5 hover:bg-terracotta hover:text-warm-white transition-colors inline-block"
            >
              See All Services &amp; Pricing
            </Link>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GalleryPreview />

      {/* Nearby towns */}
      <section className="py-16 px-6 bg-warm-white text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
          Also Serving Near {data.name}
        </h2>
        <div className="w-8 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-sm text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          Beauty on Demand is based in Rockwall, TX and serves brides throughout
          the DFW metro area and East Texas — including {data.nearbyTowns.join(", ")}, and beyond.{" "}
          <Link
            href="/contact"
            className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors"
          >
            Ask about your venue
          </Link>
          .
        </p>
      </section>

      <ContactCTA />
    </>
  );
}
