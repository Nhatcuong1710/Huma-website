import { Code, Cloud, BarChart3, Sparkles, Crown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const CATEGORIES = [
  {
    icon: Code,
    title: "Software",
    roles: ["Backend Dev", "Frontend Dev", "Full Stack Dev", "Mobile Dev", "Security (Red/Blue Team)"],
  },
  {
    icon: Cloud,
    title: "Infra & Cloud",
    roles: ["DevOps", "Cloud Engineer", "System Engineer", "Solution Architecture"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    roles: ["Data Analyst", "Data Engineer", "BI Analyst", "Data Scientist"],
  },
  {
    icon: Sparkles,
    title: "Product & AI",
    roles: ["Project Manager", "Product Owner", "AI Engineer", "ML Engineer"],
  },
  {
    icon: Crown,
    title: "Leadership",
    roles: ["Team Leader (BE/FE)", "Engineering Manager", "Head of Engineering", "General Manager (Tech)"],
  },
];

export default function TalentMap() {
  return (
    <section id="talent-map" className="bg-mesh-dark py-24 text-white lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Specialized IT Talent Map"
          title="We hire across the full technology stack"
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.07}>
              <div className="group h-full rounded-xl2 border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/30 hover:bg-white/[0.08]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-sm text-white/65"
                    >
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
