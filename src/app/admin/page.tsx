"use client";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  password: string;
};

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try{
      const response = await axios.post('/api/admin',data)
      if(response.status == 200){
        toast.success("Login successfull")
        router.push("/admin/dashboard")
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response && e.response.data && e.response.data.message) {
        toast.error(`Login Failed: ${e.response.data.message}`);
      } else {
        toast.error("Login Failed: An unexpected error occurred");
      }
    }
    reset();
    setIsLoading(false);
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-16 py-40 max-lg:overflow-hidden">
      <div className="absolute left-0 hidden blur-xl md:block">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>
      <form
        className="z-10 flex w-[80%] flex-col justify-between gap-5 max-md:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <input
            className="w-full rounded-md border border-black p-3"
            placeholder="User Name"
            type="text"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="mt-1 text-sm">First Name is required</p>
          )}
        </div>
        <div className="w-full">
          <input
            className="h-fit w-full rounded-md border border-black p-3 max-lg:w-full"
            placeholder="Password"
            type="text"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="mt-1 text-sm">Password is required</p>
          )}
        </div>
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
