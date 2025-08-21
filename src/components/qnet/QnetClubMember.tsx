"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  gradientText: string;
  simpleText: string;
  imageurl: string;
  imagepos: string;
  description: string;
  subDescription: string;
}

const threats: ThreatCardProps[] = [
  {
    gradientText: "1:1 Mentorship",
    simpleText: "On-Demand",
    imageurl: "/images/homepage/tl1.png",
    imagepos: "right bottom",
    description:
      "Book expert sessions from Quranium’s deep bench of advisors, on AI, blockchain, fundraising, security, GTM, legal and more.",
    subDescription: "Only $1/min, paid in $QRN.",
  },
  {
    gradientText: "Weekly Intelligence",
    simpleText: "Drops",
    imageurl: "/images/homepage/tl2.png",
    imagepos: "right bottom",
    description:
      "Stay sharp with exclusive insights on quantum, AI, Web3, and funding trends, direct to your inbox and Discord.",
    subDescription: "",
  },
  {
    gradientText: "Monthly",
    simpleText: "Masterclasses",
    imageurl: "/images/homepage/tl3.png",
    imagepos: "left bottom",
    description:
      "Live sessions with top mentors and operators. Ask questions. Make connections. Grow faster.",
    subDescription: "",
  },
  {
    gradientText: "Founder",
    simpleText: "Matchmaking",
    imageurl: "/images/homepage/tl4.png",
    imagepos: "left bottom",
    description:
      "We help you find the right people, whether that’s a co-founder, CTO, design lead, tokenomics wizard, or VCs who get it.",
    subDescription: "",
  },
  {
    gradientText: "Partner Discounts &",
    simpleText: "Templates",
    imageurl: "/images/homepage/tl5.png",
    imagepos: "right bottom",
    description:
      "Access playbooks, legal boilerplates, token design frameworks, GTM maps, and discounts from DeQUIP partners (cloud, dev tools, more).",
    subDescription: "",
  },
  {
    gradientText: "Early Access to",
    simpleText: "DeQUIP Calls & Cycles",
    imageurl: "/images/homepage/tl3.png",
    imagepos: "right bottom",
    description:
      "Get first-in-line alerts for future DeQUIP 50 applications, hackathons, grants, and invite-only events. Community & Networking Channels",
    subDescription: "",
  },
];

const QnetClubMember: React.FC = () => {
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
      className="relative px-4 md:px-20  pt-[160px] bg-black text-white overflow-hidden"
    >
      <div className="absolute right-0 top-0">
        <Image src="/images/common/bg/lights.webp" alt="Lights" width={683} height={1157} />
      </div>
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h3
          ref={mainTitleRef}
          className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold"
        >
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            What You Get as a QNet Club Member
          </span>
        </h3>
        <h5 ref={para1Ref} className="text-p2 font-open-sans  mt-2.5">
          All members unlock an expanding suite of builder-first benefits
        </h5>
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, FreeMode, Mousewheel]}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 1,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            speed={7000}
            loop={false}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
            }}
            className="my-linear-swiper overflow-hidden1 flex mt-10 "
          >
            {threats.map((threat, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  key={index}
                  className="group perspective"
                >
                  <div className="relative w-full h-[420px] bg-card-gradient p-[1px] rounded-[10px]">
                    <div
                      className="bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out bg-size-[223px_auto] bg-no-repeat"
                      style={{
                        backgroundImage: `url(${threat.imageurl})`,
                        backgroundPosition: `${threat.imagepos}`,
                      }}
                    >
                      <h6 className="text-h6 font-montserrat font-medium">
                        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                          {threat.gradientText}
                        </span>
                      </h6>
                      <h6 className="text-h6 font-montserrat font-medium mb-5">
                        {threat.simpleText}
                      </h6>
                      <p>{threat.description}</p>
                      <p>{threat.subDescription}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            {/* <div className="swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveLeft className="text-white" />
            </div> */}

            {/* Right Arrow */}
            {/* <div className="swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveRight className="text-white" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QnetClubMember;
