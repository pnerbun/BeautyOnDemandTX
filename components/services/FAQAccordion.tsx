"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Where do you travel for weddings?",
    a: "We serve Rockwall, TX and the DFW metro area, coming on-location to your home, hotel, venue, or church. Not sure if you're in our area? Reach out and ask!",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking as early as possible — popular wedding dates can fill up 12–18 months in advance. Once your date is set, don't wait. A deposit holds your date.",
  },
  {
    q: "Do you require a minimum number of people?",
    a: "There is no strict minimum, but pricing is structured per service. We're happy to accommodate intimate weddings with just the bride, or larger wedding parties.",
  },
  {
    q: "Is a trial session required?",
    a: "Trials are strongly recommended but not required. A trial gives you the chance to test your look, make adjustments, and arrive on your wedding day knowing exactly what to expect.",
  },
  {
    q: "What is your deposit and cancellation policy?",
    a: "A deposit is required to hold your date. Please contact us for current deposit amounts and cancellation terms — these vary depending on the size of your booking.",
  },
  {
    q: "How long does bridal hair and makeup take?",
    a: "Timing varies by look and party size. A bride alone typically needs 1.5–2.5 hours. We'll work with you ahead of time to create a detailed timeline for your wedding morning.",
  },
  {
    q: "Do you do both hair AND makeup?",
    a: "Yes! Elizabeth provides both hair and makeup services, meaning you only need to coordinate with one artist for your entire bridal look.",
  },
  {
    q: "What should I bring or prepare for my appointment?",
    a: "Come with clean, dry hair unless instructed otherwise. Bring inspiration photos, any accessories you plan to wear (veil, headpiece), and have a button-down or zip-up top so you don't disturb your hair and makeup when getting dressed.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-dusty-rose/30">
          <button
            className="w-full text-left py-5 flex items-center justify-between gap-4 group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-serif text-lg text-charcoal group-hover:text-terracotta transition-colors">
              {faq.q}
            </span>
            <span
              className={`shrink-0 text-terracotta transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-48 pb-5" : "max-h-0"
            }`}
          >
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
