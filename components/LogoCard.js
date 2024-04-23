import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoCard = ({ beer }) => {
  const { name, logo, website, bg } = beer;
  return (
    // <div className="flex flex-col max-h-[20rem] h-full items-center  gap-2 rounded-lg p-4 bg-wonky_green/40">
    <div
      className={`${
        bg === "light" ? "bg-wonky_green/10" : "bg-wonky_green/10"
      } grid flex-1 h-full items-center w-full  gap-2 max-w-[18rem] rounded-lg p-4 snap-start`}
    >
      <div className="max-h-40 flex items-center justify-center">
        <Image
          src={logo}
          className="object-contain aspect-square p-2"
          alt="Image"
        />
      </div>
      <div className="grid self-end place-items-start gap-2 ">
        <p className=" mt-4 font-lato">{name}</p>
        <Link
          href={website}
          target="_blank"
          className="inline-flex items-center gap-2 group hover:text-wonky_green text-xs "
        >
          Brewerys Website
          <ArrowTopRightOnSquareIcon className="h-5 w-5 group group-hover:text-wonky_green" />
        </Link>
      </div>
    </div>
  );
};

export default LogoCard;
