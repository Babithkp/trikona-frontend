"use client";
import React from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Instagram } from "lucide-react";
import Mdi_linkedin from "@/assets/Mdi_linkedin";
import Prime_twitter from "@/assets/Prime_twitter";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="mt-10  flex justify-between rounded-lg bg-white p-10 text-sm shadow-md max-md:p-5 ">
      <div className="flex w-full justify-between gap-10 max-lg:flex-col">
        <div className="flex w-55 flex-col gap-2">
          <Image src={logo} alt="logo" width={150} height={100} />
          <p>Trikona Tech</p>
          <p>#54/24, Nethravathy Extension, K.R Puram, Bengaluru - 560036</p>
          <div>
            <a href="mailto:buildwithus@trikonatech.com">
              buildwithus@trikonatech.com
            </a>
            <p>9620423719</p>
            <p>8197059845</p>
          </div>
        </div>
        <div className="flex w-[60%] flex-wrap justify-between gap-5 max-sm:w-full">
          <div className="flex w-[50%] justify-between gap-5 max-sm:w-full">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Case studies</p>
              <p
                className="cursor-pointer text-slate-600 hover:underline"
                onClick={() =>
                  router.push("/portfolio/logistics-billing-software")
                }
              >
                Logistic Billing Software
              </p>
              <p
                className="cursor-pointer text-slate-600 hover:underline"
                onClick={() => router.push("/portfolio/eventra")}
              >
                Eventra
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Careers</p>
              <p className="text-slate-600">We are hiring!</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Get in touch</p>
              <p
                className="cursor-pointer text-slate-600 hover:underline"
                onClick={() => router.push("/contactus")}
              >
                Contact Us
              </p>
            </div>
          </div>
          <div className="flex w-200 flex-col gap-2 max-sm:w-full">
            <p className="font-bold">Our works</p>
            <a
              className="text-slate-600 hover:underline"
              href="https://deconestinteriors.com"
            >
              Deconest Interiors
            </a>
            <a
              className="text-slate-600 hover:underline"
              href="https://babithkp.github.io/learning-CSS-Natours"
            >
              Outdoors
            </a>
            <a
              className="text-slate-600 hover:underline"
              href="https://babithkp.github.io/learning-CSS-nexter"
            >
              Nexter
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-medium">Terms & Conditions</p>
            <p className="font-medium">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium">Follow us on</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/trikonaofficial"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/trikona_tech"
                target="_blank"
                rel="noreferrer"
              >
                <Prime_twitter />
              </a>
              <a href="https://www.linkedin.com/company/trikonatech/" target="_blank" rel="noreferrer">
                <Mdi_linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
