"use client";

import React, { useState } from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetOverlay,
} from "@/src/components/ui/sheet";
import { Sheet } from "@/src/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/src/constants/navLink";

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          {isSheetOpen ? (
            <X className="h-10 w-10 stroke-2 stroke-[#ffffff] cursor-pointer" />
          ) : (
            <Menu className="h-10 w-10 stroke-2 stroke-[#ffffff] cursor-pointer" />
          )}
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full md:w-[40.5%] h-screen bg-background focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent !max-w-none"
        >
          <div className="mt-[100px]">
            <nav>
              {navLinks.map((item, idx) => (
                <div key={item.itemName} className="mb-4">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleSubMenu(idx)}
                  >
                    <Link
                      href={item.link || "#"}
                      className=""
                      target={item.link?.startsWith("http") ? "_blank" : "_self"}
                      rel={item.link?.startsWith("http") ? "noopener noreferrer" : ""}
                      onClick={() => item.link && setIsSheetOpen(false)}
                    >
                      <SheetTitle className="text-white-1 font-normal font-antonio text-h3 uppercase hover:bg-gradient-to-r from-sky-500 to-purple-500 hover:bg-clip-text hover:text-transparent">
                        {item.itemName}
                      </SheetTitle>
                    </Link>
                    {/* {item.subMenu && <ChevronDown className="ml-2" />} */}
                  </div>
                  {/* {openSubMenuIndex === idx && item.subMenu && (
                    <div className="pl-4 mt-2">
                      {item.subMenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.subMenuLink}
                          className="block py-1"
                          target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
                          rel={subItem.subMenuLink.startsWith("http") ? "noopener noreferrer" : ""}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {subItem.subMenuName}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
              <div className="mb-4">
                <Link
                  href="mailto:business@quranium.org"
                  className=""
                  onClick={() => setIsSheetOpen(false)}
                >
                  <SheetTitle className="text-white-1 text-h3 font-antonio uppercase font-normal hover:bg-gradient-to-r from-sky-500 to-purple-500 hover:bg-clip-text hover:text-transparent">
                    Contact
                  </SheetTitle>
                </Link>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
