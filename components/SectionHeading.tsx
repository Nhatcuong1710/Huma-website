import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span
        className={`eyebrow inline-flex items-center gap-2 ${
          light ? "text-white" : "text-brand-600"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

