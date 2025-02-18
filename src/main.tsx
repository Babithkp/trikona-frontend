import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter } from "react-router";
import gsap from "gsap";

export const AppWithAnimation = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3 }
    );
  }, []);

  return (
    <div ref={container} className="relative">
      <span className="grid_bg absolute left-0 top-0 size-full opacity-[0.3]"></span>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithAnimation />
  </StrictMode>
);