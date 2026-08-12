import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  build: "Store Build",
  migration: "Migration",
  app: "App Development",
  cro: "CRO",
  retainer: "Retainer",
  other: "Other",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { name, email, storeUrl, projectType, budget, message } = (await request.json()) as {
    name?: string;
    email?: string;
    storeUrl?: string;
    projectType?: string;
    budget?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email format" },
      { status: 400 },
    );
  }

  const subjectLabel = projectType ? PROJECT_TYPE_LABELS[projectType] ?? projectType : "General inquiry";

  const detailLines = [
    storeUrl && `Store URL: ${storeUrl}`,
    budget && `Budget range: ${budget}`,
  ].filter(Boolean);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subjectLabel}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Project type:</strong> ${subjectLabel}</p>
        ${detailLines.map((line) => `<p>${line}</p>`).join("\n")}
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Zunair Shahid" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Re: Your ${subjectLabel} inquiry`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I've received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Zunair Shahid</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
