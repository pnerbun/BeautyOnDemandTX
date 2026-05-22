import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Beauty on Demand",
  description:
    "On-location bridal hair and makeup serving Rockwall, TX and the surrounding DFW area.",
  url: "https://beautyondemandtx.com",
  email: "elizabethnerbun@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rockwall",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9307,
    longitude: -96.4597,
  },
  areaServed: [
    "Rockwall, TX",
    "Heath, TX",
    "Fate, TX",
    "Royse City, TX",
    "Rowlett, TX",
    "Wylie, TX",
    "Sachse, TX",
    "Forney, TX",
  ],
  serviceType: "Bridal Hair and Makeup",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
