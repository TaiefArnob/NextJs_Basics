import { NextResponse } from "next/server";

export function middleware(request) {
  // // Redirect to /login if user is not already there
  // if (request.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // // Allow request to continue if path is /login
  // return NextResponse.next();
}
