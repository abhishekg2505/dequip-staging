// "use client";
// import { useEffect } from "react";
// import BuildingDetailsSection from "./building-details/BuildingDetailsSection";
// import FounderDetailsSection from "./founder-details/FounderDetailsSection";
// import { TimezoneSelect } from "./timezone-field/TimezoneSelect";
// import { Controller, useFieldArray, useForm } from "react-hook-form";
// import VisionReadinessFit from "./vision-readiness-fit/VisionReadinessFit";
// import AlignDequipSection from "./align-with-dequip/AlignDequipSection";
// import z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import BonusRoundSection from "./bonus-round/BonusRoundSection";
// import LogisticSection from "./logistic/LogistcSection";
// import { Button } from "../ui/button";
// import AdditionalInformation from "./additional-information/AdditionalInfromation";
// import TrustPerHuman from "./trust-per-human/TrustPerHuman";

// const ProjectUrlItemSchema = z.object({
//   projectUrl: z.string().url("Invalid URL"),
// });

// type Founder = {
//   fullName: string;
//   linkedIn: string;
//   role: string;
//   email: string;
//   timeZone: string;
// };
// const founderSchema = z.object({
//   fullName: z.string(),
//   linkedIn: z.url(),
//   role: z.string(),
//   email: z
//     .string()
//     .min(1, "Email is required") // runs when it's empty string ""
//     .email("Invalid email"),
//   timeZone: z.string().optional(),
// });

// const formSchema = z.object({
//   startupName: z
//     .string()
//     .min(5, "startup name is required and must be greater than 4")
//     .max(20, "must be less than 20"),
//   oneLinePitch: z.string(),
//   websiteURL: z.string().url(),
//   hqLocation: z.string(),
//   incorporation: z.string(),
//   timeZone: z.string(),
//   founder: founderSchema,
//   coFounders: z.array(founderSchema),
//   fullTimeTeam: z.string(),
//   howToHear: z.string({ message: "Please select where you heard about us" }),
//   // projectUrls: z.array(z.string().url("Invalid URL")), //required
//   projectUrls: z.array(z.string().url("Invalid URL").or(z.literal(""))),
//   buildingMatter: z.string().min(1, "This field is required"),
//   jargon: z.string().min(1, "This field is required"),
//   whatsYourEdge: z.string().min(1, "This field is required"),
//   whatsApproach: z.string().min(1, "This field is required"),
//   whatsProduct: z.string().optional(),
//   quantumOptions: z.array(z.string()),
//   relateAI: z.string().optional(),
//   aiOptions: z.array(z.string()),
//   decentralized: z.string().optional(),
//   idea: z.string().optional(),
//   MVPPrototype: z.string().optional(),
//   liveUsers: z.string().optional(),
//   revenue: z.string().optional(),
//   tokenLaunched: z.string().optional(),
//   other: z.string().optional(),
//   deckFile: z.any().optional(),
//   teamPhoto: z.any().optional(),
// });

// export type formValues = {
//   startupName: string;
//   oneLinePitch: string;
//   websiteURL: string;
//   hqLocation: string;
//   incorporation: string;
//   timeZone: string;
//   founder: Founder;
//   coFounders: Founder[];
//   fullTimeTeam: string;
//   howToHear: string;
//   projectUrls: string[];
//   /* ========= What You're Building (BuildingDetailsSection) ========= */
//   buildingMatter: string;
//   jargon: string;
//   whatsYourEdge: string;
//   whatsApproach: string;
//   whatsProduct: string;
//   quantumOptions: string[]; // multi-select checkboxes for quantum relevance
//   relateAI: string;
//   aiOptions: string[]; // multi-select checkboxes for AI relevance
//   decentralized: string;
//   idea: string;
//   MVPPrototype: string;
//   liveUsers: string;
//   revenue: string;
//   tokenLaunched: string;
//   other: string;
//   deckFile: FileList;
//   teamPhoto: FileList;
// };
// export default function ApplyDequipForm() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<formValues>({
//     resolver: zodResolver(formSchema),
//     mode: "all",
//     defaultValues: {
//       founder: {
//         fullName: "",
//         linkedIn: "",
//         role: "",
//         email: "",
//         timeZone: "",
//       },
//       projectUrls: [""], // <-- ensures one field is always there instantly
//     },
//   });
//   const coFoundersArray = useFieldArray({ control, name: "coFounders" });
//   const projectArray = useFieldArray({ control, name: "projectUrls" });
//   // const onSubmit = async (data: formValues) => {

//   //   try {
//   //     console.log("Submitting form data:", data);

//   //     const res = await fetch("/api/apply", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(data), // send the form values as JSON
//   //     });

//   //     const result = await res.json();
//   //     console.log("Server response:", result);

//   //     if (res.ok) {
//   //       alert("Form submitted successfully!");
//   //     } else {
//   //       alert(`Error: ${result.message || "Something went wrong"}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error submitting form:", error);
//   //     alert("Failed to submit form.");
//   //   }
//   // };
//   const onSubmit = async (data: formValues) => {
//     console.log(data);
//     try {
//       const formData = new FormData();
//       // Append all fields
//       Object.entries(data).forEach(([key, value]) => {
//         if (value instanceof FileList) {
//           if (value.length > 0) formData.append(key, value[0]);
//         } else if (Array.isArray(value)) {
//           formData.append(key, JSON.stringify(value));
//         } else if (value !== undefined && value !== null) {
//           formData.append(key, String(value));
//         }
//       });

//       const res = await fetch("/api/apply", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();
//       if (res.ok) {
//         alert("Form submitted successfully!");
//       } else {
//         alert(`Error: ${result.message || "Something went wrong"}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     }
//   };

//   useEffect(() => {
//     console.log(errors);
//   }, [errors]);

//   return (
//     <form
//       className="px-4 md:px-20 pt-[77px] pb-[80px] container mx-auto"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       {/* === Startup Snapshot === */}
//       <section>
//         <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
//           <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
//             Startup Snapshot
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="startupName" className="text-h6 font-montserratfont-medium">
//               Startup Name
//             </label>
//             <input
//               {...register("startupName")}
//               id="startupName"
//               placeholder="Startup Name"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="oneLinePitch" className="text-h6 font-montserratfont-medium">
//               One-line Pitch
//             </label>
//             <input
//               {...register("oneLinePitch")}
//               id="oneLinePitch"
//               placeholder="One-line Pitch"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="websiteURL" className="text-h6 font-montserratfont-medium">
//               Website or Notion/Figma Deck
//             </label>
//             <input
//               {...register("websiteURL")}
//               id="websiteURL"
//               placeholder="Website or Notion/Figma Deck"
//               className="input"
//               type="text"
//             />
//           </div>

//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="hqLocation" className="text-h6 font-montserratfont-medium">
//               HQ Location/Base Country
//             </label>
//             <input
//               {...register("hqLocation")}
//               id="hqLocation"
//               placeholder="HQ Location/Base Country"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="incorporation" className="text-h6 font-montserratfont-medium">
//               Incorporation Status & Jurisdiction
//             </label>
//             <input
//               {...register("incorporation")}
//               id="incorporation"
//               placeholder="Incorporation Status & Jurisdiction"
//               className="input"
//               type="text"
//             />
//           </div>

//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="dateFounded" className="text-h6 font-montserratfont-medium">
//               Time Zone
//             </label>
//             <Controller
//               name="timeZone"
//               control={control}
//               render={({ field }) => (
//                 <TimezoneSelect value={field.value} onChange={field.onChange} />
//               )}
//             />
//           </div>
//         </div>
//       </section>

//       {/* === Founder Details === */}
// <section>
//   <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
//     <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
//       Founder Details
//     </span>
//   </h2>
//   <p className="text-h5 font-montserrat mb-10">Primary Contact - Founder 1</p>
//   <div className="grid grid-cols-1 gap-5 mb-10">
//     <div className="flex flex-col gap-[16px]">
//       <label htmlFor="founderFullName" className="text-h6 font-montserratfont-medium">
//         Full Name
//       </label>
//       <input
//         {...register("founder.fullName")}
//         id="founderFullName"
//         placeholder="Full Name"
//         className="input"
//         type="text"
//       />
//     </div>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
//     <div className="flex flex-col gap-[16px]">
//       <label htmlFor="founderRole" className="text-h6 font-montserratfont-medium">
//         Role
//       </label>
//       <input
//         {...register("founder.role")}
//         id="founderRole"
//         placeholder="Role"
//         className="input"
//         type="text"
//       />
//     </div>
//     <div className="flex flex-col gap-[16px]">
//       <label htmlFor="founderLinkedin" className="text-h6 font-montserratfont-medium">
//         Linekedin
//       </label>
//       <input
//         {...register("founder.linkedIn")}
//         id="founderLinkedin"
//         placeholder="LinkedIn"
//         className="input"
//         type="text"
//       />
//     </div>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
//     <div className="flex flex-col gap-[16px]">
//       <label htmlFor="founderemail" className="text-h6 font-montserratfont-medium">
//         Email
//       </label>
//       <input
//         {...register("founder.email")}
//         id="founderemail"
//         placeholder="Email"
//         type="email"
//         className="input"
//       />
//       {errors.founder?.email && (
//         <p className="text-red-500 text-sm">{errors.founder?.email.message}</p>
//       )}
//     </div>
//     <div className="flex flex-col gap-[16px]">
//       <label htmlFor="founderTimezone" className="text-h6 font-montserratfont-medium">
//         Time zone
//       </label>
//       <Controller
//         name="timeZone"
//         control={control}
//         render={({ field }) => (
//           <TimezoneSelect value={field.value} onChange={field.onChange} />
//         )}
//       />
//     </div>
//   </div>
//   <FounderDetailsSection
//     title="Co-Founders"
//     fields={coFoundersArray.fields}
//     register={register}
//     append={coFoundersArray.append}
//     remove={coFoundersArray.remove}
//     name="coFounders"
//     control={control}
//     errors={errors}
//   />
// </section>

//       {/* === What You're Building === */}
//       <BuildingDetailsSection register={register} errors={errors} />

//       {/* === Alignment with Dequip === */}
//       <AlignDequipSection register={register} errors={errors} />

//       {/* === Vision, Readiness & Fit === */}
//       <VisionReadinessFit />

//       {/* === Bonus Round === */}
//       <section>
//         <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
//           <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
//             Bonus Round
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="launchedbefor" className="text-h6 font-montserratfont-medium">
//               Have you launched anything before? Show us. Include GitHub, product links, demo
//               videos, whitepapers, etc.
//             </label>
//             <input
//               name="launchedbefor"
//               id="launchedbefor"
//               placeholder="Enter here"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <BonusRoundSection
//           title="Project Urls"
//           fields={projectArray.fields}
//           register={register}
//           append={projectArray.append}
//           remove={projectArray.remove}
//           name="projectUrls"
//           control={control}
//           errors={errors}
//         />
//         <div className="grid grid-cols-1 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="evenFlopped" className="text-h6 font-montserratfont-medium">
//               What are you most proud of that you&rsquo;ve built, even if it flopped? (We love
//               builders. Don&rsquo;t be shy.)
//             </label>
//             <input
//               name="evenFlopped"
//               id="evenFlopped"
//               placeholder="Enter here"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-5 mb-10">
//           <div className="flex flex-col gap-[16px]">
//             <label htmlFor="rememberTeam" className="text-h6 font-montserratfont-medium">
//               If we only remember one thing about your team, what should it be?
//             </label>
//             <input
//               name="rememberTeam"
//               id="rememberTeam"
//               placeholder="Enter here"
//               className="input"
//               type="text"
//             />
//           </div>
//         </div>
//       </section>
//       {/* === Logistics === */}

//       <LogisticSection />

//       {/* === Additional Infromation === */}

//       <AdditionalInformation
//         register={register}
//         watch={watch}
//         setValue={setValue}
//         errors={errors}
//       />

//       {/* === Trust Per Human === */}
//       <TrustPerHuman />

//       <Button type="submit" className="group relative overflow-hidden">
//         <span className="text-p2 font-montserrat text-[#000000]">Submit</span>
//       </Button>
//     </form>
//   );
// }

// // Tailwind helper class for form inputs
// // Add this to your global CSS or a relevant file:
// // .input {
// //   @apply w-full p-2 border border-gray-700 bg-transparent rounded text-sm placeholder-gray-400;
// // }
