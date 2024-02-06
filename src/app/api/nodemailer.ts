import { NextApiRequest, NextApiResponse } from "next"

const Handler = (req:NextApiRequest , res:NextApiResponse) =>{
    if (req.method === 'POST') {
        console.log(req.body);
    }
     res.status(400).json({message : "failed to sent message"})
}

export default Handler