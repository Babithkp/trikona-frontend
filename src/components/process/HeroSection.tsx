import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-16 max-lg:overflow-hidden max-md:py-20">
      <div className="absolute top-5 left-0 blur-xl">
        <LeftVector />
      </div>
      <div className="absolute top-2 right-0 blur-xl hidden md:block">
        <RightVector />
      </div>
      <div className="flex flex-col items-center gap-4 pt-30 text-center max-md:pt-0 ">
        <h1 className="flex w-200 flex-wrap items-center justify-center gap-3 text-6xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-5xl">
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
            Process
          </span>
        </h1>
        <h3 className="w-200 text-lg max-lg:text-base max-md:w-150 max-md:text-sm max-sm:w-[90%]">
          We craft custom websites, apps, and digital products with clean UI/UX
          and scalable development.
          <span className="font-bold">Tailored for Your Business</span>
        </h3>
      </div>
    </section>
  );
}
