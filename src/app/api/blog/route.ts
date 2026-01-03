import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(request: NextRequest) {
  const { title, content,slug, readMin, imageUrl, description } = await request.json();
  try {
    await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        description,
        readMin: parseInt(readMin),
        imageUrl: imageUrl || null,
      },
    });
    return NextResponse.json({ message: "Blog Created" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Blog Creation Failed" },
      { status: 400 },
    );
  }
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Blog Creation Failed" },
      { status: 400 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    await prisma.blog.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Blog Deletion Failed" },
      { status: 400 },
    );
  }
}

export async function PUT(request: NextRequest) {
    const { id, title, content, readMin, imageUrl, description } = await request.json();
    try {
      await prisma.blog.update({
        where: {
          id,
        },
        data: {
          title,
          content,
          description,
          readMin: parseInt(readMin),
          imageUrl: imageUrl || null,
        },
      });
      return NextResponse.json({ message: "Blog Updated" }, { status: 200 });
    } catch (e) {
      console.log(e);
      return NextResponse.json(
        { message: "Blog Update Failed" },
        { status: 400 },
      );
    }
}