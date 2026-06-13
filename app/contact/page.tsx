import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your wedding day hair and makeup with Beauty on Demand. Serving Rockwall, TX and the surrounding DFW area.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          Let&apos;s Connect
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Book Your Date
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-charcoal/60 text-base max-w-lg mx-auto">
          Fill out the form below and Elizabeth will be in touch within 1–2
          business days to discuss your wedding day vision.
        </p>
      </section>

      {/* Form + info */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Get in Touch
              </h3>
              <div className="w-6 h-px bg-dusty-rose mb-5" />
              <a
                href="mailto:elizabethnerbun@gmail.com"
                className="font-sans text-sm text-charcoal/70 hover:text-terracotta transition-colors block"
              >
                elizabethnerbun@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Service Area
              </h3>
              <div className="w-6 h-px bg-dusty-rose mb-5" />
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                Rockwall, Heath, Fate, Royse City, Rowlett, Wylie, Sachse,
                Forney, and surrounding areas east, north, and south of
                Rockwall.
              </p>
              <p className="font-sans text-xs text-charcoal/50 mt-3 italic">
                Venue outside these areas? Please inquire — travel to your
                location can be quoted upon request.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                What to Expect
              </h3>
              <div className="w-6 h-px bg-dusty-rose mb-5" />
              <ul className="flex flex-col gap-3">
                {[
                  "Response within 1–2 business days",
                  "Custom quote for your party size",
                  "Availability check for your date",
                  "No pressure — just a conversation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-sage shrink-0 mt-0.5">✦</span>
                    <span className="font-sans text-sm text-charcoal/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
