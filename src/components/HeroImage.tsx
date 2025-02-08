"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/avinash.png";

const HeroImage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 15;
    const y = ((clientY - top) / height - 0.5) * 15;

    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="relative flex items-center justify-center [perspective:1000px]">
      <div
        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] 
          rounded-[30px] transition-all duration-500 cursor-pointer [transform-style:preserve-3d] 
          hover:scale-105"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg border border-white/30">
          {/* Glowing Border Animation */}
          <div className="absolute inset-0 border-4 border-transparent rounded-[30px] animate-glow"></div>

          {/* Image */}
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            priority
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 hover:scale-110"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-80"></div>
        </div>

        {/* Text Overlay (Reveals on Hover) */}
        <div
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center 
          text-center p-8 bg-black/80 rounded-[30px] backdrop-blur-lg transition-opacity duration-500 
          ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <h3 className="text-2xl font-bold text-white">Hello, I’m Avinash</h3>
          <p className="text-white/80 leading-relaxed mt-2">
            A passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.
          </p>
          <div className="mt-4 space-y-1 text-white/70">
            <p>🎓 MCA Graduate</p>
            <p>💻 Full Stack Developer</p>
            <p>🎨 UI/UX Enthusiast</p>
            <p>🚀 Always Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
