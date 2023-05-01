import React from "react";
import NavBar from "@/components/NavBar";
import H3 from "@/components/H3";

const book = () => {
  return (
    <div>
      <header className="pb-20">
        <NavBar />
      </header>
      <main className=" lg:pt-40 sm:pt-12 pt-4 h-screen">
        <div className="container mx-auto p-4 lg:pb-40 pb-24">
          <span className="text-center">
            <H3 black>Book out our venue</H3>
          </span>
          {/* Gallery */}
          <div className="font-light text-lg leading-relaxed tracking-wide flex flex-col gap-y-12">
            <p>
              The Wonky Labrador is available for private hire events including
              birthday parties, engagement celebrations, work do’s and occasions
              where you just want to get together with all of your friends. With
              a private upstairs area, or the venue as a whole, you’re sure to
              find the right space for your event.
            </p>
            <p>
              We have a great selection of craft beers, stunning wines and all
              of your favourite spirits on hand to make your event the best! All
              of our featured beers are locally brewed here in Sheffield, and we
              have plenty of gluten free and vegan options. There truly is
              something for everyone!
            </p>
            <p>
              Use the form below to register interest and Mac will get back to
              you soon!
            </p>
          </div>
        </div>
        <div className="bg-darkbg">
          <div className="container mx-auto p-4 lg:py-40 py-34">
            <span className="mt-40 text-center">
              <H3>Booking form</H3>
            </span>

            <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-6 max-w-7xl mx-auto">
              {/* Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="namee"
                  className="block text-lg font-light leading-6 text-white"
                >
                  Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                            fill="#637381"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 3.33329C8.61929 3.33329 7.5 4.45258 7.5 5.83329C7.5 7.214 8.61929 8.33329 10 8.33329C11.3807 8.33329 12.5 7.214 12.5 5.83329C12.5 4.45258 11.3807 3.33329 10 3.33329ZM5.83334 5.83329C5.83334 3.53211 7.69882 1.66663 10 1.66663C12.3012 1.66663 14.1667 3.53211 14.1667 5.83329C14.1667 8.13448 12.3012 9.99996 10 9.99996C7.69882 9.99996 5.83334 8.13448 5.83334 5.83329Z"
                            fill="#637381"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wonky text-base sm:leading-6 font-light"
                    placeholder="John Smith"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-base font-light leading-6 text-white"
                >
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.33331 4.16667C2.87688 4.16667 2.49998 4.54357 2.49998 5V15C2.49998 15.4564 2.87688 15.8333 3.33331 15.8333H16.6666C17.1231 15.8333 17.5 15.4564 17.5 15V5C17.5 4.54357 17.1231 4.16667 16.6666 4.16667H3.33331ZM0.833313 5C0.833313 3.6231 1.95641 2.5 3.33331 2.5H16.6666C18.0436 2.5 19.1666 3.6231 19.1666 5V15C19.1666 16.3769 18.0436 17.5 16.6666 17.5H3.33331C1.95641 17.5 0.833313 16.3769 0.833313 15V5Z"
                            fill="#637381"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.983964 4.52215C1.24789 4.1451 1.7675 4.05341 2.14454 4.31734L9.99999 9.81615L17.8554 4.31734C18.2325 4.05341 18.7521 4.1451 19.016 4.52215C19.2799 4.89919 19.1882 5.4188 18.8112 5.68272L10.4779 11.5161C10.1909 11.7169 9.80904 11.7169 9.52211 11.5161L1.18877 5.68272C0.81173 5.4188 0.720035 4.89919 0.983964 4.52215Z"
                            fill="#637381"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wonky text-base sm:leading-6 font-light"
                    placeholder="info@yourmail.com"
                  />
                </div>
              </div>

              {/* Number */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="number"
                  className="block text-base font-light leading-6 text-white"
                >
                  Phone Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.22222C1 1.99492 1.99492 1 3.22222 1H6.86582C7.34408 1 7.76868 1.30603 7.91992 1.75975L9.58415 6.75246C9.75901 7.27703 9.52153 7.85034 9.02696 8.09763L6.5189 9.35166C7.74361 12.068 9.93198 14.2564 12.6483 15.4811L13.9024 12.973C14.1497 12.4785 14.723 12.241 15.2475 12.4158L20.2403 14.0801C20.694 14.2313 21 14.6559 21 15.1342V18.7778C21 20.0051 20.0051 21 18.7778 21H17.6667C8.46192 21 1 13.5381 1 4.33333V3.22222Z"
                          stroke="#637381"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="number"
                    className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wonky text-base sm:leading-6 font-light"
                    placeholder="+44"
                  />
                </div>
              </div>
              {/* Date */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="date"
                  className="block text-lg font-light leading-6 text-white"
                >
                  Choose Date
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <svg
                        width="24"
                        height="27"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 7.74968V3.32129M16 7.74968V3.32129M7 12.1781H17M5 23.249H19C20.1046 23.249 21 22.2577 21 21.0348V7.74968C21 6.52681 20.1046 5.53548 19 5.53548H5C3.89543 5.53548 3 6.52681 3 7.74968V21.0348C3 22.2577 3.89543 23.249 5 23.249Z"
                          stroke="#637381"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="date"
                    name="date"
                    className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wonky text-base sm:leading-6 font-light"
                    placeholder="Select Date"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-lg font-light leading-6 text-white"
                >
                  Message
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex pt-3 pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8" clip-path="url(#clip0_112_309)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.56556 3.23223C2.03441 2.76339 2.67029 2.5 3.33333 2.5H9.16666C9.6269 2.5 10 2.8731 10 3.33333C10 3.79357 9.6269 4.16667 9.16666 4.16667H3.33333C3.11232 4.16667 2.90036 4.25446 2.74408 4.41074C2.5878 4.56702 2.5 4.77899 2.5 5V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H15C15.221 17.5 15.433 17.4122 15.5893 17.2559C15.7455 17.0996 15.8333 16.8877 15.8333 16.6667V10.8333C15.8333 10.3731 16.2064 10 16.6667 10C17.1269 10 17.5 10.3731 17.5 10.8333V16.6667C17.5 17.3297 17.2366 17.9656 16.7678 18.4344C16.2989 18.9033 15.663 19.1667 15 19.1667H3.33333C2.67029 19.1667 2.03441 18.9033 1.56556 18.4344C1.09672 17.9656 0.833332 17.3297 0.833332 16.6667V5C0.833332 4.33696 1.09672 3.70107 1.56556 3.23223Z"
                            fill="#637381"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.6667 2.39884C16.4188 2.39884 16.1812 2.49729 16.0059 2.67253L8.25247 10.426L7.81197 12.188L9.57396 11.7475L17.3274 3.99402C17.5027 3.81878 17.6011 3.5811 17.6011 3.33328C17.6011 3.08545 17.5027 2.84777 17.3274 2.67253C17.1522 2.49729 16.9145 2.39884 16.6667 2.39884ZM14.8274 1.49402C15.3152 1.00622 15.9768 0.732178 16.6667 0.732178C17.3565 0.732178 18.0181 1.00622 18.5059 1.49402C18.9937 1.98182 19.2678 2.64342 19.2678 3.33328C19.2678 4.02313 18.9937 4.68473 18.5059 5.17253L10.5893 13.0892C10.4825 13.196 10.3486 13.2718 10.2021 13.3084L6.86878 14.1417C6.5848 14.2127 6.2844 14.1295 6.07741 13.9225C5.87043 13.7156 5.78722 13.4151 5.85822 13.1312L6.69155 9.79783C6.72818 9.65131 6.80395 9.51749 6.91075 9.41069L14.8274 1.49402Z"
                            fill="#637381"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_112_309">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows={3}
                    className="block w-full rounded-md border-0 py-3 pl-12 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wonky text-base sm:leading-6 font-light"
                    defaultValue={""}
                    placeholder=" Let us know what the event is for, how many people will attend etc"
                  />
                </div>
              </div>

              <button className="sm:col-span-2 sm:col-start-3 bg-wonky rounded-md py-4 text-center font-lato font-light text-base tracking-wide hover:bg-[#E48E0D] text-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default book;
