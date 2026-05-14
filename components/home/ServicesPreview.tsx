"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Bridal Hair & Makeup",
    description:
      "Your complete bridal look, brought to you. We come to your venue, home, or hotel so you can focus on what matters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <circle cx="9" cy="6" r="3" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
        <path d="M17 14c2.2.5 4 2.2 4 4.5" />
      </svg>
    ),
    title: "Bridesmaid & Wedding Party",
    description:
      "Cohesive, stunning looks for your entire bridal party. Everyone feels beautiful and camera-ready on your big day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Trial Sessions",
    description:
      "Rehearse your look before the big day. Perfect your style, try different options, and arrive at your wedding with total confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Engagement Shoots",
    description:
      "Look and feel your absolute best for your engagement photos. Professional hair and makeup that photographs beautifully.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif italic text-terracotta text-lg mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
            Services
          </h2>
          <div className="w-12 h-px bg-dusty-rose mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="text-center flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-terracotta">{service.icon}</div>
              <h3 className="font-serif text-xl text-charcoal">{service.title}</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="font-sans text-xs tracking-widest uppercase text-terracotta border border-terracotta px-8 py-3.5 hover:bg-terracotta hover:text-warm-white transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
