import React from "react";

const H3 = ({ children, black }) => {
  return (
    <h3
      className={`${
        black ? "text-text-[#292929]" : "text-white"
      } relative font-playfair xl:text-4xl text-3xl underline decoration-wonky decoration-2 underline-offset-8 leading-relaxed`}
    >
      {children}
    </h3>
  );
};

export default H3;
