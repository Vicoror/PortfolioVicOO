import { useState } from "react";

type SkillFlipCardProps = {
  title: string;
  image: string;
  description: string;
};

export default function SkillFlipCard({
  title,
  image,
  description,
}: SkillFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const audio = new Audio("/turnCard.mp3");

const handleFlip = () => {
  audio.currentTime = 0;
  audio.play();
  setFlipped(!flipped);
};

  return (
    <div
      className="relative h-56 w-full cursor-pointer perspective"
      onClick={handleFlip}
    >
      <div
        className={`
          relative h-full w-full
          transition-transform duration-700
          transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* FRONT */}
        <div className="
          absolute inset-0
          rounded-2xl
          overflow-hidden
          shadow-xl
          backface-hidden
        ">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="
            absolute inset-0
            bg-black/40
            flex items-center justify-center
          ">
            <h3 className="text-white text-lg sm:text-xl font-semibold text-center px-3">
              {title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div className="
          absolute inset-0
          rounded-2xl
          bg-white
          p-5
          shadow-xl
          rotate-y-180
          backface-hidden
          flex items-center justify-center
          text-center
        ">
          <p className="text-[#054172] text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
