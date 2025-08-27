"use client";
import Image from "next/image";
import type { FieldErrors } from "react-hook-form";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

type Props = {
  register: any;
  errors: FieldErrors<ApplyFormType>;
};
export default function LogisticSection({ register, errors }: Props) {
  return (
    <section className="mt-20">
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Logistic
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4">
          <p className="text-h6 font-montserrat font-medium">
            Can your team commit to a 12-week remote-first incubator between October and December
            2025?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("remoteFirstIncubator")}
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
            {errors.remoteFirstIncubator && (
              <span className="text-red-500 text-sm">
                {errors.remoteFirstIncubator.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="explain" className="text-[16px] font-montserrat font-medium">
            Explain
          </label>
          <input
            {...register("explain")}
            id="explain"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.explain && (
            <span className="text-red-500 text-sm">{errors.explain.message as string}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4">
          <p className="text-h6 font-montserrat font-medium">
            Will at least one founder attend Demo Day?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No", "Maybe"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  {...register("attendDemoDay")}
                  type="radio"
                  value={value}
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
            {errors.attendDemoDay && (
              <span className="text-red-500 text-sm">{errors.attendDemoDay.message as string}</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4">
          <p className="text-h6 font-montserrat font-medium">
            Do you agree to be featured publicly if selected?
          </p>
          <div className="flex items-center gap-10">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("featuredPublicly")}
                  className="custom-radio"
                />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
            {errors.featuredPublicly && (
              <span className="text-red-500 text-sm">
                {errors.featuredPublicly.message as string}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="expectationsAboveQuestion" className="text-h6 font-montserratfont-medium">
            What are your expectations on the above question?
          </label>
          <input
            {...register("expectationsAboveQuestion")}
            id="expectationsAboveQuestion"
            placeholder="Enter here"
            className="input"
            type="text"
          />
          {errors.expectationsAboveQuestion && (
            <span className="text-red-500 text-sm">
              {errors.expectationsAboveQuestion.message as string}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
