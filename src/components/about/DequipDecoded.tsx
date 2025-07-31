"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DequipDecoded = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

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
    <div ref={sectionRef} className="relative px-4 md:px-20 pt-[150px] md:pt-[273px] pb-[250px]">
      <div className="absolute left-0 bottom-32">
        <Image
          src="/images/about/ringleft.png"
          alt="Ring Left"
          width={200}
          height={398}
          className="w-[125px] h-[215px] md:w-[200px] md:h-[398px]"
        />
      </div>
      <div className="absolute right-0 top-0 md:top-32">
        <Image
          src="/images/about/ringright.png"
          alt="Ring Right"
          width={172}
          height={333}
          className="w-[125px] h-[215px] md:w-[172px] md:h-[333px]"
        />
      </div>
      <div className="absolute left-0 md:left-[272px] top-0 md:top-[176px]">
        <Image
          src="/images/about/ringtop.png"
          alt="Ring Top"
          width={110}
          height={121}
          className="w-[83px] h-[75px] md:w-[110px] md:h-[121px]"
        />
      </div>
      <div className="absolute right-[40px] md:right-[80px] bottom-[150px]">
        <Image
          src="/images/about/ringbottom.png"
          alt="Ring Bottom"
          width={121}
          height={110}
          className="w-[75px] h-[75px] md:w-[121px] md:h-[110px]"
        />
      </div>
      <div className="max-w-[1077px] mx-auto grid grid-cols-1 gap-y-10 gap-x-20 text-center">
        {/* Left Side */}
        <div className="relative z-10">
          <h3
            ref={mainTitleRef}
            className="text-center text-h4 md:text-h3 font-montserrat font-semibold"
          >
            <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
              DeQUIP Decoded
            </span>
          </h3>
          <h4 className="text-center text-h5 md:text-h4 font-montserrat font-semibold mt-[10px]">
            This isn&rsquo;t just a label. It&rsquo;s a movement.
          </h4>

          <p className="text-p4 text-[#EAEAEA] font-open-sans mt-[15px] mb-[20px]">
            DeQUIP stands for Decentralized Quantum-uncrackable Infrastructure Protocol, a new
            category coined by Quranium to define the next generation of truly secure digital
            systems. It represents the shift from vulnerable Web3 infrastructure to architecture
            that is quantum-ready, AI-native, and fundamentally uncrackable.
          </p>
          <div
            className="p-5 border border-[#1E1F23] bg-no-repeat bg-[length:150px_auto,223px_auto] bg-[position:bottom_left,bottom_right] rounded-[10px] mb-10"
            style={{
              backgroundImage: "url('/images/about/wire6.png'), url('/images/about/wire7.png')",
            }}
          >
            <p className="text-p4 text-[#EAEAEA] font-open-sans">
              The DeQUIP 50 Incubator embodies this vision in supporting startups that are not only
              building applications, but reshaping the infrastructure of the future. To build in the
              age of web3 and quantum, you must build DeQUIP.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4">
            <Link href="#" target="_blank">
              <Button className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat text-[#000000]">
                  Apply Now (DeQUIP 50)
                </span>
              </Button>
            </Link>
            <Link href="#" target="_blank">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Become a Mentor
                </span>
              </Button>
            </Link>
            <Link href="#" target="_blank">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Partner With Us
                </span>
              </Button>
            </Link>
            <Link href="#" target="_blank">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Subscribe to Pulse
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DequipDecoded;
