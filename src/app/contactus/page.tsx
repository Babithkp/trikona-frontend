"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";

type FormData = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  message: string;
};

export default function Page() {
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
    <section className="relative mt-10 flex flex-col gap-5 max-lg:flex-col max-md:px-0 overflow-hidden items-center">
      <div className="absolute left-0 blur-xl">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>
      <div className="my-5 flex  flex-col items-center gap-5 w-[80%]">
        <h2 className="flex w-200 flex-wrap items-center justify-center gap-3 text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:w-full max-sm:text-xl">
          Get in touch with
          <span
            style={{
              background:
                "linear-gradient(90.79deg, #A632F2 0.68%, #FBA325 99.34%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            us
          </span>
        </h2>
        <p className="text-center font-medium">
          Fill in the form and we will get back to you.
        </p>
      </div>
      <form
        className="z-10 flex flex-wrap justify-between gap-5 w-[80%] max-md:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-[48%] max-lg:w-full">
          <input
            className="w-full rounded-md border border-black p-3"
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm">First Name is required</p>
          )}
        </div>
        <input
          className="h-fit w-[48%] rounded-md border border-black p-3 max-lg:w-full"
          placeholder="Last Name"
          type="text"
          {...register("lastName")}
        />
        <input
          className="h-fit w-[48%] rounded-md border border-black p-3 max-lg:w-full"
          placeholder="Contact Number"
          type="text"
          {...register("contactNumber")}
        />
        <div className="w-[48%] max-lg:w-full">
          <input
            className="w-full rounded-md border border-black p-3"
            placeholder="Email ID"
            type="text"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="mt-1 text-sm">Email ID is required</p>}
        </div>
        <textarea
          className="h-30 w-full rounded-md border border-black p-2 px-3 max-lg:w-full"
          placeholder="Message...."
        />
        <Button
          className="w-full cursor-pointer bg-black p-6 text-base text-white hover:bg-black/80"
          disabled={isLoading}
        >
          {isLoading ? " Sending..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
