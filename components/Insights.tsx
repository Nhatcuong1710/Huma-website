import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const POSTS = [
  {
    title: "Vietnam's 2026 Tech Salary Benchmark: What Engineers Really Earn",
    excerpt: "A breakdown of compensation trends across backend, data, and AI roles in Hanoi and Ho Chi Minh City.",
    date: "Jun 2026",
    tag: "Market Insight",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Why Passive Candidates Are Your Best Hires in 2026",
    excerpt: "How to identify, approach, and convert high-quality engineers who aren't actively job hunting.",
    date: "May 2026",
    tag: "Recruitment Strategy",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Building an Engineering Org from 5 to 50: Lessons from Our Clients",
    excerpt: "Structural and hiring-sequence lessons from helping scale-ups grow their technical teams.",
    date: "Apr 2026",
    tag: "HR Consulting",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Hiring intelligence from the front line"
            description="Practical perspectives on Vietnam's technology talent market, drawn from our day-to-day search work."
          />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <a
                href="#"
                className="group block overflow-hidden rounded-xl2 border border-line bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
