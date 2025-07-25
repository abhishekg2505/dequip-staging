import nodemailer from "nodemailer";

export const contactTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_EMAIL_NODEMAILER,
    pass: process.env.CONTACT_PASS_NODEMAILER,
  },
});

export const newsLetterTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEWSLETTER_EMAIL_NODEMAILER,
    pass: process.env.NEWSLETTER_PASS_NODEMAILER,
  },
});
