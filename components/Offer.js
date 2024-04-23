import React, { useState } from "react";
import H3 from "./H3";
import Card from "./Card";
import Carousel from "./Carousel";
import { Beers } from "../data/beers";

import LogoCard from "./LogoCard";
import { featuredBreweries } from "@/data/events";

import Stamp from "./Stamp";

const Offer = () => {
  return (
    <section className="bg-[#EBEBEB] md:pb-12 scroll-mt-12" id="offers">
      <div className="container mx-auto md:pt-28 pt-14 text-center md:mb-24 mb-14">
        <H3 black>What we offer</H3>
        <p className="text-dark max-w-4xl mx-auto lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          We offer a wide range of drinks from some of the best breweries in the
          UK. We always cater to those who are Gluten free and Vegan. We rotate
          our special stock every month so you can keep trying out the best of
          what Sheffield’s breweries have to offer! Check out some of the
          awesome breweries we use below.
        </p>
      </div>
      <div className="relative mx-auto container pb-20">
        <Stamp className="absolute top-0 left-0 lg:-translate-y-3/4 lg:-translate-x-10 -translate-x-10 -translate-y-[70%] xl:opacity-40 opacity-20 scale-75 lg:scale-100  sm:block" />
        <Carousel count={Beers.length}>
          {featuredBreweries.map((beer, index) => {
            return <LogoCard beer={beer} key={index} />;
            // return <Card info={item} key={key} />;
          })}
        </Carousel>
        {/* <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-2  items-center justify-center gap-12  max-w-7xl mx-auto px-4 pb-20">
          {featuredBreweries.map((beer, index) => {
            return <LogoCard beer={beer} key={index} />;
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Offer;
