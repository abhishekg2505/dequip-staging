import { z } from "zod";

export const mentorFormSchema = z.object({
  fullname: z.string().min(3),
  nickname: z.string().min(3),
  mentorEmail: z.string().email("Enter a valid email"),
  linkedinProfile: z.string().url("Enter a valid LinkedIn URL"),
  xHandle: z.string().url("Enter a valid LinkedIn URL").optional(),
  mentorTimezone: z.string(),
  countryOfResidence: z.string(),
  primaryLanguage: z.string(),
  currentRoleAndComapny: z.string().min(3),
  yearOfExperience: z.number(),
  specialization: z.array(z.string()),
  mentoredStartups: z.string(),
  participatedIncubator: z.string(),
  workWithNotableCompanies: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
    })
  ),
  mentoringStyle: z.string(),
  startupsSupport: z.string(),
  commitmentCycle: z.string(),
  selectionPanels: z.string(),
  whyMentor: z.string(),
  TPHScore: z.number(),
  shareBio: z.string(),
  profileLink: z.string().url(),
  pulseNewsletter: z.string(),
  panelInvites: z.string(),
});

export type MentorFormType = z.infer<typeof mentorFormSchema>;
