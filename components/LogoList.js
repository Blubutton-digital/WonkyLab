import Image from "next/image";
import React from "react";

import Abbeydale from "../public/Images/Logos/Abbeydale.png";
import Critters from "../public/Images/Logos/Critters.png";
import Graft from "../public/Images/Logos/Graft.png";
import Torrside from "../public/Images/Logos/Torrside.png";
import Neepsend from "../public/Images/Logos/Neepsend.png";

const LogoList = () => {
  return (
    // STATIONARY LOGOS

    <div className="w-full bg-[#ebebeb]">
      <div className=" p-4 container w-full mx-auto relative ">
        {/* <article className="wrapper " > */}
        <div className="marquee">
          <div className="marquee__group">
            <Image
              alt="Abbeydale brewery company logo"
              src={Abbeydale}
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />

            <Image
              alt="Abbeydale brewery company logo"
              src={Critters}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Graft}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Torrside}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Neepsend}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
          </div>

          <div aria-hidden="true" className="marquee__group">
            <Image
              alt="Abbeydale brewery company logo"
              src={Abbeydale}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />

            <Image
              alt="Abbeydale brewery company logo"
              src={Critters}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Graft}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Torrside}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
            <Image
              alt="Abbeydale brewery company logo"
              src={Neepsend}
              //
              // className="svg"
              className="mr-20 max-w-[100px] md:max-w-[150px]"
              priority
            />
          </div>
        </div>

        {/* </article > */}
      </div>
    </div>
  );
};

export default LogoList;
