
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Public routes
    const publicRoutes = [
        '/sign-in',
        '/sign-up',
        '/all-products',
        '/category',
    ]

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next()
    }

    // Check user session
    const session = await auth.api.getSession({
        headers: request.headers,
    })

    // Redirect unauthenticated users
    if (!session?.user) {
        return NextResponse.redirect(
            new URL('/sign-in', request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/my-profile/:path*',
        '/:productId',
    ],
}
