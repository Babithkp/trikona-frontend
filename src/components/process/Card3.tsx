import Image from "next/image";
import React from "react";

export default function Card3() {
  return (
    <div className="border-secondary bg-primary flex w-[49%] flex-col justify-between gap-5 rounded-2xl border-2 p-5 max-lg:w-full">
      <div className="relative">
        <p className="absolute -top-1 -left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          3
        </p>
        <div className="mt-9 ml-5 bg-white max-md:h-50 z-10 relative rounded-xl">
          <Image
            width={500}
            height={500}
            src="/Scene-4.gif"
            alt="Discovery and Onboarding"
            className="w-[95%] rounded-xl"
          />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-[#414141] max-md:text-xl">
          Design
        </p>
        <p className="text-[#5E5E5E] max-md:text-sm">
          Crafting UI/UX aligned with brand vision and user needs.
        </p>
      </div>
    </div>
  );
}
