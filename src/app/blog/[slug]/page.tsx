import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageParams = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      description: true,
      imageUrl: true,
    },
  });

  if (!post) {
    return {
      title: "Blog Post Not Found | Trikona",
      alternates: { canonical: `/blog/${slug}` },
    };
  }

  return {
    title: `${post.title} | Trikona Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const { slug } = await params;
  const post = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.createdAt.toISOString(),
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: post.imageUrl ? [post.imageUrl] : undefined,
    author: {
      "@type": "Organization",
      name: "Trikona",
    },
    publisher: {
      "@type": "Organization",
      name: "Trikona",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Logo_white.png`,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 py-20 max-lg:overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
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
            alt={post.title}
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
        {blogs.map((blog) => (
          <Link
            className="z-1 flex cursor-pointer flex-col gap-5"
            key={blog.id}
            href={`/blog/${blog.slug}`}
          >
            {blog.imageUrl && (
              <Image
                src={blog.imageUrl}
                alt={blog.title}
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
