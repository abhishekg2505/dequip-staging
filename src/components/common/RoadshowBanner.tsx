import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RoadshowBannerMobile = () => {
  return (
    <div className="p-[1px] rounded-[20px] bg-roadshow-border md:hidden">
      <div className="relative py-[40px] px-[20px] rounded-[20px] bg-roadshow-gradient h-[500px]">
        <div className="relative z-10 max-w-xs">
          <h2 className="text-white text-h4 font-montserrat font-semibold">Find us at Roadshow</h2>
          <p className="pt-2.5 text-white text-p2 font-open-sans">
            In 2025, we&apos;re uniting global leaders to fight the quantum threat—securing
            blockchain, building alliances, and redefining digital trust.
          </p>
          <div className="pt-5 w-full flex justify-center">
            <Link href="https://www.beuncrackable.com/" target="_blank">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Visit Website
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/images/common/roadshow/world-planet.webp"
            alt="Roadshow World Planet"
            width={331}
            height={225}
          />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/common/roadshow/beuncrackable-logo.svg"
            alt="Be Uncrackable Logo"
            width={132}
            height={76}
          />
        </div>
      </div>
    </div>
  );
};

const RoadshowBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        {/* Desktop View */}
        <div className="p-[1px] rounded-[20px] bg-roadshow-border">
          <div className="relative py-[110px] px-[60px] rounded-[20px] bg-roadshow-gradient">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-white text-h3 font-montserrat font-semibold">
                Our Be Uncrackable Roadshow
              </h2>
              <p className="pt-2.5 text-white text-p2 font-open-sans">
                In 2025, we&apos;re uniting global leaders to fight the quantum threat—securing
                blockchain, building alliances, and redefining digital trust. Introducing the
                Quantum Pulse Index: a new benchmark for resilience in the digital age.
              </p>
              <div className="pt-10 w-max">
                <Link href="https://beuncrackable.com/" target="_blank">
                  <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                    <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                      Our roadshow
                      <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image
                src="/images/common/roadshow/world-planet.webp"
                alt="Roadshow World Planet"
                width={663}
                height={450}
              />
            </div>
            <div className="absolute top-[106px] right-[156px]">
              <Image
                src="/images/common/roadshow/beuncrackable-logo.svg"
                alt="Be Uncrackable Logo"
                width={264}
                height={151}
              />
            </div>
          </div>
        </div>
      </div>
      <RoadshowBannerMobile />
    </div>
  );
};

export default RoadshowBanner;
