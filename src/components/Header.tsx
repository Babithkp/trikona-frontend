import React from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full pt-15">
      <nav className="flex items-center justify-between rounded-2xl bg-[#8E8E8E1A] pr-8">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={200} height={100} />
        </Link>
        <ul className="flex items-center gap-20 text-lg font-medium">
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
        <Button className="flex w-fit items-center text-base gap-2 rounded-md bg-black px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325]">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
