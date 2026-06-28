import { ShieldCheck, Users2, Target, Trophy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    letter: "H",
    title: "Honesty",
    description: "We uphold transparency, integrity, and honesty in everything we do.",
    icon: ShieldCheck,
  },
  {
    letter: "U",
    title: "Unity",
    description: "We foster meaningful connections between people, businesses, and partners to achieve shared success.",
    icon: Users2,
  },
  {
    letter: "M",
    title: "Match",
    description: "We deliver the right people and the right solutions to meet the right needs.",
    icon: Target,
  },
  {
    letter: "A",
    title: "Achievement",
    description: "We are committed to creating sustainable success for our clients, partners, and communities.",
    icon: Trophy,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-canvas py-16 lg:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Core Values"
          title={
            <>
              The H.U.M.A standard that guides every placement
            </>
          }
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.letter} delay={i * 0.08}>
              <div className="group relative h-full rounded-xl2 border border-line bg-white p-7 transition-all hover:-translate-y-1.5 hover:shadow-card">
                <span className="font-display text-5xl font-extrabold text-brand-50 transition-colors group-hover:text-brand-100">
                  {v.letter}
                </span>
                <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-soft">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
