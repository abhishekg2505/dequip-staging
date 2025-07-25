// import React from "react";
// import Marquee from "../ui/marquee";
// import { ROADSHOW_CITIES } from "@/src/constants/roadshowCities";

// interface CitiesCardProps {
//   name: string;
// }

// const CitiesCard: React.FC<CitiesCardProps> = ({ name }) => (
//   <div className="p-[1px] bg-roadshow-stats-border rounded-lg flex-shrink-0">
//     <div className="flex items-center justify-center gap-2 h-[50px] px-6 py-3 rounded-lg lg:h-[42px] min-w-[100px] sm:h-[40px] bg-[#14033C] roadshow-city-card-gradient">
//       <div className="text-white-1 font-bold text-lg">{name}</div>
//     </div>
//   </div>
// );

// const renderMarquee = (
//   cities: {
//     name: string;
//   }[],
//   reverse = false
// ) => (
//   <Marquee pauseOnHover reverse={reverse} className="[--duration:80s] mt-4:first-child">
//     {cities.map((city) => (
//       <CitiesCard key={city.name} name={city.name} />
//     ))}
//   </Marquee>
// );

// const ProudlyDiverse = () => {
//   const [firstRow, secondRow] = [
//     ROADSHOW_CITIES.slice(0, ROADSHOW_CITIES.length / 2),
//     ROADSHOW_CITIES.slice(0, ROADSHOW_CITIES.length / 2),
//   ];
//   return (
//     <section className="">
//       <div className="">
//         <div className="flex flex-col overflow-hidden w-full gap-x-2">
//           {renderMarquee(firstRow, false)}
//           {renderMarquee(secondRow, true)}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProudlyDiverse;
import { ROADSHOW_CITIES } from "@/src/constants/roadshowCities";
import Marquee from "@/src/components/ui/marquee";
interface CitiesCardProps {
  name: string;
}

const CitiesCard: React.FC<CitiesCardProps> = ({ name }) => (
  <div className="p-[1px] bg-roadshow-stats-border rounded-lg flex-shrink-0">
    <div className="flex items-center justify-center gap-2 h-[50px] px-6 py-3 rounded-lg lg:h-[42px] min-w-[100px] sm:h-[40px] bg-[#14033C] roadshow-city-card-gradient">
      <div className="text-white-1 font-bold text-lg">{name}</div>
    </div>
  </div>
);

const ProudlyDiverse = () => {
  const [firstRow, secondRow] = [
    ROADSHOW_CITIES.slice(0, ROADSHOW_CITIES.length / 2),
    ROADSHOW_CITIES.slice(ROADSHOW_CITIES.length / 2),
  ];

  return (
    <div className="relative flex flex-col max-w-4xl mx-auto overflow-hidden">
      {/* Logo Rows */}
      <div className="flex flex-wrap justify-start w-full gap-4 md:gap-2">
        <Marquee
          pauseOnHover
          className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
        >
          {firstRow.map((name) => (
            <>{CitiesCard(name)}</>
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
        >
          {secondRow.map((name) => (
            <>{CitiesCard(name)}</>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProudlyDiverse;
