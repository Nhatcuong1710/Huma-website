# HUMA Consulting — Corporate Website

A premium corporate marketing site for HUMA Consulting, a technology recruitment & HR consulting firm in Vietnam.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx          Homepage — assembles all sections
  globals.css       Design tokens, base styles, signature pixel motif
  robots.ts         robots.txt route
  sitemap.ts        sitemap.xml route
components/
  Navbar.tsx        Sticky nav with mobile menu
  Hero.tsx          Hero with signature pixel-dissolve animation
  About.tsx         About HUMA
  Services.tsx      Recruitment / HR Consulting / Technology Services
  VisionMission.tsx Vision & Mission
  Philosophy.tsx    Our Philosophy
  CoreValues.tsx    H.U.M.A core values
  WhyHuma.tsx       Why HUMA Consulting + 92% success rate
  TalentMap.tsx     Specialized IT Talent Map
  Process.tsx       3-phase recruitment SOP
  Commitments.tsx   Commitments & Guarantees
  BrandBenefits.tsx Brand Partner Benefits
  ClientLogos.tsx   Client logo marquee
  Testimonials.tsx  Placeholder testimonials
  Founder.tsx       Leadership / founder profile
  Insights.tsx       Blog/insights preview
  Careers.tsx       Open roles
  FAQ.tsx           Accordion FAQ
  Newsletter.tsx    Email signup
  Contact.tsx       Contact form + map + details
  Footer.tsx        Site footer
  FloatingButtons.tsx  WhatsApp / Zalo / LinkedIn / Email
  BackToTop.tsx     Scroll-to-top button
  CookieBanner.tsx  Cookie consent banner
  Reveal.tsx        Scroll-reveal motion wrapper
  SectionHeading.tsx  Shared section heading
public/
  logo.png          Official HUMA Consulting logo
```

## Design system

- **Colors**: deep navy (`#0B1E3F`), brand blue (`#1656D6`), cyan accent (`#33C7E8`) — derived from the HUMA "HC" mark.
- **Typography**: Plus Jakarta Sans (display) + Inter (body).
- **Signature motif**: a dissolving pixel-grid pattern echoing the logo's "HC" mark, used in the hero and dark sections.
- Fully responsive (mobile / tablet / desktop), keyboard-focus visible, and respects `prefers-reduced-motion`.

## Editing content

All copy is sourced from the HUMA Consulting company profile and lives directly inside each component as typed arrays/objects — update the relevant array (e.g. `SERVICES`, `VALUES`, `REASONS`) to change content.

Replace the placeholder Unsplash images (`About.tsx`, `Philosophy.tsx`, `Insights.tsx`) with real photography before launch, and swap the testimonials and careers listings with verified data.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.

## Contact information used on the site

- Email: business@humaconsulting.com.vn
- Phone: 0362.325.875
- Office: Ho Chi Minh, Vietnam
