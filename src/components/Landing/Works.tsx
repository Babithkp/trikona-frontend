"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type SectionKey = "uiux" | "web" | "launch";

export default function Works() {
  const [active, setActive] = useState<Record<SectionKey, boolean>>({
    uiux: true,
    web: false,
    launch: false,
  });
  const contentRefs = {
    uiux: useRef(null),
    web: useRef(null),
    launch: useRef(null),
  };

  const handleClick = (section: string) => {
    setActive({
      uiux: false,
      web: false,
      launch: false,
      [section]: true,
    });
  };

  useGSAP(
    () => {
      const key = (Object.keys(active) as SectionKey[]).find(
        (key) => active[key],
      );
      if (!key) return;

      const el = contentRefs[key]?.current;
      if (el) {
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [active.uiux, active.web, active.launch] },
  );

  return (
    <section className="flex flex-col items-center gap-5  py-20">
      <div className="pb-5">
        <p className="text-center text-slate-600">What we offer</p>
        <h4 className="text-2xl font-bold">Scope of work</h4>
      </div>
      <button
        className={`border-secondary z-[1] flex w-full cursor-pointer justify-between rounded-lg border p-5 ${
          active.uiux ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("uiux")}
      >
        <p className="text-xl text-slate-600">01</p>
        <div className="flex w-1/2 flex-col gap-3 text-start">
          <p
            className={`text-3xl font-[500] ${
              active.uiux ? "" : "text-slate-600"
            }`}
          >
            Branding & UI/UX Design
          </p>
          <div
            className={`${active.uiux ? "flex" : "hidden"} flex-col gap-3 overflow-hidden`}
            ref={contentRefs.uiux}
          >
            <p>UX Research & Wireframing</p>
            <p>High-Fidelity UI Design</p>
            <p>Interactive Prototyping</p>
            <p>Design Systems & Style Guides</p>
            <p>Logo Design & Visual Identity</p>
            <p>Mobile-Responsive Layouts</p>
          </div>
        </div>
      </button>
      <button
        className={`border-secondary z-[1] flex w-full cursor-pointer justify-between rounded-lg border p-5 ${
          active.web ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("web")}
      >
        <p className="text-xl text-slate-600">02</p>
        <div className={`flex w-1/2 flex-col gap-3 text-start`}>
          <p
            className={`text-3xl font-[500] ${
              active.web ? "" : "text-slate-600"
            }`}
          >
            Web & App development
          </p>
          <div
            className={`${active.web ? "flex" : "hidden"} flex-col gap-3 overflow-hidden`}
            ref={contentRefs.web}
          >
            <p>Custom Website Development (Static & Dynamic)</p>
            <p>Responsive Web App Interfaces</p>
            <p>Component-Based Frontend Architecture</p>
            <p>Version Control (Git/GitHub)</p>
            <p>QA Testing & Bug Fixes</p>
            <p>Mobile Optimization</p>
          </div>
        </div>
      </button>
      <button
        className={`border-secondary z-[1] flex w-full cursor-pointer justify-between rounded-lg border p-5 ${
          active.launch ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("launch")}
      >
        <p className="text-xl text-slate-600">03</p>
        <div className="flex w-1/2 flex-col gap-3 text-start">
          <p
            className={`text-3xl font-[500] ${
              active.launch ? "" : "text-slate-600"
            }`}
          >
            Launch & Support
          </p>
          <div
            className={`${active.launch ? "flex" : "hidden"} flex-col gap-3 overflow-hidden`}
            ref={contentRefs.launch}
          >
            <p>Custom Website Development (Static & Dynamic)</p>
            <p>High-Fidelity UI Design</p>
            <p>Interactive Prototyping</p>
            <p>Design Systems & Style Guides</p>
            <p>Logo Design & Visual Identity</p>
            <p>Mobile-Responsive Layouts</p>
          </div>
        </div>
      </button>
    </section>
  );
}
