"use client";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
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
      <section className="my-10 flex w-full flex-col items-center">
        <div className="absolute left-0 blur-xl">
          <LeftVector />
        </div>
        <div className="absolute right-0 blur-xl hidden md:block">
          <RightVector />
        </div>
        <h1 className="flex flex-wrap items-center justify-center gap-3 pt-10 pb-3 text-6xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-4xl">
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
        <p className="w-3/4 text-center md:text-xl font-medium max-md:w-[90%]">
          We provide professional branding, app development, and MVP services
          crafting user-focused designs and scalable digital products for
          businesses of all sizes.
        </p>
        <Button
          className="group relative cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-8 py-6 text-white mt-5"
          onClick={() => router.push("/contactus")}
        >
          <span className="relative z-10">Get in touch</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></span>
        </Button>
      </section>
      <section className="mb-10 grid w-full grid-cols-2 items-center justify-between gap-10 max-md:grid-cols-1 max-md:p-5">
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5 z-10">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={brandImg}
              alt="brand"
              width={600}
              height={400}
              className="h-80"
            />
          </div>
          <p className="font-bold text-2xl">Brand Identity & Strategy</p>
          <p className="w-[100%] text-md">
            Craft a strong, memorable brand identity with logos, color palettes,
            and guidelines that align with your business goals.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-2 rounded-lg p-5 z-10">
          <div className="flex w-full justify-center rounded-lg border-6 border-[#FCEFFF] bg-white">
            <Image
              src={designImg}
              alt="designImg"
              width={600}
              height={100}
              className="h-80"
            />
          </div>
          <p className="font-bold text-2xl">UI/UX Design</p>
          <p className="w-[100%] text-md">
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
          <p className="font-bold text-2xl">Website Design & Development</p>
          <p className="w-[100%] text-md">
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
          <p className="font-bold text-2xl">Mobile App Development</p>
          <p className="w-[100%] text-md">
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
          <p className="font-bold text-2xl">Desktop Application Development</p>
          <p className="w-[100%] text-md">
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
          <p className="font-bold text-2xl">Custom Digital Solutions</p>
          <p className="w-[100%] text-md">
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
