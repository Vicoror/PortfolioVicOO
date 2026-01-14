import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Bubble = {
  label: string;
  path: string;
};

const bubbles: Bubble[] = [
  { label: "Sobre mí", path: "/about" },
  { label: "Proyectos", path: "/projects" },
  { label: "Habilidades", path: "/skills" },
  { label: "Contacto", path: "/contact" },
];

export default function Home() {
  const navigate = useNavigate();
  const bubbleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
  const MIN_DISTANCE = 20; // en porcentaje (%)
  const MAX_ATTEMPTS = 50;

  const moveBubbles = () => {
    const positions: { x: number; y: number }[] = [];

    bubbleRefs.current.forEach((bubble) => {
      if (!bubble) return;

      let x = 0;
      let y = 0;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < MAX_ATTEMPTS) {
        x = Math.random() * 80;
        y = Math.random() * 70;
        attempts++;

        valid = positions.every((pos) => {
          const dx = pos.x - x;
          const dy = pos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance >= MIN_DISTANCE;
        });
      }

      positions.push({ x, y });
      bubble.style.left = `${x}%`;
      bubble.style.top = `${y}%`;
    });
  };

  const interval = setInterval(moveBubbles, 2000);
  return () => clearInterval(interval);
}, []);


  return (
    <>
      <Navbar />

      {/* CONTENIDO */}
      <main className="pt-16 min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-slate-100 font-[cursive] text-center">

        {/* TITULOS */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white [text-shadow:1px_1px_2px_#054172]">
          Victoria Ortega Orozco
        </h1>

        <p className="mt-6 text-[1.2rem] font-bold sm:text-[1.6rem] text-[#82a2bd] [text-shadow:1px_1px_2px_#FFFFFF]">
          React and Mobile Developper
        </p>

        {/* BURBUJAS */}
        {bubbles.map((bubble, index) => (
          <div
            key={bubble.label}
            ref={(el) => {
            if (el) bubbleRefs.current[index] = el;
            }}
            onClick={() => navigate(bubble.path)}
            className="
              absolute flex items-center justify-center
              w-40 h-40 sm:w-64 sm:h-64
              rounded-full cursor-pointer
              bg-[url('/burbuja.png')] bg-cover bg-center
              text-[#054172] [text-shadow:1px_1px_2px_#FFFFFF]
              text-[1.6rem] font-bold
              transition-transform duration-300
              hover:scale-115
            "
          >
            {bubble.label}
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
