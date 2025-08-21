"use client";
import type { FieldErrors, Control } from "react-hook-form";
import {
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  Controller,
} from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { TimezoneSelect } from "../timezone-field/TimezoneSelect";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";
type Props = {
  title: string;
  fields: { id: string }[];
  register: any;
  append: any;
  remove: any;
  name: "coFounders";
  control: Control<ApplyFormType>;
  errors: FieldErrors<ApplyFormType>;
  disableAdd?: boolean;
  disableRemove?: boolean;
};

export default function FounderDetailsSection({
  title,
  fields,
  register,
  append,
  remove,
  name,
  control,
  disableAdd,
  disableRemove,
  errors,
}: Props) {
  return (
    <section>
      <h2 className="text-left text-h4 font-semibold mb-8">{title}</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="...">
          <div className="grid grid-cols-1 gap-5 mb-10">
            <div className="flex flex-col gap-[16px]">
              <label
                htmlFor={`${name}.${index}.fullName`}
                className="text-h6 font-montserratfont-medium"
              >
                Full Name
              </label>
              <input
                {...register(`${name}.${index}.fullName`)}
                placeholder="Full Name"
                className="input"
                type="text"
                id={`${name}.${index}.fullName`}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 mb-10">
            <div className="flex flex-col gap-[16px]">
              <label
                htmlFor={`${name}.${index}.linkedIn`}
                className="text-h6 font-montserratfont-medium"
              >
                Linkedin
              </label>

              <input
                {...register(`${name}.${index}.linkedIn`)}
                placeholder="LinkedIn"
                className="input"
                type="text"
                id={`${name}.${index}.linkedIn`}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <label
                htmlFor={`${name}.${index}.linkedIn`}
                className="text-h6 font-montserratfont-medium"
              >
                Role
              </label>
              <input
                {...register(`${name}.${index}.role`)}
                type="text"
                placeholder="Role"
                className="input"
                id={`${name}.${index}.role`}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-0">
            <div className="flex flex-col gap-[16px]">
              <label
                htmlFor={`${name}.${index}.email`}
                className="text-h6 font-montserratfont-medium"
              >
                Email
              </label>
              <input
                {...register(`${name}.${index}.email`)}
                type="email"
                placeholder="Email"
                className="input"
                id={`${name}.${index}.email`}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <label
                htmlFor={`${name}.${index}.timeZone`}
                className="text-h6 font-montserratfont-medium"
              >
                Time zone
              </label>
              <Controller
                name={`${name}.${index}.timeZone`}
                control={control}
                render={({ field }) => (
                  <TimezoneSelect value={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => remove(index)}
            // variant="destructive"
            className="mt-2 mb-10 group relative overflow-hidden"
          >
            <span className="text-[12px] font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
              Remove
            </span>
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append({ fullName: "", linkedIn: "", role: "", email: "" })}
        variant="outline"
        className="group relative overflow-hidden"
      >
        <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Add Co-Founder
        </span>
      </Button>

      {/* ✅ Radio Buttons (only once) */}
      <div className="flex flex-col gap-4 mt-10 mb-10">
        <p className="text-h6 font-montserrat font-medium">
          Is your team full-time on this startup?
        </p>
        <div className="flex items-center gap-10">
          {["yes", "no", "some"].map((value) => (
            <label
              key={value}
              className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
            >
              <input
                type="radio"
                {...register("fullTimeTeam")}
                value={value}
                className="custom-radio"
              />
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        <p className="text-h6 font-montserrat font-medium">How did you hear about DeQUIP 50?</p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {[
            "X",
            "LinkedIn",
            "Discord",
            "Telegram",
            "Partner Referral",
            "Podcast/Media",
            "Other",
          ].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
            >
              <input
                type="radio"
                {...register("howToHear")}
                value={option}
                className="custom-radio"
              />
              {option}
            </label>
          ))}
          {errors.howToHear && <p className="text-red-500 text-sm">{errors.howToHear.message}</p>}
        </div>
      </div>
    </section>
  );
}
