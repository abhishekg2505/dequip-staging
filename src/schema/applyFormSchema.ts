import { z } from "zod";
export const founderSchema = z.object({
  fullName: z.string(),
  linkedIn: z.string().url(),
  role: z.string(),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  timeZone: z.string().optional(),
});
export type Founder = z.infer<typeof founderSchema>;

export const applyFormSchema = z.object({
  // Startup Snapshot
  startupName: z
    .string()
    .min(5, "startup name is required and must be greater than 4")
    .max(20, "must be less than 20"),
  oneLinePitch: z.string(),
  websiteURL: z.string().url(),
  hqLocation: z.string(),
  incorporation: z.string(),
  timeZone: z.string(),
  // Founder Details
  founder: founderSchema,
  coFounders: z.array(founderSchema),
  fullTimeTeam: z.string(),
  howToHear: z.string({ message: "Please select where you heard about us" }),

  // What You’re Building
  buildingMatter: z.string().min(1, "This field is required"),
  jargon: z.string().min(1, "This field is required"),
  whatsYourEdge: z.string().min(1, "This field is required"),
  whatsApproach: z.string().min(1, "This field is required"),
  whatsProduct: z.string().optional(),
  quantumOptions: z.array(z.string()),
  relateAI: z.string().optional(),
  aiOptions: z.array(z.string()),
  decentralized: z.string().optional(),
  idea: z.string().optional(),
  MVPPrototype: z.string().optional(),
  liveUsers: z.string().optional(),
  revenue: z.string().optional(),
  tokenLaunched: z.string().optional(),
  other: z.string().optional(),

  // Alignment With DeQUIP
  startupEmbody: z.string(),

  // Vision, Readiness, & Fit
  joinDequip: z.string(),
  whatsYourBlocker: z.string(),
  mentorshipKind: z.array(z.string()),
  raiseFunds: z.string(),
  atWhatStage: z.string(),
  // Bonus Round
  launchedbefor: z.string().url(),
  projectUrls: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
    })
  ),
  remoteFirstIncubator: z.string(),
  explain: z.string(),
  attendDemoDay: z.string(),
  featuredPublicly: z.string(),
  expectationsAboveQuestion: z.string(),

  // Additional Information
  uploadDeck: z.string().url(),
  uploadPhoto: z.string().url(),
  SubscribeMeToPulse: z.string(),
});

// Inferred full form values type to use everywhere in your app
export type ApplyFormType = z.infer<typeof applyFormSchema>;
