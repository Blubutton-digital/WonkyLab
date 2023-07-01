import Image from "next/image";
import React from "react";

import Abbeydale from "../public/Images/Logos/Abbeydale.png";
import Critters from "../public/Images/Logos/Critters.png";
import Graft from "../public/Images/Logos/Graft.png";
import Grizzy from "../public/Images/Logos/Grizzy.png";
import Neepsend from "../public/Images/Logos/Neepsend.png";

const LogoList = () => {
  return (
    // STATIONARY LOGOS

    <div className="w-full bg-[#ebebeb]">
      <div className=" p-4 container w-full mx-auto relative ">
        {/* <article class="wrapper " > */}
        <div class="marquee">
          <div class="marquee__group">
            <Image
              alt="Abbeydale brewery company logo"
              src={Abbeydale}
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />

            <Image
              alt="Abbeydale brewery company logo"
              src={Critters}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Graft}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Grizzy}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Neepsend}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
          </div>

          <div aria-hidden="true" class="marquee__group">
            <Image
              alt="Abbeydale brewery company logo"
              src={Abbeydale}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />

            <Image
              alt="Abbeydale brewery company logo"
              src={Critters}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Graft}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Grizzy}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Neepsend}
              // 
              // className="svg"
              className="h-full object-contain  w-[150px]"

              priority
            />
          </div>
        </div>


        {/* </article > */}

      </div>
    </div >
  );
};

export default LogoList;
