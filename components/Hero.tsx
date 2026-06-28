"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: "92%", label: "Placement success rate" },
  { value: "5+", label: "Years in tech recruitment" },
  { value: "1000+", label: "IT talent network" },
];

const PIXELS = Array.from({ length: 70 }, (_, i) => {
  const seed = (i * 37) % 100;
  return {
    x: 10 + ((i * 13) % 90),
    y: 8 + ((i * 23) % 84),
    size: 4 + (seed % 10),
    delay: (seed % 20) / 10,
    duration: 3 + (seed % 30) / 10,
  };
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-24 pt-36 text-black lg:pb-32 lg:pt-44"
    >
      {/* Pixel background */}
      <div className="pixel-field">
        {PIXELS.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-[3px] bg-gradient-to-br from-cyan-400 to-brand-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-cyan-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Technology Recruitment & HR Consulting
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              People.
              <br />
              Technology.
              <br />
              <span className="text-gradient">Growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              We help organizations build high-performing teams, optimize
              people strategies, and leverage technology to drive sustainable
              growth — one precise hire at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1656D6] border-slate-300 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-slate-100"
              >
                <PlayCircle className="h-4 w-4" />
                Explore Our Services
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-slate-900">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-light relative mx-auto w-full max-w-2xl rounded-[32px] p-10 shadow-2xl">
              <div className="flex h-full flex-col justify-between">
                
                {/* Title */}
                <div>
                  <p className="eyebrow text-brand-600">Core Values</p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-900">
                    H.U.M.A
                  </p>
                </div>

                {/* Image */}
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/term.png"
                    alt="Core Values"
                    width={900}
                    height={650}
                    className="mt-6 w-full object-cover"
                  />
                </div>
{/* Values */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

  {/* Honesty */}
  <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600" />
      <h3 className="text-lg font-semibold text-gray-800">Honesty</h3>
    </div>
    <p className="mt-3 text-gray-600 text-sm">
      We build trust through transparency, clarity, and truthful communication in every step.
    </p>
  </div>

  {/* Unity */}
  <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-violet-600" />
      <h3 className="text-lg font-semibold text-gray-800">Unity</h3>
    </div>
    <p className="mt-3 text-gray-600 text-sm">
      We work as one team, aligning goals and supporting each other to achieve shared success.
    </p>
  </div>

  {/* Match */}
  <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-orange-400" />
      <h3 className="text-lg font-semibold text-gray-800">Match</h3>
    </div>
    <p className="mt-3 text-gray-600 text-sm">
      We connect the right people with the right opportunities for the best long-term fit.
    </p>
  </div>

  {/* Achievement */}
  <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
      <h3 className="text-lg font-semibold text-gray-800">Achievement</h3>
    </div>
    <p className="mt-3 text-gray-600 text-sm">
      We focus on measurable results and continuous improvement to reach excellence.
    </p>
  </div>

</div>
              

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}