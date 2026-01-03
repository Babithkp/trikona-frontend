import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const { slug } = await params;
  const post = await prisma.blog.findUnique({
    where: { slug: slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 py-20 max-lg:overflow-hidden">
      <div className="absolute left-0 blur-xl md:block">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>

      <h1 className="text-center text-4xl font-bold">{post.title}</h1>
      <h2 className="text-center text-xl">{post.description}</h2>
      <div className="flex flex-col gap-3">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt="image"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        )}
        <div className="flex justify-end gap-2">
          <p>{post.createdAt.toUTCString().slice(0, 17)}</p>
          <p>{post.readMin} mins read</p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div>
        <p className="text-start text-lg font-bold">Similar Topics</p>
      </div>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {blogs.map((blog, i) => (
          <Link
            className="z-1 flex cursor-pointer flex-col gap-5"
            key={i}
            href={`/blog/${blog.slug}`}
          >
            {blog.imageUrl && (
              <Image
                src={blog.imageUrl}
                alt="image"
                width={500}
                height={150}
                className="rounded-xl"
              />
            )}
            <div className="flex flex-col justify-between gap-2">
              <p className="font-bold">{blog.title}</p>
              <p className="text-sm">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
