import React, { useRef } from "react";
import Scrollbar from "./Scrollbar";

const Carousel = ({ children, count }) => {
  const carouselRef = useRef(null);

  const scrollToRight = (e) => {
    e.preventDefault();
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth / count + 10,
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToLeft = (e) => {
    e.preventDefault();
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth / 4,
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full relative mx-auto">
      {/* Container for cards */}
      {/* <div className="flex flex-row overflow-scroll flex-wrap"> */}
      <div className="flex flex-row">
        <button onClick={scrollToLeft} className=" p-4 ">
          <svg
            width="14"
            height="26"
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4544 24.2129L0 12.6065L12.4544 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="grid no-scrollbar overflow-x-scroll auto-cols-[calc(100%-10px)] sm:auto-cols-[calc(55%-10px)] grid-flow-col xl:auto-cols-[calc(30%-30px)] xl:gap-10 lg:auto-cols-[calc(calc(100%/3)-20px)] lg:gap-[10px] md:auto-cols-[calc(40%-10px)] md:gap-5 snap-mandatory snap-x pb-10 w-full gap-[10px]"
          // className="grid overflow-x-scroll auto-cols-[calc(100%-10px)] grid-flow-col xl:auto-cols-[calc(25%-30px)] xl:gap-0 lg:auto-cols-[calc(calc(100%/3)-20px)] lg:gap-[10px] md:auto-cols-[calc(50%-10px)] md:gap-5 snap-mandatory snap-x pb-10 w-full gap-[10px]"
          ref={carouselRef}
        >
          {children}
        </div>
        <button onClick={scrollToRight} className="p-4">
          <svg
            width="15"
            height="26"
            viewBox="0 0 15 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13.8737 12.6065L1 24.2129"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="px-4">
        <Scrollbar count={count} carouselRef={carouselRef} />
      </div>
    </div>
  );
};

export default Carousel;
