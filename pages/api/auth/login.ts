// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sign } from "../../../service/jwt_sign_verify"
const { serialize } = require('cookie')

type Data = {
    message: string
}

const secret = process.env.SECRET || "secret"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { username, password } = req.body
    if (username === 'admin' && password === 'admin') {
        const token = await sign(username, secret)
        console.log(token)
        const serialised = serialize("jwtoken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        })
        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({ message:"Success" })
    }else{
        res.status(401).json({ message:"Invalid credentials!" })
    }
}
