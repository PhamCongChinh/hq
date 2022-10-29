// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sign } from "../../../service/jwt_sign_verify"
const { serialize } = require('cookie')

import pool from '../../../config/dbConfig'
import { RowDataPacket } from 'mysql2'
var cookie = require('cookie');

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
            maxAge: 60,
            path: "/"
        })
        res.setHeader('Set-Cookie', serialised)
        //refresh token
        /*const [refreshTokenDB] = await pool.query(`SELECT refreshToken FROM user WHERE username = `+`'admin'`+``)
        const rfDB = (refreshTokenDB as RowDataPacket[])[0].refreshToken
        console.log("refreshTokenDB", rfDB)
        if(rfDB === null){
            const refreshToken = await sign(username, refreshTokenSecret)
            const serialisedRefresh = serialize("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 60, //30 days
                path: "/"
            })
            const result = pool.query('UPDATE user SET refreshToken = "'+ refreshToken +'" where username = "admin"')
            console.log('Update success => ', result)
            console.log(serialisedRefresh)
        }else{
            console.log('Refreshtoken đã tồn tại!')
        }*/
        
        res.status(200).json({ message:"Success" })
    }else{
        res.status(401).json({ message:"Invalid credentials!" })
    }
}
