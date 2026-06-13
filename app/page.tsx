import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Beauty on Demand",
  description:
    "On-location wedding hair and makeup serving Rockwall, TX and the surrounding DFW area. Bridal hair, bridesmaid beauty, trial sessions, and engagement shoot styling.",
  url: "https://beautyondemandtx.com",
  email: "elizabethnerbun@gmail.com",
  image: "https://beautyondemandtx.com/logo.jpg",
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
    { "@type": "City", name: "Rockwall", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Heath", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Fate", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Royse City", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Rowlett", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Wylie", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sachse", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Forney", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bridal Beauty Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Hair & Makeup", description: "On-location wedding day hair and makeup for the bride" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridesmaid & Wedding Party Hair and Makeup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Trial Session" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Shoot Hair & Makeup" } },
    ],
  },
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/elizabethnerbun",
  ],
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
