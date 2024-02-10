import nodemailer from "nodemailer";
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' })

type messageProps = {
    subject : string ;
    html : string
}

export async function sentMailer({ subject , html } : messageProps) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.SMTP_USER,
      clientId: `709546193924-3495p801pgh49lj6adlbioks6kfvniqu.apps.googleusercontent.com`,
      clientSecret: `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`,
      refreshToken: `1//04WywBUDzdDI7CgYIARAAGAQSNwF-L9Irq0bzbbtaGqbwbVEh_pPyHg55KgtMtXpome8CZu-KjqXuiyUiVhNUNTAWF-kl3jrfEM8
      ` ,
      accessToken: `ya29.a0AfB_byCDoK9qDz_FyYW3A0gkUSqK2Rk9_ZB3OARvxA1xOVmDcoLua-zlXkog2byl3cpjRvxJyfJW2pSAde4H9SXUVmYm1aLseLKxpDNsHtzr4fRt6k4FcJ5rogcXw8MF9klW0hf4hcWq9QkOBQyOABwOU7AHX6LAB87oaCgYKAWUSARISFQHGX2MiCrcqUzO5XAVnscafMA52Bw0171
      `,
      expires: 1484314697598,
    },
  });
  
  try {
    await transporter.sendMail({
      to : process.env.SMTP_USER,
      from : process.env.SMTP_USER ,
      html,
      subject ,
    });

  } catch (error) {
    console.log(`"message" : ${error}`);
  }
}
