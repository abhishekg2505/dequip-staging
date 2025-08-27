import { z } from "zod";

export const mentorFormSchema = z.object({
  fullname: z.string().min(3),
  nickname: z.string().min(3),
  mentorEmail: z.string().email("Enter a valid email"),
  linkedinProfile: z.string().url("Enter a valid LinkedIn URL"),
  xHandle: z.string().url("Enter a valid Twitter URL"),
  mentorTimezone: z.string(),
  countryOfResidence: z.string().min(3, { message: "Enter Country of Residence" }),
  primaryLanguage: z.string().min(3, { message: "Enter Primary Language" }),
  currentRoleAndComapny: z.string().min(3, { message: "Enter Role & Company" }),
  yearOfExperience: z
    .string()
    .min(0)
    .max(2)
    .regex(/^\d+$/, { message: "Year of experience must be only numbers" }),
  // yearOfExperience: z
  //   .number()
  //   .min(1, { message: "Year of experience cannot be negative" })
  //   .refine((val) => val !== undefined, {
  //     message: "Year of experience is required",
  //   }),
  specialization: z.array(z.string()).min(1, { message: "Please select at least one option" }),
  mentoredStartups: z.string().min(1, { message: "Please select" }),
  participatedIncubator: z.string().min(1, { message: "Please select" }),
  workWithNotableCompanies: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
    })
  ),
  mentoringStyle: z.string().min(3, { message: "Please select" }),
  startupsSupport: z.string().min(3, { message: "Please select" }),
  commitmentCycle: z.string().min(3, { message: "Please select" }),
  selectionPanels: z.string().min(1, { message: "Please select" }),
  whyMentor: z.string().min(3, { message: "Please select" }),
  // TPHScore: z.number().min(1, { message: "Enter your score" }),
  TPHScore: z
    .string()
    .min(0)
    .max(2)
    .regex(/^\d+$/, { message: "Enter your score must be only numbers" }),
  shareBio: z.string().min(50, { message: "atleast 50 character" }),
  profileLink: z.string().url(),
  pulseNewsletter: z.string().min(1, { message: "Please select" }),
  panelInvites: z.string().min(1, { message: "Please select" }),
});

export type MentorFormType = z.infer<typeof mentorFormSchema>;
