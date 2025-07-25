// app/api/contact/route.ts
import { NextResponse } from "next/server";

import { post } from "@/src/lib/axiosInterceptor";
import { CONTACT_EMAIL_SUBJECT, CONTACT_HERO_BANNER_URL, CONTACT_THANKS_FOR_APPLYING, CONTACT_TYPE } from "@/src/constants/emailConstant";
import { contactTransporter } from "@/src/lib/nodemailer";
import { generateEmailContent } from "@/src/constants/emailTemplate";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const {
      name,
      email,
      message,
    }: ContactRequestBody =body ;

    if (!name || !email || !message) {
      return NextResponse.json({
        message: "All fields are required",
        status: 400,
      });
    }
    const data = {
      data: {
        name: name,
        email,
        message,
      },
    };

    const url = `${process.env.BASE_URL}/api/contacts`;
    try {
      await post(url, data);
    } catch (error: any) {
      console.error("Error submitting form:", error.response.data.error);
      return NextResponse.json({
        message: error.response.data.error.message,
        error: error.message || "Unknown error",
        status: error.response.data.error.status || 500,
      });
    }
try {
      await contactTransporter.sendMail({
        from: process.env.CONTACT_EMAIL_NODEMAILER,
        to: email,
        subject: CONTACT_EMAIL_SUBJECT,
        ...generateEmailContent(
          CONTACT_TYPE,
          name,
          email,
          CONTACT_EMAIL_SUBJECT,
          CONTACT_HERO_BANNER_URL,
          CONTACT_THANKS_FOR_APPLYING,
          ""
        ),
      });
} catch (error: any) {
      console.error("Error sending confirmation email:", error);
      return NextResponse.json({
        message: "Error sending confirmation email",
        error: error.message || "Unknown error",
        status: 500,
      });
  
}
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error: error.message || "Unknown error",
      status: 500,
    });
  }
}
