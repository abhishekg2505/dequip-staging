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

  specialization: z.array(z.string()).min(1, { message: "Please select at least one option" }),
  mentoredStartups: z.string().min(1, { message: "The Field is required" }),
  participatedIncubator: z.string().min(1, { message: "The Field is required" }),
  workWithNotableCompanies: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
    })
  ),
  mentoringStyle: z.string().min(3, { message: "The Field is required" }),
  startupsSupport: z.string().min(3, { message: "The Field is required" }),
  commitmentCycle: z.string().min(3, { message: "The Field is required" }),
  selectionPanels: z.string().min(1, { message: "The Field is required" }),
  whyMentor: z.string().min(3, { message: "The Field is required" }),
  // TPHScore: z.number().min(1, { message: "Enter your score" }),
  TPHScore: z
    .string()
    .min(0)
    .max(2)
    .regex(/^\d+$/, { message: "Enter your score must be only numbers" }),
  shareBio: z.string().min(50, { message: "atleast 50 character" }),
  profileLink: z.string().url(),
  pulseNewsletter: z.string().min(1, { message: "The Field is required" }),
  panelInvites: z.string().min(1, { message: "The Field is required" }),
});

export type MentorFormType = z.infer<typeof mentorFormSchema>;
