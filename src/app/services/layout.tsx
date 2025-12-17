import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "UI/UX Design, Website & App Development Services | Trikona",
    description: "Trikona is a design-led digital agency offering UI/UX design, website development, app development, and MVP services. We build scalable, high-impact digital experiences with clean design, robust development, and clear strategy—helping startups and businesses grow and scale online.",
  };

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h1 className="sr-only">
        Design-led digital services for websites & apps
      </h1>
      {children}
    </section>
  );
}
