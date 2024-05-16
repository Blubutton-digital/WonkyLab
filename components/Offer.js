import React from "react";
import H3 from "./H3";
import Carousel from "./Carousel";

import LogoCard from "./LogoCard";
import { featuredBreweries, otherBreweries } from "@/data/events";

import Stamp from "./Stamp";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Offer = () => {
  return (
    <section className="bg-[#EBEBEB] md:pb-12 lg:scroll-mt-24" id="offers">
      <div className="container mx-auto md:pt-28 pt-14 text-center md:mb-24 mb-14">
        <H3 black>What we offer</H3>
        <p className="text-dark  max-w-4xl mx-auto lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          We offer a wide range of drinks from some of the best breweries in the
          UK. We always cater to those who are Gluten free and Vegan. We rotate
          our special stock every month so you can keep trying out the best of
          what Sheffield’s breweries have to offer! To see whats currently on
          tap, visit our
          <Link
            href="https://untappd.com/v/the-wonky-labrador/12235696"
            target="_blank"
            className="hover:text-wonky decoration-2 underline inline-flex items-center gap-2 group"
          >
            Untappd page
            <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </p>
      </div>
      <div className="relative mx-auto sm:container pb-20">
        <Stamp className="z-10 absolute top-0 left-0 lg:-translate-y-3/4 lg:-translate-x-10 -translate-x-10 -translate-y-[70%] xl:opacity-40 opacity-20 scale-75 lg:scale-100  sm:block" />
        <Carousel count={featuredBreweries.length}>
          {featuredBreweries.map((beer, index) => {
            return <LogoCard beer={beer} key={index} />;
          })}
        </Carousel>
      </div>
      <div className="sm:container mx-auto px-4 pb-20">
        <p className="text-dark lg:text-xl text-lg pb-4 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          Check out some more of breweries we work with:
        </p>
        <ul className="list-disc px-10 py-3 space-y-3">
          {otherBreweries.map((item, index) => (
            <li
              key={index}
              className="text-dark  lg:text-xl text-lg font-lato font-light tracking-wide"
            >
              {item.name} ({" "}
              <Link
                href={item.href}
                target="_blank"
                className=" underline inline-flex text-base items-center gap-2 group hover:text-wonky"
              >
                website
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              )
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
