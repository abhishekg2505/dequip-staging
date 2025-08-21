import { z } from "zod";

export const partnerFormSchema = z.object({
  companyName: z.string().min(3),
  website: z.string().url("Enter a valid URL"),
  companySize: z.string(),
  HqLocation: z.string(),
  regionsOfOperation: z.string(),
  linkedinProfile: z.string().url("Enter a valid LinkedIn URL"),
  xHandle: z.string().url("Enter a valid LinkedIn URL").optional(),
  founderFullName: z.string().min(3),
  founderRole: z.string(),
  founderLinkedin: z.string().url(),
  founderemail: z.string().email("Enter a valid email"),
  founderTimezone: z.string(),
  whatTypeOfPartner: z.string().optional(),
  checkedOptions: z.array(z.string()),
  // offeringLinks: z.array(z.string()),
  offeringToDequip: z.string(),
  howToSupportStartup: z.string().optional(),
  checkedOptions2: z.array(z.string()),
  whyInterested: z.string(),
  hopeToCocreate: z.string().optional(),
  organizationAlign: z.string().optional(),
  whyYouAreFit: z.array(z.string()), // this is for checkbox
  tokenAllocation: z.string(),
  webinar: z.string(),
  pressMedia: z.string(),
  pulseNewsletter: z.string(),
  supportStartups: z.string().optional(),
  mainPointOfContact: z.string().optional(),
  regionalLimitations: z.string().optional(),
  shareBio: z.string().optional(),
});

export type PartnerFormType = z.infer<typeof partnerFormSchema>;
