"use client";
import Fluent from "@/assets/Fluent";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import Trend from "@/assets/Trend";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  readMin: number;
  content: string;
  imageUrl: string;
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();
  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
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
            {blogs.slice(0, 5).map((blog, i) => (
              <div className="flex gap-5 max-sm:flex-col" key={i}>
                <Image
                  src={blog.imageUrl}
                  alt="image"
                  width={300}
                  height={150}
                  className="rounded-xl max-sm:w-full"
                />
                <div className="flex flex-col justify-between max-sm:gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">{blog.title}</p>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                  <button className="w-fit cursor-pointer pb-5 text-sm z-1"
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
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
            {blogs.slice(0, 2).map((blog, i) => (
              <div className="flex flex-col gap-5" key={i}>
                <Image
                  src={blog.imageUrl}
                  alt="image"
                  width={1000}
                  height={150}
                  className="w-[90%] rounded-xl max-lg:w-full"
                />
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-bold">{blog.title}</p>
                  <p className="text-sm">{blog.description}</p>
                  <Button
                    className="w-fit cursor-pointer rounded-2xl bg-black text-sm hover:scale-105 hover:bg-black/70"
                    onClick={() => router.push(`/blog/${blog.slug}`)}
                  >
                    Blog now <ArrowUpRight />
                  </Button>
                </div>
              </div>
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
          {blogs.map((blog, i) => (
            <div className="flex flex-col gap-5 cursor-pointer" key={i} onClick={() => router.push(`/blog/${blog.slug}`)}>
              <Image
                src={blog.imageUrl}
                alt="image"
                width={500}
                height={150}
                className="rounded-xl"
              />
              <div className="flex flex-col justify-between gap-2">
                <p className="font-bold">{blog.title}</p>
                <p className="text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
