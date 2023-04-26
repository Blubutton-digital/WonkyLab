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
      <div className="container flex flex-row mx-auto relative md:justify-between justify-center flex-wrap  items-center py-10 space-x-7 md:space-x-0">
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
  );
};

export default LogoList;
