import Image from "next/image";
import React from "react";

import Abbeydale from "../public/Images/Logos/Abbeydale.png";
import Critters from "../public/Images/Logos/Critters.png";
import Graft from "../public/Images/Logos/Graft.png";
import Grizzy from "../public/Images/Logos/Grizzy.png";
import Neepsend from "../public/Images/Logos/Neepsend.png";

const LogoList = () => {
  return (
    <div className="w-full bg-[#e3e3e3] h-full">
      {/* <div className="container mx-auto overflow-hidden"> */}
      {/* <div className=" flex flex-row  items-center py-10 gap-7 overflow-hidden animation-scroll "> */}
      <div className="flex flex-row overflow-hidden py-14 bg-white relative after:absolute after:top-0 after:w-[250px] after:h-full after:z-20 after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white before:absolute before:top-0 before:w-[250px] before:h-full before:z-20 before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white hover:pause whitespace-nowrap">
        <div className="hover:pause flex flex-row animate-scroll max-h-14 gap-12">
          {/* <div className="hover:pause logos-slide"> */}
          <Image
            alt="Abbeydale brewery company logo"
            src={Abbeydale}
            height={120}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Critters}
            height={100}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Graft}
            height={500}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Grizzy}
            height={100}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Neepsend}
            height={70}
            className="w-auto"
          />
        </div>
        <div className="hover:pause flex flex-row animate-scroll max-h-14 gap-12">
          {/* <div className="hover:pause logos-slide"> */}
          <Image
            alt="Abbeydale brewery company logo"
            src={Abbeydale}
            height={120}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Critters}
            height={100}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Graft}
            height={500}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Grizzy}
            height={100}
            className="w-auto"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Neepsend}
            height={70}
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoList;
