import type { Metadata } from "next";
import FAQAccordion from "@/components/services/FAQAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bridal hair and makeup services in Rockwall, TX — including bridal packages, bridesmaid services, trial sessions, and engagement shoot beauty.",
};

const services = [
  {
    title: "Bridal Hair & Makeup",
    price: "Starting at $150",
    description:
      "Your wedding day beauty, delivered to you. Elizabeth comes to your home, hotel, venue, or church — wherever you're getting ready — so you can relax and enjoy the morning with your people. Your look is built around your vision: whether you want romantic and soft, sleek and modern, or effortlessly boho, we make it happen.",
    includes: [
      "Full hair styling (up-do, half-up, or down)",
      "Professional makeup application",
      "On-site setup at your getting-ready location",
      "Touch-up kit for the day",
    ],
  },
  {
    title: "Bridesmaid & Wedding Party",
    price: "Starting at $110 per person",
    description:
      "Keep your whole bridal party looking cohesive and camera-ready. We work with you to design looks that complement each other beautifully, accounting for different hair types, skin tones, and personal styles within a unified aesthetic.",
    includes: [
      "Hair and/or makeup per bridesmaid",
      "Coordinated look across the party",
      "Scheduling coordinated around your wedding morning timeline",
    ],
  },
  {
    title: "Trial Sessions",
    price: "Starting at $150",
    description:
      "A trial is your chance to rehearse your wedding day look before the big day arrives. We test the style, make adjustments, and lock in exactly what you love — so on your wedding morning there are zero surprises, only excitement.",
    includes: [
      "Full hair and/or makeup run-through",
      "Style adjustments and refinements",
      "Photo documentation of your final look",
      "Recommended 4–8 weeks before your wedding",
    ],
  },
  {
    title: "Engagement Shoots",
    price: "Starting at $150",
    description:
      "Your engagement photos are your first chapter. Look and feel absolutely radiant with professional hair and makeup that photographs beautifully in any setting — golden Texas sunsets, romantic indoor shoots, or outdoor venues.",
    includes: [
      "Full hair styling",
      "Professional makeup application",
      "On-location service at your shoot site",
    ],
  },
];

const pricing = [
  { label: "Bridal trial", hair: "$150", makeup: "$150" },
  { label: "Day-of — bride", hair: "$150", makeup: "$150" },
  { label: "Bridesmaid / wedding party", hair: "$110", makeup: "$110" },
  { label: "Youth (8–12)", hair: "$80", makeup: "$80" },
  { label: "Flower girls (7 & under)", hair: "$50", makeup: "$25" },
  { label: "Extensions (bring your own)", hair: "$35", makeup: "—" },
];

const travelFees = [
  { range: "1–30 miles", fee: "$45" },
  { range: "31–50 miles", fee: "$65" },
  { range: "51–70 miles", fee: "$85" },
  { range: "71–90 miles", fee: "$105" },
];

const policies = [
  {
    title: "Booking Deposit",
    body: "A non-refundable deposit of $25 per person secures your booking date. Payment accepted via Venmo or Zelle.",
  },
  {
    title: "Cancellations & Rescheduling",
    body: "At least 48 hours' notice is required for any cancellation or reschedule request. Deposits are non-refundable.",
  },
  {
    title: "Late Arrivals",
    body: "A $15 late fee will be applied to your invoice for late arrivals. Please plan accordingly, especially on wedding days.",
  },
  {
    title: "No-Call / No-Show",
    body: "Clients who no-call / no-show will be blocked from future bookings.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          What We Offer
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Services
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-charcoal/60 text-base max-w-lg mx-auto">
          On-location beauty services for your wedding day and beyond, serving
          Rockwall, TX and the surrounding DFW area.
        </p>
      </section>

      {/* Service blocks */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                    {service.title}
                  </h2>
                  <span className="font-sans text-sm text-terracotta border border-terracotta/40 px-3 py-1 shrink-0">
                    {service.price}
                  </span>
                </div>
                <div className="w-8 h-px bg-dusty-rose" />
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-charcoal/60 flex items-start gap-2"
                    >
                      <span className="text-sage mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Wedding Day
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Pricing
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
            <p className="font-sans text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              On-location service, priced per person. Elizabeth often partners
              with a dedicated makeup artist for full bridal-party glam, and can
              provide makeup herself for smaller bookings.
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
          <p className="font-sans text-xs text-charcoal/50 mt-5 italic text-center leading-relaxed">
            All makeup includes complimentary false lashes (optional) and a
            touch-up kit. Prices are per person.
          </p>
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
              Elizabeth comes to you — your venue, home, or getting-ready suite.
              Travel is calculated by distance from Rockwall, TX. Parking and
              toll fees are added to your invoice when incurred.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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

      {/* Booking & cancellation policy */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-terracotta text-xl mb-4">
              Before You Book
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
              Booking &amp; Cancellation Policy
            </h2>
            <div className="w-12 h-px bg-dusty-rose mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-dusty-rose/20">
            {policies.map((policy, i) => (
              <div
                key={policy.title}
                className="bg-cream px-6 py-7 flex flex-col gap-3"
              >
                <span className="font-serif text-terracotta text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-charcoal">
                  {policy.title}
                </h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  {policy.body}
                </p>
              </div>
            ))}
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
