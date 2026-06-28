import {
  Award,
  Network,
  Eye,
  CircleDollarSign,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const REASONS = [
  { icon: Award, text: "5+ years of specialized experience in IT recruitment" },
  { icon: Network, text: "Absolute specialization in the technology sector" },
  { icon: Eye, text: "Professional and fully transparent recruitment process" },
  { icon: LineChart, text: "An extensive network of high-quality IT talent" },
  { icon: CircleDollarSign, text: "Success-based fee — pay only upon successful placement" },
  { icon: ShieldCheck, text: "Candidate placement warranty guaranteed as per agreement" },
];

export default function WhyHuma() {
  return (
    <section id="why-huma" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
              <div className="absolute inset-3 rounded-full border border-white/15" />
              <div className="text-center">
                <p className="font-display text-6xl font-extrabold">92%</p>
                <p className="mx-auto mt-2 max-w-[10rem] text-sm text-white/80">
                  Accurate candidate matching success rate
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why HUMA Consulting"
              title="Specialized partner. Measurable results."
              description="Every engagement is built on deep technical fluency in Vietnam's tech market, backed by a transparent, success-based partnership model."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <Reveal key={r.text} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-canvas p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-soft">
                      <r.icon className="h-[18px] w-[18px]" />
                    </div>
                    <p className="text-sm font-medium leading-snug text-ink">
                      {r.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
