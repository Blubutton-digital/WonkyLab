import Image from "next/image";
import React from "react";

import Abbeydale from "../public/Images/Logos/Abbeydale.png";
import Critters from "../public/Images/Logos/Critters.png";
import Graft from "../public/Images/Logos/Graft.png";
import Grizzy from "../public/Images/Logos/Grizzy.png";
import Neepsend from "../public/Images/Logos/Neepsend.png";

const LogoList = () => {
  return (
    // <div className="w-full bg-[#e3e3e3] h-full">
    //   <div className="flex flex-row overflow-hidden py-14 bg-white relative after:absolute after:top-0 after:w-[250px] after:h-full after:z-20 after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white before:absolute before:top-0 before:w-[250px] before:h-full before:z-20 before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white hover:pause whitespace-nowrap">
    //     <div className="hover:pause flex flex-row animate-scroll max-h-14 gap-12">
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Abbeydale}
    //         height={120}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Critters}
    //         height={100}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Graft}
    //         height={500}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Grizzy}
    //         height={100}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Neepsend}
    //         height={70}
    //         className="w-auto"
    //       />
    //     </div>
    //     <div className="hover:pause flex flex-row animate-scroll max-h-14 gap-12">
    //       {/* <div className="hover:pause logos-slide"> */}
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Abbeydale}
    //         height={120}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Critters}
    //         height={100}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Graft}
    //         height={500}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Grizzy}
    //         height={100}
    //         className="w-auto"
    //       />
    //       <Image
    //         alt="Abbeydale brewery company logo"
    //         src={Neepsend}
    //         height={70}
    //         className="w-auto"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="w-full bg-red-100 ">
      <div className="container mx-auto">
        {/* Slider */}
        <div className="relative w-full grid overflow-hidden place-items-center">
          {/* slide track */}
          <div className="flex animate-scroll justify-between max-h-14 my-8 overflow-hidden ">
            {/* slide */}
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Abbeydale}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Critters}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Graft}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Grizzy}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Neepsend}
                fill
                className="w-auto h-full"
              />
            </div>

            {/* Duplicate */}
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Abbeydale}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Critters}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Graft}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Grizzy}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Neepsend}
                fill
                className="w-auto h-full"
              />
            </div>

            {/* Duplicate */}
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Abbeydale}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Critters}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px]">
              <Image
                alt="Abbeydale brewery company logo"
                src={Graft}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Grizzy}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="grid place-items-center w-[150px] relative">
              <Image
                alt="Abbeydale brewery company logo"
                src={Neepsend}
                fill
                className="w-auto h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoList;
