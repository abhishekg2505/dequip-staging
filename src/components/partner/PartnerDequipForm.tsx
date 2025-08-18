"use client";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerFormSchema, PartnerFormType } from "@/src/schema/partnerFormSchema";
import { useState } from "react";
import { Button } from "../ui/button";
const options = [
  "Legal services",
  "Security auditing / quantum resilience",
  "Cloud or infra credits",
  "Talent sourcing or team scaling",
  "Tokenomics or economic modeling",
  "Fundraising / Investor intros",
  "Marketing or PR support",
  "Design / UX / branding",
  "Community building / Discord mods",
  "Other",
];
const options2 = [
  "Direct 1:1 mentorship",
  "Discounted or free services",
  "Group workshops or AMAs",
  "Community perks or giveaways",
  "Platform integrations",
];
const whyYouAreFit = [
  "Decentralization",
  "Post-quantum security",
  "Builder-first support",
  "Long-term infrastructure thinking",
  "Global accessibility",
  "Ethical tech and trust by design",
];
export default function PartnerDequipForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PartnerFormType>({
    resolver: zodResolver(partnerFormSchema),
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [deckFile, setDeckFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: PartnerFormType) => {
    console.log("SUBMIT TRIGGERED!", data);
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/partner-form", {
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
      {/* Organization Details */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Organization Details
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="companyName" className="text-h6 font-montserratfont-medium">
              Company / Organization Name
            </label>
            <input
              {...register("companyName")}
              id="companyName"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">{errors.companyName.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="website" className="text-h6 font-montserratfont-medium">
              website
            </label>
            <input
              {...register("website")}
              id="website"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.website && (
              <span className="text-red-500 text-sm">{errors.website.message as string}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="companySize" className="text-h6 font-montserratfont-medium">
              Company Size
            </label>
            <input
              {...register("companySize")}
              id="companySize"
              placeholder="SelectEnter here"
              className="input"
              type="text"
            />
            {errors.companySize && (
              <span className="text-red-500 text-sm">{errors.companySize.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="HqLocation" className="text-h6 font-montserratfont-medium">
              Headquarters Location
            </label>
            <input
              {...register("HqLocation")}
              id="HqLocation"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.HqLocation && (
              <span className="text-red-500 text-sm">{errors.HqLocation.message as string}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="regionsOfOperation" className="text-h6 font-montserratfont-medium">
              Regions of Operation (Add regions with “,”)
            </label>
            <input
              {...register("regionsOfOperation")}
              id="regionsOfOperation"
              placeholder="Enter here"
              type="text"
              className="input"
            />
            {errors.regionsOfOperation && (
              <span className="text-red-500 text-sm">
                {errors.regionsOfOperation.message as string}
              </span>
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
              type="text"
              className="input"
            />
            {errors.linkedinProfile && (
              <span className="text-red-500 text-sm">
                {errors.linkedinProfile.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="xHandle" className="text-h6 font-montserratfont-medium">
              X Handle (If applicable)
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
        </div>
      </section>
      {/* === Primary Contact === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Primary Contact
          </span>
        </h2>
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
            <label htmlFor="founderRole" className="text-h6 font-montserratfont-medium">
              Role
            </label>
            <input
              {...register("founderRole")}
              id="founderRole"
              placeholder="Role"
              className="input"
              type="text"
            />
            {errors.founderRole && (
              <span className="text-red-500 text-sm">{errors.founderRole.message as string}</span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderLinkedin" className="text-h6 font-montserratfont-medium">
              Linekedin
            </label>
            <input
              {...register("founderLinkedin")}
              id="founderLinkedin"
              placeholder="LinkedIn"
              className="input"
              type="text"
            />
            {errors.founderLinkedin && (
              <span className="text-red-500 text-sm">
                {errors.founderLinkedin.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderemail" className="text-h6 font-montserratfont-medium">
              Email
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
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="founderTimezone" className="text-h6 font-montserratfont-medium">
              Time zone
            </label>
            {/* <TimezoneSelect onChange={} /> */}
          </div>
        </div>
      </section>

      {/* === Value you bring === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Value you bring
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="whatTypeOfPartner" className="text-h6 font-montserratfont-medium">
              What type of partner are you?
            </label>
            <input
              {...register("whatTypeOfPartner")}
              id="whatTypeOfPartner"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.whatTypeOfPartner && (
              <span className="text-red-500 text-sm">
                {errors.whatTypeOfPartner.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">Check all that apply</p>
            <div className="max-w-[560px] columns-2 gap-4">
              <Controller
                name="checkedOptions"
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
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <p className="text-h6 font-montserrat font-medium">
            Please describe the specific offering or benefit you&rsquo;d extend to DeQUIP
            startups(e.g. 10 hrs of legal consulting, 6 months of product credits, token design
            workshops, etc.)
          </p>
          {/* <div className="flex flex-col gap-[16px]">
            {fields.map((field, idx) => (
              <div key={field.id} className="flex gap-2 mb-1">
                <input
                  {...register(`offeringLinks.${idx}` as const)}
                  className="input"
                  placeholder="Link URL"
                  type="text"
                />
                <Button type="button" className="mt-2" onClick={() => remove(idx)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="group relative overflow-hidden"
              onClick={() => append("")}
            >
              <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                Add more links
              </span>
            </Button>
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="howToSupportStartup" className="text-h6 font-montserratfont-medium">
              How would you prefer to support startups?
            </label>
            <input
              {...register("howToSupportStartup")}
              id="howToSupportStartup"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.howToSupportStartup && (
              <span className="text-red-500 text-sm">
                {errors.howToSupportStartup.message as string}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">Check all that apply</p>
            <div className="">
              <Controller
                name="checkedOptions2"
                control={control}
                render={({ field }) => (
                  <>
                    {options2.map((label, idx) => (
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
            </div>
          </div>
        </div>
      </section>
      {/* === Why You&rsquo;re a Fit === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Why You&rsquo;re a Fit
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="whyInterested" className="text-h6 font-montserratfont-medium">
              Why are you interested in partnering with DeQUIP50?
            </label>
            <input
              {...register("whyInterested")}
              id="whyInterested"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.whyInterested && (
              <span className="text-red-500 text-sm">{errors.whyInterested.message as string}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="hopeToCocreate" className="text-h6 font-montserratfont-medium">
              Tell us what drew you in, and what you hope to co-create.
            </label>
            <input
              {...register("hopeToCocreate")}
              id="hopeToCocreate"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.hopeToCocreate && (
              <span className="text-red-500 text-sm">
                {errors.hopeToCocreate.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="organizationAlign" className="text-h6 font-montserratfont-medium">
              Which of the following values does your organization align with?
            </label>
            <input
              {...register("organizationAlign")}
              id="organizationAlign"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.organizationAlign && (
              <span className="text-red-500 text-sm">
                {errors.organizationAlign.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <p className="text-h6 font-montserrat font-medium">Check all that apply</p>
            <div className="">
              <Controller
                name="whyYouAreFit"
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
            </div>
          </div>
        </div>
      </section>

      {/* === Incentives & Collaboration === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Incentives & Collaboration
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-h6 font-montserrat font-medium">
              Would your organization be open to receiving token allocations from the startups you
              support? (This is our way of aligning incentives for long-term ecosystem success)
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No", "Maybe"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("tokenAllocation")}
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
              Are you open to co-hosting webinars, events, or roundtables with Quranium?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No", "Maybe"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("webinar")}
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
              Would you like to be considered for press and media opportunities as an ecosystem
              partner?
            </p>
            <div className="flex items-center gap-10">
              {["Yes", "No"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-[16px] font-normal text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("pressMedia")}
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
              Do you want early access to Quranium&rsquo;s Pulse newsletter and DeQUIP ecosystem
              calls?
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
        </div>
      </section>

      {/* === Logistics & Readiness === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Logistics & Readiness
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="supportStartups" className="text-h6 font-montserratfont-medium">
              How many startups could you realistically support each cycle (approx.)?
            </label>
            <input
              {...register("supportStartups")}
              id="supportStartups"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.supportStartups && (
              <span className="text-red-500 text-sm">
                {errors.supportStartups.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="mainPointOfContact" className="text-h6 font-montserratfont-medium">
              Who would be your main point of contact on our calls and sessions?
            </label>
            <input
              {...register("mainPointOfContact")}
              id="mainPointOfContact"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.mainPointOfContact && (
              <span className="text-red-500 text-sm">
                {errors.mainPointOfContact.message as string}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="regionalLimitations" className="text-h6 font-montserratfont-medium">
              Do you have any regional limitations or preferences? (e.g., SE Asia, Europe only)
            </label>
            <input
              id="regionalLimitations"
              {...register("regionalLimitations")}
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.regionalLimitations && (
              <span className="text-red-500 text-sm">
                {errors.regionalLimitations.message as string}
              </span>
            )}
          </div>
        </div>
      </section>
      {/* === Final Details === */}
      <section>
        <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
          <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Final Details
          </span>
        </h2>
        {/* <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Upload your logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setLogoFile)}
                />
                {logoFile && <p className="text-xs">{logoFile.name}</p>}
              </div>
              {/* File upload for Deck */}
        {/*<div>
                <label>Upload deck (optional)</label>
                <input type="file" onChange={(e) => handleFileChange(e, setDeckFile)} />
                {deckFile && <p className="text-xs">{deckFile.name}</p>}
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="shareBio" className="text-h6 font-montserratfont-medium">
              Share a 1 to 2 sentence bio we can use on our site if accepted
            </label>
            <input
              {...register("shareBio")}
              id="shareBio"
              placeholder="Enter here"
              className="input"
              type="text"
            />
            {errors.shareBio && (
              <span className="text-red-500 text-sm">{errors.shareBio.message as string}</span>
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
      {errorMessage && <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>}
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
