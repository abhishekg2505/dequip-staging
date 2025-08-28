import { NextRequest, NextResponse } from "next/server";
import { mentorFormSchema } from "@/src/schema/mentorFormSchema";
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
    const parsed = mentorFormSchema.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error.format());
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    // 2️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("dequip_apply_form");
    await db.collection("mentor_form").insertOne(parsed.data);
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
      from: `"Mentor Bot" <${parsed.data.mentorEmail}>`,
      to: adminEmail,
      subject: "New Mentor Form Submission",
      html: `
    <h2>New Form Submission</h2>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
      <!-- Basic Info -->
      <tr><th align="left">Full Name</th><td>${parsed.data.fullname}</td></tr>
      <tr><th align="left">Nickname</th><td>${parsed.data.nickname}</td></tr>
      <tr><th align="left">Mentor Email</th><td>${parsed.data.mentorEmail}</td></tr>
      <tr><th align="left">LinkedIn Profile</th><td>${parsed.data.linkedinProfile}</td></tr>
      <tr><th align="left">Twitter Handle</th><td>${parsed.data.xHandle || "-"}</td></tr>
      <tr><th align="left">Timezone</th><td>${parsed.data.mentorTimezone}</td></tr>
      <tr><th align="left">Country of Residence</th><td>${parsed.data.countryOfResidence}</td></tr>
      <tr><th align="left">Primary Language</th><td>${parsed.data.primaryLanguage}</td></tr>
      <tr><th align="left">Current Role and Company</th><td>${
        parsed.data.currentRoleAndComapny
      }</td></tr>
      <tr><th align="left">Years of Experience</th><td>${parsed.data.yearOfExperience}</td></tr>

      <!-- Mentoring Info -->
      <tr><th align="left">Specialization</th><td>${parsed.data.specialization.join(", ")}</td></tr>
      <tr><th align="left">Mentored Startups</th><td>${parsed.data.mentoredStartups}</td></tr>
      <tr><th align="left">Participated Incubators</th><td>${
        parsed.data.participatedIncubator
      }</td></tr>
      <tr><th align="left">Work With Notable Companies</th>
        <td>
          ${
            parsed.data.workWithNotableCompanies && parsed.data.workWithNotableCompanies.length > 0
              ? parsed.data.workWithNotableCompanies.map((c) => c.url).join("<br/>")
              : "-"
          }
        </td>
      </tr>
      <tr><th align="left">Mentoring Style</th><td>${parsed.data.mentoringStyle}</td></tr>
      <tr><th align="left">Preferred Startup Sectors</th><td>${
        parsed.data.startupsSupport
      }</td></tr>
      <tr><th align="left">Commitment Cycle</th><td>${parsed.data.commitmentCycle}</td></tr>
      <tr><th align="left">Selection Panels</th><td>${parsed.data.selectionPanels}</td></tr>
      <tr><th align="left">Why Mentor</th><td>${parsed.data.whyMentor}</td></tr>

      <!-- Assessment -->
      <tr><th align="left">TPH Score</th><td>${parsed.data.TPHScore}</td></tr>

      <!-- Bio & Profile -->
      <tr><th align="left">Share Bio</th><td>${parsed.data.shareBio}</td></tr>
      <tr><th align="left">Profile Link</th><td>${parsed.data.profileLink}</td></tr>

      <!-- Newsletter & Panels -->
      <tr><th align="left">Pulse Newsletter</th><td>${parsed.data.pulseNewsletter}</td></tr>
      <tr><th align="left">Panel Invites</th><td>${parsed.data.panelInvites}</td></tr>
    </table>
  `,
    });
    console.log("Admin email sent");

    // 5️⃣ Send Thank-you email to User
    await transporter.sendMail({
      from: gmailUser,
      to: parsed.data.mentorEmail,
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
