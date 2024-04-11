import React from "react";
import Image from "next/image";
import HeroBg from "../public/Images/HeroBG.png";
import HeroBg2 from "../public/Images/Home/fullViewBar.jpg"

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black/40 relative">
      <Image
        src={HeroBg2}
        alt="Background image of the bar"
        fill
        className="object-cover -z-10"
        priority
        placeholder="blur"
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
