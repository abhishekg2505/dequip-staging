"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.05,
        //ease: "power1.inOut",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none w-4 h-4 bg-[#ffffff9a] rounded-full mix-blend-difference1 transition-transform duration-200"
    />
  );
}
