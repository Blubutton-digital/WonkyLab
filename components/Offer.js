import React, { useState } from "react";
import H3 from "./H3";
import Card from "./Card";
import { Beers } from "../data/beers";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Pagination, Navigation } from "swiper";
import IconArrowLeft from "./IconArrowLeft";
import IconArrowRight from "./IconArrowRight";
import Stamp from "./Stamp";

const Offer = () => {
  //   const swiper = new Swiper(".swiper", {
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });

  const swiper = useSwiper();

  return (
    <section className="bg-[#EBEBEB] pb-28 scroll-mt-12" id="offers">
      <div className="container mx-auto pt-28 text-center mb-24">
        <H3 black>What we offer</H3>
        <p className="text-dark max-w-3xl mx-auto lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
          We offer wide range of drinks. We always cater to those who are Gluten
          free and Vegan. We rotate our special stock every month so you can
          keep trying new drinks
        </p>
      </div>
      <div className="relative container mx-auto">
        <Stamp className="absolute top-0 left-0 lg:-translate-y-3/4 lg:-translate-x-10 -translate-x-10 -translate-y-[70%] xl:opacity-40 opacity-20 scale-75 lg:scale-100  sm:block" />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper relaive mt-12"
        >
          <div className="flex flex-row justify-between">
            <IconArrowLeft />
            <IconArrowRight />
          </div>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}

          {Beers.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <Card info={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="container mx-auto overflow-hidden flex flex-row">
        <div className="flex w-full  ">
          {Beers.map((item, key) => {
            return <Card key={key} info={item} />;
          })}
        </div>
      </div> */}

      {/* <div className="w-full flex flex-row container mx-auto">
        <button onClick={() => previous()}>previous</button>
        <div className="container mx-auto overflow-hidden flex flex-row">
          <div className="flex w-full  ">
            {Beers.map((item, key) => {
              return <Card key={key} info={item} />;
            })}
          </div>
        </div>
        <button onClick={() => next()}>next</button>
      </div> */}
    </section>
  );
};

export default Offer;
