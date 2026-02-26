import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await response.json() as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message, recaptchaToken } = req.body as {
    name: string;
    email: string;
    subject: string;
    message: string;
    recaptchaToken?: string;
  };

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  // Verify reCAPTCHA
  if (recaptchaToken) {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.',
      });
    }
  }

  // Configure Nodemailer with Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Email notification sent to you
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Auto-reply sent to the person who filled out the form
    await transporter.sendMail({
      from: `"Zunair Shahid" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I've received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Zunair Shahid</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
