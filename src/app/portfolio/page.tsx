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
import { useRouter } from "next/navigation";
import eventraCenterImg from "@/assets/eventra-center.png";
import eventraLeftImg from "@/assets/eventra-left.png";
import eventraRightImg from "@/assets/eventra-right.png";
import eventraLeftMostImg from "@/assets/eventra-leftmost.jpg";
import eventraRightMostImg from "@/assets/eventra-rightmost.jpg";
import deconestCenterImg from "@/assets/deconest.png";
import deconestLeftImg from "@/assets/deconestLeft.png";
import deconestRightImg from "@/assets/deconestRight.png";
import snippetImg from "@/assets/snippet.png";
import snippetRightImg from "@/assets/snippetRight.png";
import snippetLeftImg from "@/assets/snippetLeft.png";
import Faq from "@/components/Faq";
import RedirectToContact from "@/components/RedirectToContact";

export default function Page() {
  const [hoveredSln, setHoveredSln] = useState(false);
  const [hoveredEventra, setHoveredEventra] = useState(false);
  const [hoveredDeconest, setHoveredDeconest] = useState(false);
  const [hoveredSnippet, setHoveredSnippet] = useState(false);
  const navigate = useRouter();
  return (
    <>
      <section className="relative my-10 flex w-full flex-col items-center gap-5">
        <h1 className="flex flex-wrap items-center justify-center gap-3 text-center text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-2xl">
          Our
          <span
            style={{
              background:
                "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Portfolio
          </span>
          UI/UX Design, Web Development & Branding Projects
        </h1>
        <p className="w-1/2 text-center text-sm font-medium max-md:w-[90%]">
          Explore how our Bengaluru-based agency delivers UI/UX design, website
          development, and branding solutions that help businesses grow.
        </p>
        <Button
          className="group relative cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-white"
          onClick={() => navigate.push("/contactus")}
        >
          <span className="relative z-10">Get in touch</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></span>
        </Button>
        <div className="absolute top-0 left-0 blur-xl max-md:hidden">
          <LeftVector />
        </div>
        <div className="absolute right-0 blur-xl max-md:hidden">
          <RightVector />
        </div>
      </section>
      <section className="relative grid grid-cols-2 gap-10 px-2 py-20 max-md:grid-cols-1">
        <div className="bg-primary flex flex-col gap-3 rounded-lg border-2 border-[#AE3EDD26] p-5">
          <div
            className="w relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FCEFFF] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredSln(true)}
            onMouseLeave={() => setHoveredSln(false)}
          >
            <Image
              src={slnDashImg}
              alt="slnDashImg"
              width={400}
              height={100}
              className="absolute top-[58%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
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
          <p className="text-2xl font-bold max-sm:text-xl">
            Logistics Billing software
          </p>
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
          <Button
            className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]"
            onClick={() =>
              navigate.push("/case-studies/logistics-billing-software")
            }
          >
            Case Study
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
        <div className="bg-primary flex flex-col gap-3 rounded-lg border-2 border-[#AE3EDD26] p-5">
          <div
            className="w relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FCEFFF] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredEventra(true)}
            onMouseLeave={() => setHoveredEventra(false)}
          >
            <Image
              src={eventraCenterImg}
              alt="eventraCenterImg"
              width={300}
              height={100}
              className="absolute top-[110%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={eventraLeftMostImg}
              alt="slnLeftImg"
              width={300}
              height={500}
              className={`absolute top-[30%] left-[55%] rounded-lg ${hoveredEventra && "left-[60%]"} transform-all shadow-2xl duration-800`}
            />
            <Image
              src={eventraLeftImg}
              alt="slnLeftImg"
              width={300}
              height={500}
              className={`absolute top-[20%] left-[45%] rounded-lg ${hoveredEventra && "left-[50%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={eventraRightImg}
              alt="eventraRightImg"
              width={300}
              height={500}
              className={`absolute top-[30%] right-[55%] rounded-lg border ${hoveredEventra && "right-[60%]"} transform-all shadow-2xl duration-800`}
            />
            <Image
              src={eventraRightMostImg}
              alt="eventraRightMostImg"
              width={300}
              height={500}
              className={`absolute top-[20%] right-[45%] rounded-lg ${hoveredEventra && "right-[50%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
          <p className="text-2xl font-bold max-sm:text-xl">Eventra</p>
          <p className="text-sm">
            Eventra came to us with a clear vision — to build a modern platform
            that simplifies event creation, ticketing, and attendee management.
            Starting from scratch, we partnered closely with the founders to
            transform their idea into a fully functional digital product — from
            wireframes and user flows to development and deployment.
          </p>
          <Button
            className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]"
            onClick={() => navigate.push("/case-studies/eventra")}
          >
            Case Study
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
        <div className="bg-primary flex flex-col gap-3 rounded-lg border-2 border-[#AE3EDD26] p-5">
          <div
            className="w relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FCEFFF] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredDeconest(true)}
            onMouseLeave={() => setHoveredDeconest(false)}
          >
            <Image
              src={deconestCenterImg}
              alt="deconestLeftImg"
              width={500}
              height={100}
              className="absolute top-[58%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={deconestRightImg}
              alt="deconestRightImg"
              width={500}
              height={500}
              className={`absolute top-[25%] left-[25%] rounded-lg ${hoveredDeconest && "left-[45%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={deconestLeftImg}
              alt="deconestLeftImg"
              width={500}
              height={500}
              className={`absolute top-[25%] right-[25%] rounded-lg ${hoveredDeconest && "right-[45%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
          <p className="text-2xl font-bold max-sm:text-xl">
            Deconest Interiors
          </p>
          <p className="text-sm">
            Deconest Interiors is a bespoke interior design studio focused on
            creating elegant, functional spaces.
          </p>
          <Button
            className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]"
            onClick={() => navigate.push("https://deconestinteriors.com/")}
          >
            Visit Site
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
        <div className="bg-primary flex flex-col gap-3 rounded-lg border-2 border-[#AE3EDD26] p-5">
          <div
            className="w relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FCEFFF] bg-white p-5 shadow-2xl"
            onMouseEnter={() => setHoveredSnippet(true)}
            onMouseLeave={() => setHoveredSnippet(false)}
          >
            <Image
              src={snippetImg}
              alt="snippetImg"
              width={500}
              height={100}
              className="absolute top-[58%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={snippetRightImg}
              alt="snippetRightImg"
              width={500}
              height={500}
              className={`absolute top-[25%] left-[25%] rounded-lg ${hoveredSnippet && "left-[45%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={snippetLeftImg}
              alt="snippetLeftImg"
              width={500}
              height={500}
              className={`absolute top-[25%] right-[25%] rounded-lg ${hoveredSnippet && "right-[45%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
          <p className="text-2xl font-bold max-sm:text-xl">Snippet2Sketch</p>
          <p className="text-sm">
            Snippet2Sketch is an interactive platform that visually explains
            data structures and algorithms
          </p>
          <Button
            className="z-1 w-fit cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]"
            onClick={() => navigate.push("https://snippedtosketch.vercel.app")}
          >
            Visit Site
            <Image src={logo} alt="logo" width={20} height={20} />
          </Button>
        </div>
      </section>
      <Faq />
      <RedirectToContact />
    </>
  );
}
