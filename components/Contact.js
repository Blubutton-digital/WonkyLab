import React from "react";
import H3 from "./H3";
import Map from "./Map";

const Contact = () => {
  return (
    <section className="scroll-mt-14" id="contact">
      <div className=" container mx-auto md:py-24 py-14 px-4">
        <div className="text-center">
          <H3>Contact Us</H3>
        </div>
        <div className="flex lg:flex-row flex-col pt-12 gap-x-20">
          <div className="lg:w-2/3 w-full">
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
                  <div className="flex flex-row justify-between lg:gap-x-28 gap-x-12">
                    <p>Monday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Tuesday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Wednesday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Thursday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Friday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Saturday</p>
                    <p>14:00 - 23:00</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Sunday</p>
                    <p>14:00 - 23:00</p>
                  </div>
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
                      d="M1.75537 3.61296C1.75537 2.16959 2.95987 0.999512 4.4457 0.999512H8.85682C9.43582 0.999512 9.94986 1.35942 10.133 1.89301L12.1478 7.76469C12.3595 8.38161 12.072 9.05586 11.4732 9.34668L8.43681 10.8215C9.91951 14.0161 12.5689 16.5897 15.8574 18.03L17.3756 15.0804C17.675 14.4988 18.3691 14.2195 19.0041 14.4251L25.0486 16.3823C25.5978 16.5602 25.9683 17.0596 25.9683 17.622V21.9071C25.9683 23.3504 24.7638 24.5205 23.278 24.5205H21.9328C10.7891 24.5205 1.75537 15.7449 1.75537 4.91968V3.61296Z"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p>01142630670</p>
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
                  <p>contact@thecraftyone.uk</p>
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
