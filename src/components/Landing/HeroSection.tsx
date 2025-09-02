import Brain from "@/assets/Brain";
import { Button } from "../ui/button";
import Finger from "@/assets/Finger";
import Code from "@/assets/Code";
import Strategy from "@/assets/Strategy";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-16 max-lg:overflow-hidden">
      <div className="absolute left-0 blur-xl">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>
      <div className="flex flex-col items-center gap-8 pt-30 text-center">
        <h1 className="flex w-200 flex-wrap items-center justify-center gap-3 text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-xl">
          Future-Proof
          <span
            style={{
              background:
                "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Websites & Apps
          </span>
          Designed to Grow Your Business
        </h1>
        <h3 className="w-200 text-lg max-lg:text-base max-md:w-150 max-md:text-sm max-sm:w-[90%]">
          We craft tailor-made websites and apps with clean UI/UX design,
          scalable development, and future-ready strategies, helping your
          business stand out and grow online.
        </h3>
        <div className="z-1 flex w-full justify-center gap-5">
          <Button
            variant={"outline"}
            className="border border-black px-7 hover:bg-black hover:text-white"
          >
            Explore
          </Button>
          <Button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-white">
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </Button>
        </div>
      </div>
      <div className="flex w-[70%] flex-wrap items-start justify-between gap-5 px-20 max-lg:w-full max-lg:px-5 max-md:px-0">
        <div className="flex w-45 flex-col items-center gap-3 text-center text-lg max-sm:text-sm">
          <Brain />
          <p className="font-[600]">Design That Thinks</p>
          <p className="text-sm font-light max-sm:text-xs">
            Ideas before interfaces. We solve before we style.
          </p>
        </div>
        <div className="flex w-45 flex-col items-center gap-3 text-center text-lg max-sm:text-sm">
          <Finger />
          <p className="font-[600]">Tech That Feels</p>
          <p className="text-sm font-light max-sm:text-xs">
            Interfaces that understand users, not just instruct them.
          </p>
        </div>
        <div className="flex w-45 flex-col items-center gap-3 text-center text-lg max-sm:text-sm">
          <Code />
          <p className="font-[600]">Code That Clicks</p>
          <p className="text-sm font-light max-sm:text-xs">
            Structured, scalable, and clean — every line matters.
          </p>
        </div>
        <div className="flex w-45 flex-col items-center gap-3 text-center text-lg max-sm:text-sm">
          <Strategy />
          <p className="font-[600]">Strategy That Sticks</p>
          <p className="text-sm font-light max-sm:text-xs">
            Clear paths, we map every step from first click to conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
