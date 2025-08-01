"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIsDequip = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

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
      gsap.from(paraRef.current, {
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
      gsap.from(btnRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
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
    <div
      id="strategic-partners"
      ref={sectionRef}
      className="scroll-mt-24 rounded-[20px] pb-10 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto py-[50px] md:py-20 px-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                What is DeQUIP50?
              </span>
            </h3>

            <p ref={paraRef} className="text-p2 font-open-sans mt-[15px] mb-[20px]">
              DeQUIP 50 is a high-intensity, multi-tiered startup InQubator for founders building at
              the intersection of blockchain, AI, and quantum-secure infrastructure.
            </p>
            <Link ref={btnRef} href="#" target="_blank">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Apply Now
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div ref={cardsRef} className="flex flex-col mt-10 md:mt-0 relative w-full">
            <p className="text-p2 text-[#D4D4D4] font-open-sans mb-5">
              We compress years of strategic refinement, technical hardening, mentorship, and
              go-to-market execution into 90 action-packed days. Whether you&rsquo;re pre-launch or
              product-ready, DeQUIP 50 is where bold founders become unstoppable.
            </p>
            <div className="max-w-[585px] mt-[15px]  p-[20px] border border-[#1E1F23] bg-[url('/images/homepage/wire2.png')] bg-right-bottom bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
              <p className="text-p3 text-[#D4D4D4] font-open-sans leading-normal text-left">
                Born from the DeQUIP movement (Decentralized Quantum-Uncrackable <br />
                Infrastructure Protocol), a new standard in secure, intelligent systems.
              </p>
              <p className="text-p3 text-[#D4D4D4] italic font-open-sans mt-5">
                It&rsquo;s not just a label. It&rsquo;s a category. And it&rsquo;s growing fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsDequip;
