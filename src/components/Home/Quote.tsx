import { MouseEvent, useState } from "react";

export default function Quote() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleMouseMove = (e: MouseEvent<HTMLParagraphElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
  
      <section className="grid place-items-center p-40 px-20">
        <p
          className="relative cursor-default bg-clip-text text-6xl font-medium text-transparent"
          onMouseMove={(e) => {
            handleMouseMove(e);
            setHovering(true);
          }}
          onMouseLeave={() => setHovering(false)}
          style={{
            backgroundImage: hovering
              ? `radial-gradient(1700px circle at ${mousePosition.x}px ${mousePosition.y}px, #FF6B1C 1%, #a1a9b3 2%, black 75%)`
              : `linear-gradient(to right, black -30%, #a1a9b3 50%, black 130%)`,
            transition: "background-position 0.2s ease",
          }}
        >
          INNOVATE. ITERATE. ELEVATE
        </p>
      </section>
  );
}
