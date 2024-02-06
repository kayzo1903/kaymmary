import nodemailer from "nodemailer";

type messageProps = {
    subject : string ;
    html : string
}

export async function sentMailer({ subject , html } : messageProps) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_EMAIL,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
      to : process.env.SMTP_EMAIL,
      from : process.env.SMTP_EMAIL ,
      html,
      subject ,
    });

  } catch (error) {
    console.log(error);
  }
}
