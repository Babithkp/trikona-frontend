import Image from "next/image";
import React from "react";

export default function Card4() {
  return (
    <div className="border-secondary bg-primary flex w-[49%] flex-col justify-between gap-5 rounded-2xl border-2 p-5 max-lg:w-full">
      <div className="relative">
        <p className="absolute -top-1 -left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          4
        </p>
        <div className="relative z-10 mt-9 ml-5 rounded-xl bg-white max-md:h-50 h-75">
          <Image
            width={500}
            height={1000}
            src="/Scene-5.gif"
            alt="Discovery and Onboarding"
            className="w-[95%] rounded-xl"
          />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-[#414141] max-md:text-xl">
          Development
        </p>
        <p className="text-[#5E5E5E] max-md:text-sm">
          Turning designs into functional websites, apps, or systems.
        </p>
      </div>
    </div>
  );
}
