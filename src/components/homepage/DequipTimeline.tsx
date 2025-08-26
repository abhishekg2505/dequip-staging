"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  pillbtn: string;
  url: string;
  imageurl: string;
  imagepos: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "Application Open",
    pillbtn: "August 2025",
    url: "#",
    imageurl: "/images/homepage/tl1.png",
    imagepos: "right bottom",
  },
  {
    title: "Mentor & Partner Onboarding",
    pillbtn: "August & September 2025",
    url: "#",
    imageurl: "/images/homepage/tl2.png",
    imagepos: "right bottom",
  },
  {
    title: "Cohort Selection + Grant Review",
    pillbtn: "October 2025",
    url: "#",
    imageurl: "/images/homepage/tl3.png",
    imagepos: "left bottom",
  },
  {
    title: "12-Week Incubation Program",
    pillbtn: "October – December 2025",
    url: "#",
    imageurl: "/images/homepage/tl4.png",
    imagepos: "left bottom",
  },
  {
    title: "Demo Day + Investment Announcements",
    pillbtn: "January 2026",
    url: "#",
    imageurl: "/images/homepage/tl5.png",
    imagepos: "right bottom",
  },
  {
    title: "QNet Access, Next Cycles",
    pillbtn: "Ongoing",
    url: "#",
    imageurl: "/images/homepage/tl3.png",
    imagepos: "right bottom",
  },
];

const DequipTimeline: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
      className="relative px-4 md:px-20 pb-[236px] pt-[160px] bg-black text-white overflow-hidden"
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
            Timeline for the DeQUIP50, 2025
          </span>
        </h3>
        <h5 ref={para1Ref} className="text-p2 font-open-sans  mt-2.5">
          A timeline built to guide founders from application to Demo Day, ensuring every team is
          investor-ready and ecosystem-integrated.
        </h5>
        <div className="relative w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Set initial state
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
            speed={500}
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
                  <div className="relative w-full h-[305px] bg-card-gradient p-[1px] rounded-[10px]">
                    <div
                      className="bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out bg-size-[223px_auto] bg-no-repeat"
                      style={{
                        backgroundImage: `url(${threat.imageurl})`,
                        backgroundPosition: `${threat.imagepos}`,
                      }}
                    >
                      <Button
                        variant="outline"
                        className="group relative overflow-hidden px-[12px] py-[6px]"
                      >
                        <span className="text-p3 font-open-sans bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                          {threat.pillbtn}
                        </span>
                      </Button>
                      <h6 className="text-h6 font-montserrat font-medium mt-5">
                        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                          {threat.title}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            <div
              className={`swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-background border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] p-2 rounded-full cursor-pointer ${
                isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <MoveLeft className="text-white" />
            </div>

            {/* Right Arrow */}
            <div
              className={`swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-background border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] p-2 rounded-full cursor-pointer ${
                isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <MoveRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="buttonsanim flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mt-5">
          <Link href="/apply" className="w-[48%] sm:w-auto">
            <Button className="group relative overflow-hidden hover:bg-[#ffffff] w-full">
              <span className="text-[12px] sm:text-p2 font-montserrat text-[#000000]">
                Apply Now (DeQUIP50)
              </span>
            </Button>
          </Link>
          <Link href="/mentor" className="w-[48%] sm:w-auto">
            <Button variant="outline" className="group relative overflow-hidden w-full">
              <span className="text-[12px] sm:text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Become a Mentor
              </span>
            </Button>
          </Link>
          <Link href="/partner" className="w-[48%] sm:w-auto">
            <Button variant="outline" className="group relative overflow-hidden w-full">
              <span className="text-[12px] sm:text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Partner With Us
              </span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/newsletters/quranium-pulse-7317467565704765441/"
            className="w-[48%] sm:w-auto"
          >
            <Button variant="outline" className="group relative overflow-hidden w-full">
              <span className="text-[12px] sm:text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Subscribe to Pulse
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DequipTimeline;
