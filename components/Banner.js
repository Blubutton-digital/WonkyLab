import React from "react";
import H3 from "./H3";
import BannerBG from "../public/Images/Banner-bg.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-screen bg-cover bg-center bg-no-repeat py-28 overflow-hidden">
      <div className="absolute -z-10">
        <Image
          src={BannerBG}
          alt="Background image of 3 beers lined up"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="container mx-auto flex flex-row items-center justify-center px-4">
        <div className="max-w-lg items-center text-center">
          <H3>Find us on social media</H3>
          <p className="text-white text-base font-lato mt-8">
            Get updates on all our events and upcoming beverages available by
            following us on our social media
          </p>
          <div className="flex flex-row mt-8 gap-14 justify-center">
            <svg
              width="43"
              height="41"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.35473 5.22055C0 7.54483 0 10.6447 0 16.8445V23.9906C0 30.1904 0 33.2903 1.35473 35.6145C2.31218 37.2572 3.72375 38.6135 5.4334 39.5334C7.85244 40.8351 11.0787 40.8351 17.5313 40.8351H24.9687C25.1771 40.8351 25.3821 40.8351 25.5837 40.835C24.6655 40.835 24.2063 40.835 23.822 40.7749C21.6754 40.4389 19.9914 38.7549 19.6554 36.6083C19.5953 36.224 19.5953 35.7649 19.5953 34.8466V27.7911C19.5953 26.4541 18.5114 25.3702 17.1743 25.3702C15.8372 25.3702 14.7533 24.2863 14.7533 22.9492V21.9927C14.7533 20.6334 15.8553 19.5314 17.2147 19.5314C18.574 19.5314 19.676 18.4294 19.676 17.0701V15.4285C19.676 10.4576 22.8232 7.65658 27.3827 7.65658C28.1991 7.65658 28.9718 7.68327 29.6506 7.72095C31.0376 7.79793 32.0632 8.96642 32.0632 10.3555C32.0632 11.8935 30.8165 13.1403 29.2785 13.1403H28.8756C26.3336 13.1403 25.8898 14.3238 25.8898 16.0202V16.7697C25.8898 18.2949 27.1262 19.5314 28.6515 19.5314C30.3271 19.5314 31.6166 21.0114 31.3872 22.6712L31.3408 23.0067C31.1536 24.3613 29.9957 25.3702 28.6282 25.3702C27.1158 25.3702 25.8898 26.5962 25.8898 28.1086V33.1006C25.8898 35.7427 25.8898 37.0637 26.4221 38.1231C26.9616 39.1967 28.1283 40.216 29.2645 40.6066C30.3857 40.992 31.4621 40.8463 33.615 40.5548C34.9988 40.3675 36.0975 40.0549 37.0666 39.5334C38.7762 38.6135 40.1878 37.2572 41.1453 35.6145C42.5 33.2903 42.5 30.1904 42.5 23.9906V16.8445C42.5 10.6447 42.5 7.54483 41.1453 5.22055C40.1878 3.57788 38.7762 2.2216 37.0666 1.30166C34.6476 0 31.4213 0 24.9687 0H17.5312C11.0787 0 7.85244 0 5.4334 1.30166C3.72375 2.2216 2.31218 3.57788 1.35473 5.22055Z"
                fill="white"
              />
            </svg>
            <svg
              width="43"
              height="41"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.45105 10.4518V30.3832C0.45105 36.4113 5.05522 40.8351 11.329 40.8351H32.0731C38.3469 40.8351 42.951 36.4113 42.951 30.3832V10.4518C42.951 4.4238 38.3469 0 32.0731 0H11.329C5.05522 0 0.45105 4.4238 0.45105 10.4518ZM31.5671 8.75037C31.5671 7.48643 32.5284 6.56278 33.8439 6.56278C35.1594 6.56278 36.1207 7.48643 36.1207 8.75037C36.1207 9.91709 35.1594 10.938 33.8439 10.938C32.5284 10.938 31.5671 9.91709 31.5671 8.75037ZM12.5939 20.4175C12.5939 15.5562 16.6415 11.6672 21.7517 11.6672C26.7606 11.6672 30.8082 15.5562 30.8082 20.4175C30.8082 25.2789 26.7606 29.1679 21.7517 29.1679C16.6415 29.1679 12.5939 25.2789 12.5939 20.4175ZM15.6296 20.4175C15.6296 23.6746 18.3112 26.2511 21.7517 26.2511C25.0909 26.2511 27.7725 23.6746 27.7725 20.4175C27.7725 17.1605 25.0909 14.584 21.7517 14.584C18.3112 14.584 15.6296 17.1605 15.6296 20.4175Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
