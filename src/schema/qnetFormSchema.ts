import { z } from "zod";

export const qnetFormSchema = z.object({
  founderFullName: z.string().min(2, "Full Name is required"),
  founderLinkedinX: z.string(),
  founderTelegramDiscord: z.string(),
  founderemail: z.string().email("Must be valid email"),
  startupProjectName: z.string().optional(),
  whatAreYouBuilding: z.string().min(3, "Describe what you are building"),
  interestedOptions: z.array(z.string()).optional(),
  yourScore: z.string(),
  finalSteps: z.array(z.string()).optional(),
});

export type QnetFormType = z.infer<typeof qnetFormSchema>;
