import Event from "@/components/Event";
import Footer from "@/components/Footer";
import H3 from "@/components/H3";
import NavBar from "@/components/NavBar";
import React from "react";

import { EventList } from "@/data/events";
import {
  isDateInThePast,
  isLastDateInThePast,
  isMonthInThePast,
} from "@/lib/utils";
import Head from "next/head";
import AgeVerification from "@/components/ageVerification/ageVerification";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const events = () => {
  return (
    // <AgeVerification>
    <>
      <Head>
        <title>Events - Wonky Lab</title>
        <meta
          name="description"
          content="Here at The Wonky Labrador, we hold a range of regular and featured events. Check out what is available below, you’re sure to find something you will enjoy!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pb-20">
        <NavBar />
      </header>
      <main className="bg-wonky_green lg:pt-40 pt-14 ">
        <section className="container mx-auto">
          <div className="text-center">
            <H3>Upcoming Events</H3>
            <p className="text-white text-xl max-w-4xl mx-auto md:mt-20 mt-14 font-light tracking-wide leading-relaxed md:text-center text-left">
              Here at The Wonky Labrador, we hold a range of regular and
              featured events. Check out what is available below, you’re sure to
              find something you will enjoy!
            </p>
            <p className="text-white text-xl max-w-4xl mx-auto md:mt-10 mt-7 font-light tracking-wide leading-relaxed md:text-center text-left">
              Fancy coming along to an event? Head to our{" "}
              <Link
                href={
                  "https://www.eventbrite.com/o/the-wonky-labrador-74863017333"
                }
                className="hover:text-wonky decoration-2 underline underline-offset-2  inline-flex items-center gap-2 group"
                target="_blank"
              >
                Eventbrite page
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </Link>{" "}
              to book your ticket.
            </p>
          </div>
          {Object.keys(EventList).map((month) => {
            const checkMonth = isMonthInThePast(month, EventList[month]);
            // const checkMonth = isDateInThePast(EventList[month])

            console.log("check month", checkMonth);
            if (!checkMonth)
              return (
                <div className="md:mt-24 mt-14" key={month}>
                  <H3 className="text-white text-4xl capitalize">{month}</H3>
                  {EventList[month].map((eventData, index) => {
                    const checkDate = isDateInThePast(eventData.fullDate);
                    if (!checkDate)
                      return (
                        <Event
                          key={month + index}
                          eventData={eventData}
                          month={month}
                        />
                      );
                  })}
                </div>
              );
          })}

          <div className="text-center md:py-28 py-14 px-4">
            <H3>Whats on each week</H3>
            <div className="flex flex-col lg:flex-row text-white font-light text-left justify-around text-lg mt-20 lg:gap-y-0 gap-y-12 ">
              <div className="flex flex-col gap-y-3 lg:max-w-md w-full">
                <div className="inline-flex justify-between">
                  <p>Sundays</p>
                  <p>18:00</p>
                </div>
                <p className="font-playfair text-2xl">Quiz Night</p>
                <p>
                  Every Sunday is quiz Sunday here at The Wonky Labrador. So
                  come down for a drink and put your thinking caps on ready to
                  test your trivia knowledge!
                </p>
              </div>

              <div className="flex flex-col gap-y-3 lg:max-w-md w-full">
                <div className="inline-flex justify-between">
                  <p>Coming soon!</p>
                </div>
                <p className="font-playfair text-2xl">Board Game Night</p>
                <p>
                  We host regular game nights with your favourite board games.
                  We have plenty to go around, or feel free to bring a favourite
                  with you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
    // </AgeVerification>
  );
};

export default events;
