import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "UI/UX Design, Web & App Development Agency in Bengaluru | Trikona",
  description:
    "Trikona is a Bengaluru-based digital agency specializing in UI/UX design, branding, web & app development, and MVPs for startups and businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "UI/UX Design, Web & App Development Agency in Bengaluru | Trikona",
    description:
      "Trikona is a Bengaluru-based digital agency specializing in UI/UX design, branding, web & app development, and MVPs for startups and businesses.",
    siteName: "Trikona",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design, Web & App Development Agency in Bengaluru | Trikona",
    description:
      "Trikona is a Bengaluru-based digital agency specializing in UI/UX design, branding, web & app development, and MVPs for startups and businesses.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trikona",
  url: siteUrl,
  logo: `${siteUrl}/Logo_white.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trikona",
  url: siteUrl,
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center scroll-smooth bg-[#F5F5F5]">
      <body
        className="max-w-[1520px] bg-[#F5F5F5] px-5 antialiased max-lg:px-0"
      >
        <h1 className="sr-only">
          Digital Agency for UI/UX Design, Web & App Development
        </h1>
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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


