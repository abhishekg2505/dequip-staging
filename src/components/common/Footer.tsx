import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footer } from "@/src/constants/footer";
import { socialMedia } from "@/src/constants/socialMedia";
import { LangIcon } from "@/src/constants/LangIcon";

export default function Footer() {
  return (
    <footer className="overflow-hidden relative z-10 bg-black border-t border-white-1/20 text-white">
      <div className="max-w-[1440px] mx-auto relative z-10 px-4 md:px-10 lg:px-16 xl:px-20">
        <div className="flex space-x-10 md:space-x-28 items-center justify-center w-full pt-[30px]">
          {socialMedia.map((social) => (
            <Link href={social.link} key={social.name} target="_blank">
              <Image
                src={social.logo}
                alt={social.name}
                width={34}
                height={34}
                className="cursor-pointer hover:opacity-50 duration-300"
              />
            </Link>
          ))}
        </div>
        <div className="py-12 flex flex-col gap-y-20 md:items-start items-center justify-between md:flex-row">
          <div className="mr-0 max-w-full lg:max-w-96 space-y-5 text-center sm:text-center md:text-left">
            <p className="text-p2 mb-[10px]">A global initiative by</p>
            <Link href="https://www.quranium.org" target="_blank">
              <Image src="/q-logo.svg" alt="Quranium Logo" width={152} height={22} priority />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end lg:mx-auto1 px-4 md:gap-8">
            {footer.map((section) => (
              <div key={section.title} className="pb-6">
                {/* <h3 className="text-p3 pb-2 md:pb-6 opacity-40">{section.title}</h3> */}
                <ul className="text-p3 space-y-[10px] text-gray-300">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        className="cursor-pointer hover:opacity-60 duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pb-12">
          <div className="mt-10 py-6 md:px-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="space-x-8 items-center hidden">
              {LangIcon.map((lang) => (
                <Link href={lang.link} key={lang.name} target="_blank">
                  <Image
                    src={lang.logo}
                    alt={lang.name}
                    width={13}
                    height={18}
                    className="cursor-pointer hover:opacity-50 duration-300"
                  />
                </Link>
              ))}
            </div>
            <div className="text-p5 text-gray-400">
              © 2025 — Quranium Global. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#601DFF] blur-[200px] opacity-50 pointer-events-none z-0" />
    </footer>
  );
}
