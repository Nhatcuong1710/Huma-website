import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why HUMA", href: "#why-huma" },
  { label: "Talent Map", href: "#talent-map" },
  { label: "Process", href: "#process" },
  { label: "Careers", href: "#careers" },
];

const SERVICE_LINKS = [
  { label: "Recruitment", href: "#services" },
  { label: "HR Consulting", href: "#services" },
  { label: "Technology Services", href: "#services" },
  { label: "Insights", href: "#insights" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.1fr]">
        <div>
          <Link href="#home" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="HUMA Consulting" width={36} height={36} className="h-9 w-9 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold text-white">HUMA</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Consulting
              </span>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            People. Technology. Growth. We help organizations build
            high-performing technology teams across Vietnam.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Facebook, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm transition-colors hover:text-cyan-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm transition-colors hover:text-cyan-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="mailto:business@humaconsulting.com.vn" className="transition-colors hover:text-cyan-400">
                business@humaconsulting.com.vn
              </a>
            </li>
            <li>
              <a href="tel:0362325875" className="transition-colors hover:text-cyan-400">
                0362.325.875
              </a>
            </li>
            <li>79 Nguyen The Truyen Street, Tan Son Nhi Ward, District Tan Phu, Ho Chi Minh City,Vietnam</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} HUMA Consulting. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
