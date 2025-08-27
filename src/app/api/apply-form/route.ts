import { NextRequest, NextResponse } from "next/server";
import { applyFormSchema } from "@/src/schema/applyFormSchema";
import nodemailer from "nodemailer";
import clientPromise from "@/src/lib/mongodb";

// Environment variables
const adminEmail = process.env.ADMIN_EMAIL!;
const gmailUser = process.env.GMAIL_USER!;
const gmailPass = process.env.GMAIL_PASS!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received in API:", body);

    // 1️⃣ Validate using Zod
    const parsed = applyFormSchema.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error.format());
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    // 2️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("dequip_apply_form");
    await db.collection("apply_form").insertOne(parsed.data);
    console.log("Data inserted to MongoDB");

    // 3️⃣ Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass, // Gmail App Password
      },
    });

    // 4️⃣ Send email to Admin
    await transporter.sendMail({
      from: `"Apply Bot" <${parsed.data.founder.email}>`,
      to: adminEmail,
      subject: "New Apply Form Submission",
      html: `
    <h2>New Form Submission</h2>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%;">
  
    <!-- Startup Snapshot -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Startup Snapshot</th></tr>
    <tr><th align="left">Startup Name</th><td>${parsed.data.startupName}</td></tr>
    <tr><th align="left">One Line Pitch</th><td>${parsed.data.oneLinePitch}</td></tr>
    <tr><th align="left">Website</th><td>${parsed.data.websiteURL}</td></tr>
    <tr><th align="left">HQ Location</th><td>${parsed.data.hqLocation}</td></tr>
    <tr><th align="left">Incorporation</th><td>${parsed.data.incorporation}</td></tr>
    <tr><th align="left">Time Zone</th><td>${parsed.data.timeZone}</td></tr>

    <!-- Founder Details -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Founder Details</th></tr>
    <tr><th align="left">Founder Name</th><td>${parsed.data.founder.fullName}</td></tr>
    <tr><th align="left">Role</th><td>${parsed.data.founder.role}</td></tr>
    <tr><th align="left">LinkedIn</th><td>${parsed.data.founder.linkedIn}</td></tr>
    <tr><th align="left">Email</th><td>${parsed.data.founder.email}</td></tr>
    <tr><th align="left">Time Zone</th><td>${parsed.data.founder.timeZone}</td></tr>
    <tr><th align="left">Co-Founders</th>
      <td>${
        parsed.data.coFounders.length > 0
          ? parsed.data.coFounders
              .map((cf) => `${cf.fullName} (${cf.role}, ${cf.email})`)
              .join("<br/>")
          : "-"
      }</td>
    </tr>
    <tr><th align="left">Full Time Team</th><td>${parsed.data.fullTimeTeam}</td></tr>
    <tr><th align="left">How Did You Hear</th><td>${parsed.data.howToHear}</td></tr>

    <!-- What You’re Building -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">What You’re Building</th></tr>
    <tr><th align="left">What? & Why?</th><td>${parsed.data.buildingMatter}</td></tr>
    <tr><th align="left">Detailed Solution</th><td>${parsed.data.jargon}</td></tr>
    <tr><th align="left">Your Edge</th><td>${parsed.data.whatsYourEdge}</td></tr>
    <tr><th align="left">Approach</th><td>${parsed.data.whatsApproach}</td></tr>
    <tr><th align="left">Quantum Relevance</th><td>${parsed.data.whatsProduct || "-"}</td></tr>
    <tr><th align="left">Quantum Needs</th><td>${parsed.data.quantumOptions.join(", ")}</td></tr>
    <tr><th align="left">AI Relevance</th><td>${parsed.data.relateAI || "-"}</td></tr>
    <tr><th align="left">AI Needs</th><td>${parsed.data.aiOptions.join(", ")}</td></tr>
    <tr><th align="left">Decentralized/Centralised</th><td>${
      parsed.data.decentralized || "-"
    }</td></tr>
    <tr><th align="left">Idea</th><td>${parsed.data.idea || "-"}</td></tr>
    <tr><th align="left">MVP/Prototype</th><td>${parsed.data.MVPPrototype || "-"}</td></tr>
    <tr><th align="left">Live Users</th><td>${parsed.data.liveUsers || "-"}</td></tr>
    <tr><th align="left">Revenue</th><td>${parsed.data.revenue || "-"}</td></tr>
    <tr><th align="left">Token Launched</th><td>${parsed.data.tokenLaunched || "-"}</td></tr>
    <tr><th align="left">Other</th><td>${parsed.data.other || "-"}</td></tr>

    <!-- Alignment With DeQUIP -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Alignment With DeQUIP</th></tr>
    <tr><th align="left">Mission Alignment</th><td>${parsed.data.startupEmbody}</td></tr>

    <!-- Vision, Readiness, & Fit -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Vision, Readiness & Fit</th></tr>
    <tr><th align="left">Success Benchmark</th><td>${parsed.data.joinDequip}</td></tr>
    <tr><th align="left">Blocker</th><td>${parsed.data.whatsYourBlocker}</td></tr>
    <tr><th align="left">Mentorship Needs</th><td>${parsed.data.mentorshipKind.join(", ")}</td></tr>
    <tr><th align="left">Funds Required</th><td>${parsed.data.raiseFunds}</td></tr>
    <tr><th align="left">Amount & Stage</th><td>${parsed.data.atWhatStage}</td></tr>

    <!-- Bonus Round -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Bonus Round</th></tr>
    <tr><th align="left">Project URLs</th>
      <td>${
        parsed.data.projectUrls.length > 0
          ? parsed.data.projectUrls.map((p) => p.url).join("<br/>")
          : "-"
      }</td>
    </tr>
    <tr><th align="left">Even Flopped</th><td>${parsed.data.evenFlopped}</td></tr>
    <tr><th align="left">Remember Team</th><td>${parsed.data.rememberTeam}</td></tr>

    <!-- Logistic -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Logistic</th></tr>
    <tr><th align="left">Remote First Incubator</th><td>${
      parsed.data.remoteFirstIncubator
    }</td></tr>
    <tr><th align="left">Explain</th><td>${parsed.data.explain}</td></tr>
    <tr><th align="left">Attend Demo Day</th><td>${parsed.data.attendDemoDay}</td></tr>
    <tr><th align="left">Featured Publicly</th><td>${parsed.data.featuredPublicly}</td></tr>
    <tr><th align="left">Expectations</th><td>${parsed.data.expectationsAboveQuestion}</td></tr>

    <!-- Additional Information -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Additional Information</th></tr>
    <tr><th align="left">Deck</th><td>${parsed.data.uploadDeck}</td></tr>
    <tr><th align="left">Photo</th><td>${parsed.data.uploadPhoto}</td></tr>
    <tr><th align="left">Subscribe Me</th><td>${parsed.data.SubscribeMeToPulse}</td></tr>

    <!-- Trust Per Human (TPH) -->
    <tr><th colspan="2" align="left" style="background:#f3f3f3;">Trust Per Human (TPH)</th></tr>
    <tr><th align="left">Your Score</th><td>${parsed.data.yourScore}</td></tr>

  </table>
  `,
    });
    console.log("Admin email sent");

    // 5️⃣ Send Thank-you email to User
    await transporter.sendMail({
      from: gmailUser,
      to: parsed.data.founder.email,
      subject: "Thank You for Your Submission",
      text: "We’ve received your application. Thank you for applying!",
    });
    console.log("User thank-you email sent");

    // 6️⃣ Response
    return NextResponse.json({ message: "Submitted, saved and emailed!" }, { status: 200 });
  } catch (error: unknown) {
    console.error("API error:", error);

    let message = "Unexpected error";
    if (error instanceof Error) message = error.message;

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
