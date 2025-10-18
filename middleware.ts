import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

const public_routes = ["/", "/about-us", "/blog", "/login", "/contact-us"];

export function isPublicRoute(request: NextRequest) {
  return public_routes.includes(request.nextUrl.pathname);
}

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = updateSession(request);

  //   get user data [ADMIN/EDITOR]
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && isPublicRoute(request)) {
    // console.log("public");
    return NextResponse.next();
  }
  if (!user && !isPublicRoute(request)) {
    // console.log("private, unauthenticated");
    const redirectUrl = new URL("/login", request.url);
    return NextResponse.redirect(redirectUrl.toString());
  }
  if (user) {
    const path = request.nextUrl.pathname;
    if (public_routes.includes(path)) {
      //   console.log("private, authenticated");
      return NextResponse.redirect("/admin");
    }
  }
  return supabaseResponse;
}

export const config = {
  matcher: ["/", "/about-us", "/contact-us", "/admin", "/blog"],
};
