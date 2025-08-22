"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PartnerMessageBox = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const heading2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.from(heading2Ref.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate gradient line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
        },
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container px-4 md:px-20 pb-[120px] md:text-left">
      <div className="grid grid-cols-1 gap-x-20 mt-[15px]">
        {/* Left Side */}
        <div ref={mainTitleRef} className="relative z-10">
          <div className="w-full mb-5  p-[20px_20px_40px] border border-[#1E1F23] bg-[url('/images/homepage/tl1.png')] bg-right-bottom bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
            <p ref={mainTitleRef} className="text-left text-p3 font-open-sans font-normal">
              Once submitted, our team will review your application and reach out within 1 to 2
              weeks to schedule a discovery call and confirm your onboarding. Welcome to the
              quantum-secure frontier.
            </p>
            <p
              ref={headingRef}
              className="text-left text-p3 font-open-sans font-normal italic mt-5 mb-10"
            >
              Want to stay ahead of the next cycle? Subscribe to Pulse for early partner updates,
              founder spotlights, and invites.
            </p>
            <Link ref={heading2Ref} href="#" className="">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Questions? Reach out to us
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMessageBox;
