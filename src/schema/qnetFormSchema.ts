import { z } from "zod";

export const qnetFormSchema = z.object({
  founderFullName: z.string().min(2, "Full Name is required"),
  founderLinkedinX: z.string().url(),
  founderTelegramDiscord: z.string().url(),
  founderemail: z.string().email("Must be valid email"),
  startupProjectName: z.string().optional(),
  whatAreYouBuilding: z.string().min(3, "Describe what you are building"),
  interestedOptions: z.array(z.string()).min(1, { message: "Please select at least one option" }),
  yourScore: z.string().min(1, { message: "Score is required" }),
  finalSteps: z.array(z.string()).min(1, { message: "Please select at least one option" }),
});

export type QnetFormType = z.infer<typeof qnetFormSchema>;
