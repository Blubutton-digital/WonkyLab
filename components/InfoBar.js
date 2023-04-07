import React from "react";

const InfoBar = () => {
  return (
    <div className="max-w-3xl h-[161px] bg-blue-300 mx-auto -translate-y-1/2 rounded-md flex flex-row">
      <div className="w-1/2 h-full">
        <h3>Grand Opening</h3>
        <span className="flex flex-row w-full justify-between">
          <p>Saturday 18th Feb</p>
          <p>19:00</p>
        </span>
        <button>View more details</button>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
};

export default InfoBar;
