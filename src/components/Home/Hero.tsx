import { useRef } from "react";import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);
  useGSAP(
    () => {
      const t1 = gsap.timeline({ ease: "power1.inOut", delay: 2 });
      const t2 = gsap.timeline({ ease: "power1.inOut", delay: 2 });

      t1.fromTo(
        ".light_left",
        { filter: "brightness(0.1)"},
        { filter: "brightness(0.3)", duration: 0.5 }
      )
        .to(".light_left", { filter: "brightness(0.5)", duration: 1 })
        .to(".light_left", { filter: "brightness(1)", duration: 1 });

      t2.fromTo(
        ".light_right",
        { filter: "brightness(0.1)"},
        { filter: "brightness(0.3)", duration: 0.5 }
      )
        .to(".light_right", { filter: "brightness(0.5)", duration: 1 })
        .to(".light_right", { filter: "brightness(1)", duration: 1 });
    },
    { scope: container }
  );

  return (
    <section className=" relative h-[88vh] max-sm:h-[60vh] max-sm:flex justify-center ">
      <span className="bg_blend absolute left-0 top-0 size-full "></span>
      <div
        className="h-full flex flex-col items-center pt-32 gap-5 "
        ref={container}
      >
        <div className="flex gap-5 flex-col z-[1] max-sm:w-[80%]" >
          <h1 className="text-5xl font-semibold max-md:text-4xl max-sm:text-2xl text-center">
            Web Solutions That Make an Impact
          </h1>
          <p className="text-lg text-center text-slate-200 max-md:text-base max-sm:text-xs">
            We design and develop high-performing websites tailored to your
            brand.
          </p>
        </div>
        <div className="h-full relative w-full flex justify-center blur-[1px]">
          <div className="h-[50%] flex justify-center w-[46%]">
            <div className="bg-gradient-to-r from-black from-[-20%] via-white to-black to-[120%] h-[1.2rem] w-full rounded-full "></div>
          </div>
          <div className="light h-full w-full bg-white absolute top-0 left-0 flex blur-md ">
            <div className="light_left w-1/2 h-full "></div>
            <div className="light_right w-1/2 h-full "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
