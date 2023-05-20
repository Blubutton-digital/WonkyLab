import Image from "next/image";
import React from "react";

import Abbeydale from "../public/Images/Logos/Abbeydale.png";
import Critters from "../public/Images/Logos/Critters.png";
import Graft from "../public/Images/Logos/Graft.png";
import Grizzy from "../public/Images/Logos/Grizzy.png";
import Neepsend from "../public/Images/Logos/Neepsend.png";
import InfiniteLooper from "./InfiniteLooper";

const LogoList = () => {
  return (
    // STATIONARY LOGOS

    <div className="w-full bg-[#ebebeb]">
      <div className=" p-4 container w-full mx-auto relative ">
        {/* <div className="grid grid-flow-col overflow-x-scroll auto-cols-[calc(20%-30px)] gap-10 "> */}
        <InfiniteLooper speed={30} direction="left">
          <Image
            alt="Abbeydale brewery company logo"
            src={Abbeydale}
            className="h-full object-contain  w-[150px]"
            placeholder="blur"
          />

          <Image
            alt="Abbeydale brewery company logo"
            src={Critters}
            className="h-full object-contain  w-[150px]"
            placeholder="blur"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Graft}
            className="h-full object-contain  w-[150px]"
            placeholder="blur"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Grizzy}
            className="h-full object-contain  w-[150px]"
            placeholder="blur"
          />
          <Image
            alt="Abbeydale brewery company logo"
            src={Neepsend}
            className="h-full object-contain  w-[150px]"
            placeholder="blur"
          />
        </InfiniteLooper>

        {/* </div> */}
      </div>
    </div>
  );
};

export default LogoList;
