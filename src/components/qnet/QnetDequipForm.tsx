"use client";
import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Link from "next/link";
import { qnetFormSchema, QnetFormType } from "@/src/schema/qnetFormSchema";

export default function QnetDequipForm() {
  const options = [
    "Mentor Calls",
    "Templates & Resources",
    "Designing for futureproof security Masterclasses",
    "Founder Matching",
    "Partner Discounts",
    "Early Access to Ecosystem",
  ];
  const finalSteps = [
    "I’ve completed the TPH assessment",
    "I understand mentor calls are $1/min, paid in $QRN",
    "I’ll set up QSafe Wallet to access QNet services",
  ];
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<QnetFormType>({ resolver: zodResolver(qnetFormSchema) });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: QnetFormType) => {
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/qnet-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 10000); // Hide message after 10s
      } else {
        const errData = await res.json();
        setErrorMessage(errData.error || "Failed to submit form");
        setTimeout(() => setErrorMessage(""), 10000); // Hide error after 10s
      }
    } catch (err) {
      setErrorMessage("Network or server error, please try again later.");
      setTimeout(() => setErrorMessage(""), 10000);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 md:px-20 pt-[77px] pb-[80px] container mx-auto"
    >
      <section id="qnet-form">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Founder Details
          </span>
        </h2>
        <p className="text-h5 font-montserrat mb-10">Primary Contact - Founder 1</p>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderFullName" className="text-h6 font-montserratfont-medium">
              Full Name
            </label>
            <input
              {...register("founderFullName")}
              id="founderFullName"
              placeholder="Full Name"
              className="input"
              type="text"
            />
            {errors.founderFullName && (
              <span className="text-red-500 text-sm">
                {errors.founderFullName.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderLinkedinX" className="text-h6 font-montserratfont-medium">
              LinkedIn/X
            </label>
            <input
              {...register("founderLinkedinX")}
              id="founderLinkedinX"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.founderLinkedinX && (
              <span className="text-red-500 text-sm">
                {errors.founderLinkedinX.message as string}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderTelegramDiscord" className="text-h6 font-montserratfont-medium">
              Telegram/ Discord
            </label>
            <input
              {...register("founderTelegramDiscord")}
              id="founderTelegramDiscord"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.founderTelegramDiscord && (
              <span className="text-red-500 text-sm">
                {errors.founderTelegramDiscord.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderemail" className="text-h6 font-montserratfont-medium">
              Email Address
            </label>
            <input
              {...register("founderemail")}
              id="founderemail"
              placeholder="Email"
              type="email"
              className="input"
            />
            {errors.founderemail && (
              <span className="text-red-500 text-sm">{errors.founderemail.message as string}</span>
            )}
          </div>
        </div>
      </section>
      {/* === Builder Snapshot === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Builder Snapshot
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="startupName" className="text-h6 font-montserratfont-medium">
              Startup or Project Name (if any)
            </label>
            <input
              {...register("startupProjectName")}
              id="startupProjectName"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.startupProjectName && (
              <span className="text-red-500 text-sm">
                {errors.startupProjectName.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="oneLinePitch" className="text-h6 font-montserratfont-medium">
              What are you building (or exploring)? (1 to 2 sentences max)
            </label>
            <input
              {...register("whatAreYouBuilding")}
              id="whatAreYouBuilding"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.whatAreYouBuilding && (
              <span className="text-red-500 text-sm">
                {errors.whatAreYouBuilding.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">
              What support are you most interested in?
            </p>
            <p className="text-[16px] font-montserrat font-medium">
              Check all that apply and elaborate below
            </p>
            <Controller
              name="interestedOptions"
              control={control}
              render={({ field }) => (
                <>
                  {options.map((label, idx) => (
                    <label key={idx} className="flex items-center cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        value={label}
                        checked={field.value?.includes(label) || false}
                        onChange={(e) => {
                          const { checked } = e.target;
                          field.onChange(
                            checked
                              ? [...(field.value || []), label]
                              : (field.value || []).filter((v: string) => v !== label)
                          );
                        }}
                      />

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
                </>
              )}
            />
            {errors.interestedOptions && (
              <span className="text-red-500 text-sm">
                {errors.interestedOptions.message as string}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* === Trust Per Human === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            And finally… Trust Per Human (TPH)
          </span>
        </h2>
        <h5 className="text-h5 font-montserrat mb-10">
          At Quranium, trust is core. <br />
          We ask all applicants to take the TPH Assessment; a 2-minute framework, designed by
          Quranium&rsquo;s CEO Kapil Dhiman, to understand how you show up in the world.
        </h5>
        <h5 className="text-h5 font-montserrat mb-5">
          It&rsquo;s not about popularity. It&rsquo;s about predictability, empathy, and presence.
        </h5>
        <Link href="https://trustperhuman.com/" target="_blank">
          <Button type="button" variant="outline" className="group relative overflow-hidden">
            <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent group-hover:bg-none group-hover:text-[#ffffff]">
              Take the TPH Self-Assessment
            </span>
          </Button>
        </Link>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4 mt-10">
            <p className="text-h6 font-montserrat font-medium">
              One you have taken the TPH Self-Assessment
            </p>
            <div className="flex flex-col gap-[16px]">
              <label htmlFor="yourScore" className="text-[16px] font-montserrat font-medium">
                Enter your score
              </label>
              <input
                {...register("yourScore")}
                id="yourScore"
                placeholder="Enter here"
                className="input"
                type="text"
              />
              {errors.yourScore && (
                <span className="text-red-500 text-sm">{errors.yourScore.message as string}</span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">Final Step</p>

            <Controller
              name="finalSteps"
              control={control}
              render={({ field }) => (
                <>
                  {finalSteps.map((label, idx) => (
                    <label key={idx} className="flex items-center cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        value={label}
                        checked={field.value?.includes(label) || false}
                        onChange={(e) => {
                          const { checked } = e.target;
                          field.onChange(
                            checked
                              ? [...(field.value || []), label]
                              : (field.value || []).filter((v: string) => v !== label)
                          );
                        }}
                      />

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
                </>
              )}
            />
            {errors.finalSteps && (
              <span className="text-red-500 text-sm">{errors.finalSteps.message as string}</span>
            )}
          </div>
        </div>
      </section>

      <Button disabled={loading} type="submit" className="group relative overflow-hidden">
        <span
          className={`text-p2 font-montserrat ${
            isSubmitting ? "text-[#ffffff] " : "text-[#000000] "
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </span>
      </Button>
      {/* Error message section */}
      {errorMessage && <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>}

      {/* Success message */}
      {isSubmitSuccessful && (
        <div className="mt-6 p-4 text-left bg-[#000000] rounded">
          <h2 className="text-h5 font-montserrat font-semibold">
            Thank you for applying! We have received your details.
          </h2>
          <p className="text-p3 font-open-sans">You will also receive a confirmation email.</p>
        </div>
      )}
    </form>
  );
}
