import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) {    
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch(e) {
    console.log(e);
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
    matcher: [
      "/admin/dashboard",
    ],
  };