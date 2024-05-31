import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black/60 relative">
      <Image
        src={
          "https://utfs.io/f/8a978d36-b29d-4a98-95da-137b7432ed3a-bf2e01.jpg"
        }
        alt="Background image of the bar"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="container mx-auto h-full z-50">
        <div className="flex items-center h-full px-4">
          <h2 className="font-semibold text-5xl md:text-7xl lg:text-8xl font-playfair leading-normal lg:leading-normal md:leading-normal text-white capitalize ">
            Not just about <span className="underline  text-wonky">Beer</span>
            , <br className="hidden md:block" /> About{" "}
            <span className="underline  text-wonky">Community</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
