import React from "react";

const Event = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-x-24 mt-20 lg:items-center text-white font-light tracking-wide p-6 rounded-md bg-white/10 lg:gap-y-0 gap-y-5 ">
      <div className="flex lg:flex-col lg:items-center items-end lg:gap-x-0 gap-x-2 ">
        <p className="font-playfair text-2xl">Saturday</p>
        <p className="font-playfair lg:text-7xl flex flex-row lg:mt-4 text-4xl">
          22 <span className="lg:text-2xl text-lg">nd</span>
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-y-8 w-full">
        <div className="flex flex-col xl:flex-row xl:items-center space-y-4 xl:space-y-0 justify-between">
          <h4 className="text-3xl md:text-4xl font-playfair">
            Mental Health Safe Space
          </h4>
          <p className="inline-flex text-2xl font-playfair items-center gap-x-2">
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
            19:00
          </p>
        </div>
        <div className="">
          <p className="text-lg leading-relaxed">
            Here at The Wonkey Labrador, mental health is important to us. We
            hold monthly evenings where you can come and enjoy a safe space to
            chat, relax and have a drink in a supportive atmosphere. We also
            have guest speakers come in to talk about important topics and share
            their experiences and knowledge
          </p>
        </div>
      </div>
      {/* <div className="">
        <button className="w-full bg-wonky rounded-md py-4 px-10 font-lato font-light text-base tracking-wide hover:bg-[#E48E0D] text-dark flex flex-row items-center gap-x-4">
          Find out more
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.5L13 19.5L6 12.5"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Event;
