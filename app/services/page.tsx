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
    price: "Contact for pricing",
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
    price: "Starting at $X per person",
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
    price: "Starting at $X",
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
    price: "Starting at $X",
    description:
      "Your engagement photos are your first chapter. Look and feel absolutely radiant with professional hair and makeup that photographs beautifully in any setting — golden Texas sunsets, romantic indoor shoots, or outdoor venues.",
    includes: [
      "Full hair styling",
      "Professional makeup application",
      "On-location service at your shoot site",
    ],
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
