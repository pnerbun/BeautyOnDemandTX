import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
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
    title: "Beauty on Demand | Bridal Hair & Makeup in Rockwall, TX",
    description:
      "On-location bridal hair and makeup serving Rockwall, TX and the DFW metro area.",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
