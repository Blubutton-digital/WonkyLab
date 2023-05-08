import React from "react";
import Image from "next/image";
import HeroBg from "../public/Images/Hero-bg.jpg";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black/50 relative">
      <Image
        src={HeroBg}
        alt="Background image of the bar"
        fill
        className="object-cover -z-10"
        quality={100}
        priority
      />

      <div className="container mx-auto h-full z-50">
        <div className="max-w-xl flex items-center justify-center h-full px-4">
          <h2 className="font-semibold text-6xl font-playfair leading-normal text-white">
            Where Craft Meets Community
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
