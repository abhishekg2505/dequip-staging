"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  desc: string;
  pillbtn: string;
  url: string;
  imageurl: string;
  imagepos: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "Apply to DeQUIP 50",
    desc: "If you’re building quantum-ready, AI-native, or uncrackable infrastructure, apply to be part of the first 50.",
    pillbtn: "Apply Now",
    url: "#",
    imageurl: "/images/contact/tl1.png",
    imagepos: "right bottom",
  },
  {
    title: "Become a Mentor",
    desc: "Contribute 1–2 hours/week to help shape the next generation of innovation. All mentors receive token exposure.",
    pillbtn: "Become a Mentor",
    url: "#",
    imageurl: "/images/contact/tl2.png",
    imagepos: "right bottom",
  },
  {
    title: "Become a Partner",
    desc: "Support founders with your tools, services, or reach, and gain early access to high-growth opportunities.",
    pillbtn: "Become a Partner",
    url: "#",
    imageurl: "/images/contact/tl3.png",
    imagepos: "left bottom",
  },
  {
    title: "Join QNet Club",
    desc: "Not selected but still want in? Get the next-best seat in the house with weekly insights, 1:1 mentor calls, and community networking for just $1/min.",
    pillbtn: "Join Now",
    url: "#",
    imageurl: "/images/contact/tl4.png",
    imagepos: "left bottom",
  },
  {
    title: "Stay In the Loop",
    desc: `Want exclusive DeQUIP news, upcoming cycle alerts, and founder tips?
Subscribe to Pulse, Quranium’s monthly newsletter that keeps the future close.
`,
    pillbtn: "Subscribe",
    url: "#",
    imageurl: "/images/contact/tl4.png",
    imagepos: "left bottom",
  },
];

const HowToInvolved: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = gsap.utils.toArray(".buttonsanim a");
      gsap.set(buttons, { y: 20, opacity: 0 });
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
      gsap.to(buttons, {
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
    <section
      ref={sectionRef}
      className="relative px-4 md:px-20 pb-[236px] pt-[160px] text-white overflow-hidden bg-[url('/images/contact/lights.webp')]  bg-contain bg-center-top bg-no-repeat"
    >
      <div className="absolute right-0 top-0">
        <Image src="/images/common/bg/lights.webp" alt="Lights" width={683} height={1157} />
      </div>
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h3
          ref={mainTitleRef}
          className="text-center text-h4 md:text-h3 font-montserrat font-semibold"
        >
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Contact Us
          </span>
        </h3>
        <h5 ref={para1Ref} className="text-p2 font-open-sans text-center mt-2.5">
          How to get involved
        </h5>
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mt-[60px]">
          {threats.map((threat, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="group perspective"
            >
              <div className="relative w-full h-[520px] bg-card-gradient p-[1px] rounded-[10px]">
                <div
                  className="bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out bg-size-[223px_auto] bg-no-repeat"
                  style={{
                    backgroundImage: `url(${threat.imageurl})`,
                    backgroundPosition: `${threat.imagepos}`,
                  }}
                >
                  <h6 className="text-h6 font-montserrat font-medium mt-2.5">
                    <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                      {threat.title}
                    </span>
                  </h6>
                  <p className="text-h6 font-open-sans font-normal text-[#EAEAEA] mt-5 h-[200px]">
                    {threat.desc}
                  </p>
                  <Link href={threat.url}>
                    <Button variant="outline" className="group relative overflow-hidden mt-[67px]">
                      <span className="text-p3 font-open-sans bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                        {threat.pillbtn}
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttonsanim flex flex-col items-center justify-center gap-x-4 gap-y-4 mt-[60px]">
          <h5 className="text-h5 text-center font-montserrat font-medium">
            <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
              Have questions? Want to get involved in another way?
            </span>
          </h5>
          <Link href="#" target="_blank">
            <Button variant="outline" className="group relative overflow-hidden">
              <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Connect with DeQUIP50 team
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToInvolved;
