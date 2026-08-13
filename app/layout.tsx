import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { serializeJsonLd } from "@/lib/json-ld";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  // Lato ships as separate static files per weight, so each one added here is
  // another render-blocking download. 400 and 700 are both used; 300 was not.
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves every relative canonical / OG url below to an absolute one.
  // Deliberately no `alternates.canonical` here: child pages inherit it, which
  // would point every page at the homepage. Each page sets its own.
  metadataBase: new URL("https://beautyondemandtx.com"),
  title: {
    default: "Wedding Hair & Makeup Rockwall TX | Beauty on Demand",
    template: "%s | Beauty on Demand",
  },
  description:
    "On-location wedding hair and makeup serving Rockwall, TX and the DFW metro area. Book your bridal beauty today.",
  keywords: [
    "bridal hair and makeup DFW",
    "wedding makeup artist DFW",
    "on-location bridal beauty DFW",
    "wedding hair Dallas Fort Worth",
    "bridal makeup Fort Worth TX",
    "mobile hair and makeup wedding Dallas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Beauty on Demand",
    url: "/",
    title: "Beauty on Demand | Bridal Hair & Makeup in Rockwall, TX",
    description:
      "On-location bridal hair and makeup serving Rockwall, TX and the DFW metro area.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bride and bridesmaids with hair and makeup by Beauty on Demand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty on Demand | Bridal Hair & Makeup in Rockwall, TX",
    description:
      "On-location bridal hair and makeup serving Rockwall, TX and the DFW metro area.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "L4NPcgyh2CfeOVDsNJJ66NIusSuO-zdVvohYOS6B5o4",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Beauty on Demand",
  description:
    "On-location wedding hair and makeup serving Rockwall, TX and the DFW metro area. Bridal hair, bridesmaid beauty, trial sessions, and engagement shoot styling.",
  url: "https://beautyondemandtx.com",
  email: "elizabethnerbun@gmail.com",
  telephone: "+1-262-366-4414",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
