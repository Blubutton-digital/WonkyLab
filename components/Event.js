import React from "react";
import { getDayOfWeek, getOrdinal } from "@/lib/utils";
const Event = ({ eventData, month }) => {
  const {
    date,
    title,
    subHeading,
    description,
    startTime,
    eventBrite,
    fullDate,
  } = eventData;

  const ordinal = getOrdinal(date);
  const dayOfWeek = getDayOfWeek(fullDate);

  return (
    <div
      id={`${month}-${date}`}
      className="w-full flex flex-col lg:flex-row gap-x-24 mt-10 lg:items-center text-white font-light tracking-wide p-6 rounded-md bg-white/10 lg:gap-y-0 gap-y-5 scroll-m-32 "
    >
      <div className="flex lg:flex-col lg:items-center items-end lg:gap-x-0 gap-x-2 ">
        <p className="font-lato text-lg">{dayOfWeek}</p>
        <p className="font-playfair lg:text-4xl flex flex-row lg:mt-4 text-2xl">
          {date} <span className="lg:text-2xl text-lg">{ordinal}</span>
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-y-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 justify-between">
          <h4 className="text-2xl md:text-2xl font-playfair">
            {title} - <span>{subHeading}</span>
          </h4>
          <p className="inline-flex md:text-xl items-center gap-x-2 font-lato">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.40567V12.4057L15 15.4057M21 12.4057C21 17.3762 16.9706 21.4057 12 21.4057C7.02944 21.4057 3 17.3762 3 12.4057C3 7.43511 7.02944 3.40567 12 3.40567C16.9706 3.40567 21 7.43511 21 12.4057Z"
                stroke="#D6963B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8.40567V12.4057L15 15.4057M21 12.4057C21 17.3762 16.9706 21.4057 12 21.4057C7.02944 21.4057 3 17.3762 3 12.4057C3 7.43511 7.02944 3.40567 12 3.40567C16.9706 3.40567 21 7.43511 21 12.4057Z"
                stroke="#292F36"
                stroke-opacity="0.2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {startTime}
          </p>
        </div>
        <div className="">
          <p className="text-lg leading-relaxed font-lato">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
