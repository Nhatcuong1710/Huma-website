import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "HUMA understood our engineering culture from the first call. The shortlist they sent was sharper than agencies we'd worked with for years.",
    name: "Hiring Manager",
    role: "Technology Company, 79 Nguyen The Truyen Street, Tan Son Nhi Ward, District Tan Phu, Ho Chi Minh City, Vietnam",
  },
  {
    quote:
      "The weekly market reports alone made HUMA worth the partnership — we finally had visibility into our hiring pipeline.",
    name: "Head of Talent",
    role: "Fintech Scale-up",
  },
  {
    quote:
      "Fast, transparent, and genuinely invested in getting the match right rather than just filling a seat.",
    name: "VP Engineering",
    role: "E-commerce Platform",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our partners say"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl2 border border-line bg-canvas p-8">
                <Quote className="h-8 w-8 text-brand-200" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-soft">
          Placeholder testimonials — to be replaced with verified client quotes.
        </p>
      </div>
    </section>
  );
}
