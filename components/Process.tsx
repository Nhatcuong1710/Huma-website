import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const PHASES = [
  {
    number: "01",
    title: "Preparation",
    steps: [
      "Align on and document detailed recruitment requirements",
      "Conduct role analysis & provide localized market insights",
      "Source, screen, and proactively engage targeted talent",
    ],
  },
  {
    number: "02",
    title: "Screening",
    steps: [
      "Perform rigorous screening & in-depth competency evaluations",
      "Present shortlists of the most outstanding profiles",
      "Facilitate and optimize bilateral interview schedules",
    ],
  },
  {
    number: "03",
    title: "Partnership",
    steps: [
      "Support throughout the final offer & negotiation process",
      "Monitor candidate integration and probation performance",
      "Activate the placement warranty policy as committed",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-canvas py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="A disciplined, three-phase placement methodology"
          description="Every search follows the same rigorous sequence — so you always know what stage your hire is at, and why."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.number} delay={i * 0.12}>
              <div className="relative h-full rounded-xl2 border border-line bg-white p-8 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-extrabold text-brand-100">
                    {phase.number}
                  </span>
                  <div>
                    <p className="eyebrow text-brand-600">Phase</p>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <ol className="mt-6 space-y-4 border-t border-line pt-6">
                  {phase.steps.map((step, idx) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                        {i * 3 + idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink-muted">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                {i < PHASES.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-line lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
