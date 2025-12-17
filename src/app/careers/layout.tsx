import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Careers at Trikona | Join Our Design & Development Team",
    description: "Join Trikona and work on meaningful digital products across UI/UX design, website development, and web applications. We’re always looking for curious, driven people who want to design, build, and scale impactful digital experiences.",
  };

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section>

      {children}
    </section>
  );
}
