import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,  // App Password from Step 1
  },
});

export const sendEmail = async ({ from, fromName, subject, message }) => {
  try {
    // Email you RECEIVE (notification to you)
    await transporter.sendMail({
      from: `"${fromName}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: from,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${fromName} (${from})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Auto-reply email the SENDER receives
    await transporter.sendMail({
      from: `"Zunair Shahid" <${process.env.EMAIL_USER}>`,
      to: from,
      subject: `Re: ${subject}`,
      html: `
        <p>Hi ${fromName},</p>
        <p>Thanks for reaching out! I've received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Zunair Shahid</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};