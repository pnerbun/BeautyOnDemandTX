import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Beauty on Demand TX collects, uses, and protects the personal information you share through the contact form on this Rockwall, TX bridal hair & makeup website.",
};

const sections = [
  {
    heading: "Information I collect",
    body: "When you submit the contact form, I collect what you provide: your name, email, phone number, wedding or event date, venue/location, the number of people in your party, the services you're interested in, and any message you include.",
  },
  {
    heading: "How I use it",
    body: "Solely to respond to your inquiry — to check availability, prepare a quote, and communicate with you about your wedding or event. I never sell, rent, or share your information for marketing.",
  },
  {
    heading: "How it's handled",
    body: "Form submissions are delivered to me by email through Resend (my email provider) and stored in my inbox. They are not used for anything other than responding to you.",
  },
  {
    heading: "Cookies & tracking",
    body: "This site uses no advertising cookies or third-party analytics. It loads fonts from Google Fonts and some images from Pexels, which may receive standard request data (such as your IP address) when delivering those files.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-warm-white text-center">
        <p className="font-serif italic text-terracotta text-xl mb-4">
          Your Information
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Privacy Policy
        </h1>
        <div className="w-12 h-px bg-dusty-rose mx-auto mb-6" />
        <p className="font-sans text-xs text-charcoal/50">
          Last updated June 18, 2026
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-charcoal/70 leading-relaxed mb-2">
            Beauty on Demand TX respects your privacy. This page explains what
            information this website collects and how it is used.
          </p>

          {sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-10 mb-3">
                {heading}
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed">
                {body}
              </p>
            </div>
          ))}

          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-10 mb-3">
            Your choices
          </h2>
          <p className="font-sans text-charcoal/70 leading-relaxed">
            You can ask me to delete the information you submitted at any time —
            just email{" "}
            <a
              href="mailto:elizabethnerbun@gmail.com"
              className="text-terracotta hover:text-terracotta-dark transition-colors"
            >
              elizabethnerbun@gmail.com
            </a>{" "}
            or call/text{" "}
            <a
              href="tel:+12623664414"
              className="text-terracotta hover:text-terracotta-dark transition-colors"
            >
              (262) 366-4414
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-10 mb-3">
            Contact
          </h2>
          <p className="font-sans text-charcoal/70 leading-relaxed">
            Beauty on Demand TX &nbsp;·&nbsp; Rockwall, TX &nbsp;·&nbsp;{" "}
            <a
              href="mailto:elizabethnerbun@gmail.com"
              className="text-terracotta hover:text-terracotta-dark transition-colors"
            >
              elizabethnerbun@gmail.com
            </a>{" "}
            &nbsp;·&nbsp; (262) 366-4414
          </p>
        </div>
      </section>
    </>
  );
}
