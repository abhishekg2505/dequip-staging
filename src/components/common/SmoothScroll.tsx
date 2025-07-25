// "use client";

// import { ReactNode, useEffect, useRef } from "react";
// import Lenis from "lenis";
// import "lenis/dist/lenis.css";

// const SmoothScroll = ({ children }: { children: ReactNode }) => {
//   const lenisRef = useRef<Lenis | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const lenis = new Lenis({
//         duration: 1.2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         touchMultiplier: 2,
//         infinite: false,
//       });

//       lenisRef.current = lenis;

//       const raf = (time: number) => {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//       };

//       requestAnimationFrame(raf);

//       return () => {
//         lenis.destroy();
//       };
//     }
//   }, []);

//   return <>{children}</>;
// };

// export default SmoothScroll;

"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      // ✅ Attach Lenis to global window object
      (window as any).lenis = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
