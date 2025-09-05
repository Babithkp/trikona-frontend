"use client";
import LeftVector from "@/assets/LeftVector";
import Mongodb from "@/assets/Mongodb";
import Nodejs from "@/assets/Nodejs";
import ReactLogo from "@/assets/ReactLogo";
import RightVector from "@/assets/RightVector";
import TauriLogo from "@/assets/TauriLogo";
import React, { useEffect, useState } from "react";
import slnDashImg from "@/assets/sln-dashboard.png";
import slnLeftImg from "@/assets/sln-left.png";
import slnRightImg from "@/assets/sln-right.png";
import Image from "next/image";

export default function Page() {
  const [hoveredSln, setHoveredSln] = useState(false);
  const [pageSection, setScrollProgress] = useState(0);
  console.log(pageSection);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative py-20 max-lg:px-2">
      <div className="absolute top-0 left-0 blur-xl max-md:hidden">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl max-md:hidden">
        <RightVector />
      </div>
      <section className="w-full overflow-hidden rounded-lg border p-5 py-10 shadow-lg max-lg:p-2">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-5">
          <div>
            <p>Case study</p>
            <h1 className="text-4xl font-bold max-lg:text-2xl">Logistics Billing software</h1>
          </div>
          <div>
            <p className="font-medium">Built using</p>
            <div className="flex items-center gap-5">
              <ReactLogo />
              <TauriLogo />
              <div className="w-fit rounded-lg bg-white px-1 shadow-lg">
                <Mongodb />
              </div>
              <Nodejs />
            </div>
          </div>
        </div>
        <p className="mb-5 w-[40%] max-lg:w-full">
          This custom-built logistics billing software streamlines operations by
          managing LR (Lorry Receipts), Freight Memos, customer invoices, and
          payments in one place.
        </p>
        <div className="flex max-lg:flex-col max-lg:gap-5">
          <div className="flex w-[30%] flex-col gap-3 max-lg:w-full">
            <div className="flex flex-col gap-2">
              <p>Payment tracking accuracy </p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                99.8%
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Reduced manual data errors</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                85%
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Reduced billing time by</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                60%
              </p>
            </div>
          </div>
          <div
            className="w relative flex h-60 w-full flex-col items-center justify-center p-5"
            onMouseEnter={() => setHoveredSln(true)}
            onMouseLeave={() => setHoveredSln(false)}
          >
            <Image
              src={slnDashImg}
              alt="slnDashImg"
              width={600}
              height={100}
              className="absolute top-[65%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl max-sm:top-[50%]"
            />
            <Image
              src={slnLeftImg}
              alt="slnLeftImg"
              width={600}
              height={500}
              className={`absolute top-[25%] left-[40%] rounded-lg ${hoveredSln && "left-[45%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={slnRightImg}
              alt="slnRightImg"
              width={600}
              height={500}
              className={`absolute top-[25%] right-[40%] rounded-lg ${hoveredSln && "right-[45%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
        </div>
      </section>
      <section className="relative flex pt-20">
        <div className="sticky top-20 flex h-fit w-[40%] gap-3 max-lg:hidden">
          <div className="w-[3px] bg-slate-400">
            <div
              className="transform-all bg-gradient-to-b from-[#A632F2] to-[#FBA325] duration-500"
              style={{
                height: ` ${pageSection}%`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-5 text-lg">
            <p
              className={` ${pageSection <= 0 ? "text-slate-400":"text-black" }`}
            >
              Client Challenge
            </p>
            <p className={` ${pageSection <= 20 ? "text-slate-400":"text-black" }`}>Our Approach</p>
            <p className={` ${pageSection <= 40 ? "text-slate-400":"text-black" }`}>Solution</p>
            <p className={` ${pageSection <= 60 ? "text-slate-400":"text-black" }`}>Results</p>
            <p className={` ${pageSection <= 90 ? "text-slate-400":"text-black" }`}>What client loved about us</p>
          </div>
        </div>
        <div className="flex w-[60%] flex-col gap-5 max-lg:w-full">
          <h2 className="text-3xl font-bold">Client Challenge</h2>
          <div>
            <p>
              The client, a logistics and freight forwarding company, faced
              inefficiencies and inaccuracies in managing operational data such
              as LR creation, freight memos, customer billing, vendor payments,
              and branch-level cash flow. Their manual record-keeping and
              outdated Excel-based system caused delays, lack of centralized
              visibility, and human errors, leading to poor financial tracking
              and low operational efficiency. This includes:
            </p>
            <ul className="list-disc">
              <li className="ml-4">
                Manual paperwork for LR (Lorry Receipts), Freight Memos, and
                PODs
              </li>
              <li className="ml-4">
                Lack of visibility into outstanding payments
              </li>
              <li className="ml-4">
                Difficulty in managing branches, clients, and vendors
                efficiently
              </li>
              <li className="ml-4">
                Disconnected records for billing, payments, and expenses
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Our Approach</h2>
          <div>
            <p>
              We set out to design and develop a custom logistics billing
              system tailored to the real-world challenges faced by transport
              companies. The goal was to streamline billing operations,
              centralize records, and provide better control over multi-branch
              logistics workflows.
            </p>
            <p>Key Objectives:</p>
            <ul className="list-disc">
              <li className="ml-4">
                Digitise and centralise all billing and operational processes
              </li>
              <li className="ml-4">
                Track and manage LRs, FMs, bills, and payments in one place
              </li>
              <li className="ml-4">
                Minimise manual errors and save time with automated workflows
              </li>
              <li className="ml-4">
                Support multi-branch operations with branch-level access and
                control
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Solution</h2>
          <div>
            <p>
              We built a comprehensive, modular logistics billing software that
              simplifies complex workflows and ensures reliability at every
              stage. The solution was tailored to the logistics domain,
              addressing both billing and operational pain points.
            </p>
            <p>Key Modules Developed:</p>
            <ul className="list-disc">
              <li className="ml-4">
                <span className="font-bold">Dashboard</span>  – Digitise and
                centralise all billing and operational processes
              </li>
              <li className="ml-4">
                <span className="font-bold">Lorry Receipt (LR) Module</span>  –
                Create, manage, and print LRs with linked data tracking
              </li>
              <li className="ml-4">
                <span className="font-bold">Freight Memo (FM)</span>  – Generate
                memos linked to LRs and calculate freight charges accurately
              </li>
              <li className="ml-4">
                <span className="font-bold">Customer Billing</span>  – Create
                and send bills, edit past records, and view billing history
              </li>
              <li className="ml-4">
                <span className="font-bold">Payment Management</span>  – Log
                payments, track outstanding balances, and filter by customer or
                date
              </li>
              <li className="ml-4">
                <span className="font-bold">Client & Vendor Management</span>  –
                Maintain profiles, credit limits, and associated vehicles
              </li>
              <li className="ml-4">
                <span className="font-bold">Branch Management</span>  – Provide
                separate logins and access control per branch
              </li>
              <li className="ml-4">
                <span className="font-bold">POD Upload & Linking</span>  –
                Upload Proof of Delivery (POD) for each LR and access them
                instantly via AWS S3
              </li>
              <li className="ml-4">
                <span className="font-bold">Expense Module</span>  – Record
                operational expenses under customizable categories
              </li>
              <li className="ml-4">
                <span className="font-bold">Cash & Outstanding Reports</span>  –
                Generate client/vendor-wise outstanding reports and summaries
              </li>
              <li className="ml-4">
                <span className="font-bold">Settings Panel</span>  – Configure
                company profile, vehicle types, bank info, and user roles
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Results</h2>
          <div>
            <ul className="list-disc">
              <li className="ml-4">
                <span className="font-bold">50%</span> faster document
                processing and dispatch
              </li>
              <li className="ml-4">
                <span className="font-bold">100%</span> accuracy in outstanding
                payment tracking
              </li>
              <li className="ml-4">
                <span className="font-bold">60%</span> reduction in branch
                coordination time
              </li>
              <li className="ml-4">
                Centralized, secure, and scalable billing operations
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">What the Client Loved</h2>
          <div>
            <ul className="list-disc">
              <li className="ml-4">
                Centralized dashboard that gives a complete overview at a glance
              </li>
              <li className="ml-4">
                Auto-linked documents across LRs, FMs, and Bills
              </li>
              <li className="ml-4">
                Easy-to-use UI even for non-technical staff
              </li>
              <li className="ml-4">
                POD upload and instant access from anywhere
              </li>
              <li className="ml-4">
                Role-based access for each branch and department
              </li>
              <li className="ml-4">
                On-demand generation of outstanding and cash statements
              </li>
              <li className="ml-4">
                Seamless tracking of vendor payments and vehicle info
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
