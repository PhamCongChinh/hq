import type { NextApiRequest, NextApiResponse } from 'next'
import { verify, sign } from '../../service/jwt_sign_verify';
const { serialize } = require('cookie')
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refreshToken"
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "secret";
import pool from '../../config/dbConfig'

type Data = {
    payload: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [ rows ] = await pool.query('SELECT refreshToken FROM `user` WHERE `username` = "admin"')
    const refreshToken = JSON.stringify(rows)
    console.log(refreshToken)
    if (refreshToken) {
        try {
            const { payload } = await verify(refreshToken, refreshTokenSecret)
            console.log(payload)
            const newToken = await sign(payload as string, accessTokenSecret)
            const serialised = serialize("accessToken", newToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            })
            res.setHeader('Set-Cookie', serialised)
            return res.send("refresh token is refresh")
        } catch (error) {
            return res.status(403).json({
                message: 'Invalid refresh token',
            })
        }
    }else{
        console.log("Không tồn tại")
    }

    return res.status(200).json({refreshToken:'asd'})
    //res.status(200).json({ refreshToken })
}
/*connection.connect((err:string) => {
        if (err) throw err;
        connection.query('SELECT refreshToken FROM `user` WHERE `username` = "admin"', (err:string, result:string, fields:string) => {
            if (err) throw err;
            console.log(result[0])
        })
    })*/