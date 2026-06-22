import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Beauty on Demand",
  description:
    "On-location wedding hair and makeup serving Rockwall, TX and the DFW metro area. Bridal hair, bridesmaid beauty, trial sessions, and engagement shoot styling.",
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
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Dallas–Fort Worth Metroplex",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
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
