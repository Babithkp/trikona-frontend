import React from "react";
import logo from "../../public/fullLogo-white.png";
import Image from "next/image";
import { Instagram } from "lucide-react";
import Mdi_linkedin from "@/assets/Mdi_linkedin";
import Prime_twitter from "@/assets/Prime_twitter";

export default function Footer() {
  return (
    <footer className="mt-10 mb-10 flex justify-between rounded-lg bg-white p-5 text-sm shadow-md">
      <div className="flex w-full justify-between max-lg:flex-col gap-10">
        <div className="flex w-55 flex-col gap-2">
          <Image src={logo} alt="logo" width={150} height={100} />
          <p>Trikona Tech</p>
          <p>#54/24, Nethravathy Extension, K.R Puram, Bengaluru - 560036</p>
          <div>
            <p>trikonaofficial@gmail.com</p>
            <p>9620423719</p>
            <p>8197059845</p>
          </div>
        </div>
        <div className="flex w-[60%] flex-wrap justify-between max-sm:w-full">
          <div>
            <p className="font-medium">Case studies</p>
            <p className="text-slate-600">Logistic Billing Software</p>
            <p className="text-slate-600">Eventra</p>
          </div>
          <div>
            <p className="font-medium">Careers</p>
            <p className="text-slate-600">We are hiring!</p>
          </div>
          <div>
            <p className="font-medium">Get in touch</p>
            <p className="text-slate-600">Contact Us</p>
          </div>
          <div>
            <p className="font-medium">Our works</p>
            <p className="text-slate-600">Deconest Interiors</p>
            <p className="text-slate-600">Outdoors</p>
            <p className="text-slate-600">Nexter</p>
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
              <Instagram size={20} />
              <Prime_twitter />
              <Mdi_linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
