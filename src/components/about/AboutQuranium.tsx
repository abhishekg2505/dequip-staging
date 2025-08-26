"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutQuranium = () => {
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
    <div ref={sectionRef} className="pt-[131px] md:text-left">
      <h3 ref={mainTitleRef} className="text-left text-h4 md:text-h3 font-montserrat font-semibold">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          About Quranium
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-[15px]">
        {/* Left Side */}
        <div className="relative z-10">
          <p ref={headingRef} className="text-p3 md:text-p2 font-open-sans mb-[20px]">
            Quranium is the{" "}
            <strong>
              Convergence Layer: a quantum-secure, AI-native, EVM-compatible Layer-1 blockchain
              infrastructure
            </strong>{" "}
            built to scale, automate, and secure the next era of the internet. Designed for the
            post-quantum world, Quranium combines advanced cryptography, intelligent on-chain logic,
            and seamless developer access to power the next wave of decentralized innovation. With
            its{" "}
            <strong>
              quantum-secure core, AI-native blockchain infrastructure, and QSafe Wallet -
              supporting over 70 networks
            </strong>{" "}
            - Quranium enables builders, enterprises, and users to thrive in a truly secure and
            intelligent digital ecosystem.
          </p>
          <p ref={heading2Ref} className="text-p3 md:text-p2 font-open-sans mb-[20px]">
            Strategic partners include <strong>PwC, QuantumBasel, and Galxe,</strong> and the
            project is backed by
            <strong> Animoca Brands</strong> and <strong>HyperScaled Ventures.</strong> Quranium
            launched its quantum-secure PoW blockchain in December 2024 and rolled out its PoS
            Convergence Layer and multichain QSafe Wallet in May 2025. Its growing ecosystem already
            spans 150,000+ community members, over 60 strategic partners, an over 1 million gamer
            alliance, 100+ AI-powered games, and over 20,000 daily transactions, with global
            traction across 50+ countries. Quranium is proud to collaborate with over 60 leading
            media partners across Web3, AI, and cybersecurity to raise awareness of the quantum
            threat and spotlight the builders of tomorrow&rsquo;s secure internet.
          </p>
          <Link ref={lineRef} href="https://www.quranium.org/" target="_blank">
            <Button variant="outline" className="group relative overflow-hidden">
              <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Learn More
              </span>
            </Button>
          </Link>
        </div>

        {/* Right Side - Video */}
        <div ref={cardsRef} className="flex flex-col mt-10 md:mt-0 relative w-full">
          <div className="max-w-[585px] mb-5  p-[20px_20px_40px] border border-[#1E1F23] bg-[url('/images/about/wire4.png')] bg-right-top bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
            <h3
              ref={mainTitleRef}
              className="text-left text-h5 md:text-h4 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Mentors
              </span>
            </h3>
            <h6 className="text-h6 font-montserrat font-medium text-left">Industry Experts</h6>
            <div className="flex flex-row gap-x-2 mt-5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                From AI, blockchain, quantum, fintech
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5 justify-start">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Matched to startups by expertise
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">Contribute 1 to 2 hours/week</p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5  justify-start">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Receive token allocations from startups
              </p>
            </div>
          </div>
          <div className="max-w-[585px] mb-5  p-[20px_20px_40px] border border-[#1E1F23] bg-[url('/images/about/wire5.png')] bg-right-top bg-size-[223px_auto] bg-no-repeat rounded-[10px]">
            <h3
              ref={mainTitleRef}
              className="text-left text-h5 md:text-h4 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Partners
              </span>
            </h3>
            <h6 className="text-h6 font-montserrat font-medium text-left">Ecosystem Enablers</h6>
            <div className="flex flex-row gap-x-2 mt-5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Provide services (cloud, legal, GTM, design)
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Act as operating partners or value partners
              </p>
            </div>
            <div className="flex flex-row gap-x-2 mt-1.5">
              <Image src="/images/about/star.svg" alt="star" width={10} height={10} />
              <p className="text-p2 text-[#D4D4D4] font-open-sans">
                Token allocations as incentives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuranium;
