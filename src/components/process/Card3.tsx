import Image from "next/image";
import React from "react";

export default function Card3() {
  return (
    <div className="border-secondary bg-primary w-[49%] rounded-2xl border-2 p-5 flex flex-col gap-5 justify-between max-lg:w-full">
      <div className="relative ">
        <p className="absolute -top-1 -left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          3
        </p>
        <Image
          width={500}
          height={500}
          src="/Scene-4.gif"
          alt="Discovery and Onboarding"
          className="relative z-10 mt-9 ml-5  w-[95%] rounded-xl bg-white"
        />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#414141] max-md:text-xl">Design</p>
        <p className="text-[#5E5E5E] max-md:text-sm">
        Crafting UI/UX aligned with brand vision and user needs.
        </p>
      </div>
    </div>
  );
}
