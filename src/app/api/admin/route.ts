import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return NextResponse.json(
      { message: "Server auth configuration is missing." },
      { status: 500 }
    );
  }

  const { username, password } = await request.json();

  const admin = await prisma.admin.findUnique({
    where: {
      username,
      password
    },
  });


  if (!admin) {
    return NextResponse.json({ message: "Wrong Credentials" }, { status: 401 });
  }

  const token = jwt.sign({ adminId: admin.id, role: "admin" }, jwtSecret, {
    expiresIn: "24h",
  });

  const response = NextResponse.json({ message: "Admin Exist" }, { status: 200 });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
