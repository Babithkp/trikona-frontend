"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import logo from "@/assets/grey_logo.png";
import Image from "next/image";
import slnDashImg from "@/assets/sln-dashboard.png";
import slnLeftImg from "@/assets/sln-left.png";
import slnRightImg from "@/assets/sln-right.png";
import snippetImg from "@/assets/snippet.png";
import eventraCenterImg from "@/assets/eventra-center.png";
import eventraLeftImg from "@/assets/eventra-left.png";
import eventraRightImg from "@/assets/eventra-right.png";
import deconestLeftImg from "@/assets/deconest.png";

export default function ShowcaseSection() {
  const [hoveredSln, setHoveredSln] = useState(false);
  const [hoveredEventra, setHoveredEventra] = useState(false);

  return (
    <section className="flex flex-col items-center gap-5 py-20 max-lg:px-5 max-md:px-0">
      <div className="flex w-full overflow-hidden rounded-lg bg-[#B2D5F2] p-5 shadow-md max-lg:flex-col">
        <div className="flex w-[28%] flex-col gap-9 max-lg:w-full">
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-bold ">
              Logistics Billing Software
            </p>
            <p >
              This custom-built logistics billing software streamlines
              operations by managing LR (Lorry Receipts), Freight Memos,
              customer invoices, and payments in one place.
            </p>
          </div>
          <Button className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
            Case Study
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
        <div
          className="relative flex w-[70%] flex-col items-center justify-center max-lg:h-60"
          onMouseEnter={() => setHoveredSln(true)}
          onMouseLeave={() => setHoveredSln(false)}
        >
          <Image
            src={slnDashImg}
            alt="slnDashImg"
            width={500}
            height={200}
            className="absolute top-[70%] left-[50%] z-1 translate-[-50%] rounded-lg max-sm:top-[50%]"
          />
          <Image
            src={slnLeftImg}
            alt="slnLeftImg"
            width={500}
            height={500}
            className={`absolute top-[30%] left-[35%] rounded-lg ${hoveredSln && "left-[40%]"} transform-all duration-500 `}
          />
          <Image
            src={slnRightImg}
            alt="slnRightImg"
            width={500}
            height={500}
            className={`absolute top-[30%] right-[35%] rounded-lg ${hoveredSln && "right-[40%]"} transform-all duration-500 `}
          />
        </div>
      </div>
      <div className="flex w-full justify-between gap-5 max-lg:flex-col">
        <div className="relative flex w-1/2 gap-5 overflow-hidden rounded-lg bg-[#E7EEFF] p-5 shadow-md max-lg:w-full">
          <div className="flex w-[50%] flex-col justify-between gap-9">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-bold max-lg:text-2xl">
                Snippet2Sketch
              </p>
              <p className="max-lg:text-sm">
                Snippet2Sketch is an interactive platform that visually explains
                data structures and algorithms
              </p>
            </div>
            <Button className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
              View Website
              <Image src={logo} alt="logo" width={20} height={20} />
            </Button>
          </div>
          <div>
            <Image
              src={snippetImg}
              alt="snippetImg"
              width={300}
              className="absolute -bottom-5 rounded-lg"
            />
          </div>
        </div>
        <div className="relative flex w-1/2 gap-5 overflow-hidden rounded-lg bg-[#E8FBF4] p-5 shadow-md max-lg:w-full max-sm:flex-col">
          <div className="flex w-[50%] flex-col gap-9 max-sm:w-full">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-bold">Eventra -App</p>
              <p className="max-lg:text-sm">
                A platform designed to centralize and showcase all campus events
                in one place. Students can browse events, view details, and
                enroll seamlessly through the app.
              </p>
            </div>
            <Button className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
              Case Study
              <Image src={logo} alt="logo" width={20} height={20} />
            </Button>
          </div>
          <div
            className="relative flex w-[70%] flex-col items-center justify-center max-sm:w-full max-sm:h-80"
            onMouseEnter={() => setHoveredEventra(true)}
            onMouseLeave={() => setHoveredEventra(false)}
          >
            <Image
              src={eventraCenterImg}
              alt="eventraCenterImg"
              width={200}
              height={200}
              className="absolute top-[90%] left-[50%] z-1 translate-[-50%] rounded-lg"
            />
            <Image
              src={eventraLeftImg}
              alt="eventraLeftImg"
              width={200}
              height={500}
              className={`absolute top-[25%] right-[35%] rounded-lg ${hoveredEventra && "right-[45%]"} transform-all duration-500`}
            />
            <Image
              src={eventraRightImg}
              alt="eventraRightImg"
              width={200}
              height={500}
              className={`absolute top-[25%] left-[35%] rounded-lg ${hoveredEventra && "left-[45%]"} transform-all duration-500`}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-5 max-lg:flex-col-reverse">
        <div className="relative flex w-1/2 gap-5 overflow-hidden rounded-lg border p-5 shadow-md max-lg:w-full">
          <div className="flex w-[60%] flex-col gap-9 max-sm:w-full max-sm:h-70 justify-between">
            <div>
              <p className="font-bold">Built by</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_50%)] bg-clip-text text-5xl font-bold text-transparent">
                Trikona
              </p>
            </div>
            <p className="text-sm text-slate-600">
              At Trikona, we focus on crafting digital experiences that align
              perfectly with your brand vision. From thoughtful UI/UX design to
              robust web and app development, our solutions are built with both
              functionality and aesthetics in mind. We collaborate closely with
              you to understand your goals and deliver products that stand out.
            </p>
          </div>
          <div>
            <Image
              src={logo}
              alt="logo"
              width={300}
              className="absolute right-0 -bottom-15 rounded-lg blur"
            />
          </div>
        </div>
        <div className="relative flex w-1/2 gap-5 overflow-hidden rounded-lg border p-5 shadow-md max-lg:w-full max-sm:flex-col">
          <div className="flex w-[50%] flex-col justify-between gap-9 max-sm:w-full">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-bold max-lg:text-2xl">
                Deconest Interiors
              </p>
              <p className="max-lg:text-sm">
                Deconest Interiors is a bespoke interior design studio focused
                on creating elegant, functional spaces.
              </p>
            </div>
            <Button className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
              Case Study
              <Image src={logo} alt="logo" width={20} height={20} />
            </Button>
          </div>
          <div className="max-sm:h-30">
            <Image
              src={deconestLeftImg}
              alt="deconestLeftImg"
              width={300}
              className="absolute right-10 -bottom-5 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
