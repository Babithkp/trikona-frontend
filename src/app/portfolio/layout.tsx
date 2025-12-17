import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Our Work: UI/UX, Website & App Development Projects | Trikona",
    description: "Explore Trikona’s portfolio showcasing UI/UX design, website development, web applications, and digital products built for startups and growing businesses. See how we combine design, technology, and strategy to deliver scalable solutions that drive real impact.",
  };

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section>

      {children}
    </section>
  );
}
