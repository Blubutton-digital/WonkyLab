import React, { useEffect, useState } from "react";

const Scrollbar = ({ count, carouselRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    if (!carouselRef.current) return;

    const element = carouselRef.current;

    const scrollListener = () => {
      const windowScroll = element.scrollLeft;
      const totalWidth = element.scrollWidth - element.clientWidth;

      if (windowScroll === 0) setScrollProgress(0);
      if (windowScroll > totalWidth) setScrollProgress(100);
      return setScrollProgress(Math.round((windowScroll / totalWidth) * 100));
    };

    element.addEventListener("scroll", scrollListener, { passive: true });
    return () => element.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="h-4 w-full bg-gray-400 rounded-lg">
      <div
        className=" bg-wonky rounded-lg ease-linear transition-all duration-100"
        style={{
          width: scrollProgress + "%",
          height: "100%",
          minWidth: "12.5%",
        }}
      ></div>
    </div>
  );
};

export default Scrollbar;
