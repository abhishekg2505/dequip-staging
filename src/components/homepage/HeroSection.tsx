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
        className="relative w-full bg-[url('/images/homepage/hero-banner-mobile.webp')] md:bg-[url('/images/homepage/hero-banner.webp')] bg-cover bg-right-top"
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
        <div className="relative pt-[289px] pb-[289px] md:pt-72 md:pb-60 w-full">
          <div className="h-16 absolute inset-0  z-10" />
          <div className="relative container mx-auto px-4 md:px-20">
            <div className="max-w-7xl mx-auto hidden sm:block">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                <div className="max-w-[695px] inline-flex flex-col justify-start items-start">
                  <h1 className="self-stretch  justify-start bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-h1 font-normal font-anton hero-title">
                    QUANTUM MINDS{" "}
                  </h1>
                  <div className="inline-flex justify-start items-center gap-3.5">
                    <div className="justify-start bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-h1 font-normal font-anton hero-title2">
                      PODCAST
                    </div>
                    <div className="pt-2 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-white text-3xl font-normal font-antonio">
                        with
                      </div>
                      <div className="justify-start text-white text-5xl font-normal font-antonio">
                        KAPIL DHIMAN.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto sm:hidden block mt-[30px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="max-w-[695px] inline-flex flex-col justify-start items-start">
            <h1 className="self-stretch  justify-start bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-h2 font-normal font-anton hero-title">
              QUANTUM MINDS{" "}
            </h1>
            <div className="inline-flex justify-start items-center gap-3.5">
              <div className="justify-start bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-h2 font-normal font-anton hero-title2">
                PODCAST
              </div>
              <div className="pt-2 inline-flex flex-col justify-center items-start">
                <div className="justify-start text-white text-p1 font-normal font-antonio">
                  with
                </div>
                <div className="justify-start text-white text-p1 font-normal font-antonio">
                  KAPIL DHIMAN.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
