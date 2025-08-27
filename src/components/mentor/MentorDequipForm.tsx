"use client";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mentorFormSchema, MentorFormType } from "@/src/schema/mentorFormSchema";
import { useState } from "react";
import { Button } from "../ui/button";
import { TimezoneSelect } from "./timezone-field/TimezoneSelect";
import Link from "next/link";
const specialization = [
  "Blockchain infrastructure",
  "Legal / Regulatory / IP",
  "Cryptography / Quantum Security",
  "GTM / Growth Strategy",
  "Artificial Intelligence / ML",
  "Product Development",
  "Smart contracts / DApps",
  "Fundraising / Investor Relations",
  "Fintech / DeFi",
  "Tokenomics / DAO Design",
  "Marketing or PR support",
  "Design / UX / branding",
  "Community building / Discord mods",
  "Other",
];

export default function MentorDequipForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<MentorFormType>({
    resolver: zodResolver(mentorFormSchema),
    defaultValues: {
      mentorTimezone: "",
      workWithNotableCompanies: [{ url: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workWithNotableCompanies",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [deckFile, setDeckFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: MentorFormType) => {
    console.log("SUBMIT TRIGGERED!", data);
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/mentor-form", {
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
      {/* Basic Information */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Basic Information
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="fullname" className="text-h6 font-montserratfont-medium">
              Full name
            </label>
            <input
              {...register("fullname")}
              id="fullname"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">{errors.fullname.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="nickname" className="text-h6 font-montserratfont-medium">
              Preferred Name / Nickname (optional)
            </label>
            <input
              {...register("nickname")}
              id="nickname"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.nickname && (
              <span className="text-red-500 text-sm">{errors.nickname.message as string}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="mentorEmail" className="text-h6 font-montserratfont-medium">
              Email Address
            </label>
            <input
              {...register("mentorEmail")}
              id="mentorEmail"
              placeholder="Enter here"
              className="input"
              type="email"
            />
            {errors.mentorEmail && (
              <span className="text-red-500 text-sm">{errors.mentorEmail.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="linkedinProfile" className="text-h6 font-montserratfont-medium">
              LinkedIn Profile
            </label>
            <input
              {...register("linkedinProfile")}
              id="linkedinProfile"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.linkedinProfile && (
              <span className="text-red-500 text-sm">
                {errors.linkedinProfile.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="xHandle" className="text-h6 font-montserratfont-medium">
              X Handle (optional)
            </label>
            <input
              {...register("xHandle")}
              id="xHandle"
              placeholder="Enter here"
              type="text"
              className="input"
            />
            {errors.xHandle && (
              <span className="text-red-500 text-sm">{errors.xHandle.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="mentorTimezone" className="text-h6 font-montserratfont-medium">
              Time zone
            </label>
            <Controller
              name="mentorTimezone"
              control={control}
              render={({ field }) => (
                <TimezoneSelect
                  value={field.value || ""}
                  onChange={field.onChange}
                  // Pass any extra props required by your TimezoneSelect
                />
              )}
            />
            {errors.mentorTimezone && (
              <span className="text-red-500 text-sm">
                {errors.mentorTimezone.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="countryOfResidence" className="text-h6 font-montserratfont-medium">
              Country of Residence
            </label>
            <input
              {...register("countryOfResidence")}
              id="countryOfResidence"
              placeholder="Enter here"
              type="text"
              className="input"
            />
            {errors.countryOfResidence && (
              <span className="text-red-500 text-sm">
                {errors.countryOfResidence.message as string}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="primaryLanguage" className="text-h6 font-montserratfont-medium">
              Primary Language
            </label>
            <input
              {...register("primaryLanguage")}
              id="primaryLanguage"
              placeholder="Enter here"
              type="text"
              className="input"
            />
            {errors.primaryLanguage && (
              <span className="text-red-500 text-sm">
                {errors.primaryLanguage.message as string}
              </span>
            )}
          </div>
        </div>
      </section>
      {/* === Professional Background === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Professional Background
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="currentRoleAndComapny" className="text-h6 font-montserratfont-medium">
              Current Role & Company
            </label>
            <input
              {...register("currentRoleAndComapny")}
              id="currentRoleAndComapny"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.currentRoleAndComapny && (
              <span className="text-red-500 text-sm">
                {errors.currentRoleAndComapny.message as string}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="yearOfExperience" className="text-h6 font-montserratfont-medium">
              Total Years of Experience
            </label>
            <input
              {...register("yearOfExperience")}
              id="yearOfExperience"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.yearOfExperience && (
              <span className="text-red-500 text-sm">
                {errors.yearOfExperience.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">
              Which sectors do you specialize in?
            </p>
            <p className="text-[16px] font-montserrat font-medium">Check all that apply</p>
            <div className="max-w-[560px] columns-2 gap-4">
              <Controller
                name="specialization"
                control={control}
                render={({ field }) => (
                  <>
                    {specialization.map((label, idx) => (
                      <label key={idx} className="flex items-center cursor-pointer gap-2 mb-2.5">
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
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-h6 font-montserrat font-medium">
              Have you mentored startups before? (Yes/No)
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("mentoredStartups")}
                    value={value}
                    className="custom-radio"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <p className="text-h6 font-montserrat font-medium">
              Have you ever participated in an incubator or accelerator (as founder or mentor)?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("participatedIncubator")}
                    value={value}
                    className="custom-radio"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Any notable companies, protocols, or founders you&rsquo;ve worked with?
          </p>
          <div className="flex flex-col gap-[16px]">
            {fields.map((field, idx) => (
              <div key={field.id} className="flex flex-col w-full gap-2 mb-1">
                <input
                  {...register(`workWithNotableCompanies.${idx}.url` as const)}
                  className="input"
                  placeholder="Enter here"
                  type="text"
                />
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2 w-fit px-[12px] py-[2px]"
                    onClick={() => remove(idx)}
                  >
                    <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent group-hover:bg-none group-hover:text-[#ffffff]">
                      Remove
                    </span>
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="group relative overflow-hidden w-fit"
              onClick={() => append({ url: "" })}
            >
              <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent group-hover:bg-none group-hover:text-[#ffffff]">
                Add more links
              </span>
            </Button>
            {errors.workWithNotableCompanies &&
              typeof errors.workWithNotableCompanies.message === "string" && (
                <span className="text-red-500 text-sm">
                  {errors.workWithNotableCompanies.message}
                </span>
              )}
          </div>
        </div>
      </section>

      {/* === Mentorship Fit === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Mentorship Fit
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="mentoringStyle" className="text-h6 font-montserratfont-medium">
              What&rsquo;s your mentoring style? e.g. hands-on, strategic, reflective, tactical,
              etc.
            </label>
            <input
              {...register("mentoringStyle")}
              id="mentoringStyle"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.mentoringStyle && (
              <span className="text-red-500 text-sm">
                {errors.mentoringStyle.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="startupsSupport" className="text-h6 font-montserratfont-medium">
              What kind of startups do you feel most excited to support? Feel free to mention use
              cases, sectors, or founder profiles.
            </label>
            <input
              {...register("startupsSupport")}
              id="startupsSupport"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.startupsSupport && (
              <span className="text-red-500 text-sm">
                {errors.startupsSupport.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="commitmentCycle" className="text-h6 font-montserratfont-medium">
              How many hours per week can you commit during the 12-week cycle? (Typical is 1 - 2
              hours/week)
            </label>
            <input
              {...register("commitmentCycle")}
              id="commitmentCycle"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.commitmentCycle && (
              <span className="text-red-500 text-sm">
                {errors.commitmentCycle.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-h6 font-montserrat font-medium">
              Would you be open to joining Demo Day or selection panels?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No", "Maybe"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("selectionPanels")}
                    value={value}
                    className="custom-radio"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="whyMentor" className="text-h6 font-montserratfont-medium">
              Why do you want to mentor for DeQUIP 50? (Tell us in a few lines as this helps us
              match you meaningfully.)
            </label>
            <input
              {...register("whyMentor")}
              id="whyMentor"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.whyMentor && (
              <span className="text-red-500 text-sm">{errors.whyMentor.message as string}</span>
            )}
          </div>
        </div>
      </section>
      {/* === Trust Per Human === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            TPH - &rsquo;Trust Per Human&rsquo;
          </span>
        </h2>
        <h5 className="text-h5 font-montserrat mb-10">
          Trust is what enables human connection, collaboration, and belonging at scale. It&rsquo;s
          what makes people feel safe, open, and willing to invest; emotionally, socially, or
          financially.
        </h5>
        <h5 className="text-h5 font-montserrat mb-5">
          Before we finalize your application, we kindly ask that you complete the TPH
          self-assessment. It takes just 2 minutes and helps us build the most values-aligned,
          high-trust incubator community in Web3.
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
              <label htmlFor="TPHScore" className="text-[16px] font-montserrat font-medium">
                Enter your score
              </label>
              <input
                {...register("TPHScore")}
                id="TPHScore"
                placeholder="Enter here"
                className="input"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
      {/* === Final Touches === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Final Touches
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[16px]">
              <label htmlFor="shareBio" className="text-[16px] font-montserrat font-medium">
                Share a 1 to 2 sentence bio we can use on our site if accepted
              </label>
              <textarea
                {...register("shareBio")}
                id="shareBio"
                placeholder="Enter here"
                className="input"
                rows={4}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[16px]">
              <label htmlFor="profileLink" className="text-[16px] font-montserrat font-medium">
                Upload a Profile Picture (optional but encouraged, upload your pic on your drive and
                share link here)
              </label>
              <input
                {...register("profileLink")}
                id="profileLink"
                placeholder="Enter here"
                className="input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-h6 font-montserrat font-medium">
              Do you want to receive early access to Pulse, Quranium&rsquo;s newsletter?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("pulseNewsletter")}
                    value={value}
                    className="custom-radio"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-h6 font-montserrat font-medium">
              Would you like to be considered for future speaking opportunities or panel invites?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("panelInvites")}
                    value={value}
                    className="custom-radio"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
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
      {errorMessage && <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>}
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
