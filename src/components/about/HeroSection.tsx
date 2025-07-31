"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface ThreatCardProps {
  title: string;
  desc: string;
  imageUrl: string;
  imagepos: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "DeQUIP50",
    desc: "Top 50 selected startups receive personalized incubation, direct investment, access to Quranium infrastructure, and Demo Day exposure.",
    imageUrl: "/images/about/wire1.png",
    imagepos: "bg-right-bottom",
  },
  {
    title: "QGrants",
    desc: "For promising teams outside the incubator cohort. One-time grants, mentor access, partner perks, and early re-application access.",
    imageUrl: "/images/about/wire2.png",
    imagepos: "bg-right-bottom",
  },
  {
    title: "QNet Access",
    desc: "For builders who never stop building. Paid membership for expert calls, investor intros, masterclasses, founder matchmaking, and insider insights, all for $1/min in $QRN.",
    imageUrl: "/images/about/wire3.png",
    imagepos: "bg-left-bottom",
  },
];
const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="scroll-mt-24 rounded-[20px] pb-10 pt-[120px] px-4 md:px-20 bg-[url('/images/homepage/hero-gradient.webp')]  bg-contain bg-right-top bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-10 text-center md:text-left ">
          {/* Left Side */}
          <div className="relative">
            <h3
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold"
            >
              <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Program Structure
              </span>
            </h3>

            <p className="text-p2 font-open-sans mt-[15px] mb-[20px]">
              DeQUIP 50 is more than your average incubator; it&rsquo;s a full-stack incubator.{" "}
              <br />
              It is split into 3 tiers.
            </p>
            <Link href="#" target="_blank">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  Apply Now
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative gap-x-5 gap-y-5">
            {threats.map((threat, index) => (
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                key={index}
                className="group perspective"
              >
                <div className="relative w-full h-[300px] md:h-[365px] bg-card-gradient p-[1px] rounded-[10px]">
                  <div
                    className={`bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out ${threat.imagepos} bg-size-[223px_auto] bg-no-repeat`}
                    style={{ backgroundImage: `url(${threat.imageUrl})` }}
                  >
                    <h6 className="text-h6 font-montserrat font-medium mb-2.5">
                      <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                        {threat.title}
                      </span>
                    </h6>
                    <p className="text-p3 font-open-sans leading-normal text-[#EAEAEA]">
                      {threat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
