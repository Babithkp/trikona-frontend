import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact Trikona | Let’s Build Your Website or Digital Product",
    description: "Get in touch with Trikona to discuss your website, app, or digital product idea. Whether you’re a startup or growing business, our team is ready to help you design, build, and scale impactful digital experiences.",
  };

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}
