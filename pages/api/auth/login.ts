// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { sign } = require('jsonwebtoken')
const { serialize } = require('cookie')

type Data = {
    message: string
}


const TOKEN_SECRET = process.env.TOKEN_SECRET

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { username, password} = req.body

    if (username === 'admin' && password === 'admin') {
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //30 days
            username: username,
        }, TOKEN_SECRET)

        const serialised = serialize("jwtoken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        })

        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({message:"Success"})
    }else{
        res.status(401).json({message:"UnSuccess"})
    }
}
