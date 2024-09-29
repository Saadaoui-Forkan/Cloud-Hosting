import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const authToken = request.headers.get('authToken') as string
    if (!authToken ) { //To specify a particular route: !authToken && request.method === POST
        return NextResponse.json(
            { message: 'No Token Provided, Access Denied!' },
            { status: 401 }
        )
    }
}

export const config = {
    matcher: ['/api/users/profile/:path*'] //:path* ==> all routes after profile
}