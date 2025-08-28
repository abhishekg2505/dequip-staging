import { NextRequest, NextResponse } from "next/server";
import { partnerFormSchema } from "@/src/schema/partnerFormSchema";
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
    const parsed = partnerFormSchema.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error.format());
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    // 2️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("dequip_apply_form");
    await db.collection("partner_form").insertOne(parsed.data);
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
      from: `"Partner Bot" <${parsed.data.founderemail}>`,
      to: adminEmail,
      subject: "New Partner Form Submission",
      html: `
  <h2>New Form Submission</h2>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
    <!-- Organization Details -->
    <tr><th align="left">Company Name</th><td>${parsed.data.companyName}</td></tr>
    <tr><th align="left">Website</th><td><a href="${parsed.data.website}" target="_blank">${
        parsed.data.website
      }</a></td></tr>
    <tr><th align="left">Company Size</th><td>${parsed.data.companySize}</td></tr>
    <tr><th align="left">HQ Location</th><td>${parsed.data.HqLocation}</td></tr>
    <tr><th align="left">Regions Of Operation</th><td>${parsed.data.regionsOfOperation}</td></tr>
    <tr><th align="left">LinkedIn Profile</th><td>${parsed.data.linkedinProfile}</td></tr>
    <tr><th align="left">Twitter Handle</th><td>${parsed.data.xHandle || "-"}</td></tr>

    <!-- Primary Contact -->
    <tr><th align="left">Founder Full Name</th><td>${parsed.data.founderFullName}</td></tr>
    <tr><th align="left">Founder Role</th><td>${parsed.data.founderRole}</td></tr>
    <tr><th align="left">Founder LinkedIn</th><td>${parsed.data.founderLinkedin}</td></tr>
    <tr><th align="left">Founder Email</th><td>${parsed.data.founderemail}</td></tr>
    <tr><th align="left">Founder Timezone</th><td>${parsed.data.founderTimezone}</td></tr>

    <!-- Value You Bring -->
    <tr><th align="left">Type of Partner</th><td>${parsed.data.whatTypeOfPartner}</td></tr>
    <tr><th align="left">Partnership Options</th><td>${parsed.data.checkedOptions.join(
      ", "
    )}</td></tr>
    <tr><th align="left">Offering to DeQUIP</th><td>${parsed.data.offeringToDequip}</td></tr>
    <tr><th align="left">How to Support Startup</th><td>${parsed.data.howToSupportStartup}</td></tr>
    <tr><th align="left">Support Options</th><td>${parsed.data.checkedOptions2.join(", ")}</td></tr>

    <!-- Why You’re a Fit -->
    <tr><th align="left">Why Interested</th><td>${parsed.data.whyInterested}</td></tr>
    <tr><th align="left">Inclination</th><td>${parsed.data.hopeToCocreate}</td></tr>
    <tr><th align="left">Value Alignment</th><td>${parsed.data.organizationAlign}</td></tr>
    <tr><th align="left">Value Alignment Options</th><td>${parsed.data.whyYouAreFit.join(
      ", "
    )}</td></tr>

    <!-- Incentives & Collaboration -->
    <tr><th align="left">Token Allocation</th><td>${parsed.data.tokenAllocation}</td></tr>
    <tr><th align="left">Webinar</th><td>${parsed.data.webinar}</td></tr>
    <tr><th align="left">Press Media</th><td>${parsed.data.pressMedia}</td></tr>
    <tr><th align="left">Pulse Newsletter</th><td>${parsed.data.pulseNewsletter}</td></tr>

    <!-- Logistics & Readiness -->
    <tr><th align="left">Startup Support Bandwidth</th><td>${parsed.data.supportStartups}</td></tr>
    <tr><th align="left">Main Point of Contact</th><td>${parsed.data.mainPointOfContact}</td></tr>
    <tr><th align="left">Regional Limitations</th><td>${parsed.data.regionalLimitations}</td></tr>

    <!-- Final Details -->
    <tr><th align="left">Share Bio</th><td>${parsed.data.shareBio}</td></tr>
  </table>
  `,
    });
    console.log("Admin email sent");

    // 5️⃣ Send Thank-you email to User
    await transporter.sendMail({
      from: gmailUser,
      to: parsed.data.founderemail,
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
