import React from "react";
import H3 from "./H3";
import Map from "./Map";
import Link from "next/link";

import { openingTimes } from "@/data/openingTimes";

const Contact = () => {
  return (
    <section className="scroll-mt-14" id="contact">
      <div className=" container mx-auto md:py-24 py-14 px-4">
        <div className="text-center">
          <H3>Contact Us</H3>
        </div>
        <div className="flex lg:flex-row flex-col pt-12 gap-x-20">
          <div className="lg:w-2/3 w-full h-96 lg:h-auto">
            <Map />
          </div>
          <div className="lg:w-1/3 w-full flex lg:flex-col mt-10 lg:mt-0 flex-wrap justify-between gap-x-7 gap-y-12">
            <div className="flex flex-row text-[#d7d7d7] text-lg font-light tracking-wide leading-relaxed gap-x-16">
              <div className="flex flex-row">
                <div className="mr-8">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8269 7.93796V11.9069L15.8536 14.8836M21.9068 11.9069C21.9068 16.8388 17.8416 20.8369 12.8269 20.8369C7.81226 20.8369 3.74707 16.8388 3.74707 11.9069C3.74707 6.97493 7.81226 2.97681 12.8269 2.97681C17.8416 2.97681 21.9068 6.97493 21.9068 11.9069Z"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-y-3">
                  {openingTimes.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between first:lg:gap-x-48 first:gap-x-32"
                    >
                      <p>{item.day}</p>
                      <p>{item.opening}</p>
                    </div>
                  ))}
                  {/* <div className="flex flex-row justify-between lg:gap-x-48 gap-x-32">
                    <p>Monday</p>
                    <p>Closed</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Tuesday</p>
                    <p>15:00 - 22:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Wednesday</p>
                    <p>15:00 - 22:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Thursday</p>
                    <p>15:00 - 22:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Friday</p>
                    <p>15:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Saturday</p>
                    <p>12:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Sunday</p>
                    <p>12:00 - 20:00</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              <div className="flex flex-row text-[#d7d7d7] text-lg font-light tracking-wide leading-relaxed">
                <div className="mr-8">
                  <svg
                    width="27"
                    height="32"
                    viewBox="0 0 27 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4136 22.7208C20.9963 24.2105 18.0322 27.3257 15.9926 29.4692C14.8106 30.7115 12.8962 30.7122 11.7142 29.4699C9.71014 27.3637 6.80345 24.3088 5.29249 22.7208C0.564613 17.7519 0.564613 9.69563 5.29249 4.7267C10.0204 -0.242233 17.6858 -0.242233 22.4136 4.7267C27.1415 9.69563 27.1415 17.7519 22.4136 22.7208Z"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.393 13.7237C18.393 16.3589 16.3604 18.4952 13.8531 18.4952C11.3457 18.4952 9.31314 16.3589 9.31314 13.7237C9.31314 11.0886 11.3457 8.95234 13.8531 8.95234C16.3604 8.95234 18.393 11.0886 18.393 13.7237Z"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p>212 Oakbrook Rd, </p>
                  <p>Sheffield </p>
                  <p>S11 7ED</p>
                </div>
              </div>

              <div className="flex flex-row  text-[#d7d7d7] text-lg font-light tracking-wide leading-relaxed">
                <div className="mr-8">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.78223 6.03997L12.3964 14.8778C13.3001 15.6303 14.4774 15.6303 15.381 14.8778L25.9952 6.03997M4.47256 24.5208H23.3049C24.7907 24.5208 25.9952 23.0164 25.9952 21.1606V4.3599C25.9952 2.50414 24.7907 0.999756 23.3049 0.999756H4.47256C2.98673 0.999756 1.78223 2.50414 1.78223 4.3599V21.1606C1.78223 23.0164 2.98673 24.5208 4.47256 24.5208Z"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <Link
                    className="hover:underline"
                    href="mailto:wonkylabrador@gmail.com"
                  >
                    {" "}
                    wonkylabrador@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
