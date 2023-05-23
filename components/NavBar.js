import Image from "next/image";
import React, { useEffect, useState } from "react";

import Logo from "../public/Logo.png";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [closeTime, setCloseTime] = useState("");

  const closingTimes = {
    1: "closed",
    2: "15:00 - 22:00",
    3: "15:00 - 22:00",
    4: "15:00 - 22:00",
    5: "15:00 - 23:00",
    6: "12:00 - 23:00",
    0: "12:00 - 20:00",
  };
  const today = new Date();
  const day = today.getDay().toString();
  // const day = 1;

  useEffect(() => {
    setCloseTime(closingTimes[day]);
  }, [closeTime]);

  return (
    <div className="bg-[#ebebeb] lg:h-24 h-20 w-full fixed z-50">
      <div className="container mx-auto flex flex-row relative justify-between">
        <nav className="lg:flex w-full justify-between items-center pr-16 lg:max-h-24 max-h-20 hidden text-dark">
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/"
          >
            Home
          </Link>
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/about"
          >
            Our Story
          </Link>
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/#offers"
          >
            What we offer
          </Link>
        </nav>

        <Image
          src={Logo}
          alt="Logo for Wonky Lab"
          height={189}
          width={160}
          className="-mt-[10px] bg-[#ebebeb] rounded-md px-2 object-cover hidden lg:block"
        />
        <Link href={"/"} className="relative block lg:hidden">
          <Image
            src={Logo}
            alt="Logo for Wonky Lab"
            className=" bg-[#ebebeb] rounded-md px-2  h-20 w-auto"
          />
        </Link>
        <nav className="lg:flex w-full justify-between items-center pl-16 lg:max-h-24 max-h-20 hidden">
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/book"
          >
            Bookings
          </Link>
          <Link
            className="relative after:w-full hover:underline decoration-wonky decoration-2 underline-offset-4 xlg:text-lg text-sm font-lato tracking-wide"
            href="/#contact"
          >
            Contact
          </Link>
          <div className=" flex flex-row items-center gap-x-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8269 7.93796V11.9069L15.8536 14.8836M21.9068 11.9069C21.9068 16.8388 17.8416 20.8369 12.8269 20.8369C7.81226 20.8369 3.74707 16.8388 3.74707 11.9069C3.74707 6.97493 7.81226 2.97681 12.8269 2.97681C17.8416 2.97681 21.9068 6.97493 21.9068 11.9069Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {day === 1 ? (
              <Link href="/#contact" className="text-sm xlg:text:lg">
                Closed
              </Link>
            ) : (
              <Link href="/#contact" className="text-sm xlg:text:lg">
                {closeTime}
              </Link>
            )}
          </div>
          <div className=" flex flex-row gap-x-4 absolute -translate-y-full right-0 mb-4">
            <Link href={"https://www.facebook.com"} target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.63752 2.50586C0 3.62152 0 5.10946 0 8.08535V11.5155C0 14.4914 0 15.9793 0.63752 17.095C1.08808 17.8835 1.75236 18.5345 2.55689 18.976C3.69527 19.6008 5.21351 19.6008 8.25 19.6008H11.75C11.848 19.6008 11.9445 19.6008 12.0394 19.6008H9.2213V12.1777H6.94275V9.37507H9.25928V7.40566C9.25928 5.01965 10.7403 3.67516 12.886 3.67516C13.9303 3.67516 14.8228 3.76984 15.0886 3.80771V6.30734H13.5885C12.3923 6.30734 12.1834 6.87544 12.1834 7.68971V9.37507H14.9747L14.5949 12.1777H12.1834V19.6008C14.9336 19.5994 16.3602 19.5704 17.4431 18.976C18.2476 18.5345 18.9119 17.8835 19.3625 17.095C20 15.9793 20 14.4914 20 11.5155V8.08535C20 5.10946 20 3.62152 19.3625 2.50586C18.9119 1.71738 18.2476 1.06637 17.4431 0.624796C16.3047 0 14.7865 0 11.75 0H8.25C5.21351 0 3.69527 0 2.55689 0.624796C1.75236 1.06637 1.08808 1.71738 0.63752 2.50586Z"
                  fill="#18141F"
                />
              </svg>
            </Link>
            <Link href={"https://www.instagram.com"} target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.01688V14.584C0 17.4774 2.16667 19.6008 5.11905 19.6008H14.881C17.8333 19.6008 20 17.4774 20 14.584V5.01688C20 2.12342 17.8333 0 14.881 0H5.11905C2.16667 0 0 2.12342 0 5.01688ZM14.6429 4.20018C14.6429 3.59349 15.0952 3.15014 15.7143 3.15014C16.3333 3.15014 16.7857 3.59349 16.7857 4.20018C16.7857 4.76021 16.3333 5.25023 15.7143 5.25023C15.0952 5.25023 14.6429 4.76021 14.6429 4.20018ZM5.71429 9.80042C5.71429 7.46699 7.61905 5.60024 10.0238 5.60024C12.381 5.60024 14.2857 7.46699 14.2857 9.80042C14.2857 12.1339 12.381 14.0006 10.0238 14.0006C7.61905 14.0006 5.71429 12.1339 5.71429 9.80042ZM7.14286 9.80042C7.14286 11.3638 8.40477 12.6005 10.0238 12.6005C11.5952 12.6005 12.8571 11.3638 12.8571 9.80042C12.8571 8.23702 11.5952 7.0003 10.0238 7.0003C8.40477 7.0003 7.14286 8.23702 7.14286 9.80042Z"
                  fill="#18141F"
                />
              </svg>
            </Link>
          </div>
        </nav>
        {/* Mobile Nav */}
        <nav className="flex lg:hidden max-h-20">
          <div className="container mx-auto flex flex-row items-center lg:justify-between relative">
            <div
              className={
                open
                  ? "lg:hidden block space-y-2 cursor-pointer mr-10 translate-x-56 transition-all"
                  : "lg:hidden block space-y-2 cursor-pointer mr-10"
              }
              onClick={() => setOpen(!open)}
            >
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            <nav
              className={
                open
                  ? "flex flex-col fixed inset-0 top-14 bg-[#ebebeb]  transition-all items-center justify-evenly -z-10"
                  : "flex flex-col fixed inset-0 -translate-x-full top-14 bg-white transition-all items-center justify-evenly"
              }
            >
              <div className=" flex flex-row items-center gap-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8269 7.93796V11.9069L15.8536 14.8836M21.9068 11.9069C21.9068 16.8388 17.8416 20.8369 12.8269 20.8369C7.81226 20.8369 3.74707 16.8388 3.74707 11.9069C3.74707 6.97493 7.81226 2.97681 12.8269 2.97681C17.8416 2.97681 21.9068 6.97493 21.9068 11.9069Z"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {day === 1 ? (
                  <Link
                    href="/#contact"
                    className="text-sm xlg:text:lg"
                    onClick={() => setOpen(!open)}
                  >
                    Closed
                  </Link>
                ) : (
                  <Link
                    href="/#contact"
                    className="text-lg xlg:text:lg"
                    onClick={() => setOpen(!open)}
                  >
                    {closeTime}
                  </Link>
                )}
              </div>
              <div className=" flex flex-row gap-x-4 absolute bottom-0 mb-4">
                <Link
                  href={"https://www.facebook.com/thecraftyonesheffield"}
                  target="_blank"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.63752 2.50586C0 3.62152 0 5.10946 0 8.08535V11.5155C0 14.4914 0 15.9793 0.63752 17.095C1.08808 17.8835 1.75236 18.5345 2.55689 18.976C3.69527 19.6008 5.21351 19.6008 8.25 19.6008H11.75C11.848 19.6008 11.9445 19.6008 12.0394 19.6008H9.2213V12.1777H6.94275V9.37507H9.25928V7.40566C9.25928 5.01965 10.7403 3.67516 12.886 3.67516C13.9303 3.67516 14.8228 3.76984 15.0886 3.80771V6.30734H13.5885C12.3923 6.30734 12.1834 6.87544 12.1834 7.68971V9.37507H14.9747L14.5949 12.1777H12.1834V19.6008C14.9336 19.5994 16.3602 19.5704 17.4431 18.976C18.2476 18.5345 18.9119 17.8835 19.3625 17.095C20 15.9793 20 14.4914 20 11.5155V8.08535C20 5.10946 20 3.62152 19.3625 2.50586C18.9119 1.71738 18.2476 1.06637 17.4431 0.624796C16.3047 0 14.7865 0 11.75 0H8.25C5.21351 0 3.69527 0 2.55689 0.624796C1.75236 1.06637 1.08808 1.71738 0.63752 2.50586Z"
                      fill="#18141F"
                    />
                  </svg>
                </Link>
                <Link
                  href={"https://www.instagram.com/thecraftyone_sheffield/"}
                  target="_blank"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5.01688V14.584C0 17.4774 2.16667 19.6008 5.11905 19.6008H14.881C17.8333 19.6008 20 17.4774 20 14.584V5.01688C20 2.12342 17.8333 0 14.881 0H5.11905C2.16667 0 0 2.12342 0 5.01688ZM14.6429 4.20018C14.6429 3.59349 15.0952 3.15014 15.7143 3.15014C16.3333 3.15014 16.7857 3.59349 16.7857 4.20018C16.7857 4.76021 16.3333 5.25023 15.7143 5.25023C15.0952 5.25023 14.6429 4.76021 14.6429 4.20018ZM5.71429 9.80042C5.71429 7.46699 7.61905 5.60024 10.0238 5.60024C12.381 5.60024 14.2857 7.46699 14.2857 9.80042C14.2857 12.1339 12.381 14.0006 10.0238 14.0006C7.61905 14.0006 5.71429 12.1339 5.71429 9.80042ZM7.14286 9.80042C7.14286 11.3638 8.40477 12.6005 10.0238 12.6005C11.5952 12.6005 12.8571 11.3638 12.8571 9.80042C12.8571 8.23702 11.5952 7.0003 10.0238 7.0003C8.40477 7.0003 7.14286 8.23702 7.14286 9.80042Z"
                      fill="#18141F"
                    />
                  </svg>
                </Link>
              </div>
              <Link
                href="/"
                className="text-3xl"
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-3xl"
                onClick={() => setOpen(!open)}
              >
                Our Story
              </Link>
              <Link
                href="/#offers"
                className="text-3xl"
                onClick={() => setOpen(!open)}
              >
                What we offer
              </Link>
              <Link
                href="/events"
                className="text-3xl"
                onClick={() => setOpen(!open)}
              >
                Events
              </Link>
              <Link
                href="/book"
                className="text-3xl"
                onClick={() => setOpen(!open)}
              >
                Booking
              </Link>
              <Link
                href="/#contact"
                className="text-3xl mb-10"
                onClick={() => setOpen(!open)}
              >
                Contact
              </Link>
            </nav>
            <div className=" flex flex-row items-center">
              <div
                className={
                  open
                    ? // ? "lg:hidden absolute block right-0 bottom-1/2 translate-y-1/2 space-y-2 cursor-pointer"
                      "lg:hidden absolute block right-10 bottom-1/2 space-y-2 cursor-pointer"
                    : "hidden"
                }
                onClick={() => setOpen(!open)}
              >
                <div className="w-8 h-0.5 bg-gray-600 rotate-45 origin-bottom translate-y-[10px]"></div>
                <div className="w-8 h-0.5 bg-gray-600 -rotate-45 bottom-4"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
