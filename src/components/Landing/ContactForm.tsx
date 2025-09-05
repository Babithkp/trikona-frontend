"use client";
import React, { useState } from "react";
import logo from "@/assets/grey_logo.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Append your Web3Forms access key directly
    const formDataWithKey = {
      ...data,
      access_key: "c70ae29d-0e7a-4698-a790-f8189613bf96",
    };
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataWithKey),
      });

      if (response.ok) {
        reset();
        toast.success(
          "Thanks for contacting us! We will get back to you shortly.",
          {
            hideProgressBar: true,
          },
        );
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast.error(
        "Something went wrong. Please check your internet connection.",
      );
    }
    setIsLoading(false);
  };

  return (
    <section
      className="flex items-stretch gap-5 rounded-lg bg-gradient-to-r from-[#A632F2] to-[#FBA325] p-5 max-lg:flex-col max-md:px-0"
      id="contact"
    >
      <div className="relative flex w-[40%] flex-col justify-between rounded-lg bg-[#0000001A] p-5 text-white shadow-xl max-lg:h-100 max-lg:w-full">
        <p className="w-[80%] text-2xl font-medium">
          Questions? Ideas? Let&apos;s Talk.
        </p>
        <Image
          src={logo}
          alt="logo"
          width={250}
          className="absolute right-[50%] bottom-[50%] translate-[50%] blur-[5px]"
        />
        <div className="text-xs">
          <a href="mailto:buildwithus@trikonatech.com">
            buildwithus@trikonatech.com
          </a>
          <p className="flex items-center gap-1">
            Connect with us on Whatsapp
            <MoveRight size={20} />
          </p>
        </div>
      </div>
      <div className="size-full rounded-lg bg-[#0000001A] p-5 py-10 shadow-xl">
        <form
          className="flex flex-wrap justify-between gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[48%] max-lg:w-full">
            <input
              className="w-full rounded-md bg-[#0000002B] p-3 text-white"
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm">First Name is required</p>
            )}
          </div>
          <input
            className="h-fit w-[48%] rounded-md bg-[#0000002B] p-3 text-white max-lg:w-full"
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
          />
          <input
            className="h-fit w-[48%] rounded-md bg-[#0000002B] p-3 text-white max-lg:w-full"
            placeholder="Contact Number"
            type="text"
            {...register("contactNumber")}
          />
          <div className="w-[48%] max-lg:w-full">
            <input
              className="w-full rounded-md bg-[#0000002B] p-3 text-white"
              placeholder="Email ID"
              type="text"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mt-1 text-sm">Email ID is required</p>
            )}
          </div>
          <textarea
            className="h-30 w-full rounded-md bg-[#0000002B] p-2 px-3 text-white max-lg:w-full"
            placeholder="Message...."
            {...register("message")}
          />
          <Button
            className="w-full cursor-pointer bg-white p-6 text-base text-black hover:bg-black hover:text-white"
            disabled={isLoading}
          >
            {isLoading ? " Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}
