"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export default function VisionReadinessFit() {
  const options = [
    "Fundraising / Investor Readiness",
    "AI strategy",
    "Product & Technical Strategy",
    "GTM / Partnerships",
    "Community Building",
    "UX/Design",
    "Legal / Compliance",
    "Quantum security",
  ];
  return (
    <section>
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Vision, Readiness, & Fit
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="joinDequip" className="text-h6 font-montserratfont-medium">
            What does success look like in 2 years if you join DeQUIP50? Be bold. Be real.
          </label>
          <input
            name="joinDequip"
            id="joinDequip"
            placeholder="Enter here"
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            What&rsquo;s your biggest blocker right now?
          </p>
          <div className="flex items-center gap-10">
            {["Technical", "Product-market fit", "Funding", "GTM/Marketing", "Hiring", "Other"].map(
              (value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input type="radio" value={value} className="custom-radio" />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              )
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <p className="text-h6 font-montserrat font-medium">
            What kind of mentorship would be most valuable? Check top 3.
          </p>
          <div className="max-w-[560px] columns-2 gap-4">
            {options.map((label, idx) => (
              <label key={idx} className="flex items-center cursor-pointer gap-2 mb-2">
                {/* Hidden checkbox */}
                <input type="checkbox" className="hidden peer" name={`option-${idx}`} />

                {/* Custom checkbox */}
                <span
                  className="
        w-4 h-4 border border-[#ffffff] rounded-sm flex items-center justify-center
        bg-transparent peer-checked:bg-[#ffffff]
        relative
        after:content-[''] after:w-[6px] after:h-[8px]
        after:border-b-[2px] after:border-r-[2px]
        after:border-black after:rotate-45
        after:opacity-0 peer-checked:after:opacity-100
      "
                ></span>

                {/* Label text */}
                <span className="text-white text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Are you looking to raise funds in the next 6 months?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No", "Maybe"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input type="radio" value={value} className="custom-radio" />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="atWhatStage" className="text-h6 font-montserratfont-medium">
            If yes, how much and at what stage?
          </label>
          <input
            name="atWhatStage"
            id="atWhatStage"
            placeholder="Enter here"
            className="input"
            type="text"
          />
        </div>
      </div>
    </section>
  );
}
