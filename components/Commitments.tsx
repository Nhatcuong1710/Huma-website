import { CircleDollarSign, Lock, RefreshCw, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    icon: CircleDollarSign,
    title: "Contingency-Based Fee",
    description: "Zero upfront costs and zero operational risks for your business.",
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    description: "Strict protection guaranteed for all project details, business data, and candidate profiles.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates & Advisory",
    description: "Detailed weekly labor market reports and continuous consultative partnership.",
  },
  {
    icon: BadgeCheck,
    title: "Comprehensive Warranty Policy",
    description: "Complimentary candidate replacement and onboarding support in the event of early turnover post-hire.",
  },
];

export default function Commitments() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Commitments & Guarantees"
          title="Partnership terms built on trust, not fine print"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-xl2 border border-line p-7 text-center transition-shadow hover:shadow-card">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
