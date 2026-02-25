import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

const responsibilities = [
  "Creative development and execution of digital videos",
  "Full-cycle production management for TV commercials (TVCs)",
  "Photoshoots for Key Visuals (KV) and stock images",
  "Cross-functional coordination with creative, client, and media teams",
  "Quality control, scheduling, budgeting, and location management",
];

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

export default function VideoPhotoProductionPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d1212]/70 via-[#111318]/65 to-[#1b1620]/75" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f0b6a4]/20 blur-3xl" />
        <div className="absolute right-[-80px] top-1/3 h-80 w-80 rounded-full bg-[#8cc7d8]/15 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/3 h-96 w-96 rounded-full bg-[#d6a6cc]/15 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 text-white backdrop-blur-xl">
          <span className="text-sm font-semibold tracking-[0.18em]">MIKI</span>
          <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <Link href="/">Home</Link>
            <Link href="/video-photo-production">Video &amp; Photo Production</Link>
          </nav>
          <button className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15">
            Contact
          </button>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-32 md:px-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-white/80 transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>

        <section className="space-y-7 rounded-3xl border border-white/25 bg-black/20 p-7 backdrop-blur-md md:p-10">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Service Focus
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[#ffe2d9] md:text-5xl">
              Video &amp; Photo Production
            </h1>
          </header>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold uppercase tracking-[0.1em] text-white/90">
              Overview
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-white/85 md:text-base">
              Over 5 years of hands-on experience managing end-to-end production
              for digital content, live streams, TV commercials, and brand
              visuals. Delivers high-impact content that resonates with target
              audiences, meets brand objectives, and stays on schedule and budget.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold uppercase tracking-[0.1em] text-white/90">
              Key Responsibilities
            </h2>
            <ul className="space-y-2 text-sm leading-7 text-white/85 md:text-base">
              {responsibilities.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
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
