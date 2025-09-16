import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="flex flex-col gap-10 mb-10">
      <h3 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="item-center flex w-full gap-5 px-10 py-3"
        >
          <p className="mt-3 text-3xl max-md:text-2xl font-bold text-[#9D96A8]">01</p>
          <div className="w-full">
            <AccordionTrigger className="text-xl font-bold max-md:text-lg">
              What services do you provide?
            </AccordionTrigger>
            <AccordionContent className="text-[#5A5365]">
              We specialize in branding, UI/UX design, website and app
              development, and MVP building for startups and businesses.
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="item-center flex w-full gap-5 px-10 py-3"
        >
          <p className="mt-3 text-3xl max-md:text-2xl font-bold text-[#9D96A8]">02</p>
          <div className="w-full">
            <AccordionTrigger className="text-xl font-bold max-md:text-lg">
              How long does a typical project take?
            </AccordionTrigger>
            <AccordionContent className="text-[#5A5365]">
              Timelines vary simple websites take around 3–4 weeks, while
              complex apps or MVPs may take 6–12 weeks depending on scope.
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="item-center flex w-full gap-5 px-10 py-3"
        >
          <p className="mt-3 text-3xl max-md:text-2xl font-bold text-[#9D96A8]">03</p>
          <div className="w-full">
            <AccordionTrigger className="text-xl font-bold max-md:text-lg">
              Do you offer support after launch?
            </AccordionTrigger>
            <AccordionContent className="text-[#5A5365]">
              Yes, we provide maintenance and post-launch support to keep your
              product running smoothly as your business grows.
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="item-center flex w-full gap-5 px-10 py-3"
        >
          <p className="mt-3 text-3xl max-md:text-2xl font-bold text-[#9D96A8]">04</p>
          <div className="w-full">
            <AccordionTrigger className="text-xl font-bold max-md:text-lg">
              Can I hire you for just design or development?
            </AccordionTrigger>
            <AccordionContent className="text-[#5A5365]">
              Absolutely. You can choose design-only, development-only, or
              end-to-end solutions depending on your needs.
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
