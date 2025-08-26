"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  image: string;
  title: string;
  desc: string;
}

const threats: ThreatCardProps[] = [
  {
    image: "/images/about/incubator.svg",
    title: "Designs, funds, and runs",
    desc: "the incubator",
  },
  {
    image: "/images/about/qremix.svg",
    title: "Supports via QVM, QSafe,",
    desc: "QRemix AI",
  },
  {
    image: "/images/about/access.svg",
    title: "Hosts Demo Day +",
    desc: "provides 1:1 investor access",
  },
  {
    image: "/images/about/projects.svg",
    title: "Grants and integrates",
    desc: "selected projects",
  },
];

const BehindDequipCards: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);

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
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-4 justify-center gap-x-5 gap-y-5 mt-[60px]"
    >
      {threats.map((threat, index) => (
        <div
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          key={index}
          className="group perspective"
        >
          <div className="relative w-full h-[186px] bg-card-gradient p-[1px] rounded-[10px]">
            <div className="bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-center text-center transition-colors duration-300 ease-in-out">
              <Image src={threat.image} alt={threat.image} width={64} height={64} />
              <h6 className="text-h6 font-montserrat font-medium mt-5">
                <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  {threat.title}
                </span>
              </h6>
              <h6 className="text-h6 font-montserrat font-medium">{threat.desc}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BehindDequipCards;
