"use client";

import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import CircularGallery from "@/components/CircularGallery";

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

const galleryItems = [
  { image: "/jisoo.jpg", text: "Production Lead" },
  { image: "/brands/barbie-logo.png", text: "Brand Visuals" },
  { image: "/brands/lego-logo_38167ed5cb.jpg", text: "Photo Campaign" },
  { image: "/brands/mercedes-logo.png", text: "Event Activation" },
  { image: "/brands/marvel-logo.png", text: "Creative Content" },
  { image: "/brands/amazon-logo.png", text: "Commercial Production" },
];

export default function VideoPhotoProductionPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(240,182,164,0.2),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(140,199,216,0.16),transparent_45%),linear-gradient(130deg,rgba(12,11,16,0.92),rgba(21,14,20,0.88))]" />
      </div>

      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 backdrop-blur-xl">
          <span className="text-sm font-semibold tracking-[0.18em]">MIKI</span>
          <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <Link href="/">Home</Link>
            <Link href="/video-photo-production">Video &amp; Photo Production</Link>
          </nav>
          <Link
            href="/"
            className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          <div className="rounded-3xl border border-white/20 bg-black/15 p-7 backdrop-blur-md md:p-9">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Service Focus
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-[#ffe2d9] md:text-5xl">
                Video &amp; Photo Production
              </h1>
              <p className="text-sm leading-7 text-white/85 md:text-base">
                Over 5 years of hands-on experience managing end-to-end
                production for digital content, live streams, TV commercials,
                and brand visuals. Expert in delivering high-impact content that
                resonates with target audiences, meets brand objectives, and
                stays on schedule and budget.
              </p>
            </div>

            <div className="mt-7 space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-[0.1em] text-white/90 md:text-lg">
                Key Responsibilities
              </h2>
              <ul className="space-y-2 text-sm leading-7 text-white/85 md:text-base">
                {responsibilities.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/20 bg-black/15 backdrop-blur-md">
            <div className="h-[520px] md:h-[620px]">
              <CircularGallery
                items={galleryItems}
                bend={2.3}
                textColor="#ffe2d9"
                borderRadius={0.06}
                font="bold 30px Geist Sans"
                scrollSpeed={1.8}
                scrollEase={0.06}
                autoScrollSpeed={0.12}
              />
            </div>
          </div>
        </div>
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

      <footer className="relative z-10 w-full pb-8 pt-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70 md:text-sm">
          . Ei Shwe Sin Thant . Miki Anna . Copyright 2026 .
        </p>
      </footer>
    </main>
  );
}
