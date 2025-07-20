import React from "react";
import { Button } from "../ui/button";

export default function BuiltSection() {
  return (
    <section className="flex flex-col items-center gap-5  py-20">
      <div>
        <p className="text-center text-slate-600">Built for What’s Next</p>
        <h4 className="text-2xl font-bold">The Trikona way</h4>
      </div>
      <p className="w-[60%] text-center text-slate-600">
        Discover how Trikona transforms ideas into digital products through a
        proven end-to-end process. From client onboarding to UI/UX design,
        development, and quality assurance, we deliver scalable websites and
        applications that align with your brand and business goals.
      </p>
      <Button className="relative w-fit text-white text-base px-4 py-2 rounded overflow-hidden 
             bg-[linear-gradient(to_right,_#A632F2,_#FBA325)] 
             bg-[length:200%_100%] 
             bg-left 
             transition-all 
             duration-200 
             ease-in-out 
             hover:bg-right">
        Learn More
      </Button>
    </section>
  );
}
