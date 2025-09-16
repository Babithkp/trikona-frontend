"use client";
import LeftVector from "@/assets/LeftVector";
import Mongodb from "@/assets/Mongodb";
import Nodejs from "@/assets/Nodejs";
import ReactLogo from "@/assets/ReactLogo";
import RightVector from "@/assets/RightVector";
import React, { useEffect, useState } from "react";
import eventraCenterImg from "@/assets/eventra-center.png";
import eventraLeftImg from "@/assets/eventra-left.png";
import eventraRightImg from "@/assets/eventra-right.png";
import eventraLeftMostImg from "@/assets/eventra-leftmost.jpg";
import eventraRightMostImg from "@/assets/eventra-rightmost.jpg";
import Image from "next/image";

export default function Page() {
  const [hoveredEventra, setHoveredSln] = useState(false);
  const [pageSection, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative py-20 max-lg:px-2">
      <div className="absolute top-0 left-0 blur-xl max-md:hidden">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl max-md:hidden">
        <RightVector />
      </div>
      <section className="w-full overflow-hidden rounded-lg border p-5 shadow-lg max-lg:p-2">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-5">
          <div>
            <p>Case study</p>
            <h1 className="text-4xl font-bold max-lg:text-2xl">Eventra</h1>
          </div>
          <div>
            <p className="font-medium">Built using</p>
            <div className="flex items-center gap-5">
              <ReactLogo />
              <div className="w-fit rounded-lg bg-white px-1 shadow-lg">
                <Mongodb />
              </div>
              <Nodejs />
            </div>
          </div>
        </div>
        <p className="mb-5 w-[40%] max-lg:w-full">
          Eventra is a modern event management platform we designed and
          developed from scratch to simplify how organizers create, manage, and
          promote events—while giving attendees a seamless registration
          experience.
        </p>
        <div className="flex max-lg:flex-col max-lg:gap-30">
          <div className="flex w-[30%] flex-col gap-3 max-lg:w-full">
            <div className="flex flex-col gap-2">
              <p>Core Features</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                15+
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Admin controlled</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                100%
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Concept to MVP in just</p>
              <p className="bg-gradient-to-r [background-image:linear-gradient(to_right,_#A632F2_0%,_#FBA325_10%)] bg-clip-text text-2xl font-bold text-transparent">
                2 weeks
              </p>
            </div>
          </div>
          <div
            className="w relative flex h-60 w-full flex-col items-center justify-center p-5"
            onMouseEnter={() => setHoveredSln(true)}
            onMouseLeave={() => setHoveredSln(false)}
          >
            <Image
              src={eventraCenterImg}
              alt="eventraCenterImg"
              width={350}
              height={100}
              className="absolute top-[110%] left-[50%] z-1 translate-[-50%] rounded-lg shadow-2xl  max-lg:top-[120%]"
            />
            <Image
              src={eventraLeftMostImg}
              alt="slnLeftImg"
              width={350}
              height={500}
              className={`absolute top-[0] left-[55%] rounded-lg ${hoveredEventra && "left-[60%]"} transform-all shadow-2xl duration-800`}
            />
            <Image
              src={eventraLeftImg}
              alt="slnLeftImg"
              width={350}
              height={500}
              className={`absolute -top-[20%] left-[45%] rounded-lg ${hoveredEventra && "left-[50%]"} transform-all shadow-2xl duration-500`}
            />
            <Image
              src={eventraRightImg}
              alt="eventraRightImg"
              width={350}
              height={500}
              className={`absolute top-[0] right-[55%] rounded-lg border ${hoveredEventra && "right-[60%]"} transform-all shadow-2xl duration-800`}
            />
            <Image
              src={eventraRightMostImg}
              alt="eventraRightMostImg"
              width={350}
              height={500}
              className={`absolute -top-[20%] right-[45%] rounded-lg ${hoveredEventra && "right-[50%]"} transform-all shadow-2xl duration-500`}
            />
          </div>
        </div>
      </section>
      <section className="relative flex pt-20">
        <div className="sticky top-20 flex h-fit w-[40%] gap-3 max-lg:hidden">
          <div className="w-[3px] bg-slate-400">
            <div
              className="transform-all bg-gradient-to-b from-[#A632F2] to-[#FBA325] duration-500"
              style={{
                height: ` ${pageSection}%`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-5 text-lg">
          <p
              className={` ${pageSection <= 0 ? "text-slate-400":"text-black" }`}
            >
              Client Challenge
            </p>
            <p className={` ${pageSection <= 20 ? "text-slate-400":"text-black" }`}>Our Approach</p>
            <p className={` ${pageSection <= 40 ? "text-slate-400":"text-black" }`}>Solution</p>
            <p className={` ${pageSection <= 60 ? "text-slate-400":"text-black" }`}>Results</p>
            <p className={` ${pageSection <= 90 ? "text-slate-400":"text-black" }`}>What client loved about us</p>
          </div>
        </div>
        <div className="flex w-[60%] flex-col gap-5 max-lg:w-full">
          <h2 className="text-3xl font-bold">Client Challenge</h2>
          <div>
            <p>
              Eventra approached us with a raw idea—they wanted to simplify how
              people discover, register, and manage local and college-level
              events. There was no existing product, only a vision: to make
              event hosting and participation effortless, mobile-friendly, and
              centralized.
            </p>
            <p>Key Challenges:</p>
            <ul className="list-disc">
              <li className="ml-4">
                No reference product — needed to build from ground up
              </li>
              <li className="ml-4">
                Events scattered across multiple platforms or offline
              </li>
              <li className="ml-4">
                Manual registration and poor engagement trackingv
              </li>
              <li className="ml-4">
                No platform for organizers to manage submissions, attendees, or
                data
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Our Approach</h2>
          <div>
            <p>
              Our mission was to take Eventra&apos;s concept and transform it
              into a full-fledged event management and discovery platform,
              crafted to support both event organisers and attendees with an
              intuitive, scalable solution.
            </p>
            <p>What We Aimed to Deliver:</p>
            <ul className="list-disc">
              <li className="ml-4">A sleek and mobile-first user experience</li>
              <li className="ml-4">
                Easy event discovery and seamless registration
              </li>
              <li className="ml-4">
                Dashboard for organisers to manage listings, registrations, and
                analytics
              </li>
              <li className="ml-4">
                Flexible system to support public and private events
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Solution</h2>
          <div>
            <p>
              We designed and developed Eventra from scratch—starting with
              branding, wireframes, and architecture, and evolving it into
              a fully functional web app that handles everything from event
              creation to real-time user engagement.
            </p>
            <p>Core Features Developed:</p>
            <ul className="list-disc">
              <li className="ml-4">
                <span className="font-bold">Event Discovery</span>  – Browse by
                category, location, or popularity
              </li>
              <li className="ml-4">
                <span className="font-bold">Event Listing & Creation</span>  –
                Organizers can add detailed event info, cover images, and
                registration limits
              </li>
              <li className="ml-4">
                <span className="font-bold">Registration System</span>  – Users
                can sign up instantly with a clean, mobile-first flow
              </li>
              <li className="ml-4">
                <span className="font-bold">Organiser Dashboard</span>  – View
                and manage registrations, filter by date/event, and export data
              </li>
              <li className="ml-4">
                <span className="font-bold">Ticket/QR Generator</span>  – Log
                Automatic QR-based ticketing for on-spot verification
              </li>
              <li className="ml-4">
                <span className="font-bold">Role-Based Access</span>  –
                Different access levels for admins, organizers, and participants
              </li>
              <li className="ml-4">
                <span className="font-bold">Email Notifications</span>  –
                Auto-confirmation and reminder emails for attendees
              </li>
              <li className="ml-4">
                <span className="font-bold">Certificate Generator</span>  –
                One-click downloadable certificates for event participants
              </li>
              <li className="ml-4">
                <span className="font-bold">Admin Panel</span>  – Complete
                control over event categories, featured listings, and platform
                users
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">Results</h2>
          <div>
            <ul className="list-disc">
              <li>
                Although the platform hasn&apos;t been launched publicly, we
                successfully
              </li>
              <li className="ml-4">
                Took the product from idea to a complete MVP
              </li>
              <li className="ml-4">
                Built a full-featured, ready-to-deploy platform
              </li>
              <li className="ml-4">
                Designed a clean, scalable UI for multiple user roles
              </li>
              <li className="ml-4">
                Created documentation and workflows ready for future deployment
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold">What the Client Loved</h2>
          <div>
            <ul className="list-disc">
              <li className="ml-4">
                A clean, intuitive UX designed for both mobile and desktop
              </li>
              <li className="ml-4">
                Fully integrated dashboard to manage events, attendees, and
                communication
              </li>
              <li className="ml-4">
                Automated QR-based tickets and certificate generation
              </li>
              <li className="ml-4">
                Thoughtful UX for all user types – admin, organizer, and
                attendee
              </li>
              <li className="ml-4">
                Fast execution and deep collaboration throughout the build
                process
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
