import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});


export const metadata: Metadata = {
  title: "Trikona",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F5F5F5] flex justify-center scroll-smooth">
      <body
        className={`${interSans.variable}  antialiased w-[1520px] bg-[#F5F5F5] px-5`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
