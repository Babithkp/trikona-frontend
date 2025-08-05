"use client";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import React, { useState } from "react";
import slnDashImg from "@/assets/sln-dashboard.png";
import slnLeftImg from "@/assets/sln-left.png";
import slnRightImg from "@/assets/sln-right.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/grey_logo.png";

export default function Page() {
  const [hoveredSln, setHoveredSln] = useState(false);
  return (
    <main className=" py-20 relative ">
      <div className="absolute left-0 top-0 blur-xl max-md:hidden">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl max-md:hidden">
        <RightVector />
      </div>
      <div className="w-[40%] sticky top-30 max-sm:top-0 max-sm:relative max-sm:w-full max-sm:flex-col max-sm:text-center max-sm:mb-20">
        <h1 className="flex w-1/2 flex-wrap items-center gap-3 text-4xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:w-full max-sm:text-lg max-sm:justify-center">
          Case Studies 
          <span
            style={{
              background:
                "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Behind the Build
          </span>
        </h1>
        <p className="font-medium">
          Solving real problems through design and development.
        </p>
      </div>

      <div className="flex w-full gap-5 justify-end flex-col items-end max-sm:items-center">

        
        <div className="flex flex-col gap-5 rounded-lg border bg-[#2196F34F] p-5 w-[60%] max-sm:w-[95%]">
          <p className="text-2xl font-bold max-sm:text-xl">Logistics Billing software</p>
          <div
            className="w relative flex h-60 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#2196F34F] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredSln(true)}
            onMouseLeave={() => setHoveredSln(false)}
          >
            <Image
              src={slnDashImg}
              alt="slnDashImg"
              width={400}
              height={100}
              className="absolute top-[65%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={slnLeftImg}
              alt="slnLeftImg"
              width={400}
              height={500}
              className={`absolute top-[25%] left-[40%] rounded-lg ${hoveredSln && "left-[45%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={slnRightImg}
              alt="slnRightImg"
              width={400}
              height={500}
              className={`absolute top-[25%] right-[40%] rounded-lg ${hoveredSln && "right-[45%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
          <p className="text-sm">
            Clarifying goals, setting timelines, and defining scope.The client,
            a logistics and freight forwarding company, faced inefficiencies and
            inaccuracies in managing operational data such as LR creation,
            freight memos, customer billing, vendor payments, and branch-level
            cash flow. Their manual record-keeping and outdated Excel-based
            system caused delays, lack of centralized visibility, and human
            errors, leading to poor financial tracking and low operational
            efficiency.
          </p>
          <Button className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
            Case Study
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
        <div className="flex flex-col gap-5 rounded-lg border bg-[#00BCD147] p-5 w-[60%] max-sm:w-[95%]">
          <p className="text-2xl font-bold max-sm:text-xl">Logistics Billing software</p>
          <div
            className="w relative flex h-60 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#00000040] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredSln(true)}
            onMouseLeave={() => setHoveredSln(false)}
          >
            <Image
              src={slnDashImg}
              alt="slnDashImg"
              width={400}
              height={100}
              className="absolute top-[65%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={slnLeftImg}
              alt="slnLeftImg"
              width={400}
              height={500}
              className={`absolute top-[25%] left-[40%] rounded-lg ${hoveredSln && "left-[45%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={slnRightImg}
              alt="slnRightImg"
              width={400}
              height={500}
              className={`absolute top-[25%] right-[40%] rounded-lg ${hoveredSln && "right-[45%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
          <p className="text-sm">
            Eventra came to us with a clear vision — to build a modern platform
            that simplifies event creation, ticketing, and attendee management.
            Starting from scratch, we partnered closely with the founders to
            transform their idea into a fully functional digital product — from
            wireframes and user flows to development and deployment.
          </p>
          <Button className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
            Case Study
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
      </div>
    </main>
  );
}
