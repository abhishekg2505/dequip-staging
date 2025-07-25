// components/Tabs.tsx
"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-wrap md:justify-center mb-[62px] gap-[15px] md:gap-[10px]">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            variant={activeIndex === index ? "default" : "outline"}
            className={` ${
              activeIndex === index
                ? "group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]"
                : "group relative overflow-hidden"
            }`}
          >
            <span
              className={` ${
                activeIndex === index
                  ? "absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"
                  : "absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"
              }`}
            ></span>
            <span
              className={` ${
                activeIndex === index
                  ? "relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500"
                  : "relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500"
              }`}
            >
              {tab.label}
            </span>
          </Button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
