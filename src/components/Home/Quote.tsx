import { MouseEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Quote() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLParagraphElement>(null);
  const gradientPosition = useRef({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent<HTMLParagraphElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMousePosition({ x, y });
  };

  useEffect(() => {
    gsap.to(gradientPosition.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.style.backgroundImage = `radial-gradient(1700px circle at ${gradientPosition.current.x}px ${gradientPosition.current.y}px, #FF6B1C, #a1a9b3 2%, black 75%)`;
        }
      },
    });
  }, [mousePosition]);

  return (
    <section className="relative grid place-items-center p-40 px-20">
      <p
        ref={textRef}
        className="relative z-[1] cursor-default bg-clip-text text-8xl font-medium text-transparent opacity-[0.7]"
        onMouseMove={(e) => handleMouseMove(e)}
      >
        INNOVATE. ITERATE. ELEVATE
      </p>
      <span className="grid_bg absolute left-0 top-0 size-full opacity-[0.3]"></span>
      <span className="quote_bg_blend absolute left-0 top-0 size-full"></span>
    </section>
  );
}
