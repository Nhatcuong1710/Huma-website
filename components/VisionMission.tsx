import { Target, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function VisionMission() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Vision &amp; Mission"
          title="Where we're headed, and how we get there"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl2 border border-line bg-canvas p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                To become the preferred recruitment partner for businesses
                seeking high-quality talent, fast hiring solutions, and
                sustainable growth.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-xl2 bg-brand-gradient p-10 text-white">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                <Handshake className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">
                Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                To deliver high-quality recruitment and business solutions
                that help organizations hire faster, build stronger teams,
                and achieve sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
