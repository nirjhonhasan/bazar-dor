
import { NextResponse, type NextRequest } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

const publicPaths = [
    '/sign-in',
    '/sign-up',
    '/all-products',
    '/category',
    '/profile',
]



export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname


    if (publicPaths.includes(pathname)) {
        return NextResponse.next()
    }

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session?.user) {
        const signInUrl = new URL('/sign-in', request.url)


        return NextResponse.redirect(signInUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/:path'],
}
