import Fluent from "@/assets/Fluent";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import Trend from "@/assets/Trend";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trikona Blog | UI/UX, Web Development & Product Insights",
  description:
    "Read Trikona insights on UI/UX design, product strategy, web development, and startup MVP execution.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Page() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-16 py-40 max-lg:overflow-hidden">
        <div className="absolute left-0 hidden blur-xl md:block">
          <LeftVector />
        </div>
        <div className="absolute right-0 blur-xl">
          <RightVector />
        </div>
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="flex w-200 flex-wrap items-center justify-center gap-3 text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-3xl">
            The Trikona
            <span
              style={{
                background:
                  "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Blog.
            </span>
          </h1>
          <h3 className="w-200 text-lg max-lg:text-base max-md:w-150 max-md:text-sm max-sm:w-[90%]">
            We specialise in building tailor-made websites, web apps, and
            digital products. With a focus on clean UI/UX design and robust
            development, we deliver seamless, scalable solutions for modern
            businesses.
          </h3>
        </div>
      </section>
      <section className="flex gap-10 max-lg:flex-col max-lg:px-10 max-sm:px-5">
        <div className="flex w-3/4 flex-col gap-10 max-lg:w-full">
          <h2 className="relative w-fit text-xl font-bold">
            <span className="absolute bottom-3 -left-7">
              <Fluent />
            </span>
            <span className="absolute top-3 -right-7 rotate-180">
              <Fluent />
            </span>
            Recent Posts
          </h2>
          <div className="flex flex-col gap-5">
            {blogs.slice(0, 5).map((blog) => (
              <article className="flex gap-5 max-sm:flex-col" key={blog.id}>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={300}
                  height={150}
                  className="rounded-xl max-sm:w-full"
                />
                <div className="flex flex-col justify-between max-sm:gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">{blog.title}</p>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                  <Link
                    className="z-1 w-fit cursor-pointer pb-5 text-sm"
                    href={`/blog/${blog.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <span>
              <Trend />
            </span>
            <h2 className="relative w-fit text-xl font-bold">Trending Posts</h2>
          </div>

          <div className="flex flex-col gap-5">
            {blogs.slice(0, 2).map((blog) => (
              <article className="flex flex-col gap-5" key={blog.id}>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={1000}
                  height={150}
                  className="w-[90%] rounded-xl max-lg:w-full"
                />
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-bold">{blog.title}</p>
                  <p className="text-sm">{blog.description}</p>
                  <Button
                    asChild
                    className="w-fit cursor-pointer rounded-2xl bg-black text-sm hover:scale-105 hover:bg-black/70"
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      Blog now <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 pt-5 max-lg:px-10 max-lg:pt-10 max-sm:px-5">
        <h2 className="relative w-fit text-xl font-bold">
          <span className="absolute bottom-3 -left-7">
            <Fluent />
          </span>
          <span className="absolute top-3 -right-7 rotate-180">
            <Fluent />
          </span>
          All blogs
        </h2>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {blogs.map((blog) => (
            <Link className="flex flex-col gap-5" key={blog.id} href={`/blog/${blog.slug}`}>
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={500}
                height={150}
                className="rounded-xl"
              />
              <div className="flex flex-col justify-between gap-2">
                <p className="font-bold">{blog.title}</p>
                <p className="text-sm">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
