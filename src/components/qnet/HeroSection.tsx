"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const headingRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".cardsAnim");
      gsap.set(cards, { y: 20, opacity: 0 });
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
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
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
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.15,
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="scroll-mt-24 rounded-[20px] pb-10 pt-[170px] px-4 md:px-20 bg-[url('/images/homepage/hero-gradient.webp')]  bg-contain bg-right-top bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black z-[0] bg-[url('/images/common/bg/stars.png')]  bg-contain bg-top bg-no-repeat" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-10 text-center md:text-left ">
          {/* Left Side */}
          <div className="relative">
            <Image
              ref={logoRef}
              src="/images/about/qnet.svg"
              alt="QNet Logo"
              width={162}
              height={59}
              className="mb-5 mx-auto md:mx-0"
            />
            <h3
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Membership for Builders
              </span>
            </h3>

            <p ref={headingRef} className="text-p2 font-open-sans mt-[15px] mb-[20px]">
              Access to the best minds in Web3, for the founder who never stops building
            </p>
            <Link ref={buttonRef} href="#qnet-form">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Apply Now
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="grid grid-cols-1 relative gap-x-5 gap-y-5">
            <div className="group perspective cardsAnim">
              <div className="relative max-w-[630px]  bg-card-gradient p-[1px] rounded-[10px]">
                <div className="bg-[#020309] p-5 md:px-[40px] md:pt-[30px] md:pb-[60px] h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out bg-[url('/images/about/string1.png')] bg-right-bottom bg-size-[100px_auto] bg-no-repeat">
                  <p className="text-p3 font-open-sans leading-normal text-[#EAEAEA]">
                    Not every startup will be incubated. But if you&rsquo;re serious about building
                    uncrackable, AI-native, decentralized systems, we still want you in the room.
                    The QNet Club is Quranium&rsquo;s exclusive membership tier for visionary
                    builders who want knowledge, connections, and momentum, even if they&rsquo;re
                    not part of the DeQUIP 50 cohort.
                  </p>
                  <p className="text-p3 font-open-sans leading-normal text-[#EAEAEA] mt-5">
                    You don&rsquo;t need a grant or investment to be part of this ecosystem. Just
                    commitment. Curiosity. And a buck a minute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
