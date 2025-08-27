"use client";

import type { FieldErrors } from "react-hook-form";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

type Props = {
  register: any;
  errors: FieldErrors<ApplyFormType>;
};

export default function BuildingDetailsSection({ register, errors }: Props) {
  const options = [
    "Securing data, assets, or computation",
    "Integrating quantum hardware / resilience",
    "Designing for futureproof security",
    "Not relevant, but we want to learn and build for it",
  ];
  const options2 = [
    "Building or deploying AI models",
    "Enabling autonomous agents",
    "Using AI in infrastructure (e.g., scheduling, risk, anomaly detection)",
    "Other",
  ];
  return (
    <section className="mt-20">
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          What You&rsquo;re Building
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="buildingMatter" className="text-h6 font-montserratfont-medium">
            What are you building and why does it matter?
          </label>
          <input
            {...register("buildingMatter")}
            id="buildingMatter"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.buildingMatter && (
            <p className="text-red-500 text-sm">{errors.buildingMatter.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="jargon" className="text-h6 font-montserratfont-medium">
            We&rsquo;re not after jargon. Tell us what you&rsquo;re solving and why now.
          </label>
          <input {...register("jargon")} placeholder="Enter here" className="input" type="text" />
          {errors.jargon && <p className="text-red-500 text-sm">{errors.jargon.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="whatsyouredge" className="text-h6 font-montserratfont-medium">
            What&rsquo;s your edge?
          </label>
          <input
            {...register("whatsYourEdge")}
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.whatsYourEdge && (
            <span className="text-red-500 text-sm">{errors.whatsYourEdge.message as string}</span>
          )}
        </div>

        <div className="flex flex-col gap-[16px]">
          <label htmlFor="whatsApproach" className="text-h6 font-montserratfont-medium">
            What makes your approach different, better, or inevitable?
          </label>
          <input
            {...register("whatsApproach")}
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.whatsApproach && (
            <span className="text-red-500 text-sm">{errors.whatsApproach.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="whatsproduct" className="text-h6 font-montserratfont-medium">
            How is your product/protocol quantum-ready or quantum-relevant?
          </label>
          <input
            {...register("whatsProduct")}
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.whatsProduct && (
            <span className="text-red-500 text-sm">{errors.whatsProduct.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <p className="text-h6 font-montserrat font-medium">
            Check all that apply and elaborate below
          </p>
          {options.map((label, idx) => (
            <label key={idx} className="flex items-center cursor-pointer gap-2">
              {/* Hidden checkbox */}
              <input
                type="checkbox"
                className="hidden peer"
                {...register("quantumOptions")}
                value={label}
              />

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
          {errors.quantumOptions && (
            <span className="text-red-500 text-sm">{errors.quantumOptions.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="relateAI" className="text-h6 font-montserratfont-medium">
            How does your startup relate to AI?
          </label>
          <input {...register("relateAI")} placeholder="Enter here" className="input" type="text" />
          {errors.relateAI && (
            <span className="text-red-500 text-sm">{errors.relateAI.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <p className="text-h6 font-montserrat font-medium">
            Check all that apply and elaborate below
          </p>
          {options2.map((label, idx) => (
            <label key={idx} className="flex items-center cursor-pointer gap-2">
              {/* Hidden checkbox */}
              <input
                type="checkbox"
                className="hidden peer"
                {...register("aiOptions")}
                value={label}
              />

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
          {errors.aiOptions && (
            <span className="text-red-500 text-sm">{errors.aiOptions.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="decentralized" className="text-h6 font-montserratfont-medium">
            Are you building something decentralized? Why or why not?
          </label>
          <input
            {...register("decentralized")}
            id="decentralized"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.decentralized && (
            <span className="text-red-500 text-sm">{errors.decentralized.message as string}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <p className="text-h5 font-montserrat font-medium mb-5">
            What&rsquo;s your current stage?
          </p>
          <label htmlFor="idea" className="text-h6 font-montserratfont-medium">
            Idea?
          </label>
          <input
            {...register("idea")}
            name="idea"
            id="idea"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.idea && (
            <span className="text-red-500 text-sm">{errors.idea.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="MVPPrototype" className="text-h6 font-montserratfont-medium">
            MVP/Prototype
          </label>
          <input
            {...register("MVPPrototype")}
            id="MVPPrototype"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.MVPPrototype && (
            <span className="text-red-500 text-sm">{errors.MVPPrototype.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="liveUsers" className="text-h6 font-montserratfont-medium">
            Live users
          </label>
          <input
            {...register("liveUsers")}
            id="liveUsers"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.liveUsers && (
            <span className="text-red-500 text-sm">{errors.liveUsers.message as string}</span>
          )}
        </div>
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="revenue" className="text-h6 font-montserratfont-medium">
            Revenue
          </label>
          <input
            {...register("revenue")}
            id="revenue"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.revenue && (
            <span className="text-red-500 text-sm">{errors.revenue.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="tokenLaunched" className="text-h6 font-montserratfont-medium">
            Token Launched
          </label>
          <input
            {...register("tokenLaunched")}
            id="tokenLaunched"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.tokenLaunched && (
            <span className="text-red-500 text-sm">{errors.tokenLaunched.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="Other" className="text-h6 font-montserratfont-medium">
            Other
          </label>
          <input
            {...register("Other")}
            id="Other"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.other && (
            <span className="text-red-500 text-sm">{errors.other.message as string}</span>
          )}
        </div>
      </div>
    </section>
  );
}
