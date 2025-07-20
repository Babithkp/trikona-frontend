import React from "react";
import logo from "@/assets/grey_logo.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
export default function ContactForm() {
  return (
    <section className="flex items-stretch gap-5 rounded-lg bg-gradient-to-r from-[#A632F2] to-[#FBA325] p-5">
      <div className="relative flex w-[40%] flex-col justify-between rounded-lg bg-[#0000001A] p-5 text-white shadow-xl">
        <p className="w-[80%] text-2xl">Questions? Ideas? Let&apos;s Talk.</p>
        <Image
          src={logo}
          alt="logo"
          width={250}
          className="absolute right-[50%] bottom-[50%] translate-[50%] blur-[5px]"
        />
        <div className="text-xs">
          <p>trikonaofficial@gmail.com</p>
          <p className="flex items-center gap-1">
            Connect with us on Whatsapp
            <MoveRight size={20} />
          </p>
        </div>
      </div>
      <div className="size-full rounded-lg bg-[#0000001A] p-5 py-10 shadow-xl">
        <div className="flex flex-wrap justify-between gap-9">
          <input
            className="w-[48%] rounded-md bg-[#0000002B] p-2 px-3 text-[#FFFFFF7D]"
            placeholder="First Name"
            type="text"
          />
          <input
            className="w-[48%] rounded-md bg-[#0000002B] p-2 px-3 text-[#FFFFFF7D]"
            placeholder="Last Name"
            type="text"
          />
          <input
            className="w-[48%] rounded-md bg-[#0000002B] p-2 px-3 text-[#FFFFFF7D]"
            placeholder="Contact Number"
            type="text"
          />
          <input
            className="w-[48%] rounded-md bg-[#0000002B] p-2 px-3 text-[#FFFFFF7D]"
            placeholder="Email ID"
            type="text"
          />
          <textarea
            className="h-30 w-full rounded-md bg-[#0000002B] p-2 px-3 text-[#FFFFFF7D]"
            placeholder="Message...."
          />
          <Button className="w-full bg-white text-black">Submit</Button>
        </div>
      </div>
    </section>
  );
}
