import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import BrandsWorkedWith from "@/components/BrandsWorkedWith";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ei-shwe-sin-thant-miki-0370a019b/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/ella.sinthant",
    label: "Facebook",
    Icon: Facebook,
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(240,182,164,0.2),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(140,199,216,0.16),transparent_45%),linear-gradient(130deg,rgba(12,11,16,0.92),rgba(21,14,20,0.88))]" />
      </div>

      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 text-white backdrop-blur-xl">
          <Link href="/" className="text-sm font-semibold tracking-[0.12em]">
            Home
          </Link>
          <nav className="hidden items-center gap-5 text-xs font-medium sm:flex md:text-sm">
            <Link href="/video-photo-production">Video &amp; Photo Production</Link>
            <Link href="/project-highlight">Project Highlight</Link>
            <Link href="/event-lead-brand-activation">Event Lead &amp; Brand Activation</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15"
          >
            Contact
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-10">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/20 bg-black/20 p-6 backdrop-blur-md md:grid-cols-[1fr_1.1fr] md:gap-10 md:p-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Contact
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[#ffe2d9] md:text-5xl">
              Let&apos;s Work Together
            </h1>
            <p className="max-w-xl text-sm leading-7 text-white/85 md:text-base">
              Available for event production, brand activations, and visual
              content collaborations. Reach out for project inquiries and
              scheduling.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-black/30 p-6">
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-white/80" />
                <span>Based in Myanmar</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-white/80" />
                <Link href="mailto:eishwesinthant98@gmail.com" className="hover:underline">
                  eishwesinthant98@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-white/80" />
                <Link href="tel:+959421127945" className="hover:underline">
                  +959 421 127 945
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="mailto:eishwesinthant98@gmail.com"
                className="inline-flex items-center rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-8">
        <BrandsWorkedWith />
      </section>

      <footer className="fixed bottom-6 left-6 z-20">
        <nav aria-label="Social links">
          <ul className="flex flex-col gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:bg-black/35"
                >
                  <Icon size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>

      <footer className="relative z-10 w-full pb-8 pt-2 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70 md:text-sm">
          . Ei Shwe Sin Thant . Miki Anna . Copyright 2026 .
        </p>
      </footer>
    </main>
  );
}
