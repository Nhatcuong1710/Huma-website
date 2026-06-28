"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-canvas py-20">
      <div className="container">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-xl2 border border-line bg-white p-10 text-center shadow-soft lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">
                Get hiring insights in your inbox
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Monthly market reports, salary benchmarks, and hiring trends from HUMA Consulting — no spam.
              </p>
            </div>

            {submitted ? (
              <div className="flex items-center gap-2 rounded-full bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700">
                <CheckCircle2 className="h-5 w-5" />
                Thanks — you&apos;re subscribed.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-full border border-line bg-canvas px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
