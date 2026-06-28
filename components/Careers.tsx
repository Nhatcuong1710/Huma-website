import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const OPENINGS = [
  { title: "Technical Recruitment Consultant", location: "Ho Chi Minh City, Vietnam", type: "Full-time" },
  { title: "IT Talent Sourcer", location: "Ho Chi Minh City, Vietnam", type: "Full-time" },
  { title: "HR Consulting Associate", location: "Ho Chi Minh City, Vietnam", type: "Full-time" },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-canvas py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Careers"
          title="Build the future of tech hiring with us"
          description="We're growing our own team of recruitment and HR consulting specialists. If you're driven by precision and people, we'd like to talk."
        />

        <div className="mt-12 divide-y divide-line rounded-xl2 border border-line bg-white">
          {OPENINGS.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.06}>
              <a
                href="#contact"
                className="group flex flex-col items-start justify-between gap-4 p-6 transition-colors hover:bg-brand-50/40 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {job.type}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  Apply now
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
