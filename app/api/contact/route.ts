//app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the authenticated user's email here
    to: process.env.EMAIL_TO,
    cc: ["hassanahmedshaikh9@gmail.com", "rabihasanshaikh3@gmail.com"],
    subject: `Contact Form: ${subject}`,
    text: `From: ${name}\n\nEmail: <${email}> \n\nSubject: ${subject} \n\nMessage: \n\n${message}`,
  };
  

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
