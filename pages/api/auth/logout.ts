// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {serialize} = require('cookie')
type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { cookies } = req

    const token = cookies.accessToken
    console.log(token)

    if (!token) {
        return res.json({message:"not logged in ..."})
    }else{

        const serialised = serialize("accessToken", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: "/"
        })

        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({message:"Logout Success"})
    }
}
