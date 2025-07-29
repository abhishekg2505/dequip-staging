"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  pillbtn: string;
  url: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "Application Open",
    pillbtn: "August 2025",
    url: "#",
  },
  {
    title: "Mentor & Partner Onboarding",
    pillbtn: "August & September 2025",
    url: "#",
  },
  {
    title: "Cohort Selection + Grant Review",
    pillbtn: "October 2025",
    url: "#",
  },
  {
    title: "12-Week Incubation Program",
    pillbtn: "October – December 2025",
    url: "#",
  },
  {
    title: "Demo Day + Investment Announcements",
    pillbtn: "January 2026",
    url: "#",
  },
  {
    title: "QNet Access, Next Cycles",
    pillbtn: "Ongoing",
    url: "#",
  },
];

const DequipTimeline: React.FC = () => {
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
    <section
      ref={sectionRef}
      className="px-4 md:px-20 pb-[236px] pt-[160px] bg-black text-white overflow-hidden"
    >
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
          A subheading should go here explaining why we are choosing this timeline over any other.
        </h5>
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay, FreeMode]}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={7000}
            loop
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
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
                    <div className="bg-[#020309] p-5 h-full rounded-[10px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out bg-[url('/images/homepage/wire2.png')] bg-right-bottom bg-size-[223px_auto] bg-no-repeat">
                      <Button variant="outline" className="group relative overflow-hidden">
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
            {/* <div className="swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveLeft className="text-white" />
            </div> */}

            {/* Right Arrow */}
            {/* <div className="swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveRight className="text-white" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4 mt-10">
          <Link href="#" target="_blank">
            <Button className="group relative overflow-hidden">
              <span className="text-p2 font-montserrat text-[#000000]">Apply Now (DeQUIP 50)</span>
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
    </section>
  );
};

export default DequipTimeline;
