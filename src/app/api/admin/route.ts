import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

// const createAdmin = async()=>{
//     await prisma.admin.create({
//         data:{
//             username:"trikona",
//             password:"trikona@333"
//         }
//     })
// }


export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const admin = await prisma.admin.findUnique({
    where: { username },
  });

  if (!admin || admin.password !== password) {
    return NextResponse.json(
      { message: "Wrong Credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { adminId: admin.id, role: "admin" },
    process.env.JWT_SECRET!,
    { expiresIn: "24h" }
  );

  const response = NextResponse.json(
    { message: "Admin Exist" },
    { status: 200 }
  );

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
