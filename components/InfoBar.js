"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getOrdinal } from "@/lib/utils";
import { EventList } from "@/data/events";

const InfoBar = () => {
  function findNextEvent(eventList) {
    const today = new Date(); // Get today's date
    let nextEvent = null;
    let nextEventMonth = null;
    let minDiff = Infinity; // To find the event with the smallest difference from today

    // Iterate through all months
    Object.keys(eventList).forEach((month) => {
      eventList[month].forEach((event) => {
        // Constructing a full date using year and month
        const eventDate = new Date(
          `${month} ${event.date}, ${today.getFullYear()}` // Assuming current year
        );

        if (eventDate >= today) {
          // Calculate difference in time between event date and today
          const diff = eventDate - today;

          if (diff < minDiff) {
            minDiff = diff; // New minimum difference
            nextEvent = event; // Update next event
            nextEventMonth = month; // Update month
          }
        }
      });
    });

    return { event: nextEvent, month: nextEventMonth }; // Return event and its month
  }

  const theNextEvent = findNextEvent(EventList);
  const { date, title, startTime, subHeading } = theNextEvent.event;
  const ordinal = getOrdinal(date);
  return (
    <div className="max-w-4xl sm:h-52  h-full p-0 bg-white mx-auto sm:-translate-y-1/2 rounded-md flex flex-col sm:flex-row space-between drop-shadow-md sm:space-y-0 space-y-0 items-center relative text-dark">
      <div className="w-full sm:w-1/2 h-full sm:max-h-[168px] sm:max-w-[300px] m-auto flex flex-col justify-between p-5 sm:p-0 sm:space-y-0 space-y-0 gap-4 sm:gap-0">
        <h3 className="text-2xl font-playfair font-normal tracking-wide">
          {title}
        </h3>
        <p className="font-lato text-base font-light tracking-wide">
          {subHeading}
        </p>
        <span className="flex flex-row w-full justify-between">
          <p className="font-lato text-base font-light tracking-wide">
            {date}
            {ordinal} {theNextEvent.month}
          </p>
          <p className="font-lato text-base font-light tracking-wide">
            {startTime}
          </p>
        </span>
        <Link
          href={`/events#${theNextEvent.month}-${date}`}
          className="w-full bg-wonky rounded-md py-[6px] font-lato font-light text-base tracking-wide hover:bg-[#E48E0D] text-center"
        >
          View more details
        </Link>
      </div>
      <div className="w-full sm:w-1/2 h-full sm:max-h-[168px] sm:max-w-[300px] m-auto flex flex-col justify-between p-5 sm:p-0 sm:space-y-0 space-y-0 gap-4 sm:gap-0">
        <h3 className="text-2xl font-playfair font-normal tracking-wide">
          Booking Our Venue
        </h3>

        <p className="font-lato text-base font-light tracking-wide">
          Reserve our top floor or the whole bar for any occasion
        </p>

        <Link
          href="/book"
          className="w-full bg-wonky rounded-md py-[6px] font-lato font-light text-base tracking-wide hover:bg-[#E48E0D] text-center"
        >
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
