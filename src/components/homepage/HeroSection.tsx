"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);

  const splitWords = (el: HTMLElement, spanClass: string) => {
    const wrapWords = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const words = text.split(/(\s+)/);
        return words.map((part) => {
          if (part.trim().length === 0) return document.createTextNode(part);
          const span = document.createElement("span");
          span.className = `${spanClass} inline-block opacity-0 bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent`;
          span.textContent = part;
          return span;
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const clone = element.cloneNode(false) as HTMLElement;
        Array.from(node.childNodes).forEach((child) => {
          wrapWords(child).forEach((wrappedChild) => {
            clone.appendChild(wrappedChild);
          });
        });
        return [clone];
      } else {
        return [node];
      }
    };

    const newChildren = Array.from(el.childNodes).flatMap((node) => wrapWords(node));
    el.innerHTML = "";
    newChildren.forEach((n) => el.appendChild(n));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = document.querySelector(".hero-title") as HTMLElement;
      const title2 = document.querySelector(".hero-title2") as HTMLElement;
      const subtext = document.querySelector(".hero-subtext") as HTMLElement;

      if (title) splitWords(title, "word");
      if (title2) splitWords(title2, "word");
      if (subtext) splitWords(subtext, "subword");

      gsap.set(".hero-title .word", { y: 100, opacity: 0 });
      gsap.set(".hero-title2 .word", { y: 100, opacity: 0 });
      gsap.set(".hero-subtext .subword", { y: 20, opacity: 0 });

      gsap.to(".hero-overlay", {
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          const el = document.querySelector(".hero-overlay");
          if (el) el.remove();
        },
      });

      gsap.to(".hero-title .word", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });
      gsap.to(".hero-title2 .word", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.7,
      });

      gsap.to(".hero-subtext .subword", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.01,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full bg-[url('/images/homepage/hero-gradient.webp')]  bg-contain bg-right-top bg-no-repeat"
      >
        {/* <div className="absolute left-0 top-0 px-4 md:px-20 pt-[30px] z-10">
          <Link href="/" className="">
            <Image
              src="/logo.svg"
              alt="QMP logo"
              width={128}
              height={42}
              className="w-full mb-5 md:mb-0"
            />
          </Link>
        </div> */}
        <div className="absolute inset-0 bg-black z-20 hero-overlay" />
        <div className="relative pt-[120px] pb-[289px] md:pt-[120px] md:pb-60 w-full">
          <div className="h-16 absolute inset-0  z-10" />
          <div className="relative container mx-auto px-4 md:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="mx-auto w-[312px] h-[312px] md:w-[462px] md:h-[462px] p-[2px] bg-circle-gradient rounded-[100%] shadow-[4px_4px_94px_0px_#D7D7D726]">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-[100%] bg-[#000000] bg-[url('/images/homepage/wire.png')] bg-contain bg-center-top bg-no-repeat">
                  <h2 className="text-[36px] font-montserrat font-thin">Welcome to</h2>
                  <Image
                    src="/images/homepage/logo.svg"
                    alt="Dequip logo"
                    width={306}
                    height={89}
                    className="w-[180px] h-[59px] md:w-[306px] md:h-[89px]"
                  />
                </div>
              </div>
              <div className="max-w-[513px] mx-auto my-8 text-center">
                <p className="text-p1 font-open-sans">
                  Quranium&rsquo;s high-intensity & high-impact Incubator for decentralized &
                  quantum-secure innovation
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
      </section>
    </>
  );
}
