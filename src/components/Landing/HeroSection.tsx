import Brain from "@/assets/Brain";
import Header from "../Header";
import { Button } from "../ui/button";
import Finger from "@/assets/Finger";
import Code from "@/assets/Code";
import Strategy from "@/assets/Strategy";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center flex-col relative ">
      <Header />
      <div className="flex flex-col gap-15 w-250">
      <div className="absolute left-0 blur-xl">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>
        <div className="flex flex-col items-center text-center gap-5 pt-30 ">
          <h1 className="flex gap-3 text-5xl font-[600] w-200 flex-wrap items-center justify-center">
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
          <h3 className="text-lg w-200">
            We specialise in building tailor-made websites, web apps, and
            digital products. With a focus on clean UI/UX design and robust
            development, we deliver seamless, scalable solutions for modern
            businesses.
          </h3>
          <div className="flex gap-10">
            <Button variant={"outline"} className="border border-black px-7">
              Explore
            </Button>
            <Button
              style={{
                background:
                  "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              }}
              className="px-6"
            >
              Get in touch
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-between ">
          <div className="text-center text-lg w-45 flex flex-col items-center gap-3">
            <Brain />
            <p className="font-[600] ">Design That Thinks</p>
            <p className="font-light text-sm">
              Ideas before interfaces. We solve before we style.
            </p>
          </div>
          <div className="text-center text-lg w-45 flex flex-col items-center gap-3">
            <Finger />
            <p className="font-[600] ">Tech That Feels</p>
            <p className="font-light text-sm">
              Interfaces that understand users, not just instruct them.
            </p>
          </div>
          <div className="text-center text-lg w-45 flex flex-col items-center gap-3">
            <Code />
            <p className="font-[600] ">Code That Clicks</p>
            <p className="font-light text-sm">
              Structured, scalable, and clean — every line matters.
            </p>
          </div>
          <div className="text-center text-lg w-45 flex flex-col items-center gap-3">
            <Strategy />
            <p className="font-[600] ">Strategy That Sticks</p>
            <p className="font-light text-sm">
              Clear paths, we map every step from first click to conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
