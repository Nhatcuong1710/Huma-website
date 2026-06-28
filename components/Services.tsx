import { Users, Briefcase, Code2, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: Users,
    title: "Recruitment",
    description:
      "End-to-end recruitment solutions to help you hire the right technology talent, fast — from sourcing to onboarding.",
    color: "from-brand-500 to-brand-700",
  },
  {
    icon: Briefcase,
    title: "HR Consulting",
    description:
      "Strategic HR solutions to build strong teams, design effective workforce structures, and drive sustained performance.",
    color: "from-cyan-500 to-brand-600",
  },
  {
    icon: Code2,
    title: "Technology Services",
    description:
      "Technology solutions and advisory that accelerate business efficiency, scalability, and long-term growth.",
    color: "from-navy-700 to-brand-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-canvas py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="One partner, three ways to grow your team"
          description="Whatever stage your organization is at, HUMA brings specialized expertise to help you hire, structure, and scale with confidence."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-xl2 border border-line bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-card`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-brand-500/10 transition-transform duration-500 group-hover:scale-150" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
