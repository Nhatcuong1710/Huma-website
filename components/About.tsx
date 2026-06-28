import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const POINTS = [
  "Specialized exclusively in technology talent acquisition",
  "People-centered approach to every engagement",
  "Commitment to long-term, sustainable client value",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 bg-brand-gradient-soft shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="HUMA Consulting team collaborating in a meeting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 w-56 rounded-xl2 border border-line bg-white p-5 shadow-card sm:w-64">
            <p className="font-display text-3xl font-bold text-brand-600">
              5+ <span className="text-base font-medium text-ink-soft">yrs</span>
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Specialized IT recruitment experience
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Us"
            title="Building better teams. Creating lasting impact."
          />
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            HUMA Consulting is a business solutions company specializing in
            talent acquisition, HR consulting, and technology services. We
            help organizations build high-performing teams, optimize people
            strategies, and leverage technology to drive sustainable growth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Through our people-centered approach and commitment to
            excellence, we create lasting value for businesses and
            professionals across Vietnam&apos;s technology sector.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                <span className="text-sm font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100"
          >
            Learn more about our services
          </a>
        </div>
      </div>
    </section>
  );
}
