import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from './service/jwt_sign_verify'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "secret";

export default async function middleware(req: NextRequest) {

    const accessToken = req.cookies.get('accessToken')

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (accessToken === undefined) {
            req.nextUrl.pathname = "/login"
            return NextResponse.redirect(req.nextUrl)
        }
        try {
            await verify(accessToken, accessTokenSecret)
            return NextResponse.next()
        } catch (error) {
            req.nextUrl.pathname = "/login"
            return NextResponse.redirect(req.nextUrl)
        }   
    }
    return NextResponse.next()
}