"use client";
import Faq from "@/components/Faq";
import RedirectToContact from "@/components/RedirectToContact";
import React from "react";
import brandImg from "@/assets/brand.png";
import designImg from "@/assets/design.png";
import websiteImg from "@/assets/website.png";
import mobileImg from "@/assets/mobile.png";
import desktopImg from "@/assets/desktop.png";
import customImg from "@/assets/custom.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main>
      <section className="my-10 flex w-full flex-col items-center gap-5">
        <h1 className="flex flex-wrap items-center justify-center gap-3 text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-2xl">
          Services we
          <span
            style={{
              background:
                "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Offer
          </span>
        </h1>
        <p className="w-1/2 text-center text-sm font-medium max-md:w-[90%]">
          We provide professional branding, app development, and MVP services
          crafting user-focused designs and scalable digital products for
          businesses of all sizes.
        </p>
        <Button
          className="group relative cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-white"
          onClick={() => router.push("/contactus")}
        >
          <span className="relative z-10">Get in touch</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></span>
        </Button>
      </section>
      <section className="mb-10 grid w-full grid-cols-2 items-center justify-between gap-10 max-md:grid-cols-1 max-md:p-5">
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={brandImg}
              alt="brand"
              width={600}
              height={400}
              className="h-80"
            />
          </div>
          <p className="font-bold">Brand Identity & Strategy</p>
          <p className="w-[90%] text-sm">
            Craft a strong, memorable brand identity with logos, color palettes,
            and guidelines that align with your business goals.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={designImg}
              alt="designImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold">UI/UX Design</p>
          <p className="w-[90%] text-sm">
            Design seamless, user-friendly digital experiences that engage your
            audience and boost conversions.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={websiteImg}
              alt="websiteImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold">Website Design & Development</p>
          <p className="w-[90%] text-sm">
            From landing pages to custom websites, we build responsive,
            high-performance sites that bring your ideas to life.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={mobileImg}
              alt="mobileImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold">Mobile App Development</p>
          <p className="w-[80%] text-sm">
            End-to-end app design and development to deliver intuitive, scalable
            mobile solutions.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={desktopImg}
              alt="desktopImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold">Desktop Application Development</p>
          <p className="w-[80%] text-sm">
            We design and build powerful desktop applications for your workflow,
            delivering performance, reliability, and scalability across
            platforms.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={customImg}
              alt="customImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold">Custom Digital Solutions</p>
          <p className="w-[80%] text-sm">
            Tailored software and integrations to meet your unique business
            needs and streamline operations.
          </p>
        </div>
      </section>
      <Faq />
      <RedirectToContact />
    </main>
  );
}
