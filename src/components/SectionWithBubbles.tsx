import { useEffect, useRef } from "react";

interface SectionWithBubblesProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionWithBubbles({
  title,
  children,
}: SectionWithBubblesProps) {
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bubblesRef.current;
    if (!container) return;

    const bubbleCount = 30;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.className =
        "absolute bg-cover bg-center animate-bubble pointer-events-none";

      const size = Math.random() * 50 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
      bubble.style.backgroundImage = "url('/burbuja.png')";

      container.appendChild(bubble);

      setTimeout(() => bubble.remove(), 5000);
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f1f7f8] to-[#87CEFA] px-6 pt-10">
      {/* Bubbles background */}
      <div
        ref={bubblesRef}
        className="pointer-events-none fixed inset-0 z-50"
      />

      {/* Content */}
      <div  className="relative w-full z-10">
        <h1 className="flex items-center justify-left gap-3 text-2xl sm:text-3xl font-bold text-[#054172] [text-shadow:1px_1px_2px_white]">
          <img src="/burbuja.png" alt="Bubble" className="w-20 h-20 sm:w-25 sm:h-25" />
          {title}
        </h1>

        {children && (
          <div className="mt-8 text-[#054172]">{children}</div>
        )}
      </div>
    </section>
  );
}
