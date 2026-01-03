// src/app/api/uploadImage/route.ts
import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { NextResponse } from "next/server";

export async function POST() {
  const client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const key = `uploads/${Date.now()}.jpg`;

  const presigned = await createPresignedPost(client, {
    Bucket: "trikona-bucket",
    Key: key,
    Conditions: [
      ["content-length-range", 0, 50 * 1024 * 1024],
      ["starts-with", "$Content-Type", "image/"], // ✅ allow all images
    ],
    Expires: 60,
  });
  

  return NextResponse.json({
    url: presigned.url,
    fields: presigned.fields,
    key,
  });
}
