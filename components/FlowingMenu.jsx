"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * @typedef {{ text: string; image: string; link: string }} FlowItem
 */

/**
 * @param {{
 * items?: FlowItem[];
 * speed?: number;
 * hoverLabel?: string;
 * textColor?: string;
 * }} props
 */
function FlowingMenu({
  items = [],
  speed = 14,
  hoverLabel = "Brands I Worked With",
  textColor = "#f8f1ef",
}) {
  const containerRef = useRef(null);
  const firstSetRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const setupAnimation = () => {
      if (!firstSetRef.current || !trackRef.current) return;
      const oneSetWidth = firstSetRef.current.offsetWidth;
      if (!oneSetWidth) return;

      if (animationRef.current) animationRef.current.kill();
      gsap.set(trackRef.current, { x: 0 });
      animationRef.current = gsap.to(trackRef.current, {
        x: -oneSetWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => {
      window.removeEventListener("resize", setupAnimation);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [items, speed]);

  useEffect(() => {
    if (!animationRef.current) return;
    if (isHovered) {
      animationRef.current.pause();
    } else {
      animationRef.current.resume();
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className={`absolute inset-0 flex items-center ${isHovered ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      >
        <div ref={firstSetRef} className="flex shrink-0 items-center gap-5 pr-5 md:gap-6 md:pr-6">
          {items.map((item, index) => (
            <a
              key={`set-a-${item.text}-${index}`}
              href={item.link}
              className="flex items-center gap-4 px-1 transition-transform hover:scale-[1.02]"
              aria-label={item.text}
            >
              <div
                className="h-[78px] w-[160px] shrink-0 rounded-xl bg-transparent bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
              />
              <span className="text-2xl leading-none text-white/25">.</span>
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-5 pr-5 md:gap-6 md:pr-6">
          {items.map((item, index) => (
            <a
              key={`set-b-${item.text}-${index}`}
              href={item.link}
              className="flex items-center gap-4 px-1 transition-transform hover:scale-[1.02]"
              aria-label={item.text}
            >
              <div
                className="h-[78px] w-[160px] shrink-0 rounded-xl bg-transparent bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
              />
              <span className="text-2xl leading-none text-white/25">.</span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      >
        <p
          className="whitespace-nowrap text-center text-sm font-semibold uppercase tracking-[0.14em] md:text-xl"
          style={{ color: textColor }}
        >
          {hoverLabel}
        </p>
      </div>
    </div>
  );
}

export default FlowingMenu;
