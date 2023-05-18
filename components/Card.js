import React from "react";
import Tiny from "../public/Images/Beers/tiny-gangsta.jpg";
import Image from "next/image";

const Card = ({ info }) => {
  const { name, percent, brewery, vegan, gluten } = info;

  return (
    <div className="w-full flex-1 snap-start duration-75 ">
      {/* Image */}
      <div className=" relative h-[290px]">
        <Image src={Tiny} fill alt="Image of beer" className="object-cover" />
      </div>
      {/* bottom */}
      <div className=" flex flex-col items-start">
        <div className=" flex flex-row justify-between w-full mt-3">
          <p>{name}</p>
          <p>{percent}%</p>
        </div>
        <div className=" flex flex-row justify-between w-full mt-2">
          <p className="text-[#6C6C6C]">{brewery}</p>
          {gluten && (
            <span className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center">
              <p className="mx-auto">GF</p>
            </span>
          )}
          {vegan && (
            <span className="w-8 h-8 rounded-full bg-[#cfcfcf] flex items-center">
              <p className="mx-auto">VE</p>
            </span>
          )}
        </div>
        <p className="text-wonky cursor-pointer">Allergy Info</p>
      </div>
    </div>
  );
};

export default Card;
