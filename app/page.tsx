"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/TextType";
import FlowingMenu from "@/components/FlowingMenu";
import FlowingMenuStandard from "@/components/FlowingMenuStandard";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ei-shwe-sin-thant-miki-0370a019b/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com/ella.sinthant", label: "Facebook", Icon: Facebook },
  // { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
];

const brandItems = [
  { text: "Brand 01", image: "/brands/width_200.webp", link: "/project-highlight" },
  { text: "Brand 02", image: "/brands/width_225.webp", link: "/project-highlight" },
  { text: "Brand 03", image: "/brands/width_225%20(1).webp", link: "/project-highlight" },
  { text: "Brand 04", image: "/brands/width_225%20(2).webp", link: "/project-highlight" },
  { text: "Brand 05", image: "/brands/width_373.webp", link: "/project-highlight" },
  { text: "Brand 06", image: "/brands/width_500.webp", link: "/project-highlight" },
  { text: "Brand 07", image: "/brands/width_517.webp", link: "/project-highlight" },
  { text: "Brand 08", image: "/brands/width_800.webp", link: "/project-highlight" },
  { text: "Brand 09", image: "/brands/width_800%20(1).webp", link: "/project-highlight" },
  { text: "Brand 10", image: "/brands/width_800%20(2).webp", link: "/project-highlight" },
  { text: "Brand 11", image: "/brands/width_800%20(3).webp", link: "/project-highlight" },
  { text: "Brand 12", image: "/brands/width_800%20(4).webp", link: "/project-highlight" },
  { text: "Brand 13", image: "/brands/width_900.jpg", link: "/project-highlight" },
];

const projectItems = [
  {
    text: "Video & Photo Production",
    image: "/production/width_1200.webp",
    link: "/video-photo-production",
  },
  {
    text: "Project Highlight",
    image: "/highligh/width_800.webp",
    link: "/project-highlight",
  },
  {
    text: "Event Lead & Brand Activation",
    image: "/event/width_1200.webp",
    link: "/event-lead-brand-activation",
  },
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
          <nav className="flex items-center gap-4 text-xs font-medium sm:gap-7 sm:text-sm">
            <Link href="#about-me">About Me</Link>
            <Link href="#worked-with">Worked With</Link>
            <Link href="#brand-project">Brand Project</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15"
          >
            Contact
          </Link>
        </div>
      </header>

      <section
        id="about-me"
        className="mx-auto grid min-h-screen scroll-mt-24 w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 text-white md:grid-cols-2 md:px-10"
      >
        <div ref={contentRef} className="space-y-6 font-sans">
          <p className="text-sm font-medium tracking-wide text-white/90 md:text-base">
            IM ei shwe sin that
          </p>
          <h1 className="min-h-[4rem] text-3xl font-semibold leading-[1.1] tracking-tight text-[#ffe2d9] md:min-h-[5rem] md:text-4xl">
            <TextType 
              text={["Ei Shwe Sin Thant"]}
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
          <p className="text-base font-semibold uppercase tracking-[0.08em] text-white/90 md:text-2xl">
            Production Freelancer
          </p>
          <p className="max-w-xl text-sm leading-7 text-white/80 md:text-base">
          A dynamic professional with 5 years of experience in event management and
video production, specializing in brand marketing. Led diverse events including
corporate functions (gala dinners, networking, CSR events), public activations
(bazaar events, EDM festivals, product launches), and shop openings.
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
              src="/profile/mikiImage.jpg"
              alt="Ei Shwe Sin Thant portrait placeholder"
              width={800}
              height={1000}
              className="h-[460px] w-full rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section id="brand-project" className="w-full scroll-mt-24 border-y border-white/20 text-white">
        <div className="h-[100px] overflow-hidden border-y border-white/20 md:h-[190px]">
          <FlowingMenuStandard
            items={projectItems}
            speed={14}
            textColor="#f8f1ef"
            marqueeBgColor="#f2d8d0"
            marqueeTextColor="#1a1210"
            borderColor="rgba(255,255,255,0.2)"
            compact
          />
        </div>
      </section>

      <section id="worked-with" className="w-full scroll-mt-24 pb-20 text-white">
        <div className="h-[100px] overflow-hidden border-y border-white/25 md:h-[170px]">
          <FlowingMenu
            items={brandItems}
            speed={16}
            hoverLabel="PROJECT & BRAND I WORKED WITH"
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

      <footer id="contact" className="w-full scroll-mt-24 pb-8 pt-2 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70 md:text-sm">
          . Ei Shwe Sin Thant . Miki Anna . Copyright 2026 .
        </p>
      </footer>
    </main>
  );
}
