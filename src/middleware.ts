import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const jwtToken = request.cookies.get('jwtToken')
    const token = jwtToken?.value as string
    if (!token ) { //To specify a particular route: !authToken && request.method === POST
        if (request.nextUrl.pathname.startsWith("/api/users/profile")) {
            return NextResponse.json(
                { message: 'No Token Provided, Access Denied!' },
                { status: 401 }
            )
        }
    } else {
        if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register") {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}

export const config = {
    matcher: ['/api/users/profile/:path*', '/login', '/register'] 
}
//:path* ==> all routes after profile