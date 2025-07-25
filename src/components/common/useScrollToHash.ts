"use client";

import { useEffect } from "react";
export const useScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (!el) return;

      const lenis: any = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(el, { offset: 0 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Retry if element doesn't exist yet
    const interval = setInterval(() => {
      if (document.querySelector(hash)) {
        scrollToHash();
        clearInterval(interval);
      }
    }, 100);

    // Stop after 3 seconds
    setTimeout(() => clearInterval(interval), 3000);
  }, []);
};
