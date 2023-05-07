import React from "react";
import H3 from "./H3";
import Image from "next/image";

import Shopfront from "../public/Images/shop-front.jpg";

const Info = ({ reverse }) => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-x-20 justify-between sm:mt-2 mt-10 p-4">
      <div className="lg:w-6/12 w-full h-full relative self-start flex flex-col items-start my-auto">
        <H3>Discover Our Welcoming Atmosphere</H3>
        <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          Looking for a place to relax and enjoy a cold craft beer? Our bar is
          the perfect spot for you! We offer a cosy atmosphere and a unique
          drinking experience that will leave you coming back for more.
        </p>
        <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          Our small bar is the perfect place to escape from the hustle and
          bustle of city life and enjoy a drink with friends, or just by
          yourself. Our bartenders are knowledgeable about each of the craft
          beers we offer, so you&apos;re sure to find a new favourite. Whether
          you&apos;re a beer aficionado or just looking for a new place to enjoy
          a drink, our bar is the perfect choice!
        </p>
      </div>
      <div className="lg:w-6/12 xl:w-4/12 w-full sm:h-[594px] h-[400px] relative mt-14 lg:mt-0 md:mb-24 mb-24 ">
        {/* <Image
          alt="Photo of the shop front"
          src={Shopfront}
          fill
          className="rounded-lg object-cover"
        /> */}
        <Image
          src={Shopfront}
          alt="Photo of shop front"
          className="h-full w-full object-cover object-top rounded-md"
          fill
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Info;
