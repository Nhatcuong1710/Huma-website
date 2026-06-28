"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "business@humaconsulting.com.vn", href: "mailto:business@humaconsulting.com.vn" },
  { icon: Phone, label: "Phone", value: "0362.325.875", href: "tel:0362325875" },
  { icon: MapPin, label: "Office", value: "79 Nguyen The Truyen St., Tan Son Nhi Ward, District Tan Phu, Ho Chi Minh City, Vietnam", href: undefined },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-mesh-dark py-24 text-white lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's build the future together"
          description="Partner with HUMA Consulting to build high-performing teams and achieve sustainable growth."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {CONTACT_DETAILS.map((c) => (
              <Reveal key={c.label}>
                <div className="glass flex items-center gap-4 rounded-xl2 p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500">
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-semibold text-white hover:text-cyan-300"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="overflow-hidden rounded-xl2 border border-white/10">
                <iframe
                  title="HUMA Consulting location map"
                  src="https://www.google.com/maps?q=79 Nguyen The Truyen Street, Tan Son Nhi Ward, District Tan Phu, Ho Chi Minh City, Vietnam&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-xl2 p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle2 className="h-10 w-10 text-cyan-400" />
                  <p className="font-display text-lg font-bold text-white">
                    Message sent
                  </p>
                  <p className="text-sm text-white/65">
                    Thanks for reaching out — our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Full name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Jane Nguyen"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Work email
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about the role or challenge you're hiring for..."
                      className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
                    >
                      Send message
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
