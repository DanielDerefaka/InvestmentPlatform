import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default authMiddleware({
    publicRoutes: ["/", "/auth(.*)", "/portal(.*),", "/images(.*)"],
    ignoredRoutes: ["/site"],


async beforeAuth(auth, req) {},
  async afterAuth(auth, req) {

    const url = req.nextUrl
    
    const searchParams = url.searchParams.toString()
    let hostname = req.headers


    const pathWithSearchParams = `${url.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ''
      }`


      if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
        return NextResponse.redirect(new URL(`/auth/sign-in`, req.url))
      }

      if (url.pathname === '/admin/sign-in' || url.pathname === '/admin/sign-up') {
        return NextResponse.redirect(new URL(`auth/admin/auth/sign-in`, req.url))
      }

   


      if (
        url.pathname === '/' ||
        (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
      ) {
        return NextResponse.rewrite(new URL('/site', req.url))
      }


  }


    
})


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }