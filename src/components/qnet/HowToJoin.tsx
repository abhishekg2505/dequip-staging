"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowToJoin = () => {
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
    <div ref={sectionRef} className="container pt-[90px] md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-[15px]">
        {/* Left Side */}
        <div ref={mainTitleRef} className="relative z-10">
          <div className="max-w-[585px] mb-5  p-[20px_20px_40px] border border-[#1E1F23] bg-[url('/images/about/wire4.png')] bg-right-top bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
            <h3
              ref={mainTitleRef}
              className="text-left text-h5 md:text-h4 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Membership Details
              </span>
            </h3>
            <div className="flex flex-row gap-x-2 mt-5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                QNet Price: $1/min for mentor calls
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5 justify-start">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Membership Model: Annual, rolling, or per-month access
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Mentor Sessions: Paid in $QRN tokens (wallet required)
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5  justify-start">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                No strings. No BS. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div ref={cardsRef} className="flex flex-col mt-10 md:mt-0 relative w-full">
          <div className="max-w-[585px] mb-5  p-[20px_20px_40px] border border-[#1E1F23] bg-[url('/images/about/wire5.png')] bg-right-top bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
            <h3
              ref={mainTitleRef}
              className="text-left text-h5 md:text-h4 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                How to Join QNet
              </span>
            </h3>
            <p className="text-h5 font-montserrat font-semibold">
              Joining is easy and instant. Here&rsquo;s how
            </p>
            <div className="flex flex-row gap-x-2 mt-5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans font-bold">
                <span className="block font-normal">Complete the QNet Membership Form (below)</span>
                Apply to Join QNet
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                <span className="block font-normal">Then, Set Up Your QSafe Wallet </span>
                Download QSafe Wallet
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                <span className="block font-normal">Top Up with $QRN Tokens</span>
                Used for mentor sessions, community rewards, and perks.
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                <span className="block font-normal">Get Access to Discord + QNet Portal</span>
                Instantly connect to mentors, perks, and upcoming drops
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                <span className="block font-normal">Book Calls, Join Classes, Grow Smarter</span>
                Your future just got a little more quantum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToJoin;
