import React from "react";
import H3 from "./H3";
import BannerBG from "../public/Images/Banner-bg.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-screen bg-cover bg-center bg-no-repeat py-28 overflow-hidden relative">
      <Image
        src={BannerBG}
        alt="Background image of 3 beers lined up"
        fill
        className="object-cover h-full w-full z-0"
      />
      <div className="container mx-auto flex flex-row items-center justify-center px-4 relative">
        <div className="max-w-lg items-center text-center">
          <H3>Find us on social media</H3>
          <p className="text-white text-base font-lato mt-8">
            Get updates on all our events and upcoming beverages available by
            following us on our social media
          </p>
          <div className="flex flex-row mt-8 gap-14 justify-center">
            <Link
              href={"https://www.facebook.com/thecraftyonesheffield"}
              target="_blank"
              className="fill-white hover:fill-wonky"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.63752 2.50586C0 3.62152 0 5.10946 0 8.08535V11.5155C0 14.4914 0 15.9793 0.63752 17.095C1.08808 17.8835 1.75236 18.5345 2.55689 18.976C3.69527 19.6008 5.21351 19.6008 8.25 19.6008H11.75C11.848 19.6008 11.9445 19.6008 12.0394 19.6008H9.2213V12.1777H6.94275V9.37507H9.25928V7.40566C9.25928 5.01965 10.7403 3.67516 12.886 3.67516C13.9303 3.67516 14.8228 3.76984 15.0886 3.80771V6.30734H13.5885C12.3923 6.30734 12.1834 6.87544 12.1834 7.68971V9.37507H14.9747L14.5949 12.1777H12.1834V19.6008C14.9336 19.5994 16.3602 19.5704 17.4431 18.976C18.2476 18.5345 18.9119 17.8835 19.3625 17.095C20 15.9793 20 14.4914 20 11.5155V8.08535C20 5.10946 20 3.62152 19.3625 2.50586C18.9119 1.71738 18.2476 1.06637 17.4431 0.624796C16.3047 0 14.7865 0 11.75 0H8.25C5.21351 0 3.69527 0 2.55689 0.624796C1.75236 1.06637 1.08808 1.71738 0.63752 2.50586Z" />
              </svg>
            </Link>
            <Link
              href={"https://www.instagram.com/thewonkylabrador/"}
              target="_blank"
              className="fill-white hover:fill-wonky"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5.01688V14.584C0 17.4774 2.16667 19.6008 5.11905 19.6008H14.881C17.8333 19.6008 20 17.4774 20 14.584V5.01688C20 2.12342 17.8333 0 14.881 0H5.11905C2.16667 0 0 2.12342 0 5.01688ZM14.6429 4.20018C14.6429 3.59349 15.0952 3.15014 15.7143 3.15014C16.3333 3.15014 16.7857 3.59349 16.7857 4.20018C16.7857 4.76021 16.3333 5.25023 15.7143 5.25023C15.0952 5.25023 14.6429 4.76021 14.6429 4.20018ZM5.71429 9.80042C5.71429 7.46699 7.61905 5.60024 10.0238 5.60024C12.381 5.60024 14.2857 7.46699 14.2857 9.80042C14.2857 12.1339 12.381 14.0006 10.0238 14.0006C7.61905 14.0006 5.71429 12.1339 5.71429 9.80042ZM7.14286 9.80042C7.14286 11.3638 8.40477 12.6005 10.0238 12.6005C11.5952 12.6005 12.8571 11.3638 12.8571 9.80042C12.8571 8.23702 11.5952 7.0003 10.0238 7.0003C8.40477 7.0003 7.14286 8.23702 7.14286 9.80042Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
