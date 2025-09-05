"use client";
import React, { useState } from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import { AlignJustify } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
                WebkitBackgroundClip: pathname === "/process" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/process" ? "transparent" : "",
                display: pathname === "/process" ? "inline-block" : "",
              }}
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              style={{
                background:
                  pathname === "/case-studies"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip:
                  pathname === "/case-studies" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/case-studies" ? "transparent" : "",
                display: pathname === "/case-studies" ? "inline-block" : "",
              }}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{
                background:
                  pathname === "/blog"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip: pathname === "/blog" ? "text" : "",
                WebkitTextFillColor: pathname === "/blog" ? "transparent" : "",
                display: pathname === "/blog" ? "inline-block" : "",
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="careers"
              style={{
                background:
                  pathname === "/careers"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip: pathname === "/careers" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/careers" ? "transparent" : "",
                display: pathname === "/careers" ? "inline-block" : "",
              }}
            >
              Careers
            </Link>
          </li>
        </ul>
        <Link href={"/contactus"} className="flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2 text-base text-white transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#A632F2] hover:to-[#FBA325] max-sm:hidden max-sm:px-1 max-sm:text-xs z-1" >
          Contact Us
        </Link>
        <button
          onClick={showDrawer}
          className="hidden w-fit px-3 text-white max-sm:block"
        >
          <AlignJustify size={22} color="black" />
        </button>
      </nav>
      <Drawer
        title={
          <div className="flex justify-end">
            <Image src={logo} alt="logo" height={100} width={150} />
          </div>
        }
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <ul className="z-1 flex flex-col justify-between gap-5 text-base font-[600] text-black">
          <li>
            <Link
              href="/process"
              style={{
                background:
                  pathname === "/process"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip: pathname === "/process" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/process" ? "transparent" : "",
                display: pathname === "/process" ? "inline-block" : "",
                color: "black",
              }}
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              style={{
                background:
                  pathname === "/case-studies"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip:
                  pathname === "/case-studies" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/case-studies" ? "transparent" : "",
                display: pathname === "/case-studies" ? "inline-block" : "",
                color: "black",
              }}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                background:
                  pathname === "/blog"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip: pathname === "/blog" ? "text" : "",
                WebkitTextFillColor: pathname === "/blog" ? "transparent" : "",
                display: pathname === "/blog" ? "inline-block" : "",
                color: "black",
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{
                background:
                  pathname === "/careers"
                    ? "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)"
                    : "",
                WebkitBackgroundClip: pathname === "/careers" ? "text" : "",
                WebkitTextFillColor:
                  pathname === "/careers" ? "transparent" : "",
                display: pathname === "/careers" ? "inline-block" : "",
                color: "black",
              }}
            >
              Careers
            </Link>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}
