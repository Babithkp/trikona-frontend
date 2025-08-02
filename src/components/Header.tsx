import React from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full pt-8 max-sm:pt-2">
      <nav className="flex items-center justify-between rounded-2xl bg-[#8E8E8E1A] pr-8 max-sm:pr-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo"  height={100} className="w-50 max-md:w-40 max-sm:w-30"/>
        </Link>
        <ul className="flex  w-[60%] justify-between text-lg font-medium max-lg:text-base max-lg:w-fit gap-5 max-sm:hidden">
          <li>
            <a href="#">Our Process</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <Button className="flex w-fit items-center text-base gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325] max-sm:px-1 max-sm:text-xs">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
