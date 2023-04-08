import React from "react";

const InfoBar = () => {
  return (
    <div className="max-w-3xl md:h-[161px] h-full p-0 bg-white mx-auto -translate-y-1/2 rounded-md flex flex-col sm:flex-row space-between drop-shadow-md sm:space-y-0 space-y-0 relative">
      <div className="w-full sm:w-1/2 h-full sm:max-h-[133px] sm:max-w-[246px] m-auto flex flex-col justify-between p-5 sm:p-0 sm:space-y-0 space-y-0 gap-4">
        <h3 className="text-2xl font-playfair font-normal tracking-wide">
          Grand Opening
        </h3>
        <span className="flex flex-row w-full justify-between">
          <p className="font-lato text-base font-light tracking-wide">
            Saturday 18th Feb
          </p>
          <p className="font-lato text-base font-light tracking-wide">19:00</p>
        </span>
        <button className="w-full bg-wonky rounded-md py-[6px] font-lato font-light text-base tracking-wide hover:bg-[#E48E0D]">
          View more details
        </button>
      </div>
      <div className="w-full sm:w-1/2 h-full sm:max-h-[133px] sm:max-w-[246px] m-auto flex flex-col justify-between p-5 sm:p-0 sm:space-y-0 space-y-0 gap-4">
        <h3 className="text-2xl font-playfair font-normal tracking-wide">
          Booking Our Venue
        </h3>

        <p className="font-lato text-base font-light tracking-wide">
          Reserve our top floor or the whole bar for any occasion
        </p>

        <button className="w-full bg-wonky rounded-md py-[6px] font-lato font-light text-base tracking-wide hover:bg-[#E48E0D]">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
