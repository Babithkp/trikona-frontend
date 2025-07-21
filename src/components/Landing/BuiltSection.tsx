import React from "react";
import { Button } from "../ui/button";

export default function BuiltSection() {
  return (
    <section className="flex flex-col items-center gap-5 py-20">
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
      <Button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-base text-white">
        <span className="relative z-10">Learn More</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </Button>
    </section>
  );
}
