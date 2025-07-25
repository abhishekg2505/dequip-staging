import { NextResponse } from "next/server";

import { generateEmailContent } from "../../../components/EmailTemplate/nextgenEmail";
import { post } from "../../../lib/axiosInterceptor";
import { newsLetterTransporter } from "../../../lib/nodemailer";
import {
  NEWSLETTER_EMAIL_SUBJECT,
  NEWSLETTER_HERO_BANNER_URL,
  NEWSLETTER_THANKS,
  NEWSLETTER_THANKS_FOR_APPLYING,
  NEWSLETTER_TYPE,
} from "@/src/constants/emailConstant";
interface NewsLetterBody {
  email: string;
  name: string;
  company: string;
  designation: string;
  call: string;
  country: string;
}
export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, company, designation, call, country }: NewsLetterBody = body;

    if (!email) {
      return NextResponse.json(
        {
          message: "Email is required",
        },
        { status: 400 }
      );
    }
    const data = {
      data: {
        name: name,
        email: email,
        company: company,
        designation: designation,
        country: country,
        schedule: call,
      },
    };

    let response;
    try {
      const url = `${process.env.BASE_URL}/api/newsletter-forms`;
      response = await post(url, data);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      return NextResponse.json(
        {
          message: "Error submitting form",
          error: error,
        },
        { status: 500 }
      );
    }

    //  Send confirmation email
    try {
      await newsLetterTransporter.sendMail({
        from: process.env.NEWSLETTER_EMAIL_NODEMAILER, // Use appropriate environment variable
        to: email,
        subject: NEWSLETTER_EMAIL_SUBJECT,
        ...generateEmailContent(
          NEWSLETTER_TYPE,
          name,
          email,
          NEWSLETTER_EMAIL_SUBJECT,
          NEWSLETTER_HERO_BANNER_URL,
          NEWSLETTER_THANKS_FOR_APPLYING,
          NEWSLETTER_THANKS
        ),
      });
    } catch (error: any) {
      console.error("Error sending confirmation email:", error);
      return NextResponse.json(
        {
          message: "Error sending confirmation email",
          error: error,
        },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Success", status: 200 }, { status: 200 });
  } catch (error: any) {
    console.error("Unexpected error occurred:", error);
    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error,
      },
      { status: 500 }
    );
  }
}
