import { z } from "zod";

export const partnerFormSchema = z.object({
  // Organization Details
  companyName: z.string().min(3, { message: "Enter company name" }),
  website: z.string().url("Enter a valid URL"),
  companySize: z
    .string()
    .min(0)
    .max(4)
    .regex(/^\d+$/, { message: "Enter company size must be only numbers" }),
  HqLocation: z.string().nonempty({ message: "HQ Location is required" }),
  regionsOfOperation: z.string().nonempty({ message: "Region of operation is required" }),
  linkedinProfile: z.string().url("Enter a valid LinkedIn URL"),
  xHandle: z.string().url("Enter a valid twitter URL").optional(),
  // Primary Contact
  founderFullName: z.string().nonempty({ message: "Full name is required" }).min(3),
  founderRole: z.string().nonempty({ message: "Role is required" }).min(3),
  founderLinkedin: z.string().url("Enter a valid LinkedIn URL"),
  founderemail: z.string().email("Enter a valid email"),
  founderTimezone: z.string().nonempty({ message: "Select Time zone" }),
  // Value you bring
  whatTypeOfPartner: z.string().nonempty({ message: "This Field is required" }).min(3),
  checkedOptions: z.array(z.string()).min(1, {
    message: "Please choose at least one option",
  }),
  // offeringLinks: z.array(z.string()),
  offeringToDequip: z.string().nonempty({ message: "This Field is required" }),
  howToSupportStartup: z.string().nonempty({ message: "This Field is required" }),
  checkedOptions2: z.array(z.string()).min(1, {
    message: "Please choose at least one option",
  }),
  // Why You’re a Fit
  whyInterested: z.string().nonempty({ message: "This Field is required" }),
  hopeToCocreate: z.string().nonempty({ message: "This Field is required" }),
  organizationAlign: z.string().nonempty({ message: "This Field is required" }),
  whyYouAreFit: z.array(z.string()).min(1, {
    message: "Please choose at least one option",
  }),
  // Incentives & Collaboration
  tokenAllocation: z.string().refine((val) => val !== undefined && val.trim() !== "", {
    message: "Please select an option",
  }),

  webinar: z.string().refine((val) => val !== undefined && val.trim() !== "", {
    message: "Please select a an option",
  }),
  pressMedia: z.string().refine((val) => val !== undefined && val.trim() !== "", {
    message: "Please select an option",
  }),
  pulseNewsletter: z.string().refine((val) => val !== undefined && val.trim() !== "", {
    message: "Please select an option",
  }),
  // Logistics & Readiness
  supportStartups: z.string().nonempty({ message: "This Field is required" }),
  mainPointOfContact: z.string().nonempty({ message: "This Field is required" }),
  regionalLimitations: z.string().nonempty({ message: "This Field is required" }),
  // Final Details
  shareBio: z.string().nonempty({ message: "This Field is required" }),
});

export type PartnerFormType = z.infer<typeof partnerFormSchema>;
