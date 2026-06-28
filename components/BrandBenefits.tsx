import { Hourglass, Star, Wallet } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    icon: Hourglass,
    title: "Accelerated Time-to-Hire",
    description: "Helping businesses fill technical gaps rapidly to enhance competitive advantage.",
  },
  {
    icon: Star,
    title: "Access to Premium Talent",
    description: "Expanding access to passive talent pools — high-quality engineers who aren't actively searching for jobs.",
  },
  {
    icon: Wallet,
    title: "Internal HR Cost Optimization",
    description: "Optimizing the operational capacity of internal HR teams to focus on core strategic development.",
  },
];

export default function BrandBenefits() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Brand Partner Benefit"
            title="What our partner brands gain by working with HUMA"
            description="From Fortune-grade enterprises to fast-scaling startups, our partners share one priority: hiring technology talent without compromise."
          />

          <div className="space-y-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="flex items-start gap-5 rounded-xl2 border border-line bg-white p-6 shadow-soft">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {b.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
