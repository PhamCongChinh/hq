// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sign } from "../../../service/jwt_sign_verify"
const { serialize } = require('cookie')

type Data = {
    message: string
}

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "accessToken"
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refreshToken"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { username, password } = req.body
    if (username === 'admin' && password === 'admin') {
        //access token
        const accessToken = await sign(username, accessTokenSecret)
        const serialised = serialize("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 2,
            path: "/"
        })
        //refresh token
        const refreshToken = await sign(username, refreshTokenSecret)
        const serialisedRefresh = serialize("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30, //30 days
            path: "/"
        })
        console.log(serialisedRefresh)
        res.setHeader('Set-Cookie', [
            serialised,
            serialisedRefresh
        ])
        res.status(200).json({ message:"Success" })
    }else{
        res.status(401).json({ message:"Invalid credentials!" })
    }
}
