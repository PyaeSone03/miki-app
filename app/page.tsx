"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/TextType";
import FlowingMenu from "@/components/FlowingMenu";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ei-shwe-sin-thant-miki-0370a019b/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com/ella.sinthant", label: "Facebook", Icon: Facebook },
  // { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
];

const brandItems = [
  { text: "Amazon", image: "/brands/amazon-logo.png", link: "#" },
  { text: "Barbie", image: "/brands/barbie-logo.png", link: "#" },
  { text: "FedEx", image: "/brands/fedex-logo.png", link: "#" },
  { text: "Lego", image: "/brands/lego-logo_38167ed5cb.jpg", link: "#" },
  { text: "Marvel", image: "/brands/marvel-logo.png", link: "#" },
  { text: "Mercedes", image: "/brands/mercedes-logo.png", link: "#" },
  { text: "National Geographic", image: "/brands/national-geographic-logo.png", link: "#" },
  { text: "Coca-Cola", image: "/brands/Coca-Cola_logo.svg_.png", link: "#" },
  { text: "Shell", image: "/brands/shell-logo.png", link: "#" },
  { text: "NASA", image: "/brands/nasa-curvy-logo.png", link: "#" },
];

export default function Page() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen">
      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 text-white backdrop-blur-xl">
          <span className="text-sm font-semibold tracking-[0.18em]">MIKI</span>
          <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <Link href="#">About Me</Link>
            <Link href="#">Work</Link>
          </nav>
          <button className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15">
            Contact
          </button>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 text-white md:grid-cols-2 md:px-10">
        <div ref={contentRef} className="space-y-6 font-sans">
          <p className="text-sm font-medium tracking-wide text-white/90 md:text-base">
            Hello,
          </p>
          <h1 className="min-h-[4rem] text-3xl font-semibold leading-[1.1] tracking-tight text-[#ffe2d9] md:min-h-[5rem] md:text-4xl">
            <TextType
              text={["Ei Shwe Sin Thant", "Miki Anna", 'Ei Shwe Sin Thant']}
              loop={false}
              finalText="Ei Shwe Sin Thant"
              typingSpeed={70}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={45}
              cursorBlinkDuration={0.5}
            />
          </h1>
          <h2 className="font-serif text-base font-semibold uppercase tracking-[0.08em] whitespace-nowrap text-white/90 md:text-2xl">
            Event and Production Freelancer
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/80 md:text-base">
            Event and production freelancer with 5 years of experience in
            brand-focused marketing and content. Delivered corporate events
            (gala dinners, networking, CSR), public activations (bazaars, EDM
            festivals, product launches), and shop openings from concept to
            execution.
          </p>
          <div>
            <Link
              href="/video-photo-production"
              className="inline-flex items-center rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
            >
              Video &amp; Photo Production
            </Link>
          </div>
        </div>

        <div ref={imageRef} className="mx-auto w-full max-w-md md:justify-self-end">
          <div className="overflow-hidden rounded-3xl border border-white/30 bg-black/20 p-4 backdrop-blur-md">
            <Image
              src="/jisoo.jpg"
              alt="Ei Shwe Sin Thant portrait placeholder"
              width={800}
              height={1000}
              className="h-[460px] w-full rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="w-full pb-20 text-white">
        <div className="h-[220px] overflow-hidden border-y border-white/25 md:h-[260px]">
          <FlowingMenu
            items={brandItems}
            speed={16}
            hoverLabel="BRANDS I’VE WORKED WITH"
            textColor="#f8f1ef"
          />
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

      <footer className="w-full pb-8 pt-2 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70 md:text-sm">
          . Ei Shwe Sin Thant . Miki Anna . Copyright 2026 .
        </p>
      </footer>
    </main>
  );
}
