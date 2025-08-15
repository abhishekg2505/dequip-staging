// import { NextRequest, NextResponse } from "next/server";
// import { qnetFormSchema } from "@/src/schema/qnetFormSchema";
// import clientPromise from "@/src/lib/mongodb";
// import nodemailer from "nodemailer";

// const adminEmail = process.env.ADMIN_EMAIL!;
// const gmailUser = process.env.GMAIL_USER!;
// const gmailPass = process.env.GMAIL_PASS!;

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received in API:", body);

//     // Validate input using Zod schema
//     const parsed = qnetFormSchema.safeParse(body);
//     if (!parsed.success) {
//       console.error("Validation error:", parsed.error.format());
//       return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
//     }

//     // Reuse MongoDB client connection
//     const client = await clientPromise;
//     console.log("MongoDB connected");

//     // Insert validated data into the correct database and collection
//     await client.db("dequip_apply_form").collection("qnet_form").insertOne(parsed.data);
//     console.log("Inserted to DB");

//     // Setup Nodemailer transport using Gmail SMTP with app password
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: gmailUser,
//         pass: gmailPass,
//       },
//     });

//     // Send notification email to admin with submission details
//     await transporter.sendMail({
//       from: gmailUser,
//       to: adminEmail,
//       subject: "New Qnet Form Submission",
//       text: JSON.stringify(parsed.data, null, 2),
//     });
//     console.log("Admin email sent");

//     // Send thank-you email to the user
//     await transporter.sendMail({
//       from: gmailUser,
//       to: parsed.data.founderemail,
//       subject: "Thank You!",
//       text: "We’ve received your application. Thank you!",
//     });
//     console.log("User thank-you email sent");

//     return NextResponse.json({ message: "Success" }, { status: 200 });
//   } catch (error) {
//     console.error("API error:", error);

//     let message = "Unexpected error";
//     if (error instanceof Error) {
//       message = error.message;
//     }
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { qnetFormSchema } from "@/src/schema/qnetFormSchema";
// import clientPromise from "@/src/lib/mongodb";
// import nodemailer from "nodemailer";

// // Environment variables (make sure these are set in .env.local)
// const adminEmail = process.env.ADMIN_EMAIL!;
// const gmailUser = process.env.GMAIL_USER!;
// const gmailPass = process.env.GMAIL_PASS!;

// /**
//  * Utility to safely extract and stringify error messages
//  */
// function getErrorMessage(error: unknown): string {
//   if (error instanceof Error) {
//     return error.message;
//   }
//   return String(error);
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("📩 Received in API:", body);

//     // 1️⃣ Validate input data
//     const parsed = qnetFormSchema.safeParse(body);
//     if (!parsed.success) {
//       console.error("❌ Validation error:", parsed.error.format());
//       return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
//     }

//     // 2️⃣ Connect to MongoDB (reusing shared connection)
//     const client = await clientPromise;
//     console.log("✅ MongoDB connected");

//     // 3️⃣ Insert into collection
//     await client.db("deqip_apply_form").collection("qnet_form").insertOne(parsed.data);
//     console.log("✅ Inserted to DB");

//     // 4️⃣ Send emails via Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: gmailUser,
//         pass: gmailPass, // App password, NOT your normal Gmail password
//       },
//     });

//     // Admin notification
//     await transporter.sendMail({
//       from: gmailUser,
//       to: adminEmail,
//       subject: "📥 New Qnet Form Submission",
//       text: JSON.stringify(parsed.data, null, 2),
//     });
//     console.log("📧 Admin email sent");

//     // User thank-you email
//     await transporter.sendMail({
//       from: gmailUser,
//       to: parsed.data.founderemail,
//       subject: "✅ Thank You for Your Submission",
//       text: "We’ve received your application. Thank you for applying!",
//     });
//     console.log("📧 User thank-you email sent");

//     // 5️⃣ Success response
//     return NextResponse.json({ message: "Success" }, { status: 200 });
//   } catch (error: unknown) {
//     const message = getErrorMessage(error);
//     console.error("💥 API error:", message);
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { qnetFormSchema } from "@/src/schema/qnetFormSchema";
import nodemailer from "nodemailer";

// Environment variables
const adminEmail = process.env.ADMIN_EMAIL!;
const gmailUser = process.env.GMAIL_USER!;
const gmailPass = process.env.GMAIL_PASS!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Received in API:", body);

    // 1️⃣ Validate using Zod
    const parsed = qnetFormSchema.safeParse(body);
    if (!parsed.success) {
      console.error("❌ Validation error:", parsed.error.format());
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    // 2️⃣ Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass, // Gmail App Password
      },
    });

    // 3️⃣ Send email to Admin
    await transporter.sendMail({
      from: gmailUser,
      to: adminEmail,
      subject: "📥 New Qnet Form Submission",
      html: `
    <h2>New Form Submission</h2>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
      <tr><th align="left">Founder Full Name</th><td>${parsed.data.founderFullName}</td></tr>
      <tr><th align="left">LinkedIn / X</th><td><a href="${
        parsed.data.founderLinkedinX
      }" target="_blank">${parsed.data.founderLinkedinX}</a></td></tr>
      <tr><th align="left">Telegram / Discord</th><td><a href="${
        parsed.data.founderTelegramDiscord
      }" target="_blank">${parsed.data.founderTelegramDiscord}</a></td></tr>
      <tr><th align="left">Email</th><td><a href="mailto:${parsed.data.founderemail}">${
        parsed.data.founderemail
      }</a></td></tr>
      <tr><th align="left">Startup Project Name</th><td>${
        parsed.data.startupProjectName || "—"
      }</td></tr>
      <tr><th align="left">What Are You Building</th><td>${parsed.data.whatAreYouBuilding}</td></tr>
      <tr><th align="left">Interested Options</th><td>${(parsed.data.interestedOptions || []).join(
        ", "
      )}</td></tr>
      <tr><th align="left">Your Score</th><td>${parsed.data.yourScore}</td></tr>
      <tr><th align="left">Final Steps</th><td>${parsed.data.finalSteps}</td></tr>
    </table>
  `,
    });
    console.log("✅ Admin email sent");

    // 4️⃣ Send Thank-you email to User
    await transporter.sendMail({
      from: gmailUser,
      to: parsed.data.founderemail,
      subject: "✅ Thank You for Your Submission",
      text: "We’ve received your application. Thank you for applying!",
    });
    console.log("✅ User thank-you email sent");

    // 5️⃣ Response
    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("💥 API error:", error);

    let message = "Unexpected error";
    if (error instanceof Error) message = error.message;

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
