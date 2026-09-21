import type { Metadata } from "next";
import FAQAccordion from "@/components/services/FAQAccordion";
import { serializeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Wedding Hair & Makeup Services & Pricing | Rockwall, TX",
  description:
    "Bridal hair & makeup starting at $175, bridesmaids from $125/person. On-location service in Rockwall & DFW — we come to your venue. View pricing & book your date.",
};

const pricing = [
  { label: "Bridal trial", hair: "$175", makeup: "$175" },
  { label: "Day-of — bride", hair: "$175", makeup: "$175" },
  { label: "Bridesmaid / wedding party", hair: "$125", makeup: "$125" },
  { label: "Flower girls (7 & under)", hair: "$65", makeup: "$25" },
  { label: "Extensions (attaching bride-owned clip-ins)", hair: "$50", makeup: "—" },
];

const travelFees = [
  { range: "1–30 miles", fee: "$45" },
  { range: "31–50 miles", fee: "$65" },
  { range: "51–70 miles", fee: "$85" },
  { range: "71–90 miles", fee: "$105" },
];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do you travel for weddings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Rockwall, TX and the DFW metro area, coming on-location to your home, hotel, venue, or church. Not sure if you're in our area? Reach out and ask!",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking as early as possible — popular wedding dates can fill up 12–18 months in advance. Once your date is set, don't wait. A deposit holds your date.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a minimum number of people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no strict minimum, but pricing is structured per service. We're happy to accommodate intimate weddings with just the bride, or larger wedding parties.",
      },
    },
    {
      "@type": "Question",
      name: "Is a trial session required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trials are strongly recommended but not required. A trial gives you the chance to test your look, make adjustments, and arrive on your wedding day knowing exactly what to expect.",
      },
    },
    {
      "@type": "Question",
      name: "What is your deposit and cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A deposit is required to hold your date. Please contact us for current deposit amounts and cancellation terms — these vary depending on the size of your booking.",
      },
    },
    {
      "@type": "Question",
      name: "How long does bridal hair and makeup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing varies by look and party size. A bride alone typically needs 2–3 hours for both hair and makeup. We'll work with you ahead of time to create a detailed timeline for your wedding morning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do both hair AND makeup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Elizabeth provides both hair and makeup services, meaning you only need to coordinate with one artist for your entire bridal look.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring or prepare for my appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Come with clean, dry hair unless instructed otherwise. Bring inspiration photos, any accessories you plan to wear (veil, headpiece), and have a button-down or zip-up top so you don't disturb your hair and makeup when getting dressed.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      {/* Pricing */}
      <section className="pt-40 pb-20 px-6 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Wedding Day
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
              Pricing
            </h1>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
            <p className="font-sans text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              On-location service, priced per person. Elizabeth provides makeup
              herself for smaller bookings; for full bridal-party glam she
              partners with{" "}
              <a
                href="https://makeupandhairbyandreina.com/"
                target="_blank"
                rel="noopener"
                className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors"
              >
                Makeup &amp; Hair by Andreina
              </a>
              , a fellow on-location artist based in Rockwall, so larger parties
              are finished on time.
            </p>
          </div>

          <div className="bg-cream">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 sm:gap-x-10 px-6 py-4 border-b border-dusty-rose/40">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal/40">
                Service
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal/40 text-right w-12">
                Hair
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal/40 text-right w-12">
                Makeup
              </span>
            </div>
            {pricing.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] gap-x-6 sm:gap-x-10 px-6 py-4 border-b border-dusty-rose/20 last:border-b-0 items-center"
              >
                <span className="font-sans text-sm text-charcoal/80">
                  {row.label}
                </span>
                <span className="font-sans text-sm text-terracotta text-right w-12">
                  {row.hair}
                </span>
                <span className="font-sans text-sm text-terracotta text-right w-12">
                  {row.makeup}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel fees */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Coming to You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Travel Fees
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
            <p className="font-sans text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              Elizabeth comes to you — your venue, home, or getting-ready
              suite. Travel is a flat fee calculated by distance from Rockwall,
              TX, starting at $45 for the first 30 miles.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {travelFees.map((tier) => (
              <div
                key={tier.range}
                className="bg-warm-white px-4 py-6 text-center flex flex-col gap-2"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-charcoal/50">
                  {tier.range}
                </span>
                <span className="font-serif text-3xl text-terracotta">
                  {tier.fee}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Beyond the Wedding Day
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Other Services
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
            <p className="font-sans text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              Life has no shortage of moments worth looking your absolute best.
              Elizabeth is available for a wide range of special occasions —
              inquire for custom pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Quinceañeras", icon: "✦" },
              { label: "Boudoir Shoots", icon: "✦" },
              { label: "Prom", icon: "✦" },
              { label: "Homecoming", icon: "✦" },
              { label: "Formal Events", icon: "✦" },
              { label: "Photo Shoots", icon: "✦" },
              { label: "Girls' Night Out", icon: "✦" },
              { label: "Any Special Occasion", icon: "✦" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-cream px-4 py-5 text-center flex flex-col items-center gap-2"
              >
                <span className="text-sage text-sm">{item.icon}</span>
                <span className="font-sans text-sm text-charcoal/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center font-sans text-sm text-charcoal/50 italic">
            Pricing varies by service and group size —{" "}
            <a
              href="/contact"
              className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors not-italic"
            >
              reach out for a custom quote
            </a>
            .
          </p>
        </div>
      </section>

      {/* Booking policy */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Before You Book
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Booking Policy
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto" />
          </div>
          <div className="max-w-xl mx-auto text-center flex flex-col gap-3">
            <h3 className="font-serif text-2xl text-charcoal">
              Booking Deposit
            </h3>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              A non-refundable $100 deposit secures your wedding date and is
              applied toward your day-of services. Payment accepted via Venmo
              or Zelle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              FAQ
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto" />
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
          Ready to Book?
        </h2>
        <p className="font-sans text-charcoal/60 mb-8 max-w-md mx-auto">
          Reach out to check availability for your date and get a custom quote
          for your wedding party.
        </p>
        <a
          href="/contact"
          className="inline-block bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
