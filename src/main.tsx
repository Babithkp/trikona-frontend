import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter } from "react-router";
import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

export const AppWithAnimation = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3 },
    );
  }, []);

  return (
    <div ref={container} className="relative flex flex-col items-center">
      <span className="grid_bg absolute left-0 top-0 size-full opacity-[0.3]"></span>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppWithAnimation />
    </ThemeProvider>
  </StrictMode>,
);
