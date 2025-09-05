import React from "react";

export default function Card1() {
  return (
    <div className="border-secondary w-[49%] rounded-2xl border-2 p-5 bg-primary max-lg:w-full z-10" >
      <div className="relative p-5">
        <p className="absolute top-0 left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          1
        </p>
        <video
          className="relative z-10 mt-4 ml-5 w-full rounded-xl"
          muted
          loop
          autoPlay
        >
          <source src="/Scene-2.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-2xl text-[#414141] font-bold max-md:text-xl">Discovery & Onboarding</p>
      <p className="text-[#5E5E5E] max-md:text-sm">Lead intake, proposal, contract, and kickoff meeting.</p>
    </div>
  );
}
