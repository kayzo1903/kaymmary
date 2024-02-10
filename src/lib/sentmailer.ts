import nodemailer from "nodemailer";

type messageProps = {
    subject : string ;
    html : string
}

export async function sentMailer({ subject , html } : messageProps) {
  
  let transporter = nodemailer.createTransport({
       service : "gmail" ,
       auth : {
        user : process.env.NEXT_PUBLIC_EMAIL_ADDRESS ,
        pass : process.env.NEXT_PUBLIC_PASSWORD
       }
  });
  
  try {
    await transporter.sendMail({
      to :  process.env.NEXT_PUBLIC_EMAIL_ADDRESS  ,
      from :  process.env.NEXT_PUBLIC_EMAIL_ADDRESS ,
      html,
      subject ,
    });

  } catch (error) {
    console.log(`"message" : ${error}`);
  }
}
