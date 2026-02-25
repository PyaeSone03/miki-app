"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
];

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 text-white backdrop-blur-xl">
          <span className="text-sm font-semibold tracking-[0.18em]">MIKI</span>
          <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Work</Link>
          </nav>
          <button className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15">
            Contact
          </button>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 text-white md:grid-cols-2 md:px-10">
        <div className="space-y-6">
          <p className="text-lg font-medium">Hello,</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Ei Shwe Sin Thant
          </h1>
          <h2 className="text-lg text-white/85 md:text-xl">
            Event and Production Freelancer
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/80 md:text-base">
            A dynamic professional with 5 years of experience in event
            management and video production, specializing in brand marketing.
            Led diverse events including corporate functions (gala dinners,
            networking, CSR events), public activations (bazaar events, EDM
            festivals, product launches), and shop openings.
          </p>
          <div className="space-y-2 text-sm text-white/85 md:text-base">
            <p>📍 Based in Myanmar</p>
            <p>📧 eishwesinthant98@gmail.com</p>
            <p>📞 +959 421 127 945</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-3xl border border-white/30 bg-black/20 p-4 backdrop-blur-md">
            <Image
              src="/window.svg"
              alt="Ei Shwe Sin Thant portrait placeholder"
              width={800}
              height={1000}
              className="h-[420px] w-full rounded-2xl bg-white/10 object-contain p-12"
            />
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
    </main>
  );
}
