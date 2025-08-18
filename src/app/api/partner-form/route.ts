// import { NextRequest, NextResponse } from "next/server";
// import { partnerFormSchema } from "@/src/schema/partnerFormSchema";
// import clientPromise from "@/src/lib/mongodb";
// import nodemailer from "nodemailer";
// import { uploadToCloudinary } from "@/src/lib/cloudinary";

// const adminEmail = process.env.ADMIN_EMAIL!;
// const gmailUser = process.env.GMAIL_USER!;
// const gmailPass = process.env.GMAIL_PASS!;

// export async function POST(req: NextRequest) {
//   try {
//     // Parse formData from the request
//     // const formData = await req.formData();

//     // // Extract fields from FormData
//     // const fields: Record<string, any> = {};
//     // for (const [key, value] of formData.entries()) {
//     //   // For file fields, skip and process separately
//     //   if (value instanceof File) continue;
//     //   fields[key] = value;
//     // }

//     // // Upload files to Cloudinary, get URLs
//     // let logoUrl = "",
//     //   deckUrl = "";
//     // const logoFile = formData.get("uploadLogo");
//     // const deckFile = formData.get("deckFile");
//     // if (logoFile instanceof File && logoFile.size > 0) {
//     //   logoUrl = (await uploadToCloudinary(logoFile as File, "partner_logos")).secure_url;
//     // }
//     // if (deckFile instanceof File && deckFile.size > 0) {
//     //   deckUrl = (await uploadToCloudinary(deckFile as File, "partner_decks")).secure_url;
//     // }

//     // // Merge file URLs into the fields
//     // const data = { ...fields, logoUrl, deckUrl };
//     const body = await req.json();
//     console.log("Received in API:", body);
//     // Validate using Zod
//     const parsed = partnerFormSchema.safeParse(body);
//     if (!parsed.success) {
//       return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
//     }

//     // Save to MongoDB
//     const client = await clientPromise;
//     await client.db("dequip_apply_form").collection("partner_form").insertOne(parsed.data);

//     // Send Email to Admin
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: gmailUser, pass: gmailPass },
//     });
//     await transporter.sendMail({
//       from: `"Qnet Partner Bot" <${gmailUser}>`,
//       to: adminEmail,
//       subject: `New Partner Form Submission - ${parsed.data.companyName}`,
//       html: `<h2>${parsed.data.companyName} submitted a partner application.</h2>
//         <p>Contact: ${parsed.data.founderemail}</p>

//         <!-- Add more fields as needed -->
//       `,
//     });

//     // Send confirmation email to user
//     await transporter.sendMail({
//       from: gmailUser,
//       to: parsed.data.founderemail,
//       subject: "Thank you for your Partner Application",
//       html: `<p>Thank you for submitting your Partner application to DeQUIP!</p>`,
//     });

//     return NextResponse.json({ message: "Submission successful!" });
//   } catch (error) {
//     console.error("API error:", error);
//     let message = "An error occurred";
//     if (error instanceof Error) message = error.message;
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

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
          <tr><th align="left">Company Name</th><td>${parsed.data.companyName}</td></tr>
          <tr><th align="left">Company Size</th><td><a href="${
            parsed.data.website
          }" target="_blank">${parsed.data.companySize}</a></td></tr>
          <tr><th align="left">Headquater Location</th><td>${
            parsed.data.regionsOfOperation
          }</td></tr>
          <tr><th align="left">Eegions Of Operation</th><td>${
            parsed.data.regionsOfOperation
          }</td></tr>
          <tr><th align="left">Linkedin Profile</th><td>${parsed.data.linkedinProfile}</td></tr>
          <tr><th align="left">Full Name</th><td>${parsed.data.founderFullName}</td></tr>
          <tr><th align="left">Role</th><td>${parsed.data.founderRole}</td></tr>
          <tr><th align="left">Founder Linkedin</th><td>${parsed.data.founderLinkedin}</td></tr>
          <tr><th align="left">Founder Email</th><td>${parsed.data.founderemail || "—"}</td></tr>
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
