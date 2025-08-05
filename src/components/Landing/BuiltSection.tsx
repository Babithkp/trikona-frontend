"use client";
import React from "react";
import { Button } from "../ui/button";

import Stack from "../ui/Stack";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";

const images = [
  { id: 1, img: card1 },
  { id: 2, img: card2 },
  { id: 3, img: card3 },
  { id: 4, img: card4 },
  { id: 5, img: card5 },
  { id: 6, img: card6 },
];

export default function BuiltSection() {
  return (
    <section className="flex flex-col items-center gap-5 py-20">
      <div>
        <p className="text-center text-slate-600">Built for What’s Next</p>
        <h4 className="text-3xl font-bold">The Trikona way</h4>
      </div>
      <p className="w-[60%] text-center text-slate-600 max-sm:w-full">
        Discover how Trikona transforms ideas into digital products through a
        proven end-to-end process. From client onboarding to UI/UX design,
        development, and quality assurance, we deliver scalable websites and
        applications that align with your brand and business goals.
      </p>

      <div className="relative flex h-130 w-250 flex-col items-center max-sm:hidden">
          <Stack cardsData={images as never[]} />
      </div>
      <div className="h-80 w-full   max-sm:flex hidden overflow-hidden">
          <Stack cardsData={images as never[]} cardDimensions={{ width: 380, height: 300 }} />
      </div>

      <Button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-base text-white">
        <span className="relative z-10">Learn More</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </Button>
    </section>
  );
}
