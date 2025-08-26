"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import BehindDequipCards from "./BehindDequipCards";
import DequipDecoded from "./DequipDecoded";
import AboutQuranium from "./AboutQuranium";

export default function PeopleBehindDequip() {
  const containerRef = useRef(null);

  const splitWords = (el: HTMLElement, spanClass: string) => {
    const wrapWords = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const words = text.split(/(\s+)/);
        return words.map((part) => {
          if (part.trim().length === 0) return document.createTextNode(part);
          const span = document.createElement("span");
          span.className = `${spanClass} inline-block opacity-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent`;
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
        className="relative w-full bg-[url('/images/common/bg/stars.png')]  bg-contain bg-top bg-no-repeat"
      >
        <div className="relative pt-[120px] pb-[131px] md:pt-[120px] md:pb-[51px] w-full">
          <div className="h-16 absolute inset-0  z-10" />
          <div className="relative container mx-auto px-4 md:px-20">
            <div className="max-w-7xl mx-auto">
              <h3 className="hero-title text-center text-h4 md:text-h3 font-montserrat font-semibold mb-[30px]">
                <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                  The People Behind DeQUIP
                </span>
              </h3>
              <div className="relative mx-auto w-[312px] h-[312px] md:w-[378px] md:h-[378px] p-[2px] rounded-[100%] overflow-hidden shadow-[4px_4px_94px_0px_#D7D7D726]">
                <div className="absolute z-0 top-0 left-0  w-full h-full bg-circle-gradient rounded-[100%]  animate-spin-slow" />
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full rounded-[100%] bg-[#000000] bg-[url('/images/homepage/wire.png')] bg-[length:223px_auto] bg-[position:top_center] bg-no-repeat">
                  <Image src="/q-logo.svg" alt="Quranium logo" width={210} height={30} />
                  <h6 className="text-h6 font-montserrat font-normal">The Core Engine</h6>
                </div>
              </div>
            </div>
            <BehindDequipCards />
            <AboutQuranium />
          </div>
        </div>
      </section>
    </>
  );
}
