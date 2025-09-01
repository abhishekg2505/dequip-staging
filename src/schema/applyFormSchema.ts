import { z } from "zod";
export const founderSchema = z.object({
  fullName: z.string().min(3, { message: "This field is required" }),
  linkedIn: z.string().min(3, { message: "This field is required" }).url(),
  role: z.string().min(3, { message: "This field is required" }),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  timeZone: z.string().min(0, { message: "This field is required" }),
});
export type Founder = z.infer<typeof founderSchema>;

export const applyFormSchema = z.object({
  // Startup Snapshot
  startupName: z
    .string()
    .min(5, "startup name is required and must be greater than 4")
    .max(20, "must be less than 20"),
  oneLinePitch: z.string().min(3, { message: "This field is required" }),
  websiteURL: z.string().min(3, { message: "This field is required" }),
  hqLocation: z.string().min(3, { message: "This field is required" }),
  incorporation: z.string().min(3, { message: "This field is required" }),
  snapshottimeZone: z.string().min(0, { message: "This field is required" }),
  // Founder Details
  founder: founderSchema,
  coFounders: z.array(founderSchema),
  fullTimeTeam: z.string().min(1, { message: "This field is required" }),
  howToHear: z.string({ message: "Please select where you heard about us" }),
  timeZone: z.string().min(0, { message: "This field is required" }),

  // What You’re Building
  buildingMatter: z.string().min(1, "This field is required"),
  jargon: z.string().min(1, "This field is required"),
  whatsYourEdge: z.string().min(1, "This field is required"),
  whatsApproach: z.string().min(1, "This field is required"),
  whatsProduct: z.string().min(3, { message: "This field is required" }),
  quantumOptions: z.array(z.string()),
  relateAI: z.string().min(1, { message: "This field is required" }),
  aiOptions: z.array(z.string()),
  decentralized: z.string().min(1, { message: "This field is required" }),
  idea: z.string().min(3, { message: "This field is required" }),
  MVPPrototype: z.string().min(1, { message: "This field is required" }),
  liveUsers: z.string().min(3, { message: "This field is required" }),
  revenue: z.string().min(3, { message: "This field is required" }),
  tokenLaunched: z.string().min(1, { message: "This field is required" }),
  other: z.string().optional(),
  // Alignment With DeQUIP
  startupEmbody: z.string().min(1, { message: "This field is required" }),

  // Vision, Readiness, & Fit
  joinDequip: z.string().min(1, { message: "This field is required" }),
  whatsYourBlocker: z.string().min(1, { message: "This field is required" }),
  mentorshipKind: z.array(z.string()),
  raiseFunds: z.string().min(1, { message: "This field is required" }),
  atWhatStage: z.string().min(1, { message: "This field is required" }),
  // Bonus Round
  projectUrls: z.array(
    z.object({
      url: z.string().url("Please enter a valid URL"),
    })
  ),
  evenFlopped: z.string().min(3, { message: "This field is required" }),
  rememberTeam: z.string().min(3, { message: "This field is required" }),

  // Logistic
  remoteFirstIncubator: z.string().min(1, { message: "This field is required" }),
  explain: z.string().min(1, { message: "This field is required" }),
  attendDemoDay: z.string().min(1, { message: "This field is required" }),
  featuredPublicly: z.string().min(1, { message: "This field is required" }),
  expectationsAboveQuestion: z.string().min(1, { message: "This field is required" }),
  // Additional Information
  uploadDeck: z.string().url("Please enter valid url"),
  uploadPhoto: z.string().url("Please enter valid url"),
  SubscribeMeToPulse: z.string().min(1, { message: "This field is required" }),

  // And finally… Trust Per Human (TPH)
  yourScore: z.string().min(0).max(2).regex(/^\d+$/, { message: "score must be only numbers" }),
});

// Inferred full form values type to use everywhere in your app
export type ApplyFormType = z.infer<typeof applyFormSchema>;
