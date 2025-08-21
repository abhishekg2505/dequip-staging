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
      from: `"Partner Bot" <${parsed.data.mentorEmail}>`,
      to: adminEmail,
      subject: "New Partner Form Submission",
      html: `
        <h2>New Form Submission</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
          <tr><th align="left">Company Name</th><td>${parsed.data.fullname}</td></tr>
          <tr><th align="left">Company Size</th><td>${parsed.data.nickname}</td></tr>
          <tr><th align="left">Headquater Location</th><td>${parsed.data.mentorEmail}</td></tr>
          <tr><th align="left">Eegions Of Operation</th><td>${parsed.data.linkedinProfile}</td></tr>
          <tr><th align="left">Linkedin Profile</th><td>${parsed.data.mentorTimezone}</td></tr>
          <tr><th align="left">Full Name</th><td>${parsed.data.countryOfResidence}</td></tr>
          <tr><th align="left">Role</th><td>${parsed.data.primaryLanguage}</td></tr>
          <tr><th align="left">Founder Linkedin</th><td>${parsed.data.currentRoleAndComapny}</td></tr>
          <tr><th align="left">Founder Email</th><td>${parsed.data.yearOfExperience}</td></tr>
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
