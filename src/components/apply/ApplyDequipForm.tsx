"use client";
import { useEffect, useState } from "react";
import BuildingDetailsSection from "./building-details/BuildingDetailsSection";
import FounderDetailsSection from "./founder-details/FounderDetailsSection";
import { TimezoneSelect } from "./timezone-field/TimezoneSelect";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import VisionReadinessFit from "./vision-readiness-fit/VisionReadinessFit";
import AlignDequipSection from "./align-with-dequip/AlignDequipSection";
import { zodResolver } from "@hookform/resolvers/zod";
import BonusRoundSection from "./bonus-round/BonusRoundSection";
import LogisticSection from "./logistic/LogistcSection";
import { Button } from "../ui/button";
import AdditionalInformation from "./additional-information/AdditionalInfromation";
import TrustPerHuman from "./trust-per-human/TrustPerHuman";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

// Main form schema with nested founder(s)

export default function ApplyDequipForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ApplyFormType>({
    resolver: zodResolver(applyFormSchema),
    mode: "all",
    defaultValues: {
      founder: {
        fullName: "",
        linkedIn: "",
        role: "",
        email: "",
        timeZone: "",
      },
      coFounders: [],
      projectUrls: [{ url: "" }], // <-- ensures one field is always there instantly
    },
  });
  // For coFounders
  const {
    fields: coFoundersFields,
    append: appendCoFounder,
    remove: removeCoFounder,
  } = useFieldArray({
    control,
    name: "coFounders",
  });

  // For projectUrls

  const {
    fields: projectUrlsFields,
    append: appendProjectUrl,
    remove: removeProjectUrl,
  } = useFieldArray({
    control,
    name: "projectUrls",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data: ApplyFormType) => {
    console.log("SUBMIT TRIGGERED!", data);
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/apply-form", {
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

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form
      className="px-4 md:px-20 pt-[77px] pb-[80px] container mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* === Startup Snapshot === */}
      <section id="apply-form" className="scroll-mt-24">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Startup Snapshot
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="startupName" className="text-h6 font-montserratfont-medium">
              Startup Name
            </label>
            <input
              {...register("startupName")}
              id="startupName"
              placeholder="Startup Name"
              className="input"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="oneLinePitch" className="text-h6 font-montserratfont-medium">
              One-line Pitch
            </label>
            <input
              {...register("oneLinePitch")}
              id="oneLinePitch"
              placeholder="One-line Pitch"
              className="input"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="websiteURL" className="text-h6 font-montserratfont-medium">
              Website or Notion/Figma Deck
            </label>
            <input
              {...register("websiteURL")}
              id="websiteURL"
              placeholder="Website or Notion/Figma Deck"
              className="input"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <label htmlFor="hqLocation" className="text-h6 font-montserratfont-medium">
              HQ Location/Base Country
            </label>
            <input
              {...register("hqLocation")}
              id="hqLocation"
              placeholder="HQ Location/Base Country"
              className="input"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="incorporation" className="text-h6 font-montserratfont-medium">
              Incorporation Status & Jurisdiction
            </label>
            <input
              {...register("incorporation")}
              id="incorporation"
              placeholder="Incorporation Status & Jurisdiction"
              className="input"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <label htmlFor="dateFounded" className="text-h6 font-montserratfont-medium">
              Time Zone
            </label>
            <Controller
              name="timeZone"
              control={control}
              render={({ field }) => (
                <TimezoneSelect value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
        </div>
      </section>

      {/* === Founder Details === */}
      <section className="mt-20">
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
              {...register("founder.fullName")}
              id="founderFullName"
              placeholder="Full Name"
              className="input"
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderRole" className="text-h6 font-montserratfont-medium">
              Role
            </label>
            <input
              {...register("founder.role")}
              id="founderRole"
              placeholder="Role"
              className="input"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderLinkedin" className="text-h6 font-montserratfont-medium">
              Linkedin
            </label>
            <input
              {...register("founder.linkedIn")}
              id="founderLinkedin"
              placeholder="LinkedIn"
              className="input"
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderemail" className="text-h6 font-montserratfont-medium">
              Email
            </label>
            <input
              {...register("founder.email")}
              id="founderemail"
              placeholder="Email"
              type="email"
              className="input"
            />
            {errors.founder?.email && (
              <p className="text-red-500 text-sm">{errors.founder?.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderTimezone" className="text-h6 font-montserratfont-medium">
              Time zone
            </label>
            <Controller
              name="timeZone"
              control={control}
              render={({ field }) => (
                <TimezoneSelect value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
        </div>
        <FounderDetailsSection
          title="Co-Founders"
          fields={coFoundersFields}
          register={register}
          append={appendCoFounder}
          remove={removeCoFounder}
          name="coFounders"
          control={control}
          errors={errors}
        />
      </section>

      {/* === What You're Building === */}
      <BuildingDetailsSection register={register} errors={errors} />

      {/* === Alignment with Dequip === */}
      <AlignDequipSection register={register} errors={errors} />

      {/* === Vision, Readiness & Fit === */}
      <VisionReadinessFit register={register} errors={errors} />

      {/* === Bonus Round === */}
      <section className="mt-20">
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Bonus Round
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="launchedbefor" className="text-h6 font-montserratfont-medium">
              Have you launched anything before? Show us. Include GitHub, product links, demo
              videos, whitepapers, etc.
            </label>
            <input
              {...register("launchedbefor")}
              id="launchedbefor"
              placeholder="Enter here"
              className="input"
              type="text"
            />
          </div>
        </div>
        <BonusRoundSection
          title="Project Urls"
          fields={projectUrlsFields}
          register={register}
          append={appendProjectUrl}
          remove={removeProjectUrl}
          name="projectUrls"
          control={control}
          errors={errors}
        />
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="evenFlopped" className="text-h6 font-montserratfont-medium">
              What are you most proud of that you&rsquo;ve built, even if it flopped? (We love
              builders. Don&rsquo;t be shy.)
            </label>
            <input
              name="evenFlopped"
              id="evenFlopped"
              placeholder="Enter here"
              className="input"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="rememberTeam" className="text-h6 font-montserratfont-medium">
              If we only remember one thing about your team, what should it be?
            </label>
            <input
              name="rememberTeam"
              id="rememberTeam"
              placeholder="Enter here"
              className="input"
              type="text"
            />
          </div>
        </div>
      </section>
      {/* === Logistics === */}

      <LogisticSection register={register} errors={errors} />

      {/* === Additional Infromation === */}
      <AdditionalInformation register={register} errors={errors} />
      {/* === Trust Per Human === */}
      <TrustPerHuman />

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
        <div className="mt-6 p-4 text-center bg-[#000000] rounded">
          <h2 className="text-h5 font-montserrat font-semibold">
            Thank you for applying! We have received your details.
          </h2>
          <p className="text-p3 font-open-sans">You will also receive a confirmation email.</p>
        </div>
      )}
    </form>
  );
}
