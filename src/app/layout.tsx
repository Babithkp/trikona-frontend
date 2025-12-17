import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UI/UX Design, Web & App Development Agency in Bengaluru | Trikona",
  description:
    "Trikona is a Bengaluru-based digital agency specializing in UI/UX design, branding, web & app development, and MVPs for startups and businesses.",
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center scroll-smooth bg-[#F5F5F5]">
      <body
        className={`${interSans.variable} max-w-[1520px] bg-[#F5F5F5] px-5 antialiased max-lg:px-0`}
      >
        <h1 className="sr-only">
          Digital Agency for UI/UX Design, Web & App Development
        </h1>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D2CEW60P40"
      ></Script>
      <Script strategy="afterInteractive" id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D2CEW60P40');`}
      </Script>
    </html>
  );
}
