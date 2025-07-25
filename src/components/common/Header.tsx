"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/src/constants/navLink";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<HTMLDivElement[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // Animate header elements on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(headerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(logoRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.out",
        })
        .from(
          navItemRefs.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          contactRef.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert(); // Clean up animation
  }, [pathname]);

  const handleMouseEnter = (index: number) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setOpenDropdownIndex(null), 200);
  };

  const handleSubMenuClick = () => setOpenDropdownIndex(null);

  return (
    <header
      ref={headerRef}
      className="fixed z-[60] top-0 left-0 right-0 tracking-tightest bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%)] overflow-hidden"
    >
      <div className="relative px-4 md:px-10">
        <div className="py-2.5 md:py-5 w-full mx-auto flex items-center justify-between rounded-[20px] ">
          <div ref={logoRef}>
            <Link href="/" className="shrink-0 p-3 block">
              <Image src="/logo.svg" alt="Quranium Logo" width={124} height={18} priority />
            </Link>
          </div>

          {/* Desktop Nav */}
          {/* <div className="hidden lg:flex items-center gap-4 2xl:gap-8">
            <nav className="flex items-start gap-3 xl:gap-6 px-3 py-1">
              {navLinks.map((item, idx) => (
                <div
                  key={item.itemName}
                  className="relative group"
                  ref={(el) => {
                    navItemRefs.current[idx] = el!;
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-center hover:opacity-60 duration-300"
                    >
                      <span className="text-p3 font-semibold leading-[26px] text-white-1">
                        {item.itemName}
                      </span>
                      {item.subMenu && <ChevronDown className="stroke-2 text-white-1" size={16} />}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 cursor-default text-white-1 font-semibold text-p3 leading-[26px]">
                      {item.itemName}
                      {item.subMenu && <ChevronDown className="stroke-2 text-white-1" size={16} />}
                    </div>
                  )}

                  {openDropdownIndex === idx && item.subMenu && (
                    <div className="absolute top-full left-0 w-max pt-4">
                      <div className="border border-[rgba(255,255,255,0.15)] bg-background rounded-lg shadow-lg z-50 transition-all transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.subMenuLink}
                            onClick={handleSubMenuClick}
                            className={`block px-4 py-2 text-p3 hover:opacity-60 duration-300 whitespace-nowrap ${
                              subIdx !== 0 ? "border-t border-[rgba(255,255,255,0.15)]" : ""
                            }`}
                            target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
                            rel={
                              subItem.subMenuLink.startsWith("http") ? "noopener noreferrer" : ""
                            }
                          >
                            {subItem.subMenuName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div ref={contactRef}>
              <Link href="/contact-us">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Contact us
                  </span>
                </Button>
              </Link>
            </div>
          </div> */}

          {/* Mobile Nav */}
          <div className="lg:hidden1">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
