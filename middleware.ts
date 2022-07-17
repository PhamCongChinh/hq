import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from './service/jwt_sign_verify'

const secret = process.env.SECRET || "secret";

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
    //const response = NextResponse.next()
    //const loginUrl = new URL('/login', request.url)
    const jwt = req.cookies.get('jwtoken')

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (jwt === undefined) {
            req.nextUrl.pathname = "/login"
            return NextResponse.redirect(req.nextUrl)
        }
        try {
            await verify(jwt, secret)
            return NextResponse.next()
        } catch (error) {
            req.nextUrl.pathname = "/login"
            return NextResponse.redirect(req.nextUrl)
        }   
    }
    return NextResponse.next()
}