"use client";

import { useState } from "react";

const serviceOptions = [
  "Bridal Hair",
  "Bridal Makeup",
  "Bridesmaid Hair",
  "Bridesmaid Makeup",
  "Trial Session",
  "Engagement Shoot",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      weddingDate: (form.elements.namedItem("weddingDate") as HTMLInputElement).value,
      venue: (form.elements.namedItem("venue") as HTMLInputElement).value,
      guestCount: (form.elements.namedItem("guestCount") as HTMLSelectElement).value,
      services: selectedServices,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-sage text-4xl mb-6">✦</div>
        <h2 className="font-serif text-3xl text-charcoal mb-4">
          Thank You, We&apos;ll Be in Touch!
        </h2>
        <p className="font-sans text-charcoal/60 max-w-sm mx-auto">
          Your inquiry has been received. Elizabeth will get back to you within
          1–2 business days to discuss your wedding day plans.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-cream border border-dusty-rose/40 px-4 py-3 font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-terracotta transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
            Name <span className="text-terracotta">*</span>
          </label>
          <input name="name" type="text" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
            Email <span className="text-terracotta">*</span>
          </label>
          <input name="email" type="email" required placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      {/* Wedding date + Venue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
            Wedding Date
          </label>
          <input name="weddingDate" type="date" className={inputCls} />
        </div>
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
            Venue / Location
          </label>
          <input name="venue" type="text" placeholder="Venue name or city" className={inputCls} />
        </div>
      </div>

      {/* Guest count */}
      <div>
        <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
          Number of People
        </label>
        <select name="guestCount" className={inputCls}>
          <option value="">Select...</option>
          <option value="1">Just the bride</option>
          <option value="2-4">2–4 people</option>
          <option value="5-8">5–8 people</option>
          <option value="9+">9+ people</option>
        </select>
      </div>

      {/* Services */}
      <div>
        <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-3">
          Services Interested In
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className={`font-sans text-xs tracking-wide px-4 py-2 border transition-colors ${
                selectedServices.includes(s)
                  ? "bg-terracotta border-terracotta text-warm-white"
                  : "border-dusty-rose/40 text-charcoal/60 hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="font-sans text-xs tracking-widest uppercase text-charcoal/60 block mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your wedding vision, any special requests, or questions you have..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-terracotta text-warm-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-terracotta-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
