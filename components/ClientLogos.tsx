import Reveal from "@/components/Reveal";

const CLIENTS = ["Samsung", "PVcombank", "Shopee", "momo", "Nexlab"];

export default function ClientLogos() {
  return (
    <section className="border-y border-line bg-white py-16">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow text-ink-soft">Trusted by leading brands</p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee gap-16">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="flex items-center text-xl font-bold tracking-tight text-ink-soft/50 grayscale transition-colors hover:text-brand-600"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
