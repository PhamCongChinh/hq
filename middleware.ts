import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//import { verify } from 'jsonwebtoken'
import auth from './middleware/auth'
const secret = process.env.TOKEN_SECRET || "secret"
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const jwt = request.cookies.get('jwtoken')
    const url = request.url
    const loginUrl = new URL('/login', request.url)
    if (url.includes("/dashboard")) {
        if (jwt === undefined) {
            return NextResponse.redirect(loginUrl)
        }    
        try {
            //auth(jwt, secret)
            return response
        } catch (error) {
            return NextResponse.redirect(loginUrl)
        }   
    }
    return response
}