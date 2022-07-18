import type { NextApiRequest, NextApiResponse } from 'next'
import { verify, sign } from '../../service/jwt_sign_verify';
const { serialize } = require('cookie')
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refreshToken"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //const { refreshToken } = req.body;
    const { refreshToken } = req.cookies;
    if (refreshToken) {
        try {
            const user:any = await verify(refreshToken, refreshTokenSecret)
            console.log(user.payload)
            const newToken = sign(user.payload, refreshTokenSecret)
            const serialised = serialize("accessToken", newToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60 * 2,
                path: "/"
            })
            res.setHeader('Set-Cookie', serialised)
            res.status(200)
        } catch (error) {
            res.status(403).json({
                message: 'Invalid refresh token',
            })
        }
    }


    res.status(200).json({ refreshToken })
}
