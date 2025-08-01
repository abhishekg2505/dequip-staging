"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const IncubatorSection = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const buttonRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.from(para3Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });
      gsap.from(rightCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="scroll-mt-24 mt-10 px-4 md:px-20 ">
        <div className="relative container py-[120px] mx-auto px-0 bg-[url('/images/homepage/incubator.webp')] bg-cover bg-left">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 ref={mainTitleRef} className="text-white text-h4 md:text-h3 font-semibold">
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Most incubators help you launch an app
              </span>
            </h2>
            <div className="max-w-[959px] mx-auto mt-[10px]">
              <h3 ref={paraRef} className="text-[#CDCDCD] text-h4 font-montserrat font-semibold">
                Our &rsquo;Incubator&rsquo; helps you build the next layer of the internet
              </h3>
              <p ref={para2Ref} className="text-p2 font-open-sans text-[#D4D4D4]">
                DeQUIP challenges outdated assumptions and empowers bold founders to architect
                systems that can withstand quantum attacks, AI acceleration, and complex
                decentralization. To build in the age of Web3 and quantum, you must build DeQUIP.
              </p>
              <p ref={para3Ref} className="text-p2 font-open-sans italic text-[#D4D4D4] mt-[16px]">
                If your idea deserves a future, DeQUIP is where it begins.
              </p>
            </div>
            <div ref={rightCardRef} className="mt-6 text-center w-full flex justify-center">
              <Link href="#" target="_blank">
                <Button variant="outline" className="group relative overflow-hidden">
                  <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                    Apply Now
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubatorSection;
