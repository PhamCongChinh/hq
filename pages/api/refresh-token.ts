import type { NextApiRequest, NextApiResponse } from 'next'
import { verify, sign } from '../../service/jwt_sign_verify';
const { serialize } = require('cookie')
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refreshToken"

import connection from '../../db'
import { type } from 'os';

type Data = {
    refreshToken: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    connection.query('SELECT * FROM `user` WHERE `username` = "admin"', (results:Data) => {
        console.log(results)
    })
    /*if (refreshToken) {
        try {
            const { payload } = await verify(refreshToken, refreshTokenSecret)
            const newToken = await sign(payload, refreshTokenSecret)
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
    }*/

    res.status(200).json({refreshToken:'asd'})
    //res.status(200).json({ refreshToken })
}
