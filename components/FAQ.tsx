"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "How does HUMA Consulting's fee structure work?",
    a: "We operate on a contingency-based fee model — there are zero upfront costs and zero operational risk to your business. You only pay upon a successful placement.",
  },
  {
    q: "What roles and seniority levels do you recruit for?",
    a: "We specialize across the full technology stack: Software, Infra & Cloud, Data & Analytics, Product & AI, and Leadership roles, from individual contributors up to Head of Engineering and General Manager (Tech).",
  },
  {
    q: "What happens if a placed candidate leaves early?",
    a: "Our comprehensive warranty policy covers complimentary candidate replacement and onboarding support in the event of early turnover post-hire, as committed in your agreement.",
  },
  {
    q: "How long does a typical search take?",
    a: "Timelines vary by role complexity, but our sourcing-and-screening process is built for accelerated time-to-hire — most searches deliver a shortlist within the first one to two weeks.",
  },
  {
    q: "Do you provide market or salary insights beyond recruitment?",
    a: "Yes. As part of our continuous advisory commitment, we provide detailed weekly labor market reports and ongoing consultative guidance on hiring trends and salary benchmarks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl2 border border-line bg-canvas">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
