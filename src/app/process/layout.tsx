import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Our Design & Development Process for Websites & Apps | Trikona",
    description: "Trikona’s process is built around clarity and collaboration. From discovery and UI/UX design to development and launch, we help startups and businesses build scalable websites and digital products that perform reliably and grow over time.",
  };

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}
