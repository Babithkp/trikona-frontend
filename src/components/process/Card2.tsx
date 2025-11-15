import Image from "next/image";
import React from "react";

export default function Card2() {
  return (
    <div className="border-secondary bg-primary w-[49%] rounded-2xl border-2 p-5 flex flex-col gap-5  justify-between max-lg:w-full max-md:gap-0">
      <div className="relative h-75">
        <h1 className="text-4xl font-semibold absolute top-20 z-20 left-[50%] translate-x-[-50%] whitespace-nowrap text-pink-300">Strategy & Planning</h1>
        <p className="absolute -top-1 -left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          2
        </p>
        <Image
          width={500}
          height={200}
          src="/Scene-3.gif"
          alt="Discovery and Onboarding"
          className="relative z-10 mt-9 ml-5 w-[95%] rounded-xl h-56 md:h-68 bg-white"
        />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#414141] max-md:text-xl">Strategy & Planning</p>
        <p className="text-[#5E5E5E] max-md:text-sm">
          Clarifying goals, setting timelines, and defining scope.
        </p>
      </div>
    </div>
  );
}
