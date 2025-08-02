"use client";
import React from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="w-full pt-8 max-sm:pt-2">
      <nav className="flex items-center justify-between rounded-2xl bg-[#8E8E8E1A] pr-8 max-sm:pr-2">
        <Link href={"/"} className="z-1">
          <Image
            src={logo}
            alt="logo"
            height={100}
            className="w-50 max-md:w-40 max-sm:w-30"
          />
        </Link>
        <ul className="z-1 flex w-[30%] justify-between gap-5 text-lg font-[600] max-lg:w-fit max-lg:text-base max-sm:hidden">
          <li>
            <Link
              href="/process"
              style={{
                background:
                  pathname === "/process"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip:  pathname === "/process" ? "text" :"",
                WebkitTextFillColor:  pathname === "/process" ? "transparent" :"",
                display:  pathname === "/process" ? "inline-block" :"",
              }}
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link href="#">Case Studies</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
        </ul>
        <Button className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-base text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325] max-sm:px-1 max-sm:text-xs">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
