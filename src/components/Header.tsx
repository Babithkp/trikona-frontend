import React from "react";import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Header() {
  return (
    <header className=" pt-10 w-full">
      <nav className="bg-[#8E8E8E1A] rounded-2xl flex justify-between items-center pr-8">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={200} height={100} />
        </Link>
        <ul className="flex items-center gap-10 font-medium text-lg">
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
        <Button className="w-fit bg-black hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325] text-base">Contact Us</Button>
      </nav>
    </header>
  );
}
