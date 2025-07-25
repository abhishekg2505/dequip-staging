import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProudlyDiverseRoadshow from "./ProudlyDiverseRoadshow";

const stats = [
  {
    title: "30+",
    description: "Countries",
  },

  {
    title: "300+",
    description: "Events",
  },

  {
    title: "1",
    description: "Mission",
  },
];

const RoadshowBannerV2Mobile = () => {
  return (
    <div className="p-[1px] rounded-[20px] bg-roadshow-border md:hidden">
      <div className="relative py-[40px] px-[20px] rounded-[20px] bg-roadshow-gradient1 h-[500px] overflow-hidden bg-[url('/images/homepage/gradiant.webp')] bg-cover bg-right sm:bg-center">
        <div className="relative z-10 max-w-xs">
          <h2 className="text-white text-h4 font-montserrat font-semibold">Our Global Roadshow</h2>
          <p className="pt-2.5 text-white text-p2 font-open-sans">
            Bringing the disruptors together. Around the world.
          </p>
          <div className="pt-5 w-full flex justify-center">
            <Link href="https://www.beuncrackable.com/" target="_blank">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Know More
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 w-full md:w-auto">
          <Image
            src="/images/common/roadshow/world-planet-2.webp"
            alt="Roadshow World Planet"
            width={331}
            height={225}
            className="mx-auto"
          />
        </div>
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/common/roadshow/beuncrackable-logo.svg"
            alt="Be Uncrackable Logo"
            width={226}
            height={129}
          />
        </div>

        <div className="absolute bottom-3 right-0">
          <div className="relative scale-50 origin-bottom-right max-w-full md:max-w-[663px]">
            <ProudlyDiverseRoadshow />
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent/50 to-transparent/0" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-transparent/50 to-transparent/0" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadshowBannerV2 = () => {
  return (
    <div className="relative">
      <div className="hidden md:block relative">
        {/* Desktop View */}
        {/* <div className="absolute top-0 left-0 w-[20px] h-full bg-globe-gradient"></div> */}
        {/* <div className="absolute top-0 right-0 w-[20px] h-full bg-gradient-to-l from-black to-transparent"></div> */}
        <div className="rounded-[20px] bg-roadshow-border1">
          <div className="relative py-[110px] px-[60px] rounded-[20px] bg-globe-gradient1 bg-[url('/images/homepage/gradiant.webp')] bg-cover bg-right sm:bg-top">
            <div className="relative z-10 max-w-[582px]">
              <h2 className="text-white text-h3 font-montserrat font-semibold">
                Our Global Roadshow
              </h2>
              <p className="pt-2.5 text-white text-p2 font-open-sans">
                Bringing the disruptors together, worldwide
              </p>
              <div className="pt-20">
                <div className="max-w-[515px] grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="p-[0px] rounded-[20px] bg-roadshow-stats-border1">
                        <div className="p-5">
                          <div className="text-h4 font-semibold">{stat.title}</div>
                          <div className="pt-2.5">
                            <span className="text-p2 font-open-sans text-white-4">
                              {stat.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-5 w-max">
                <Link href="https://beuncrackable.com/" target="_blank">
                  <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                    <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                      Track our tour
                      <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-16 right-0">
              <Image
                src="/images/common/roadshow/world-planet-2.png"
                alt="Roadshow World Planet"
                width={652}
                height={426}
              />
              <div className="absolute top-[100px] right-[156px]">
                <Image
                  src="/images/common/roadshow/beuncrackable-logo.svg"
                  alt="Be Uncrackable Logo"
                  width={292}
                  height={167}
                />
              </div>
              <div className="relative">
                <div className="absolute -bottom-3 right-0">
                  <div className="relative max-w-full md:max-w-[663px]">
                    <ProudlyDiverseRoadshow />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-[104px] bg-gradient-to-r from-transparent/80 to-transparent/0" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-[104px] bg-gradient-to-l from-transparent/80 to-transparent/0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RoadshowBannerV2Mobile />
    </div>
  );
};

export default RoadshowBannerV2;
