import Image from "next/image";
import React from "react";

export default function Card6() {
  return (
    <div className="border-secondary bg-primary w-[49%] rounded-2xl border-2 p-5 flex flex-col gap-5 justify-between max-lg:w-full">
      <div className="relative h-80">
        <p className="absolute -top-1 -left-3 z-0 text-8xl font-bold text-[#5E5E5E99]">
          6
        </p>
        <Image
          width={500}
          height={0}
          src="/Scene-7.gif"
          alt="Discovery and Onboarding"
          className="relative z-10 mt-9 ml-5 h-[120%]  w-[95%] rounded-xl bg-white object-cover max-md:h-[90%]"
        />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#414141] max-md:text-xl">Quality Assurance & Feedback</p>
        <p className="text-[#5E5E5E] max-md:text-sm">
        Turning designs into functional websites, apps, or systems.
        </p>
      </div>
    </div>
  );
}
