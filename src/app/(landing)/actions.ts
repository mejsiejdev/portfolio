"use server";

import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await transporter.sendMail({
      from: data.email,
      to: process.env.GMAIL_USER,
      subject: `Message from ${data.name} <${data.email}>`,
      text: data.message,
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
}
