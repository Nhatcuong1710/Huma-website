import { Briefcase, Target, TrendingUp, Handshake, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: "Recruitment",
    description: "5+ years of specialized experience in Technology Recruitment and Talent Acquisition.",
  },
  {
    icon: Target,
    title: "Recruitment Expertise",
    description: "Successfully connecting businesses with high-quality technology professionals across Engineering, Data, Product, Infrastructure, and Leadership.",
  },
  {
    icon: TrendingUp,
    title: "Market Insight",
    description: "Deep understanding of Vietnam's technology talent market, hiring trends, salary benchmarks, and candidate motivations.",
  },
  {
    icon: Handshake,
    title: "Client Commitment",
    description: "Committed to delivering quality talent with speed, precision, and a partnership-driven approach.",
  },
];

export default function Founder() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="container">
        <SectionHeading eyebrow="Our Leadership" title="Led by recruitment expertise, not guesswork" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="rounded-xl2 border border-line bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-brand-gradient text-3xl font-bold text-white shadow-card">
                ĐC
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                Đào Nhật Cường
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-600">
                Founder &amp; Recruitment Consultant
              </p>
              <a
                href="https://www.linkedin.com/in/nhatcuong1710/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-xl2 border border-line bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-sm font-bold uppercase tracking-wide text-ink">
                    {h.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {h.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
