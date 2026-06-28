import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt="City skyline reflecting a partnership-driven approach"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />
      </div>

      <div className="container relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-cyan-300">Our Philosophy</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Sustainable success begins with the right people
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            We believe that sustainable business success begins with the
            right people, supported by the right solutions. That&apos;s why
            HUMA Consulting goes beyond recruitment — helping organizations
            build strong teams, optimize workforce strategies, and embrace
            technology to achieve long-term growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
