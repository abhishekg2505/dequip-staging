"use client";
import type { FieldErrors } from "react-hook-form";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

type Props = {
  register: any;
  errors: FieldErrors<ApplyFormType>;
};
export default function AdditionalInformation({ register, errors }: Props) {
  return (
    <section className="mt-20">
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Additional Information
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="uploadDeck" className="text-h6 font-montserratfont-medium">
            Upload your deck or 1-pager(Enter uploaded Deck Link on drive and share here.)
          </label>
          <input
            {...register("uploadDeck")}
            id="uploadDeck"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.uploadDeck && (
            <span className="text-red-500 text-sm">{errors.uploadDeck.message as string}</span>
          )}
        </div>
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="uploadPhoto" className="text-h6 font-montserratfont-medium">
            Upload a team photo (optional but fun | Enter uploaded Team Photo Link on drive and
            share here.)
          </label>
          <input
            {...register("uploadPhoto")}
            id="uploadPhoto"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.uploadPhoto && (
            <span className="text-red-500 text-sm">{errors.uploadPhoto.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Subscribe me to Pulse (Quranium&rsquo;s newsletter for community, founders, and
            partners) (Yes/No)
          </p>
          <div className="flex items-center gap-10">
            {["yes", "no"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  type="radio"
                  {...register("SubscribeMeToPulse")}
                  value={value}
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
            {errors.SubscribeMeToPulse && (
              <span className="text-red-500 text-sm">
                {errors.SubscribeMeToPulse.message as string}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
