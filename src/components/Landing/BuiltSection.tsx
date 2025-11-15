"use client";
import React from "react";
import { Button } from "../ui/button";
import Card1 from "../process/Card1";
import { useRouter } from "next/navigation";

export default function BuiltSection() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-5 pt-20 p-5">
      <div>
        <p className="text-center text-2xl md:text-md text-slate-600">Built for What’s Next</p>
        <h4 className="text-4xl font-bold">The Trikona way</h4>
      </div>
      <p className="w-[60%] text-center text-slate-600 max-sm:w-full">
        Discover how Trikona transforms ideas into digital products through a
        proven end-to-end process. From client onboarding to UI/UX design,
        development, and quality assurance, we deliver scalable websites and
        applications that align with your brand and business goals.
      </p>

      <div className="relative flex w-full  items-center justify-center mt-10"> 
         <Card1/>
         <div className="border-secondary w-[49%] rounded-2xl border-2 p-5 bg-primary max-lg:w-full h-50 absolute -top-5 z-9" ></div>
         <div className="border-secondary w-[49%] rounded-2xl border-2 p-5 bg-primary max-lg:w-full h-50 absolute -top-10" ></div>
      </div>

      <Button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] cursor-pointer px-4 py-5 text-base text-white border border-2" onClick={() => router.push("/process")}>
        <span className="relative z-10 text-xl">Learn More</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></span>
      </Button>
    </section>
  );
}
