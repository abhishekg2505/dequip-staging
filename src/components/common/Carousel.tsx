"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CarouselProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

const Carousel = ({ children, direction = "left", speed = 20 }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const distance = direction === "left" ? -totalWidth : totalWidth;

    tweenRef.current = gsap.to(track, {
      x: distance,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const mod = parseFloat(x) % totalWidth;
          return direction === "left" ? mod : mod - totalWidth;
        }),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [direction, speed]);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <div className="relative w-full overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
      {/* Gradient Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

      {/* Gradient Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling Track */}
      <div ref={trackRef} className="flex whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
