import { sentMailer } from "@/lib/sentmailer";
import { NextApiRequest, NextApiResponse } from "next";

type Fields = {
  name: string;
  message: string;
  email: string;
};

export const POST = async (req:Request ) =>{
    const data  = await req.json()
    const { name , email , message } = data as Fields 
    try {
      await sentMailer({
        subject : `message from ${name}`,
        html : `<p> Email : ${email} <br />${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`
      })
      return Response.json({ message : "message sent" } , {status : 200})
    } catch (error) {
       console.log(error);
       return Response.json({ message : "message failed" } , {status : 500})
    }
}

