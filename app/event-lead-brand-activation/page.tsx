import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import CircularGallery from "@/components/CircularGallery";

const recapVideoUrl = "https://www.facebook.com/share/v/1BTPg4BdZi/?mibextid=wwXIfr";

const galleryItems = [
  { image: "/brands/mercedes-logo.png", text: "Main Stage" },
  { image: "/brands/marvel-logo.png", text: "Audience Buzz" },
  { image: "/brands/fedex-logo.png", text: "Brand Activation" },
  { image: "/brands/shell-logo.png", text: "Interactive Zone" },
  { image: "/brands/barbie-logo.png", text: "Entertainment" },
  { image: "/brands/lego-logo_38167ed5cb.jpg", text: "Event Moment" },
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

export default function EventLeadBrandActivationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,182,164,0.18),transparent_45%),radial-gradient(circle_at_82%_28%,rgba(138,168,227,0.15),transparent_42%),linear-gradient(140deg,rgba(12,11,16,0.94),rgba(18,12,24,0.9))]" />
      </div>

      <header className="fixed inset-x-0 top-4 z-20 px-4 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/30 bg-black/30 px-4 text-white backdrop-blur-xl">
          <span className="text-sm font-semibold tracking-[0.18em]">MIKI</span>
          <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <Link href="/">Home</Link>
            <Link href="/event-lead-brand-activation">Event Lead &amp; Brand Activation</Link>
          </nav>
          <Link
            href="/"
            className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white/15"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-32 md:px-10">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/20 bg-black/20 p-6 backdrop-blur-md md:grid-cols-[1fr_1.1fr] md:gap-10 md:p-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Project Highlight
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[#ffe2d9] md:text-5xl">
              Meizu - Back To WOW Product Launch
            </h1>
            <p className="max-w-xl text-sm leading-7 text-white/85 md:text-base">
              A successful brand revival event blending nostalgia, fun, and
              tech. Artists shared personal Meizu memories, reviewed each other
              on stage, and created emotional, engaging moments. Interactive
              zones and entertaining content generated strong audience
              connection and social media buzz, making the launch truly
              memorable.
            </p>
            <Link
              href={recapVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
            >
              Open on Facebook
            </Link>
          </div>

          <div className="flex min-h-[340px] flex-col justify-center rounded-2xl border border-white/20 bg-black/30 p-6 md:min-h-[420px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Recap Video
            </p>
            <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
              The embedded video is hidden on this view. Open the official recap
              directly on Facebook.
            </p>
            <div className="mt-6">
              <Link
                href={recapVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                Watch Recap Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full pb-8">
        <div className="h-[68vh] min-h-[500px] w-full overflow-hidden border-y border-white/20">
          <CircularGallery
            items={galleryItems}
            bend={2.1}
            textColor="#ffe2d9"
            borderRadius={0.06}
            font="bold 28px Geist Sans"
            scrollSpeed={1.8}
            scrollEase={0.06}
            autoScrollSpeed={0.1}
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

      <footer className="relative z-10 w-full pb-8 pt-2 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70 md:text-sm">
          . Ei Shwe Sin Thant . Miki Anna . Copyright 2026 .
        </p>
      </footer>
    </main>
  );
}
